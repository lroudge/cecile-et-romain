import { Directions } from "../components/layouts/pages/directions";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps, GetStaticPropsResult } from "next";

const DirectionsPage: React.FC = () => <Directions />;

export default DirectionsPage;

export const getStaticProps: GetStaticProps = async ({
	locale
}): Promise<GetStaticPropsResult<{ [key: string]: any }>> => {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common", "directions"]))
		}
	};
};
