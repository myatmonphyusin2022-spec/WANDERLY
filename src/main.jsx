import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { WishlistProvider } from "./context/WishlistContext";
import { CurrencyProvider } from "./context/CurrencyContext";
import { RecentlyViewedProvider } from "./context/RecentlyViewedContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CurrencyProvider>
      <WishlistProvider>
        <RecentlyViewedProvider>
          <App />
        </RecentlyViewedProvider>
      </WishlistProvider>
    </CurrencyProvider>
  </StrictMode>,
);
