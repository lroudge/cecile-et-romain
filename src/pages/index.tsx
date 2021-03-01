import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import HomeLayout from "../components/layouts/home";
import { GetStaticProps, GetStaticPropsResult } from "next";

const Home: React.FC = () => {
	return <HomeLayout />;
};

export default Home;

export const getStaticProps: GetStaticProps = async ({
	locale
}): Promise<GetStaticPropsResult<{ [key: string]: any }>> => {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common"]))
		}
	};
};
