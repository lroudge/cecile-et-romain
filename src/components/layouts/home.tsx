import styles from "../../styles/Home.module.css";
import Link from "next/link";

const HomeLayout = () => {
	return (
		<div className={styles.splash}>
			<h1>Mariage de Cécile & Romain</h1>
            <h2>28 Août 2021</h2>
			<Link href="/about">Entrer</Link>
		</div>
	);
};

export default HomeLayout;
