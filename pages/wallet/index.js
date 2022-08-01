import React, {useState} from 'react'
import WalletSubSection from '../../components/common/Wallet/WalletSubSection'
import SetupSubSection from '../../components/common/Wallet/SetupSubSection'
import IncomeSection from '../../components/common/Wallet/IncomeSection'
import WalletSideBarWrapper from '../../components/layouts/SideBarMenus/WalletSideBarWrapper'

const navigation = [
    {
        id: 1,
        name: 'My Wallet',
        component: <WalletSubSection />,
        current: false,
    },
    {
        id: 2,
        name: 'Set up Information',
        component: <SetupSubSection />,
        current: false,
    },
    {
        id: 3,
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
    const [selectedItem, setSelectedItem] = useState(0)
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
