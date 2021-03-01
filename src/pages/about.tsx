import { About } from "../components/layouts/pages/about";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps, GetStaticPropsResult } from "next";

const AboutPage: React.FC = () => <About />;

export default AboutPage;

export const getStaticProps: GetStaticProps = async ({
	locale
}): Promise<GetStaticPropsResult<{ [key: string]: any }>> => {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common", "about"]))
		}
	};
};
