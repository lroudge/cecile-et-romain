import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Accommodation } from "../components/layouts/pages/accommodation";

const AccommodationPage = () => <Accommodation />;

export default AccommodationPage;

export const getStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale, [
				"common",
				"accommodation"
			]))
		}
	};
};
