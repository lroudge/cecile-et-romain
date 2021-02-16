import styles from "../../../../styles/Home.module.css";

export const About = () => {
	return (
		<div>
			<h1>Bienvenue !</h1>
			<div className={styles.about_content}>
				Comme vous le savez, nous nous marions le <b>28 Août 2021</b> au{" "}
				<a
					target="_blank"
					rel="noreferrer nooponer"
					href="https://www.google.com/maps?q=domaine+de+blosseville&source=lmns&bih=937&biw=1920&rlz=1C1CHBF_frUS811US811&hl=en&sa=X&ved=2ahUKEwj5i5rOo-zuAhUNgHMKHUkqDSMQ_AUoAnoECAEQAg">
					Domaine de Blosseville
				</a>
				, en Normandie.
				<br />
				Vous pourrez retrouver sur ce site toutes les informations
				pratiques pour se rendre à notre mariage.
				<br />
				Nous avons hâte de vous y retrouver et de célébrer cette belle
				journée avec vous !
				<br />
				<br />
				A très vite, Cécile & Romain
				<br />
				<br />
				<b>PS :</b> Si vous avez la moindre question, n'hésitez pas à
				nous contacter directement à l'adresse suivante :
				<br />
				<a
					target="_blank"
					rel="noreferrer nooponer"
					href="mailto: nous@cecile-et-romain.fr">
					nous@cecile-et-romain.fr
				</a>
			</div>
		</div>
	);
};
