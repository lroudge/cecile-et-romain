import { Us } from "../components/layouts/pages/us";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const UsPage = () => <Us />;

export default UsPage;

export const getStaticProps = async ({ locale }) => {
	return {
		props: { ...(await serverSideTranslations(locale, ["common", "us"])) }
	};
};
