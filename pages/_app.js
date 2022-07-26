import '../styles/globals.css'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import CatDropDown from './flyoutmenu/catdropdown'

function MyApp({Component, pageProps}) {
    return (
        <>
            <Header />
            <CatDropDown />
            <ToastContainer limit={2} />
            <Component {...pageProps} />
            <Footer />
        </>
    )
}

export default MyApp
