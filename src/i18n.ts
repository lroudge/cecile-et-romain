import NextI18Next from "next-i18next";
// const { localeSubpaths } = require("next/config").default().publicRuntimeConfig;

export const nextI18next = new NextI18Next({
	browserLanguageDetection: false,
	defaultLanguage: "fr",
	otherLanguages: ["en"],
	defaultNS: "common",
	localePath:
		typeof window === "undefined" ? "public/static/locales" : "locales"
});

export const appWithTranslation = nextI18next.appWithTranslation;

export const useTranslation = nextI18next.useTranslation;

export const withTranslation = nextI18next.withTranslation;
