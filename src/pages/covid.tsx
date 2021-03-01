import { Covid } from "../components/layouts/pages/covid";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps, GetStaticPropsResult } from "next";

const CovidPage: React.FC = () => <Covid />;

export default CovidPage;

export const getStaticProps: GetStaticProps = async ({
	locale
}): Promise<GetStaticPropsResult<{ [key: string]: any }>> => {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common", "covid"]))
		}
	};
};