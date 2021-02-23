import { useTranslation, Trans } from "next-i18next";

export const Accomodation = () => {
	const { t } = useTranslation("accomodation");
	return (
		<div>
			<h1>{t("title")}</h1>
			<div>
				{t("intro")}
				<br />
				<br />
				{t("guides")}
				<br />
				<ul>
					<li>
						<a
							rel="noopener noreferrer"
							target="_blank"
							aria-describedby="new-window"
							href="https://trello-attachments.s3.amazonaws.com/6017bdd0093fd15ce1e14f65/602aa62a7fb32c4de9b2822a/5d4b0c6b40a555b3750aaa2f33754748/Guide_H%C3%A9bergement_Trouville_2021.pdf">
							{t("deauville")}
						</a>
					</li>
					<li>
						<a
							rel="noopener noreferrer"
							target="_blank"
							aria-describedby="new-window"
							href="https://trello-attachments.s3.amazonaws.com/6017bdd0093fd15ce1e14f65/602aa62a7fb32c4de9b2822a/156f47e7c6baf72f88897d995892535d/Guide_Hebergement_2021_Web.pdf">
							{t("honfleur")}
						</a>
					</li>
				</ul>
				<Trans i18nKey="other" t={t}>
					<a
						rel="noopener noreferrer"
						target="_blank"
						aria-describedby="new-window"
						href="https://www.airbnb.fr/s/Trouville~Deauville--Deauville--France/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&date_picker_type=calendar&query=Trouville-Deauville%2C%20Deauville%2C%20France&place_id=ChIJ2ajopKnU4UcRk-zDgh9Tp9M&checkin=2021-08-27&checkout=2021-08-29&source=structured_search_input_header&search_type=autocomplete_click">
						AirBnB
					</a>
				</Trans>
			</div>
		</div>
	);
};
