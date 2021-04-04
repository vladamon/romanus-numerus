import MainHeader from '../components/header-main'
import Footer from '../components/footer-main'

const MainLayout = ({ children }) => (
  <>
    <MainHeader />
    {children}
    <Footer />
  </>
)

export default MainLayout
