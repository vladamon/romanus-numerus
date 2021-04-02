import MainHeader from '../components/header-main';
import Footer from '../components/footer-main';

const MainLayout = ({ children }) => (
	<>
		<MainHeader></MainHeader>
		{children}
		<Footer></Footer>
	</>
);

export default MainLayout;
