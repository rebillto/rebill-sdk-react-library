export type EntityId = string;

export interface Expiration {
  month: number;
  year: string;
}

export interface Card {
  cardNumber: string;
  securityCode: string;
  expiration: Expiration;
  cardHolder: CardHolder;
}

export interface CardHolder {
  name: string;
  identification: Identification;
}

export interface Identification {
  type: string;
  value: string;
}

export enum IsoCountryEnum {
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
  INDIFFERENT = "I",
}

export interface PersonalId extends Omit<Identification, "name"> {
  value: string;
}

export interface Address {
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

export interface Phone {
  countryCode: string;
  areaCode: string;
  phoneNumber: string;
}

export interface TaxId {
  type: string;
  value: string;
}

export interface Customer {
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
