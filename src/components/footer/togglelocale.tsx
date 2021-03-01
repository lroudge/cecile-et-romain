import React, { ReactNode, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/footer.module.css";
import Switch from "react-switch";
import { Props } from "../layouts";

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
				height={30}
				width={60}
				onColor="#8e8a8a"
				offColor="#8e8a8a"
				checkedIcon={
					<span
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							height: "100%",
							fontSize: "2vh",
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
							fontSize: "2vh",
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
