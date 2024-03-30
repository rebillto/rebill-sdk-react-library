import React, { createContext, useContext, useEffect, useState } from "react";
import * as Rebill from "rebill";

function isValidCustomer(customer) {
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

const RebillContext = createContext();

export const RebillProvider = ({ children, apiKey, rebillId }) => {
  const [customer, setCustomer] = useState({});
  const [metadata, setMetadata] = useState({});
  const [sdk, setSdk] = useState(null);

  useEffect(() => {
    if (!apiKey) {
      console.error("Rebill API key is not provided");
      return;
    }

    const checkout = new Rebill.setSdk(apiKey);

    setSdk(checkout);
  }, [apiKey]);

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

  const setTransaction = (transactionData) => {
    if (sdk) {
      sdk.setTransaction(transactionData);
    }
  };

  const setStyles = (styles) => {
    if (sdk) {
      sdk.setStyles(styles);
    }
  };

  const setText = (text) => {
    if (sdk) {
      sdk.setText(text);
    }
  };

  const setCallbacks = (onSuccess, onError) => {
    if (sdk) {
      sdk.setCallbacks({
        onSuccess,
        onError,
      });
    }
  };

  const getStatesBy = Rebill.getStatesBy;
  const getIdentificationBy = Rebill.getIdentificationBy;

  const contextValue = {
    setCustomer,
    setTransaction,
    setStyles,
    setText,
    setCallbacks,
    setMetadata,
    getStatesBy,
    getIdentificationBy,
    customer,
    sdk,
  };

  return (
    <RebillContext.Provider value={contextValue}>
      {children}
    </RebillContext.Provider>
  );
};

export const useRebill = () => useContext(RebillContext);
