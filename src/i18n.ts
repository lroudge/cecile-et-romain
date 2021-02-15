import NextI18Next from "next-i18next";
// const { localeSubpaths } = require("next/config").default().publicRuntimeConfig;
import { resolve } from "path";

export const nextI18next = new NextI18Next({
	defaultLanguage: "fr",
	otherLanguages: ["en"],
	ns: ["common"],
	defaultNS: "common",
	localePath: resolve("./public/static/locales")
});

export const appWithTranslation = nextI18next.appWithTranslation;

export const useTranslation = nextI18next.useTranslation;

export const withTranslation = nextI18next.withTranslation;
