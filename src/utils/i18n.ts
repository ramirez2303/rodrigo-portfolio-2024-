import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { en } from "../i18n/en";
import { es } from "../i18n/es";

i18n.use(initReactI18next)
    .use(detector)
    .init({
        supportedLngs: ["es", "en"],
        lng: "es",
        resources: {
            es: { translation: { ...es } },
            en: { translation: { ...en } },
        },

        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
