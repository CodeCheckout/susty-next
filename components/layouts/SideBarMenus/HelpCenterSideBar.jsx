import React, {useState} from 'react'
import {Disclosure} from '@headlessui/react'
import Home from '../../common/HelpCenter/Home'
import Covid from '../../common/HelpCenter/Covid'
import Selling from '../../common/HelpCenter/Selling'
import Buying from '../../common/HelpCenter/Buying'
import Shipping from '../../common/HelpCenter/Shipping'
import PaymentsAndPayouts from '../../common/HelpCenter/PaymentsAndPayouts'
import SafetyAndReporting from '../../common/HelpCenter/SafetyAndReporting'
import MyAccountAndSettings from '../../common/HelpCenter/MyAccountAndSettings'
import Community from '../../common/HelpCenter/Community'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const sidebarItems = [
    {
        id: '1',
        title: 'Home',
        component: <Home />,
        active: false,
        subItems: [],
    },
    {
        id: '2',
        title: 'COVID-19',
        component: <Covid />,
        active: false,
        subItems: [],
    },
    {
        id: '3',
        title: 'Selling',
        component: <Selling />,
        active: false,
        subItems: [
            'How Selling works',
            'Listing an item',
            'Selling faster',
            'Shipping',
            'Getting Paid',
            'Feedback & Communication',
            'Returns & Cancellations',
            'My Items',
        ],
    },
    {
        id: '4',
        title: 'Buying',
        component: <Buying />,
        active: false,
        subItems: [
            'Buying process',
            'Finding items to buy',
            'Before you buy',
            'Making a payment',
            'Shipping and Delivery',
            'Feedback & Communication',
            'Refunds & cancellation',
        ],
    },
    {
        id: '5',
        title: 'Shipping',
        component: <Shipping />,
        active: false,
        subItems: ["I'm a Seller", "I'm a buyer"],
    },
    {
        id: '6',
        title: 'Payment & Payouts',
        component: <PaymentsAndPayouts />,
        active: false,
        subItems: ['Payment methods', 'Susty Wallet', 'Payouts'],
    },
    {
        id: '7',
        title: 'Safety & Reporting',
        component: <SafetyAndReporting />,
        active: false,
        subItems: [
            'Buyer protection',
            'Seller protection',
            'Personal safety & security',
            'Private data usage & protection',
            'Identity verifications',
            'Catalog rules',
            'Community and forum rules',
        ],
    },
    {
        id: '8',
        title: 'My account & Settings',
        component: <MyAccountAndSettings />,
        active: false,
        subItems: [
            'New Susty',
            'My closet settings',
            'Profile details',
            'Shipping & Payment settings',
            'Susty Wallet',
            'Personalization',
            'Referrals',
            'Notifications & emails',
        ],
    },
    {
        id: '9',
        title: 'Community',
        component: <Community />,
        active: false,
        subItems: ['Forum', 'Members'],
    },
    {
        id: '10',
        title: 'Not Logged in',
        component: <Home />,
        active: false,
        subItems: [],
    },
]

const HelpCenterSideBar = ({setSidebarClickedItem}) => {
    const [sidebarArray, setSidebarArray] = useState(sidebarItems)
    const [clickedItem, setClickedItem] = useState(sidebarItems[0])

    return (
        <div className={'lg:px-20 min-w-fit min-h-max'}>
            <div className=" p-2">
                <div className="flex items-center flex-shrink-0 px-4">
                    <p className='font-semibold text-2xl'>Help Center</p>
                </div>
                <ul>
                    {sidebarArray.map((item) => {
                        return (
                            <li key={item.id}>
                                <Disclosure>
                                    {({open}) => (
                                        <>
                                            <Disclosure.Button className="w-full text-left text-gray-500 py-2 hover:bg-slate-100 cursor-pointer transition ease-in-out">
                                                <div
                                                    onClick={() => {
                                                        setSidebarClickedItem(
                                                            item.component
                                                        )
                                                        setClickedItem(item)
                                                    }}
                                                    className={classNames(
                                                        item.id ===
                                                            clickedItem.id
                                                            ? 'text-gray-900 font-semibold cursor-pointer'
                                                            : 'text-gray-500 hover:bg-gray-100 ',
                                                        'group flex items-center px-5 py-2 rounded-md cursor-pointer'
                                                    )}
                                                >
                                                    <div>
                                                        <p>{item.title}</p>
                                                    </div>
                                                </div>
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="pl-6 text-sm">
                                                {item.subItems.map(
                                                    (subItem) => {
                                                        return (
                                                            <div key={subItem}>
                                                                <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">
                                                                    {subItem}
                                                                </p>
                                                            </div>
                                                        )
                                                    }
                                                )}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default HelpCenterSideBar
