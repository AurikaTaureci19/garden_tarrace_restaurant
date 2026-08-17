import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import roCommon from "./locales/ro/common.json";
import roHeader from "./locales/ro/header.json";
import roFooter from "./locales/ro/footer.json";
import roHome from "./locales/ro/home.json";
import roTestimonials from "./locales/ro/testimonials.json";
import roAbout from "./locales/ro/about.json";
import roContact from "./locales/ro/contact.json";
import roBlog from "./locales/ro/blog.json";
import roMenu from "./locales/ro/menu.json";

import ukCommon from "./locales/uk/common.json";
import ukHeader from "./locales/uk/header.json";
import ukFooter from "./locales/uk/footer.json";
import ukHome from "./locales/uk/home.json";
import ukTestimonials from "./locales/uk/testimonials.json";
import ukAbout from "./locales/uk/about.json";
import ukContact from "./locales/uk/contact.json";
import ukBlog from "./locales/uk/blog.json";
import ukMenu from "./locales/uk/menu.json";

import nlCommon from "./locales/nl/common.json";
import nlHeader from "./locales/nl/header.json";
import nlFooter from "./locales/nl/footer.json";
import nlHome from "./locales/nl/home.json";
import nlTestimonials from "./locales/nl/testimonials.json";
import nlAbout from "./locales/nl/about.json";
import nlContact from "./locales/nl/contact.json";
import nlBlog from "./locales/nl/blog.json";
import nlMenu from "./locales/nl/menu.json";

const resources = {
  ro: {
    common: roCommon,
    header: roHeader,
    footer: roFooter,
    home: roHome,
    testimonials: roTestimonials,
    about: roAbout,
    contact: roContact,
    blog: roBlog,
    menu: roMenu,
  },
  uk: {
    common: ukCommon,
    header: ukHeader,
    footer: ukFooter,
    home: ukHome,
    testimonials: ukTestimonials,
    about: ukAbout,
    contact: ukContact,
    blog: ukBlog,
    menu: ukMenu,
  },
  nl: {
    common: nlCommon,
    header: nlHeader,
    footer: nlFooter,
    home: nlHome,
    testimonials: nlTestimonials,
    about: nlAbout,
    contact: nlContact,
    blog: nlBlog,
    menu: nlMenu,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "ro",
    supportedLngs: ["ro", "uk", "nl"],
    load: "languageOnly",
    ns: ["common", "header", "footer", "home", "testimonials", "about", "contact", "blog", "menu"],
    defaultNS: "common",
    debug: process.env.NODE_ENV === "development",
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "i18nextLng",
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
