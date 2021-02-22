import { Gallery } from "../components/layouts/pages/gallery";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const GalleryPage = () => <Gallery />;

export default GalleryPage;

export const getStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common", "gallery"]))
		}
	};
};
