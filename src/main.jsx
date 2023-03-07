import React from "react";
import ReactDOM from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./styles/App.scss";
import translation_en from "./locales/en-GB/translation.json";
import translation_es from "./locales/es-ES/translation.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      translation: translation_en,
    },
    es: {
      translation: translation_es,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <Provider store={store}>
        <App />
      </Provider>
    </I18nextProvider>
  </React.StrictMode>
);
