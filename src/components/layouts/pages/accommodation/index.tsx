import { Trans, useTranslation } from "next-i18next";
import styles from "../../../../styles/accommodation.module.css";
import { Props } from "../..";

export const Accommodation: React.FC<Props> = () => {
	const { t } = useTranslation("accommodation");
	return (
		<div>
			<h1>{t("title")}</h1>
			<div>
				{t("intro")}
				<br />
				<br />
				<div className={styles.guides}>
					{t("guides")}
					<br />
					<ul>
						<li>
							<h3>
								{t("deauville")}{" "}
								<a
									rel="noopener noreferrer"
									target="_blank"
									aria-describedby="new-window"
									href="https://trello-attachments.s3.amazonaws.com/6017bdd0093fd15ce1e14f65/602aa62a7fb32c4de9b2822a/5d4b0c6b40a555b3750aaa2f33754748/Guide_H%C3%A9bergement_Trouville_2021.pdf">
									(Guide)
								</a>
							</h3>
							<img
								alt="Touristic Guide for Deauville Cover"
								src="https://user-images.githubusercontent.com/44481637/109021324-13517700-76bb-11eb-8b9d-6665b85e76e1.jpg"></img>
						</li>
						<li>
							<h3>
								{t("honfleur")}{" "}
								<a
									rel="noopener noreferrer"
									target="_blank"
									aria-describedby="new-window"
									href="https://trello-attachments.s3.amazonaws.com/6017bdd0093fd15ce1e14f65/602aa62a7fb32c4de9b2822a/156f47e7c6baf72f88897d995892535d/Guide_Hebergement_2021_Web.pdf">
									(Guide)
								</a>
							</h3>
							<img
								alt="Touristic Guide for Honfleur Cover"
								src="https://user-images.githubusercontent.com/44481637/109021353-18aec180-76bb-11eb-95fb-8d427fc70160.jpg"></img>
						</li>
					</ul>
					<Trans i18nKey="booking" t={t}>
						<a
							rel="noopener noreferrer"
							target="_blank"
							aria-describedby="new-window"
							href="https://www.booking.com/searchresults.fr.html?label=gen173nr-1FCAEoggI46AdIM1gEaE2IAQGYATG4ARfIAQzYAQHoAQH4AQKIAgGoAgO4AoDH1YEGwAIB0gIkZWU3MzM0MDUtYzliZS00MTZjLTkzNzQtNmZiMThmMjM0N2Zj2AIF4AIB&sid=023a249b24854b55c0e6ce451fada267&tmpl=searchresults&checkin_month=8&checkin_monthday=28&checkin_year=2021&checkout_month=8&checkout_monthday=30&checkout_year=2021&class_interval=1&dest_id=-1457360&dest_type=city&dtdisc=0&from_sf=1&group_adults=2&group_children=0&inac=0&index_postcard=0&label_click=undef&lang=fr&no_rooms=1&offset=0&postcard=0&raw_dest_type=city&room1=A%2CA&sb_price_type=total&shw_aparth=1&slp_r_match=0&soz=1&src=index&src_elem=sb&srpvid=96678f51efea005a&ss=Pennedepie&ss_all=0&ssb=empty&sshis=0&ssne=Pennedepie&ssne_untouched=Pennedepie&top_ufis=1&lang_click=other;cdl=en-us;lang_changed=1">
							Booking.com
						</a>
					</Trans>
					<br />
					<br />
					<Trans i18nKey="airbnb" t={t}>
						<a
							rel="noopener noreferrer"
							target="_blank"
							aria-describedby="new-window"
							href="https://www.airbnb.fr/s/Trouville~Deauville--Deauville--France/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&date_picker_type=calendar&query=Trouville-Deauville%2C%20Deauville%2C%20France&place_id=ChIJ2ajopKnU4UcRk-zDgh9Tp9M&checkin=2021-08-27&checkout=2021-08-29&source=structured_search_input_header&search_type=autocomplete_click">
							AirBnB
						</a>
					</Trans>
					<br />
					<br />
				</div>
			</div>
		</div>
	);
};
