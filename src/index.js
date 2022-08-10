import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MantineProvider } from "@mantine/core";
import Appshell from "./components/Appshell/Appshell";

function Providers({ children }) {
  return (
    <MantineProvider
      theme={{
        colors: { brand: ["#3347B0"] },
        fontFamily: "inter, Sans-serif",
        headings: { fontFamily: "inter, Sans-serif" },
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      {children}
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
