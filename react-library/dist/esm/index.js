import{jsx as e}from"react/jsx-runtime";import{createContext as t,useState as r,useEffect as s,useContext as n}from"react";import*as i from"rebill";const a="rebill_elements",d=t(void 0),o=({children:t,apiKey:n})=>{const[o,l]=r({}),[m,u]=r({}),[c,p]=r(null);s((()=>{if(n){const e=new i.setSdk(n);p(e)}}),[n]),s((()=>{c&&c.setElements(a)}),[c]),s((()=>{c&&function(e){if(!("firstName"in e&&"lastName"in e&&"email"in e&&"phone"in e&&"personalId"in e&&"address"in e))return!1;const t="countryCode"in e.phone&&"areaCode"in e.phone&&"phoneNumber"in e.phone,r="type"in e.personalId&&"value"in e.personalId,s="state"in e.address&&"city"in e.address&&"street"in e.address&&"number"in e.address&&"country"in e.address&&"zipCode"in e.address;return t&&r&&s}(o)&&c.setCustomer(o)}),[o]),s((()=>{c&&m&&c.setMetadata(m)}),[m]);const C={setCustomer:l,setTransaction:e=>{c&&c.setTransaction(e)},addCard:e=>{c&&c.addCard(e)},renewCard:e=>{c&&c.renewCard(e)},setStyles:e=>{c&&c.setStyles(e)},setText:e=>{c&&c.setText(e)},setCallbacks:(e,t,r,s)=>{c&&c.setCallbacks({onSuccess:e,onError:t,onLoading:r,onDisabled:s})},setMetadata:u,submitPaymentWithCard:()=>{c&&c.submitPaymentWithCard()},customer:o,sdk:c};return e(d.Provider,{value:C,children:t})},l=()=>{const e=n(d);if(void 0===e)throw new Error("useRebill must be used within a RebillProvider");return e},m=()=>e("div",{id:a});export{m as Checkout,o as RebillProvider,l as useRebill};
//# sourceMappingURL=index.js.map
