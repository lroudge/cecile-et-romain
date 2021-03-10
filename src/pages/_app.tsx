import "../styles/globals.css";
import styles from "../styles/Home.module.css";
import App from "next/app";
import { AppProps } from "next/dist/next-server/lib/router/router";
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import AppLayout from "../components/layouts";
import HomeLayout from "../components/layouts/home";
import { appWithTranslation } from "next-i18next";
// import { BsArrowUpShort } from "react-icons/bs";

const AppWrapper: React.FC<AppProps> = ({
	Component,
	pageProps,
	router
}: AppProps) => {
	let component: React.ReactNode = <Component {...pageProps} />;
	return (
		<div className={styles.container}>
			<Head>
				<title>Cécile & Romain</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{router.pathname === "/" ? (
				<HomeLayout />
			) : (
				<div>
					<Header />
					<main className={styles.main}>
						<AppLayout>{component}</AppLayout>
					</main>
					<Footer />
				</div>
			)}
		</div>
	);
};

export default appWithTranslation(AppWrapper);
