import { About } from "../components/layouts/pages/about";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const AboutPage = () => <About />;

export default AboutPage;

export const getStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common", "about"]))
		}
	};
};
