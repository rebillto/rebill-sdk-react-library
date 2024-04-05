import { createContext, useContext, useEffect, useState } from "react";
import * as Rebill from "rebill";
import type {
  Customer,
  RebillContextValue,
  RebillProviderProps,
  Styles,
  Text,
  Transaction,
} from "./types";

function isValidCustomer(customer: Customer) {
  const hasBasicProperties =
    "firstName" in customer &&
    "lastName" in customer &&
    "email" in customer &&
    "phone" in customer &&
    "personalId" in customer &&
    "address" in customer;

  if (!hasBasicProperties) return false;

  const hasValidPhoneStructure =
    "countryCode" in customer.phone &&
    "areaCode" in customer.phone &&
    "phoneNumber" in customer.phone;

  const hasValidPersonalIdStructure =
    "type" in customer.personalId && "value" in customer.personalId;

  const hasValidAddressStructure =
    "state" in customer.address &&
    "city" in customer.address &&
    "street" in customer.address &&
    "number" in customer.address &&
    "country" in customer.address &&
    "zipCode" in customer.address;

  return (
    hasValidPhoneStructure &&
    hasValidPersonalIdStructure &&
    hasValidAddressStructure
  );
}

const RebillContext = createContext<RebillContextValue | undefined>(undefined);

export const RebillProvider: React.FC<RebillProviderProps> = ({
  children,
  apiKey,
  rebillId,
}) => {
  const [customer, setCustomer] = useState<Customer>({} as Customer);
  const [metadata, setMetadata] = useState<Object>({});
  const [sdk, setSdk] = useState<Rebill.setSdk | null>(null);

  useEffect(() => {
    if (apiKey && rebillId) {
      try {
        console.log('apiKey', apiKey);
        console.log('rebillId', rebillId);
        const checkout = new Rebill.setSdk(apiKey);
        setSdk(checkout);
      } catch (e) {
        console.error("Error: please verify your API key and rebill id", e);
      }
    }
  }, [apiKey, rebillId]);

  useEffect(() => {
    if (sdk) {
      sdk.setElements(rebillId);
    }
  }, [sdk]);

  useEffect(() => {
    if (sdk && isValidCustomer(customer)) {
      sdk.setCustomer(customer);
    }
  }, [customer]);

  useEffect(() => {
    if (sdk && metadata) {
      sdk.setMetadata(metadata);
    }
  }, [metadata]);

  const setTransaction = (transactionData: Transaction) => {
    if (sdk) {
      sdk.setTransaction(transactionData);
    }
  };

  const renewCard = (subscriptionId: string) => {
    if (sdk) {
      sdk.renewCard(subscriptionId);
    }
  };

  const addCard = (customerId: string) => {
    if (sdk) {
      sdk.addCard(customerId);
    }
  };

  const setStyles = (styles: Styles) => {
    if (sdk) {
      sdk.setStyles(styles);
    }
  };

  const setText = (text: Text) => {
    if (sdk) {
      sdk.setText(text);
    }
  };

  const setCallbacks = (onSuccess: Function, onError: Function) => {
    if (sdk) {
      sdk.setCallbacks({
        onSuccess,
        onError,
      });
    }
  };

  const contextValue = {
    setCustomer,
    setTransaction,
    addCard,
    renewCard,
    setStyles,
    setText,
    setCallbacks,
    setMetadata,
    customer,
    sdk,
  };

  return (
    <RebillContext.Provider value={contextValue}>
      {children}
    </RebillContext.Provider>
  );
};

export const useRebill = (): RebillContextValue => {
  const context = useContext(RebillContext);
  if (context === undefined) {
    throw new Error("useRebill must be used within a RebillProvider");
  }
  return context;
};
