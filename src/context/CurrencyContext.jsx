import { createContext, useContext, useState } from "react";

const CurrencyContext = createContext();

export const currencies = [
  { code: "USD", symbol: "$", name: "US Dollar", rate: 1 },
  { code: "EUR", symbol: "€", name: "Euro", rate: 0.92 },
  { code: "GBP", symbol: "£", name: "British Pound", rate: 0.79 },
  { code: "JPY", symbol: "¥", name: "Japanese Yen", rate: 149.5 },
  { code: "MMK", symbol: "K", name: "Myanmar Kyat", rate: 2100 },
  { code: "AED", symbol: "AED", name: "UAE Dirham", rate: 3.67 },
  { code: "AUD", symbol: "A$", name: "Australian Dollar", rate: 1.53 },
  { code: "SGD", symbol: "S$", name: "Singapore Dollar", rate: 1.34 },
  { code: "THB", symbol: "฿", name: "Thai Baht", rate: 35.5 },
  { code: "KRW", symbol: "₩", name: "South Korean Won", rate: 1325 },
  { code: "VND", symbol: "₫", name: "Vietnamese Dong", rate: 24500 },
];

export function CurrencyProvider({ children }) {
  const [currency, setCurrency] = useState(currencies[0]);

  const convert = (usdPrice) => {
    const number = parseFloat(
      usdPrice.toString().replace("$", "").replace(",", ""),
    );
    const converted = (number * currency.rate).toLocaleString(undefined, {
      maximumFractionDigits: 0,
    });
    return `${currency.symbol}${converted}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, convert }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  return useContext(CurrencyContext);
}
