import styles from "../../styles/Home.module.css";

type Props = {
	children: React.ReactNode;
};

const AppLayout = (props: Props) => (
	<div className={styles.content}>{props.children}</div>
);

export default AppLayout;
