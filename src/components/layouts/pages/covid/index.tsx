import { useTranslation } from "next-i18next";

export const Covid = () => {
	const { t } = useTranslation("covid");
	return (
		<div>
			<h1>{t("title")}</h1>
			<h2>{t("info")}</h2>
		</div>
	);
};
