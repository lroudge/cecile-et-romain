import "../styles/globals.css";
import styles from "../styles/Home.module.css";
import { AppProps } from "next/dist/next-server/lib/router/router";
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import AppLayout from "../components/layouts";

const MyApp = ({ Component, pageProps }: AppProps) => {
	let component: React.ReactNode = <Component {...pageProps} />;
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<main className={styles.main}>
				<AppLayout>{component}</AppLayout>
				<Footer />
			</main>
		</div>
	);
};

export default MyApp;
