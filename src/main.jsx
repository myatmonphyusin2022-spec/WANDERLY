import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { WishlistProvider } from "./context/WishlistContext";
import { CurrencyProvider } from "./context/CurrencyContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CurrencyProvider>
      <WishlistProvider>
        <App />
      </WishlistProvider>
    </CurrencyProvider>
  </StrictMode>,
);
