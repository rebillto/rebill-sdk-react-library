/// <reference types="react" />
import type { Customer, RebillContextValue, RebillProviderProps } from "./types";
export declare function isValidCustomer(customer: Customer): boolean;
export declare const RebillProvider: React.FC<RebillProviderProps>;
export declare const useRebill: () => RebillContextValue;
