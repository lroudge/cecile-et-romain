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

const MyApp = ({ Component, pageProps, router }: AppProps) => {
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
				<main className={styles.main}>
					<Header />
					<AppLayout>{component}</AppLayout>
					<Footer />
				</main>
			)}
		</div>
	);
};

export default appWithTranslation(MyApp);
