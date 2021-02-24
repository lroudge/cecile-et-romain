import styles from "../../../../styles/Home.module.css";
import { useTranslation, Trans } from "next-i18next";

export const About = () => {
	const { t } = useTranslation("about");
	return (
		<div>
			<h1>{t("title")}</h1>
			<br/>
			<div className={styles.about_content}>
				<Trans i18nKey="intro" t={t}>
					<b>28 Août 2021</b>
					<a
						target="_blank"
						rel="noreferrer noopener"
						href="https://www.google.com/maps?q=domaine+de+blosseville&source=lmns&bih=937&biw=1920&rlz=1C1CHBF_frUS811US811&hl=en&sa=X&ved=2ahUKEwj5i5rOo-zuAhUNgHMKHUkqDSMQ_AUoAnoECAEQAg"
						aria-describedby="new-window">
						Domaine de Blosseville, en Normandie.
					</a>
				</Trans>
				<br />
				{t("about")}
				<br />
				{t("cant_wait")}
				<br />
				<br />
				{t("soon")}
				<br />
				<br />
				<br/>
				<Trans i18nKey="contact" t={t}>
					<b>PS :</b>
					<br />
					<a
						target="_blank"
						rel="noreferrer noopener"
						href="mailto: nous@cecile-et-romain.fr"
						aria-describedby="new-window">
						nous@cecile-et-romain.fr
					</a>
				</Trans>
			</div>
		</div>
	);
};
