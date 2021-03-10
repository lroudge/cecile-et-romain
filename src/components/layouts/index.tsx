import styles from "../../styles/Home.module.css";
import { ReactNode } from "react";

export type Props = {
	children?: ReactNode;
};

const AppLayout = (props: Props) => (
	<div className={styles.content}>
		{props.children}
	</div>
);

export default AppLayout;
