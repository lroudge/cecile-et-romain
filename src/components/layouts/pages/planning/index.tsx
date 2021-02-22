import { GiLinkedRings, GiPartyPopper } from "react-icons/gi";
import { FaCameraRetro, FaCocktail, FaGoogle, FaApple } from "react-icons/fa";
import { SiGooglecalendar } from "react-icons/si";
import { stringify } from "querystring";
import styles from "../../../../styles/planning.module.css";
import { useState } from "react";
import ICalendarLink from "react-icalendar-link";
import { useTranslation } from "next-i18next";

export type GCalendarEventQuery = {
	action: string;
	text: string;
	details: string | null;
	location: string | null;
	dates: string;
};

export type ICalEvent = {
	title: string;
	description: string;
	startTime: string;
	endTime: string;
	location: string;
};

const makeGoogleCalendarUrl = (event: GCalendarEventQuery) =>
	`https://calendar.google.com/calendar/render?${stringify(event)}`;

export const Planning = () => {
	const { t } = useTranslation("planning");
	const [buttonsVisible, setButtonsVisible] = useState<
		"weddingDay" | "brunchDay" | ""
	>("");

	const weddingDayEvent: GCalendarEventQuery = {
		action: "TEMPLATE",
		text: t("event.wedding.title"),
		details: t("event.wedding.description"),
		location: "Domaine de Blosseville - Blosseville, 14600 Pennedepie",
		dates: "20210828T153000/20210829T053000"
	};

	const brunchEvent: GCalendarEventQuery = {
		action: "TEMPLATE",
		text: t("event.brunch.title"),
		details: t("event.brunch.description"),
		location:
			"Château du Breuil, Domaine du Breuil, 14130 Le Breuil en Auge",
		dates: "20210829T100000/20210829T150000"
	};

	const weddingDayEventICal: ICalEvent = {
		title: t("event.wedding.title"),
		description: t("event.wedding.description"),
		startTime: "2021-08-28T15:30:00",
		endTime: "2021-08-29T05:30:00",
		location: "Domaine de Blosseville - Blosseville, 14600 Pennedepie"
	};

	const brunchEventICal: ICalEvent = {
		title: t("event.brunch.title"),
		description: t("event.brunch.description"),
		startTime: "2021-08-29T10:00:00",
		endTime: "2021-08-29T15:00:00",
		location:
			"Château du Breuil, Domaine du Breuil, 14130 Le Breuil en Auge"
	};

	return (
		<div>
			<h1>{t("title")}</h1>
			<div>
				{t("intro")}
				<br />
				{t("ceremony")}
				<br />
				{t("weather")}
				<br />
				<div className={styles.event_title}>
					<h2> {t("wedding.title")} </h2>{" "}
					<button
						className={styles.calendar_button}
						onClick={() =>
							buttonsVisible === "weddingDay"
								? setButtonsVisible("")
								: setButtonsVisible("weddingDay")
						}>
						<SiGooglecalendar /> {t("add_to_calendar")}
					</button>
					{buttonsVisible === "weddingDay" ? (
						<div className={styles.button_group}>
							<a
								className={styles.google_button}
								rel="noopener noreferrer"
								target="_blank"
								href={makeGoogleCalendarUrl(weddingDayEvent)}>
								<FaGoogle />
							</a>

							<div className={styles.apple_button}>
								<ICalendarLink
									event={weddingDayEventICal}
									filename="wedding.ics">
									<FaApple />
								</ICalendarLink>
							</div>
						</div>
					) : (
						[]
					)}
				</div>
				<b>{t("wedding.place")}</b>
				<br />
				{t("wedding.info")}
				<br />
				{t("wedding.dresscode")}
				<br />
				<ul>
					<li>
						<GiLinkedRings /> {t("wedding.ceremony")}
					</li>
					<li>
						<FaCameraRetro /> {t("wedding.photos")}
					</li>
					<li>
						<FaCocktail /> {t("wedding.cocktail")}
					</li>
					<li>
						<GiPartyPopper /> {t("wedding.dinner")}
					</li>
				</ul>
				<div className={styles.event_title}>
					<h2> {t("brunch.title")} </h2>{" "}
					<button
						className={styles.calendar_button}
						onClick={() =>
							buttonsVisible === "brunchDay"
								? setButtonsVisible("")
								: setButtonsVisible("brunchDay")
						}>
						<SiGooglecalendar /> {t("add_to_calendar")}
					</button>
					{buttonsVisible === "brunchDay" ? (
						<div className={styles.button_group}>
							<a
								className={styles.google_button}
								rel="noopener noreferrer"
								target="_blank"
								href={makeGoogleCalendarUrl(brunchEvent)}>
								<FaGoogle />
							</a>
							<div className={styles.apple_button}>
								<ICalendarLink
									event={brunchEventICal}
									filename="brunch.ics">
									<FaApple />
								</ICalendarLink>
							</div>
						</div>
					) : (
						[]
					)}
				</div>
				<b>{t("brunch.place")}</b>
				<br />
				{t("brunch.info")}
				<br />
				{t("brunch.dresscode")}
				<br />
				{t("brunch.program")}
			</div>
		</div>
	);
};
