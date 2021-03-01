import styles from "../../../../styles/us.module.css";
import { useTranslation } from "next-i18next";
import { Props } from "../..";

const NB_EVENTS = 21;

type Event = {
	date: string;
	event: string;
	img: string;
};

export const Us: React.FC<Props> = () => {
	const { t } = useTranslation("us");
	let events: Event[] = [];
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
