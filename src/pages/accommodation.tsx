import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Accommodation } from "../components/layouts/pages/accommodation";
import { GetStaticProps, GetStaticPropsResult } from "next";

const AccommodationPage: React.FC = () => <Accommodation />;

export default AccommodationPage;

export const getStaticProps: GetStaticProps = async ({
	locale
}): Promise<GetStaticPropsResult<{ [key: string]: any }>> => {
	return {
		props: {
			...(await serverSideTranslations(locale, [
				"common",
				"accommodation"
			]))
		}
	};
};
