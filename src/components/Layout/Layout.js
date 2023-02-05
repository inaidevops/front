import { Nav } from "../../modules/Nav"
import { Footer } from "../../modules/Footer"

const Layout = ({ children }) => {
  return (<>
    <Nav/>
    {children}
    <Footer />
  </>);
}

export default Layout;