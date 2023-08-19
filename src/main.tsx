import React from "react";
import ReactDOM from "react-dom/client";

// store
import { Provider as StoreProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { persistor, store } from "./store";
import { WrappedApp } from "./App";
import "./index.css";
// import addAuthTokenInterceptor from "./lib/addAuthTokenInterceptor";

const queryClient = new QueryClient();

// addAuthTokenInterceptor(store);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StoreProvider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <QueryClientProvider client={queryClient}>
        <React.StrictMode>
          <WrappedApp />
        </React.StrictMode>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </PersistGate>
  </StoreProvider>,
);
