import { useTranslation, Trans } from "next-i18next";
import { Props } from "../..";

export const Gifts: React.FC<Props> = () => {
	const { t } = useTranslation("gifts");
	return (
		<div>
			<h1>{t("title")}</h1>
			<div>
				<Trans i18nKey="find" t={t}>
					{/* <a
						target="_blank"
						rel="nooopener noreferrer"
						aria-describedby="new-window"
						href="https://google.com">
						ici
					</a> */}
				</Trans>
				<br />
				<br />
				{t("conclusion")}
				<br />
				<div>
					<img
						height="45%"
						width="45%"
						alt="Glasses toasting with a heart"
						src="https://user-images.githubusercontent.com/44481637/109026124-af7d7d00-76bf-11eb-90a7-57ed48a7ba6f.png"></img>
				</div>
			</div>
		</div>
	);
};
