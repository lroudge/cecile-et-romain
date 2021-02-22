import { Planning } from "../components/layouts/pages/planning";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const PlanningPage = () => <Planning />;

export default PlanningPage;

export const getStaticProps = async ({ locale }) => {
	return { props: { ...(await serverSideTranslations(locale, ["common", "planning"])) } };
};
