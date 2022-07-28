import React, {useState} from 'react'
import PurchaseHistoryWrapper from '../../components/layouts/SideBarMenus/PurchaseHistoryWrapper'
import Buyer from '../../components/common/PurchaseHistory/Buyer'
import Seller from '../../components/common/PurchaseHistory/Seller'
import ReceivedOrders from '../../components/common/PurchaseHistory/ReceivedOrders'

const navigation = [
    {
        id: '293c5d22-5953-4cdc-8d77-1eff20d909e4',
        name: 'Buy items',
        href: '',
        component: <Buyer />,
        current: false,
    },
    {
        id: 'a438d4ea-1703-4253-aff6-b289c4297cb8',
        name: 'Sell items',
        href: '',
        component: <Seller />,
        current: false,
    },
    {
        id: 'd71c9d94-0011-47ac-a204-f39c0210c48a',
        name: 'Received Orders',
        href: '',
        component: <ReceivedOrders />,
        current: false,
    },
]

const Index = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [sidebarElement, setSidebarElement] = useState(
        navigation[0].component
    )
    const [selectedItem, setSelectedItem] = useState(0)
    const [arrayElements, setArrayElements] = useState(navigation)

    return (
        <div className={'bg-gray-100'}>
            <PurchaseHistoryWrapper
                arrayElements={arrayElements}
                sidebarOpen={sidebarOpen}
                sidebarElement={sidebarElement}
                selectedItem={selectedItem}
                setSidebarOpen={setSidebarOpen}
                setSidebarElement={setSidebarElement}
                setSelectedItem={setSelectedItem}
            >
                {sidebarElement}
            </PurchaseHistoryWrapper>
        </div>
    )
}

export default Index
