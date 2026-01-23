import { Outlet } from 'react-router-dom'
import Header from './src/components/Header'
import Footer from './src/components/Footer'

const Layout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout
