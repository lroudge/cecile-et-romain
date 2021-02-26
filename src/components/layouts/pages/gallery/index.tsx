import { useTranslation } from "next-i18next";
import styles from "../../../../styles/Home.module.css";

export const Gallery = () => {
	const { t } = useTranslation("gallery");
	return (
		<div className={styles.large_content}>
			<h1>{t("title")}</h1>
			<p>
				{t("info")}
				<br />
				<br />
				{t("gallery")}
			</p>
		</div>
	);
};
