import styles from "../../styles/footer.module.css";
import { useTranslation, Trans } from "next-i18next";

const Footer = () => {
	const { t } = useTranslation("common");
	return (
		<footer className={styles.footer}>
			<a
				href="https://github.com/lroudge"
				target="_blank"
				rel="noopener noreferrer">
				<Trans i18nKey="footer.made_by" t={t}>
					<span role="img" aria-label="love">
						💛
					</span>
				</Trans>
			</a>
		</footer>
	);
};

export default Footer;
