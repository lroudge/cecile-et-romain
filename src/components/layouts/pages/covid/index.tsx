import { useTranslation } from "next-i18next";
import styles from "../../../../styles/Home.module.css";

export const Covid = () => {
	const { t } = useTranslation("covid");
	return (
		<div className={styles.large_content}>
			<h1>{t("title")}</h1>
			<p>
				{t("intro")}
				<br />
				<br />
				{t("date")}
				<br />
				{t("gel")}
				<br />
				{t("vaccine")}
				<br />
				<br />
				{t("conclusion")}
				<br />
				<br />
				{t("soosoon")}
			</p>
			<br />
		</div>
	);
};
