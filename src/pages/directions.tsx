import { Directions } from "../components/layouts/pages/directions";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const DirectionsPage = () => <Directions />;

export default DirectionsPage;

export const getStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common", "directions"]))
		}
	};
};
