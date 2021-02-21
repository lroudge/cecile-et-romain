import styles from "../../styles/footer.module.css";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<a
				href="https://github.com/lroudge"
				target="_blank"
				rel="noopener noreferrer">
				Made with <span role="img" aria-label="love">💛</span> by lroudge
			</a>
		</footer>
	);
};

export default Footer;
