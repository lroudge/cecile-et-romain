import { Us } from "../components/layouts/pages/us";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps, GetStaticPropsResult } from "next";

const UsPage: React.FC = () => <Us />;

export default UsPage;

export const getStaticProps: GetStaticProps = async ({
	locale
}): Promise<GetStaticPropsResult<{ [key: string]: any }>> => {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common", "us"]))
		}
	};
};
