import { Gifts } from "../components/layouts/pages/gifts";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const GiftsPage = () => <Gifts />;

export default GiftsPage;

export const getStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common", "gifts"]))
		}
	};
};
