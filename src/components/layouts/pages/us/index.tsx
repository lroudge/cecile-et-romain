import styles from "../../../../styles/us.module.css";
import { useTranslation } from "next-i18next";

const NB_EVENTS = 21;

export const Us = () => {
	const { t } = useTranslation("us");
	let events = [];
	for (let i = 0; i < NB_EVENTS; i++) {
		events.push({
			date: t(`timeline.${i}.date`),
			event: t(`timeline.${i}.event`),
			img: t(`timeline.${i}.img`)
		});
	}
	return (
		<div>
			<h1>{t("title")}</h1>
			<section className={styles.timeline}>
				<ul>
					{events.map((event, index) => (
						<li key={index}>
							<div className={styles.img_container}>
								<div>
									<b>{event.date}</b>
									<br />
									<br />
									{event.event}
								</div>
								<img
									alt="Cecile & Romain picture"
									src={event.img}
									className={styles.picture}
								/>
							</div>
						</li>
					))}
				</ul>
			</section>
		</div>
	);
};
