import styles from "../../../../styles/directions.module.css";
import { FaCar, FaTrain, FaPlane } from "react-icons/fa";
import { GiMagicLamp } from "react-icons/gi";
import { useTranslation, Trans } from "next-i18next";

export const Directions = () => {
	const { t } = useTranslation("directions");
	return (
		<div>
			<h1>{t("title")}</h1>
			<div className={styles.directions}>
				{t("intro")}
				<br />
				{t("intro2")}
				<br />
				{t("intro3")}
				<div className={styles.directions_title}>
					<h2>{t("blosseville.title")}</h2>
					<a
						target="_blank"
						rel="noreferrer noopener"
						aria-describedby="new-window"
						href="https://www.google.com/maps/place/Manoir+de+Blosseville/@49.3991329,0.1613188,17z/data=!3m1!4b1!4m5!3m4!1s0x47e02d81e05fa59d:0xbcf3bf2ba2a91605!8m2!3d49.3991329!4d0.1635075?hl=en
">
						{t("blosseville.address")}
					</a>
				</div>
				<div className={styles.map_block}>
					<iframe
						title="Manoir de Blosseville on Maps"
						src={`https://www.google.com/maps/embed/v1/place?key=${
							process.env.GOOGLE_API_TOKEN
						}&q=${encodeURI("Manoir de Blosseville")}`}
						width="50%"
						height="400px"></iframe>
					<ul className={styles.transport_list}>
						<li>
							<FaCar title="car" /> {t("blosseville.car")}
						</li>
						<li>
							<FaTrain title="train" /> {t("blosseville.train")}
						</li>
						<li>
							<FaPlane title="plane" /> {t("blosseville.plane")}
						</li>
						<li>
							<GiMagicLamp title="magic lamp" />{" "}
							{t("blosseville.magic")}
						</li>
					</ul>
				</div>
				<div className={styles.directions_title}>
					<h2>{t("breuil.title")}</h2>
					<a
						target="_blank"
						rel="noreferrer noopener"
						aria-describedby="new-window"
						href="https://www.google.com/maps/place/Ch%C3%A2teau+du+Breuil/@49.2306248,0.2127819,17z/data=!3m1!4b1!4m5!3m4!1s0x47e1cfa708ce7d1f:0x529f9aa74ea74c7!8m2!3d49.2306213!4d0.2149706?hl=en
">
						{t("breuil.address")}
					</a>
				</div>
				<div className={styles.map_block}>
					<iframe
						title="Chateau du Breuil on Maps"
						src={`https://www.google.com/maps/embed/v1/place?key=${
							process.env.GOOGLE_API_TOKEN
						}&q=${encodeURI(
							"Chateau du Breuil, Les Jourdains, 14130 Le Breuil en Auge"
						)}`}
						width="50%"
						height="400px"></iframe>
					<ul className={styles.transport_list}>
						<li>
							<FaCar title="car" /> {t("breuil.car")}
						</li>
						<li>
							<FaTrain title="train" /> {t("breuil.train")}
						</li>
						<li>
							<FaPlane title="plane" /> {t("breuil.plane")}
						</li>
						<li>
							<GiMagicLamp title="magic lamp" />{" "}
							{t("breuil.magic")}
						</li>
					</ul>
				</div>
				<br />
				<br />
				<Trans i18nKey="contact" t={t}>
					<a
						target="_blank"
						rel="noreferrer noopener"
						aria-describedby="new-window"
						href="mailto: nous@cecile-et-romain.fr">
						nous@cecile-et-romain.fr
					</a>
				</Trans>
				<br />
				<br />
			</div>
		</div>
	);
};
