import { PayPalButton } from "react-paypal-button-v2";

import React from 'react';

const PaypalButton = () => {
    return (
        <div>
            <PayPalButton
                amount="0.01"
                // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                onSuccess={(details, data) => {
                    console.log(details);
                    console.log(data);
                    // alert("Transaction completed by " + details.payer.name.given_name);
                    //
                    // // OPTIONAL: Call your server to save the transaction
                    // return fetch("/paypal-transaction-complete", {
                    //     method: "post",
                    //     body: JSON.stringify({
                    //         orderId: data.orderID
                    //     })
                    // });
                }}
                options={{
                    clientId: "AQKrqLAGPHWXvNqTXhSYhd59be7VZ_odFtqfvbSpy-41OU40n9192H7J-Qpf1nmeap6RetRCPj_i96rb"

                }}
            />
        </div>
    );
};

export default PaypalButton;
