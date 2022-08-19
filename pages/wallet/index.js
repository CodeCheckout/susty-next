import React, {useState} from 'react'
import WalletSubSection from '../../components/common/Wallet/WalletSubSection'
import IncomeSection from '../../components/common/Wallet/IncomeSection'
import WalletSideBarWrapper from '../../components/layouts/SideBarMenus/WalletSideBarWrapper'
import PaymentHistorySection from '../../components/common/Wallet/PaymentHistorySection'
import InvoicesSection from '../../components/common/Wallet/InvoicesSection'
import Setup from '../../components/common/Wallet/Setup'

const navigation = [
    {
        id: '7b844f6b-34f9-4e9a-9301-05a66a2d64c3',
        name: 'My Wallet',
        component: <WalletSubSection />,
        current: false,
        subItems: [
            {
                id: 'e7640bf1-bc29-49de-aa0f-1fae623749e5',
                name: 'Wallet',
                component: <WalletSubSection />,
            },
            {
                id: '4546cf23-2833-440d-ab7b-4aecd9101f68',
                name: 'Setup',
                component: <Setup />,
            },
        ],
    },
    {
        id: 'f1da197c-ea1b-4dbf-834f-7eb89488f410',
        name: 'Payment history',
        component: <PaymentHistorySection />,
        current: false,
    },
    {
        id: '3429951f-f237-4120-ba6c-3d60439cc19a',
        name: 'Invoices',
        component: <InvoicesSection />,
        current: false,
    },
    {
        id: '5dcb69e3-482f-4271-b66e-a561dc02169f',
        name: 'Income',
        component: <IncomeSection />,
        current: false,
    },
]

const Index = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [sidebarElement, setSidebarElement] = useState(
        navigation[0].component
    )
    const [selectedItem, setSelectedItem] = useState(navigation[0].id)
    const [arrayElements, setArrayElements] = useState(navigation)

    return (
        <div className={'bg-gray-100'}>
            <WalletSideBarWrapper
                arrayElements={arrayElements}
                sidebarOpen={sidebarOpen}
                sidebarElement={sidebarElement}
                selectedItem={selectedItem}
                setSidebarOpen={setSidebarOpen}
                setSidebarElement={setSidebarElement}
                setSelectedItem={setSelectedItem}
            >
                {sidebarElement}
            </WalletSideBarWrapper>
        </div>
    )
}

export default Index
