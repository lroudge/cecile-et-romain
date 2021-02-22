import styles from "../../styles/header.module.css";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const Header = () => {
	const router = useRouter();
	const { t } = useTranslation("common");
	const pathName = router.pathname;
	const [activeItem, setActiveItem] = useState<string>(pathName);

	const options = {
		"/about": t("header.about"),
		"/planning": t("header.planning"),
		"/directions": t("header.directions"),
		"/accomodation": t("header.accomodation"),
		"/gifts": t("header.gifts"),
		"/us": t("header.us"),
		"/gallery": t("header.gallery"),
		"/covid": t("header.covid")
	};

	return (
		<div className={styles.header}>
			{Object.keys(options).map(key => {
				return (
					<Link href={key} key={key}>
						<div
							className={
								activeItem === key
									? styles.nav_option_clicked
									: styles.nav_option
							}
							onClick={() => setActiveItem(key)}>
							<div className={styles.nav}>{options[key]}</div>
						</div>
					</Link>
				);
			})}
		</div>
	);
};

export default Header;
