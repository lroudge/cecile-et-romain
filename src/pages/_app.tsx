import "../styles/globals.css";
import styles from "../styles/Home.module.css";
import { AppProps } from "next/dist/next-server/lib/router/router";
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import AppLayout from "../components/layouts";
import HomeLayout from "../components/layouts/home";
import { useRouter } from "next/router";

const MyApp = ({ Component, pageProps }: AppProps) => {
	const router = useRouter();
	let component: React.ReactNode = <Component {...pageProps} />;
	return (
		<div className={styles.container}>
			<Head>
				<title>Cecile & Romain</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{router.pathname === "/" ? (
				<HomeLayout />
			) : (
				<div>
					<Header />
					<main className={styles.main}>
						<AppLayout>{component}</AppLayout>
						<Footer />
					</main>
				</div>
			)}
		</div>
	);
};

export default MyApp;
