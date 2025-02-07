import i18next from "i18next";

export const changeLanguage = () => {
    i18next.changeLanguage(i18next.resolvedLanguage === "es" ? "en" : "es");
};
