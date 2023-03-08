import React from "react";
import ReactDOM from "react-dom/client";

import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./styles/App.scss";

import App from "./components/App/App";
import i18next from "./i18n";

ReactDOM.createRoot(document.getElementById("root")).render(
  <I18nextProvider i18n={i18next}>
    <Provider store={store}>
      <App />
    </Provider>
  </I18nextProvider>
);
