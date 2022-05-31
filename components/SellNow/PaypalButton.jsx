import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import axios from "axios";
import {useRouter} from "next/router";

const PayPalButton = (props) => {
    const router = useRouter();

    const onSuccess = (payment) => {
       console.log("payment success: ", payment);

    }

    const onCancel = (data) => {


        console.log("The payment was cancelled!");


    }

    const onError = (err) => {

        console.log("Error!", err);
        console.log(props.price);

    }

    let env = 'sandbox'; // you can set here to 'production' for production
    let currency = 'USD'; // or you can set this value from your props or state
    let total = props.price;


    const client = {
        // sandbox: 'PAYPAl_SANDBOX_CLIENT_ID',
        sandbox: 'AQKrqLAGPHWXvNqTXhSYhd59be7VZ_odFtqfvbSpy-41OU40n9192H7J-Qpf1nmeap6RetRCPj_i96rb',
        production: 'YOUR-PRODUCTION-APP-ID',  //fill with your app id
    }

    return (
        <PaypalExpressBtn
            style={{
                size: 'large',
                color: 'blue',
                shape: 'rect',
                label: 'checkout'
            }}
            env={env} client={client} currency={currency} total={total ? total : 1} onError={onError}
            onSuccess={onSuccess} onCancel={onCancel}/>
    );
};

export default PayPalButton;
