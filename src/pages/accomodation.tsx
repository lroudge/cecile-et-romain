import { Accomodation } from "../components/layouts/pages/accomodation";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const AccomodationPage = () => <Accomodation />;

export default AccomodationPage;

export const getStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale, [
				"common",
				"accomodation"
			]))
		}
	};
};
