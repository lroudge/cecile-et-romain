const { i18n } = require("./next-i18next.config");

const ContentSecurityPolicy = `
	default-src 'self';
	script-src 'self' 'unsafe-eval' 'unsafe-inline' *.google.com;
	child-src *.google.com;
	style-src 'self' 'unsafe-inline';
	font-src 'self';
	img-src 'self' *.githubusercontent.com;
`;

const securityHeaders = [
	{
		key: "Content-Security-Policy",
		value: ContentSecurityPolicy.replace(/\n/g, "")
	},
	{
		key: "Referrer-Policy",
		value: "origin-when-cross-origin"
	},
	{
		key: "X-Frame-Options",
		value: "DENY"
	},
	{
		key: "X-Content-Type-Options",
		value: "nosniff"
	},
	{
		key: "X-DNS-Prefetch-Control",
		value: "on"
	},
	{
		key: "Strict-Transport-Security",
		value: "max-age=315360000; includeSubDomains; preload"
	},
	{
		key: "Permissions-Policy",
		value: "camera=(), microphone=(), geolocation=()"
	}
];

module.exports = {
	async headers() {
		return [
			{
				source: "/",
				headers: securityHeaders
			},
			{
				source: "/:path*",
				headers: securityHeaders
			}
		];
	},
	env: {
		GOOGLE_API_TOKEN: process.env.GOOGLE_API_TOKEN
	},
	i18n
};
