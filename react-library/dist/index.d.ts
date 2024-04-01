/// <reference types="react" />
import { ReactNode } from 'react';
import * as Rebill from 'rebill';

interface Expiration {
    month: number;
    year: string;
}
interface Card {
    cardNumber: string;
    securityCode: string;
    expiration: Expiration;
    cardHolder: CardHolder;
}
interface CardHolder {
    name: string;
    identification: Identification;
}
interface Identification {
    type: string;
    value: string;
}
declare enum IsoCountryEnum {
    ARGENTINA = "AR",
    BOLIVIA = "BO",
    BRASIL = "BR",
    CHILE = "CL",
    COLOMBIA = "CO",
    COSTA_RICA = "CR",
    HONDURAS = "HN",
    ECUADOR = "EC",
    ESTADOS_UNIDOS = "US",
    GUATEMALA = "GT",
    MEXICO = "MX",
    PANAMA = "PA",
    PARAGUAY = "PY",
    PERU = "PE",
    REINO_UNIDO = "UK",
    REPUBLICA_DOMINICANA = "DO",
    URUGUAY = "UY",
    INDIFFERENT = "I"
}
interface PersonalId extends Omit<Identification, "name"> {
    value: string;
}
interface Address {
    street: string;
    number: string;
    floor: string;
    apt: string;
    city: string;
    state: string;
    zipCode: string;
    country: IsoCountryEnum;
    description: string;
}
interface Phone {
    countryCode: string;
    areaCode: string;
    phoneNumber: string;
}
interface TaxId {
    type: string;
    value: string;
}
interface Customer {
    firstName: string;
    lastName: string;
    email: string;
    birthday?: string;
    phone: Phone;
    personalId: PersonalId;
    address: Address;
    taxId: TaxId;
    card?: Card;
}
interface RebillProviderProps {
    children: ReactNode;
    apiKey: string;
    rebillId: string;
}
interface Transaction {
    id: string;
    currency: string;
    quantity: number;
}
interface Styles {
    rebill_options_container?: React.CSSProperties;
    rebill_option?: React.CSSProperties;
    rebill_error?: React.CSSProperties;
    rebill_success?: React.CSSProperties;
    rebill_title_entity?: React.CSSProperties;
    rebill_entity?: React.CSSProperties;
    rebill_entity_logo?: React.CSSProperties;
    rebill_divider?: React.CSSProperties;
    rebill_divider_span?: React.CSSProperties;
    rebill_change_payment_method_btn?: React.CSSProperties;
    rebill_pay_btn?: React.CSSProperties;
    rebill_installments_select?: React.CSSProperties;
    rebill_card_checkout?: React.CSSProperties;
    rebill_on_success_message?: React.CSSProperties;
    rebill_cardholder_container?: React.CSSProperties;
    rebill_cardholder_input?: React.CSSProperties;
    rebill_identification_select?: React.CSSProperties;
    rebill_identification_input?: React.CSSProperties;
    rebill_alternative_checkout?: React.CSSProperties;
    rebill_download_btn?: React.CSSProperties;
    rebill_footer_step?: React.CSSProperties;
    rebill_footer_steps?: React.CSSProperties;
    rebill_footer_header?: React.CSSProperties;
    rebill_alternative_price?: React.CSSProperties;
    rebill_alternative_price_total?: React.CSSProperties;
    rebill_alternative_price_amount?: React.CSSProperties;
    rebill_title_coupon?: React.CSSProperties;
    rebill_payment_code_title?: React.CSSProperties;
    rebill_payment_code?: React.CSSProperties;
    rebill_payment_link?: React.CSSProperties;
    rebill_pay_before?: React.CSSProperties;
    rebill_pay_before_text?: React.CSSProperties;
    rebill_copy_btn?: React.CSSProperties;
    rebill_pix?: React.CSSProperties;
    rebill_nequi_push?: React.CSSProperties;
    rebill_pagoefectivo_entities?: React.CSSProperties;
    rebill_pagoefectivo_logos?: React.CSSProperties;
    rebill_pagoefectivo_logo_size?: number;
    rebill_barcode?: React.CSSProperties;
    rebill_transfer?: React.CSSProperties;
    rebill_text?: React.CSSProperties;
    rebill_loading_logo?: boolean;
    rebill_QR_size?: number;
    rebill_barcode_size?: number;
}
interface AppText {
    [key: string]: string;
}
interface PaymentStepsText {
    [key: string]: AppText | string;
}
type PaymentMethodsListText = AppText;
type ComponentsText = AppText;
type ErrorMessagesText = AppText;
interface PaymentMethodsText {
    REBILL_PAGO_EFECTIVO: AppText;
    REBILL_TRANSFER: AppText;
    REBILL_NEQUI_PUSH: AppText;
}
interface Text {
    paymentSteps: PaymentStepsText;
    paymentMethodsList: PaymentMethodsListText;
    componentsText: ComponentsText;
    errorMessages: ErrorMessagesText;
    paymentMethods: PaymentMethodsText;
}
interface RebillContextValue {
    setCustomer: React.Dispatch<React.SetStateAction<Customer>>;
    setTransaction: (transactionData: Transaction) => void;
    addCard: (customerId: string) => void;
    renewCard: (subscriptionId: string) => void;
    setStyles: (styles: Styles) => void;
    setText: (text: Text) => void;
    setCallbacks: (onSuccess: Function, onError: Function) => void;
    setMetadata: React.Dispatch<React.SetStateAction<Object>>;
    customer: Customer;
    sdk: Rebill.setSdk | null;
}

declare const RebillProvider: React.FC<RebillProviderProps>;
declare const useRebill: () => RebillContextValue;

export { RebillProvider, useRebill };
