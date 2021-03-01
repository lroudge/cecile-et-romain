import { Gallery } from "../components/layouts/pages/gallery";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps, GetStaticPropsResult } from "next";

const GalleryPage: React.FC = () => <Gallery />;

export default GalleryPage;

export const getStaticProps: GetStaticProps = async ({
	locale
}): Promise<GetStaticPropsResult<{ [key: string]: any }>> => {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common", "gallery"]))
		}
	};
};
