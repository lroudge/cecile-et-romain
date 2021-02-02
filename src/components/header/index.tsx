import styles from "../../styles/Home.module.css";
import Link from "next/link";

const Header = () => {
	return (
		<div className={styles.header}>
			<Link href="/about">En bref</Link>
			<Link href="/planning">Le planning</Link>
			<Link href="/directions">Comment venir</Link>
			<Link href="/accomodation">Se loger</Link>
			<Link href="/gifts">Liste de Mariage</Link>
			<Link href="/us">Notre histoire</Link>
			<Link href="/gallery">Photos</Link>
		</div>
	);
};

export default Header;
