import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import HomeLayout from "../components/layouts/home";

const Home = () => {
	return <HomeLayout />;
};

export default Home;

export const getStaticProps = async ({ locale }) => {
	return { props: { ...(await serverSideTranslations(locale, ["common"])) } };
};
