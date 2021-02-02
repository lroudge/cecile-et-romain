import styles from "../../styles/Home.module.css";
import Link from "next/link";

const HomeLayout = () => {
	return (
		<div className={styles.splash}>
			<h1>Mariage de Cécile et Romain</h1>
			<Link href="/about">Entrer</Link>
		</div>
	);
};

export default HomeLayout;
