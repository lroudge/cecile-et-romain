import styles from "../../styles/Home.module.css";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import ToggleLocale from "../footer/togglelocale";

const HomeLayout = () => {
	const { t } = useTranslation("common");
	return (
		<div className={styles.splash}>
			<h1>{t("splash.title")}</h1>
			<h2>{t("splash.date")}</h2>
			<Link href="/about">
				<a className={styles.enter}>{t("splash.enter")}</a>
			</Link>
			<ToggleLocale />
		</div>
	);
};

export default HomeLayout;
