
import MainHeader from '../components/MainHeader'
import Footer from '../components/MainFooter'

const MainLayout = ({ children }) => (
  <>
    <MainHeader></MainHeader>
    {children}
    <Footer></Footer>
  </>
)

export default MainLayout


