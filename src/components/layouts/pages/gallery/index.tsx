import { useTranslation } from "next-i18next";

export const Gallery = () => {
	const { t } = useTranslation("gallery");
	return (
		<div>
			<h1>{t("title")}</h1>
			<h2>{t("info")}</h2>
		</div>
	);
};
