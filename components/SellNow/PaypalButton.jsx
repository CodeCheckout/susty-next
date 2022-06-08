import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

import React from 'react'

const PaypalButton = () => {
    return (
        <div>
            <PayPalScriptProvider options={{ "client-id": "AQKrqLAGPHWXvNqTXhSYhd59be7VZ_odFtqfvbSpy-41OU40n9192H7J-Qpf1nmeap6RetRCPj_i96rb" }}>
                <PayPalButtons style={{ layout: "horizontal" }} />
            </PayPalScriptProvider>
        </div>
    )
}

export default PaypalButton
