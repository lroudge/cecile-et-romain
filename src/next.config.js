const { i18n } = require("./next-i18next.config");

module.exports = {
	env: {
		GOOGLE_API_TOKEN: process.env.GOOGLE_API_TOKEN
	},
	i18n
};
