import '../styles/globals.css'
import Header from '../components/common/Header'
import FooterSection from '../components/common/FooterSection'

import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function MyApp({Component, pageProps}) {
    return (
        <>
            <Header />
            <ToastContainer limit={2} />
            <Component {...pageProps} />
            <FooterSection />
        </>
    )
}

export default MyApp
