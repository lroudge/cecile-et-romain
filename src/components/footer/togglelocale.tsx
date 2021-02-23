import React, { ReactNode, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/footer.module.css";
import Switch from "react-switch";
import { useTranslation } from "next-i18next";

type Props = {
	children?: ReactNode;
	title?: string;
};

const ToggleLocale: React.FC<Props> = () => {
	const router = useRouter();
	const [checked, setChecked] = useState<boolean>(router.locale === "en");
	return (
		<div className={styles.toggle_locale}>
			<Switch
				title="Toggle Language Between English and French"
				onChange={() => {
					setChecked(!checked);
					router.push(router.asPath, router.asPath, {
						locale: router.locale === "en" ? "fr" : "en"
					});
				}}
				checked={checked}
				height={40}
				width={80}
				onColor="#8e8a8a"
				offColor="#8e8a8a"
				checkedIcon={
					<span
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							height: "100%",
							fontSize: "3vh",
							paddingLeft: 2
						}}
						role="img"
						aria-label="english">
						🇺🇸
					</span>
				}
				uncheckedIcon={
					<span
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							height: "100%",
							fontSize: "3vh",
							paddingRight: 2
						}}
						role="img"
						aria-label="french">
						🇫🇷
					</span>
				}
			/>
		</div>
	);
};

export default ToggleLocale;
