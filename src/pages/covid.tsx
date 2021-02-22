import { Covid } from "../components/layouts/pages/covid";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const CovidPage = () => <Covid />;

export default CovidPage;

export const getStaticProps = async ({ locale }) => {
	return { props: { ...(await serverSideTranslations(locale, ["common", "covid"])) } };
};
