import React, { useState } from "react";

import "./App.css";
import { MainRouter } from "./router";
import { GlobalProvider } from "./store";
import { ConfigProvider } from "antd";

function App() {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            // Seed Token
            colorPrimary: "#06b6d4",
            itemColor: "#06b6d4",
            // borderRadius: 2,
            // Alias Token
            // colorBgContainer: "#f6ffed",
          },
        }}
      >
        <GlobalProvider>
          <MainRouter />
        </GlobalProvider>
      </ConfigProvider>
    </>
  );
}

export default App;
