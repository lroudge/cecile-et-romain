import { useTranslation, Trans } from "next-i18next";

export const Gifts = () => {
	const { t } = useTranslation("gifts");
	return (
		<div>
			<h1>{t("title")}</h1>
			<p>
				<Trans i18nKey="find" t={t}>
					<a
						target="_blank"
						rel="nooopener noreferrer"
						aria-describedby="new-window"
						href="https://google.com">
						ici
					</a>
				</Trans>
				<br />
				<br />
				{t("conclusion")}
			</p>
		</div>
	);
};
