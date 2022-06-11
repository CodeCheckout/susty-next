import {useEffect} from 'react'
import {PayPalButtons, PayPalScriptProvider, usePayPalScriptReducer,} from '@paypal/react-paypal-js'

// This values are the props in the UI
const currency = 'USD'
const style = {layout: 'vertical'}

// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({currency, showSpinner, price}) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{options, isPending}, dispatch] = usePayPalScriptReducer()

    useEffect(() => {
        dispatch({
            type: 'resetOptions',
            value: {
                ...options,
                currency: currency,
            },
        })
    }, [currency, showSpinner])

    return (
        <>
            {showSpinner && isPending && <div className="spinner"/>}
            <PayPalButtons
                style={style}
                disabled={false}
                forceReRender={[price, currency, style]}
                fundingSource={undefined}
                createOrder={(data, actions) => {
                    return actions.order
                        .create({
                            purchase_units: [
                                {
                                    amount: {
                                        currency_code: currency,
                                        value: price,
                                    },
                                },
                            ],
                        })
                        .then((orderId) => {
                            // Your code here after create the order
                            return orderId
                        })
                }}
                onApprove={function (data, actions) {
                    return actions.order.capture().then(function () {
                        // Your code here after capture the order
                    })
                }}
            />
        </>
    )
}

export default function App({price}) {
    return (
        <div style={{
            maxWidth: '750px',
            minHeight: '200px',
            position: 'relative',
            zIndex: '0',

        }}>
            <PayPalScriptProvider
                options={{
                    'client-id':
                        'AXt44elYZjtjQL9NaXOStbnskFprzhklo_ow6h3OgP44G3_z3ObONVauSFROwYLw-izcfPqbjhQmy2v0',
                    components: 'buttons',
                    currency: 'USD',
                }}
            >
                <ButtonWrapper
                    price={price}
                    currency={currency}
                    showSpinner={false}
                />
            </PayPalScriptProvider>
        </div>
    )
}
