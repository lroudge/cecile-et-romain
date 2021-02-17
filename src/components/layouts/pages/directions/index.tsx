import styles from "../../../../styles/directions.module.css";
import { FaCar, FaTrain, FaPlane } from "react-icons/fa";
import { GiMagicLamp } from "react-icons/gi";

export const Directions = () => {
	return (
		<div>
			<h1>Comment venir</h1>
			<div>
				C’est parti pour une virée en Normandie ! Le weekend se
				déroulera à proximité de la maison des parents de Cécile, dans
				le Calvados. La Normandie est une région très accessible en
				transport. Vous avez plusieurs options pour vous rendre au
				Domaine de Blosseville pour la cérémonie et au Château du Breuil
				pour le brunch.
				<br />
				<h2>
					Domaine de Blosseville : Blosseville, 14600 Pennedepie{" "}
					<a
						target="_blank"
						rel="noreferrer nooponer"
						href="https://www.google.com/maps/place/Manoir+de+Blosseville/@49.3991329,0.1613188,17z/data=!3m1!4b1!4m5!3m4!1s0x47e02d81e05fa59d:0xbcf3bf2ba2a91605!8m2!3d49.3991329!4d0.1635075?hl=en
">
						(Maps)
					</a>
				</h2>
				<div className={styles.map_block}>
					<iframe
						src={`https://www.google.com/maps/embed/v1/place?key=${
							process.env.GOOGLE_API_TOKEN
						}&q=${encodeURI("Manoir de Blosseville")}`}
						width="400"
						height="350"></iframe>
					<ul className={styles.transport_list}>
						<li>
							<FaCar /> Prendre l'A13 pour venir en Normandie pour
							direction "Trouville" ou "Honfleur". Prendre ensuite
							la D62. (Ou sinon, entrez juste les coordonnées dans
							Google Maps, ça marche aussi.){" "}
						</li>
						<li>
							<FaTrain /> Depuis Paris, prendre le train direction
							"Trouville Deauville" ou "Honfleur". Le voyage dure
							environ 2h en direct puis il faut prendre un autre
							moyen de transport. Les deux gares sont équivalentes
							en terme de distances pour aller à Pennedepie et le
							trajet dure environ 10min.
						</li>
						<li>
							<FaPlane /> Direction Paris CDG, puis il faut
							prendre un autre moyen de transport.
						</li>
						<li>
							<GiMagicLamp /> En tapis volant : Il trouvera tout
							seul.
						</li>
					</ul>
				</div>
				<h2>
					Château du Breuil : Domaine du Breuil, Les Jourdains, 14130
					Le Breuil en Auge{" "}
					<a
						target="_blank"
						rel="noreferrer nooponer"
						href="https://www.google.com/maps/place/Ch%C3%A2teau+du+Breuil/@49.2306248,0.2127819,17z/data=!3m1!4b1!4m5!3m4!1s0x47e1cfa708ce7d1f:0x529f9aa74ea74c7!8m2!3d49.2306213!4d0.2149706?hl=en
">
						(Maps)
					</a>
				</h2>
				<div className={styles.map_block}>
					<iframe
						src={`https://www.google.com/maps/embed/v1/place?key=${
							process.env.GOOGLE_API_TOKEN
						}&q=${encodeURI(
							"Chateau du Breuil, Les Jourdains, 14130 Le Breuil en Auge"
						)}`}
						width="400"
						height="350"></iframe>
					<ul className={styles.transport_list}>
						<li>
							<FaCar /> Prendre l'A13 puis la D579. (Ou utilisez
							Maps.)
						</li>
						<li>
							<FaTrain /> Depuis Paris, prendre le train direction
							"Trouville Deauville" ou "Caen" et descendre à
							l'arrêt "Lisieux". Le voyage dure 1h45 en direct.
							Puis trajet jusqu'au Breuil en Auge d'environ 15
							min.
						</li>
						<li>
							<FaPlane /> Direction Paris CDG, puis il faut
							prendre un autre moyen de transport.
						</li>
						<li>
							<GiMagicLamp /> En tapis volant : Il sait où c'est.
						</li>
					</ul>
				</div>
				<br />
				Bien entendu si vous avez la moindre question n'hésitez pas à
				nous contacter à l'adresse{" "}
				<a
					target="_blank"
					rel="noreferrer nooponer"
					href="mailto: nous@cecile-et-romain.fr">
					nous@cecile-et-romain.fr
				</a>{" "}
				ou nous appeler directement.
			</div>
		</div>
	);
};
