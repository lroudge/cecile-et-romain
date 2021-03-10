import { useTranslation } from "next-i18next";
import { Props } from "../..";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";

export const Gifts: React.FC<Props> = () => {
	const { t } = useTranslation("gifts");
	return (
		<div>
			<h1>{t("title")}</h1>
			<div>
				{t("find")}
				<br />
				<br />
				{t("travel")}
				<br />
				<br />
				{t("conclusion")}
				<br />
				<br />
				<a
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center"
					}}
					target="_blank"
					rel="nooopener noreferrer"
					aria-describedby="new-window"
					href="https://www.paypal.com/pools/c/8xykZBcXwr">
					<BsArrowRightShort />
					{t("link")}
					<BsArrowLeftShort />
				</a>
				<div>
					<img
						height="35%"
						width="35%"
						alt="Glasses toasting with a heart"
						src="https://user-images.githubusercontent.com/44481637/109026124-af7d7d00-76bf-11eb-90a7-57ed48a7ba6f.png"></img>
				</div>
			</div>
		</div>
	);
};
