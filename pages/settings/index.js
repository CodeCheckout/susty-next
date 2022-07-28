import React, {useState} from 'react'
import ProfileHome from './profile'
import AccountHome from './account'
import ShippingHome from './shipping'
import SelectDiscountHome from './selectdiscount'
import NotificationHome from './notifications'
import PrivacySettingsHome from './privacysettings'
import SettingsSideBarWrapper from '../../components/layouts/SideBarMenus/SettingsSideBarWrapper'

const navigation = [
    {name: 'Profile', component: <ProfileHome />, current: false},
    {
        name: 'Account',
        component: <AccountHome />,
        current: false,
    },
    {name: 'Shipping', component: <ShippingHome />, current: false},
    {
        name: 'Select discount',
        component: <SelectDiscountHome />,
        current: false,
    },
    {
        name: 'Notifications',
        component: <NotificationHome />,
        current: false,
    },
    {
        name: 'Privacy Settings',
        component: <PrivacySettingsHome />,
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
            <SettingsSideBarWrapper
                arrayElements={arrayElements}
                sidebarOpen={sidebarOpen}
                sidebarElement={sidebarElement}
                selectedItem={selectedItem}
                setSidebarOpen={setSidebarOpen}
                setSidebarElement={setSidebarElement}
                setSelectedItem={setSelectedItem}
            >
                {sidebarElement}
            </SettingsSideBarWrapper>
        </div>
    )
}

export default Index
