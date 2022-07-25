import React from 'react'
import MyAddress from '../../components/common/Settings/shipping/MyAddress'
import DeliveryOptions from '../../components/common/Settings/shipping/DeliveryOptions'

const Shipping = () => {
    return (
        <div className="grid gap-y-4 p-4">
            <MyAddress />
            <DeliveryOptions />
        </div>
    )
}

export default Shipping
