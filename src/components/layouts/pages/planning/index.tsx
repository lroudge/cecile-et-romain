import { GiLinkedRings, GiPartyPopper } from "react-icons/gi";
import { FaCameraRetro, FaCocktail } from "react-icons/fa";
import { SiGooglecalendar } from "react-icons/si";
import { stringify } from "querystring";
import styles from "../../../../styles/planning.module.css";

export type CalendarEventQuery = {
	action: string;
	text: string;
	details: string | null;
	location: string | null;
	dates: string;
};

const makeGoogleCalendarUrl = (event: CalendarEventQuery) =>
	`https://calendar.google.com/calendar/render?${stringify(event)}`;

export const Planning = () => {
	const weddingDayEvent: CalendarEventQuery = {
		action: "TEMPLATE",
		text: "Mariage Cécile & Romain",
		details: "Cérémonie, cocktail et dîner au Domaine de Blosseville",
		location: "Domaine de Blosseville - Blosseville, 14600 Pennedepie",
		dates: "20210828T153000/20210829T053000"
	};

	const brunchEvent: CalendarEventQuery = {
		action: "TEMPLATE",
		text: "Brunch Cécile & Romain",
		details: "Brunch de lendemain de mariage au Château du Breuil",
		location:
			"Château du Breuil, Domaine du Breuil, 14130 Le Breuil en Auge",
		dates: "20210829T100000/20210829T150000"
	};

	return (
		<div>
			<h1>Le Planning</h1>
			<div>
				Vous trouverez ci-dessous le programme de la journée. On a hâte
				de la vivre à vos côtés !
				<br />
				Notre cérémonie ainsi que le vin d'honneur et la soirée auront
				lieu directement au domaine : Pas besoin de bouger !
				<br />
				La météo en Normandie a tendance à être un peu capricieuse à la
				fin de l'été. Il peut faire très beau et chaud tout comme il
				peut pleuvoir et faire vite frais. Pensez au petit pull voire au
				parapluie au besoin ! On croise toutefois les doigts pour que la
				météo soit au rendez-vous !
				<br />
				<br />
				<div className={styles.event_title}>
					<b> Samedi 28 Août 2021 - Mariage </b>{" "}
					<button className={styles.calendar_button}>
						<SiGooglecalendar />{" "}
						<a
							rel="noopener noreferrer"
							target="_blank"
							href={makeGoogleCalendarUrl(weddingDayEvent)}>
							Ajouter au Calendrier
						</a>
					</button>
				</div>
				<br />
				Domaine de Blosseville - Blosseville, 14600 Pennedepie
				<br />
				Le Domaine est doté d'un grand parking ouvert qui permet de se
				garer sans soucis. Il est néanmoins nécessaire de venir en
				voiture comme il s'agit d'un coin peu accessible à pied.
				<br />
				Tenue de cocktail exigée.
				<br />
				<ul>
					<li>
						<GiLinkedRings /> Cérémonie : 15h30 - 16h30
					</li>
					<li>
						<FaCameraRetro /> Photos de groupe : 16h30 - 17h
					</li>
					<li>
						<FaCocktail /> Cocktail : 17h - 19h30
					</li>
					<li>
						<GiPartyPopper /> Repas & soirée : 19h30 - 5h30
					</li>
				</ul>
				<br />
				<div className={styles.event_title}>
					<b> Dimanche 29 Août 2021 - Brunch </b>{" "}
					<button className={styles.calendar_button}>
						<SiGooglecalendar />{" "}
						<a
							rel="noopener noreferrer"
							target="_blank"
							href={makeGoogleCalendarUrl(brunchEvent)}>
							Ajouter au Calendrier
						</a>
					</button>
				</div>
				<br />
				Château du Breuil, Domaine du Breuil, 14130 Le Breuil en Auge
				<br />
				Le Domaine est également doté d'un grand parking pour accueillir
				les clients. Il vous sera toutefois possible de vous garer sur
				le parking et de finir à pied (3 min) jusqu'au Château où nous
				serons dans la cour intérieur du Château.
				<br />
				Tenue décontractée.
				<br />
				Un brunch convivial pour récupérer et debriefer des grands
				moments de la journée de la veille !
			</div>
		</div>
	);
};
