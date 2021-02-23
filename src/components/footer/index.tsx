import styles from "../../styles/footer.module.css";
import { useTranslation, Trans } from "next-i18next";
import ToggleLocale from "./togglelocale";

const Footer = () => {
	const { t } = useTranslation("common");
	return (
		<footer className={styles.footer}>
			<a
				href="https://github.com/lroudge"
				target="_blank"
				rel="noopener noreferrer"
				aria-describedby="new-window">
				<Trans i18nKey="footer.made_by" t={t}>
					<span role="img" aria-label="love">
						U+1F49B
					</span>
				</Trans>
			</a>

			<ToggleLocale />
			<div hidden>
				<span id="new-window">Opens in a new window</span>
				<span id="love">love</span>
			</div>
		</footer>
	);
};

export default Footer;
