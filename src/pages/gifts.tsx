import { Gifts } from "../components/layouts/pages/gifts";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps, GetStaticPropsResult } from "next";

const GiftsPage: React.FC = () => <Gifts />;

export default GiftsPage;

export const getStaticProps: GetStaticProps = async ({
	locale
}): Promise<GetStaticPropsResult<{ [key: string]: any }>> => {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common", "gifts"]))
		}
	};
};
