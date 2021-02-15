import { About } from "../components/layouts/pages/about";
import { withTranslation } from "../i18n";

const AboutPage = () => <About />;

AboutPage.getInitialProps = async () => ({
	namespacesRequired: ["common"]
});

export default withTranslation("common")(AboutPage);
