import '../styles/globals.css'
import Header from "../components/common/Header";

import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

function MyApp({Component, pageProps}) {
    return (
        <>
            <ToastContainer limit={2}/>
            <Header/>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
