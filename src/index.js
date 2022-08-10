import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MantineProvider } from "@mantine/core";
import Appshell from "./components/Appshell/Appshell";
import { BrowserRouter } from "react-router-dom";

function Providers({ children }) {
  return (
    <MantineProvider
      theme={{
        colors: { brand: ["#3347B0"] },
        fontFamily: "Work Sans, Sans-serif",
        headings: { fontFamily: "Work Sans, Sans-serif" },
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <BrowserRouter>{children}</BrowserRouter>
    </MantineProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Providers>
      <Appshell>
        <App />
      </Appshell>
    </Providers>
  </React.StrictMode>
);
