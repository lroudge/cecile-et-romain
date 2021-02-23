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
				<br />
				{t("ceremony")}
				<br />
				<br />
				{t("weather")}
				<br />
				<div className={styles.event_title}>
					<h2> {t("wedding.title")} </h2>{" "}
					<div className={styles.cal_buttons_container}>
						<button
							className={styles.calendar_button}
							onClick={() =>
								buttonsVisible === "weddingDay"
									? setButtonsVisible("")
									: setButtonsVisible("weddingDay")
							}>
							<SiGooglecalendar title="Calendar Icon" />{" "}
							{t("add_to_calendar")}
						</button>
						{buttonsVisible === "weddingDay" ? (
							<div className={styles.button_group}>
								<a
									className={styles.google_button}
									rel="noopener noreferrer"
									target="_blank"
									aria-describedby="new-window"
									href={makeGoogleCalendarUrl(
										weddingDayEvent
									)}>
									<FaGoogle title="Add to Google Calendar" />
								</a>

								<div className={styles.apple_button}>
									<ICalendarLink
										event={weddingDayEventICal}
										filename="wedding.ics">
										<FaApple title="Add to iCal" />
									</ICalendarLink>
								</div>
							</div>
						) : (
							[]
						)}
					</div>
				</div>
				<div className={styles.planning_section}>
					<div>
						<b>{t("wedding.place")}</b>
						<br />
						<br />
						{t("wedding.info")}
						<br />
						{t("wedding.dresscode")}
						<br />
						<ul>
							<li>
								<GiLinkedRings title="rings" />{" "}
								{t("wedding.ceremony")}
							</li>
							<li>
								<FaCameraRetro title="camera" />{" "}
								{t("wedding.photos")}
							</li>
							<li>
								<FaCocktail title="cocktail" />{" "}
								{t("wedding.cocktail")}
							</li>
							<li>
								<GiPartyPopper title="party" />{" "}
								{t("wedding.dinner")}
							</li>
						</ul>
					</div>
					<img
						src="https://user-images.githubusercontent.com/44481637/108914470-ad69de80-762b-11eb-98e3-6b707d91e553.jpg"
						alt="Domaine de Blosseville"></img>
				</div>
				<div className={styles.event_title}>
					<h2> {t("brunch.title")} </h2>{" "}
					<div className={styles.cal_buttons_container}>
						<button
							className={styles.calendar_button}
							onClick={() =>
								buttonsVisible === "brunchDay"
									? setButtonsVisible("")
									: setButtonsVisible("brunchDay")
							}>
							<SiGooglecalendar title="Add to Calendar" />{" "}
							{t("add_to_calendar")}
						</button>
						{buttonsVisible === "brunchDay" ? (
							<div className={styles.button_group}>
								<a
									className={styles.google_button}
									rel="noopener noreferrer"
									target="_blank"
									aria-describedby="new-window"
									href={makeGoogleCalendarUrl(brunchEvent)}>
									<FaGoogle title="Add to Google Calendar" />
								</a>
								<div className={styles.apple_button}>
									<ICalendarLink
										event={brunchEventICal}
										filename="brunch.ics">
										<FaApple title="Add to iCal" />
									</ICalendarLink>
								</div>
							</div>
						) : (
							[]
						)}
					</div>
				</div>
				<div className={styles.planning_section}>
					<div>
						<b>{t("brunch.place")}</b>
						<br />
						<br />
						{t("brunch.info")}
						<br />
						{t("brunch.dresscode")}
						<br />
						{t("brunch.program")}
					</div>
					<img
						src="https://user-images.githubusercontent.com/44481637/108914477-af33a200-762b-11eb-975c-d6b7e00e1e26.jpg"
						alt="Domaine de Blosseville"></img>
				</div>
			</div>
		</div>
	);
};
