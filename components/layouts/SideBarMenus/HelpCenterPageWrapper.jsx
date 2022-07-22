import React, {useState} from 'react'
import Home from '../../common/HelpCenter/Home'
import HelpCenterSideBar from './HelpCenterSideBar'
import Covid from "../../common/HelpCenter/Covid";
import Selling from "../../common/HelpCenter/Selling";
import HowSellingWorks from "../../common/HelpCenter/SellingSubItems/HowSellingWorks";
import ListingAnItem from "../../common/HelpCenter/SellingSubItems/ListingAnItem";
import SellingFaster from "../../common/HelpCenter/SellingSubItems/SellingFaster";
import ShippingDetails from "../../common/HelpCenter/SellingSubItems/ShippingDetails";
import GettingPaid from "../../common/HelpCenter/SellingSubItems/GettingPaid";
import FeedbackAndCommunication from "../../common/HelpCenter/SellingSubItems/FeedbackAndCommunication";
import ReturnsAndCancellations from "../../common/HelpCenter/SellingSubItems/ReturnsAndCancellations";
import MyItems from "../../common/HelpCenter/SellingSubItems/MyItems";
import Buying from "../../common/HelpCenter/Buying";
import BuyingProcess from "../../common/HelpCenter/BuyingSubItems/BuyingProcess";
import FindingItemsToBuy from "../../common/HelpCenter/BuyingSubItems/FindingItemsToBuy";
import BeforeYouBuy from "../../common/HelpCenter/BuyingSubItems/BeforeYouBuy";
import MakingAPayment from "../../common/HelpCenter/BuyingSubItems/MakingAPayment";
import ShippingAndDelivery from "../../common/HelpCenter/BuyingSubItems/ShippingAndDelivery";
import FeedbackAndCommunicationBuying from "../../common/HelpCenter/BuyingSubItems/FeedbackAndCommunicationBuying";
import RefundsAndCancellation from "../../common/HelpCenter/BuyingSubItems/RefundsAndCancellation";
import Shipping from "../../common/HelpCenter/Shipping";
import IAmASeller from "../../common/HelpCenter/ShippingSubItems/IAmASeller";
import IAmABuyer from "../../common/HelpCenter/ShippingSubItems/IAmABuyer";
import PaymentsAndPayouts from "../../common/HelpCenter/PaymentsAndPayouts";
import PaymentMethods from "../../common/HelpCenter/PaymentsAndPayoutsSubItems/PaymentMethods";
import SustyWallet from "../../common/HelpCenter/PaymentsAndPayoutsSubItems/SustyWallet";
import Payouts from "../../common/HelpCenter/PaymentsAndPayoutsSubItems/Payouts";
import SafetyAndReporting from "../../common/HelpCenter/SafetyAndReporting";
import BuyerProtection from "../../common/HelpCenter/SafetyAndReportingSubItems/BuyerProtection";
import SellerProtection from "../../common/HelpCenter/SafetyAndReportingSubItems/SellerProtection";
import PersonalSafetyAndSecurity from "../../common/HelpCenter/SafetyAndReportingSubItems/PersonalSafetyAndSecurity";
import PrivateDataUsageAndProtection
    from "../../common/HelpCenter/SafetyAndReportingSubItems/PrivateDataUsageAndProtection";
import IdentityVerifications from "../../common/HelpCenter/SafetyAndReportingSubItems/IdentityVerifications";
import CatalogRules from "../../common/HelpCenter/SafetyAndReportingSubItems/CatalogRules";
import CommunityAndForumRules from "../../common/HelpCenter/SafetyAndReportingSubItems/CommunityAndForumRules";
import MyAccountAndSettings from "../../common/HelpCenter/MyAccountAndSettings";
import NewSusty from "../../common/HelpCenter/MyAccountAndSettingsSubItems/NewSusty";
import MyClosetSettings from "../../common/HelpCenter/MyAccountAndSettingsSubItems/MyClosetSettings";
import ProfileDetails from "../../common/HelpCenter/MyAccountAndSettingsSubItems/ProfileDetails";
import ShippingAndPaymentSettings
    from "../../common/HelpCenter/MyAccountAndSettingsSubItems/ShippingAndPaymentSettings";
import SustyWalletMyAccounts from "../../common/HelpCenter/MyAccountAndSettingsSubItems/SustyWalletMyAccounts";
import Referrals from "../../common/HelpCenter/MyAccountAndSettingsSubItems/Referrals";
import NotificationsAndEmails from "../../common/HelpCenter/MyAccountAndSettingsSubItems/NotificationsAndEmails";
import Community from "../../common/HelpCenter/Community";
import Forum from "../../common/HelpCenter/CommunitySubItems/Forum";
import Members from "../../common/HelpCenter/CommunitySubItems/Members";
import NotLoggedIn from "../../common/HelpCenter/NotLoggedIn";

const sidebarItems = [
    {
        id: '1',
        title: 'Home',
        component: <Home/>,
        active: false,
        subItems: [],
    },
    {
        id: '2',
        title: 'COVID-19',
        component: <Covid/>,
        active: false,
        subItems: [],
    },
    {
        id: '3',
        title: 'Selling',
        component: <Selling/>,
        active: false,
        subItems: [
            {
                id: '1',
                title: 'How Selling works',
                component: <HowSellingWorks/>,
                active: false,
            },
            {
                id: '2',
                title: 'Listing an item',
                component: <ListingAnItem/>,
                active: false,
            },
            {
                id: '3',
                title: 'Selling faster',
                component: <SellingFaster/>,
                active: false,
            },
            {
                id: '4',
                title: 'Shipping',
                component: <ShippingDetails/>,
                active: false,
            },
            {
                id: '5',
                title: 'Getting Paid',
                component: <GettingPaid/>,
                active: false,
            },
            {
                id: '6',
                title: 'Feedback & Communication',
                component: <FeedbackAndCommunication/>,
                active: false,
            },
            {
                id: '7',
                title: 'Returns & Cancellations',
                component: <ReturnsAndCancellations/>,
                active: false,
            },
            {
                id: '7',
                title: 'My Items',
                component: <MyItems/>,
                active: false,
            },
        ],
    },
    {
        id: '4',
        title: 'Buying',
        component: <Buying/>,
        active: false,
        subItems: [
            {
                id: '1',
                title: 'Buying process',
                component: <BuyingProcess/>,
                active: false,
            },
            {
                id: '2',
                title: 'Finding items to buy',
                component: <FindingItemsToBuy/>,
                active: false,
            },
            {
                id: '3',
                title: 'Before you buy',
                component: <BeforeYouBuy/>,
                active: false,
            },
            {
                id: '4',
                title: 'Making a payment',
                component: <MakingAPayment/>,
                active: false,
            },
            {
                id: '5',
                title: 'Shipping and Delivery',
                component: <ShippingAndDelivery/>,
                active: false,
            },
            {
                id: '6',
                title: 'Feedback & Communication',
                component: <FeedbackAndCommunicationBuying/>,
                active: false,
            },
            {
                id: '7',
                title: 'Refunds & cancellation',
                component: <RefundsAndCancellation/>,
                active: false,
            },
        ],
    },
    {
        id: '5',
        title: 'Shipping',
        component: <Shipping/>,
        active: false,
        subItems: [
            {
                id: '1',
                title: "I'm a Seller",
                component: <IAmASeller/>,
                active: false,
            },
            {
                id: '2',
                title: "I'm a buyer",
                component: <IAmABuyer/>,
                active: false,
            },
        ],
    },
    {
        id: '6',
        title: 'Payment & Payouts',
        component: <PaymentsAndPayouts/>,
        active: false,
        subItems: [
            {
                id: '1',
                title: 'Payment methods',
                component: <PaymentMethods/>,
                active: false,
            },
            {
                id: '2',
                title: 'Susty Wallet',
                component: <SustyWallet/>,
                active: false,
            },
            {
                id: '3',
                title: 'Payouts',
                component: <Payouts/>,
                active: false,
            },
        ],
    },
    {
        id: '7',
        title: 'Safety & Reporting',
        component: <SafetyAndReporting/>,
        active: false,
        subItems: [
            {
                id: '1',
                title: 'Buyer protection',
                component: <BuyerProtection/>,
                active: false,
            },
            {
                id: '2',
                title: 'Seller protection',
                component: <SellerProtection/>,
                active: false,
            },
            {
                id: '3',
                title: 'Personal safety & security',
                component: <PersonalSafetyAndSecurity/>,
                active: false,
            },
            {
                id: '4',
                title: 'Private data usage & protection',
                component: <PrivateDataUsageAndProtection/>,
                active: false,
            },
            {
                id: '5',
                title: 'Identity verifications',
                component: <IdentityVerifications/>,
                active: false,
            },
            {
                id: '6',
                title: 'Catalog rules',
                component: <CatalogRules/>,
                active: false,
            },
            {
                id: '7',
                title: 'Community and forum rules',
                component: <CommunityAndForumRules/>,
                active: false,
            },
        ],
    },
    {
        id: '8',
        title: 'My account & Settings',
        component: <MyAccountAndSettings/>,
        active: false,
        subItems: [
            {
                id: '1',
                title: 'New Susty',
                component: <NewSusty/>,
                active: false,
            },
            {
                id: '2',
                title: 'My closet settings',
                component: <MyClosetSettings/>,
                active: false,
            },
            {
                id: '3',
                title: 'Profile details',
                component: <ProfileDetails/>,
                active: false,
            },
            {
                id: '4',
                title: 'Shipping & Payment settings',
                component: <ShippingAndPaymentSettings/>,
                active: false,
            },
            {
                id: '5',
                title: 'Susty Wallet',
                component: <SustyWalletMyAccounts/>,
                active: false,
            },
            {
                id: '6',
                title: 'Referrals',
                component: <Referrals/>,
                active: false,
            },
            {
                id: '7',
                title: 'Notifications & emails',
                component: <NotificationsAndEmails/>,
                active: false,
            },
        ],
    },
    {
        id: '9',
        title: 'Community',
        component: <Community/>,
        active: false,
        subItems: [
            {
                id: '1',
                title: 'Forum',
                component: <Forum/>,
                active: false,
            },
            {
                id: '2',
                title: 'Members',
                component: <Members/>,
                active: false,
            },
        ],
    },
    {
        id: '10',
        title: 'Not Logged in',
        component: <NotLoggedIn/>,
        active: false,
        subItems: [],
    },
]

const HelpCenterPageWrapper = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [sidebarClickedItem, setSidebarClickedItem] = useState(<Home />)
    const [subItemSidebar, setSubItemSidebar] = useState()

    return (
        <div className={'px-4 sm:px-8 md:px-16 md:min-w-max py-8'}>
            <div className="flex flex-col lg:grid lg:grid-cols-3 min-w-max min-h-max">
                <div className="min-w-fit lg:col-span-1">
                    <HelpCenterSideBar
                        sidebarOpen = {sidebarOpen}
                        setSidebarOpen = {setSidebarOpen}
                        sidebarItems={sidebarItems}
                        sidebarClickedItem={sidebarClickedItem}
                        setSidebarClickedItem={setSidebarClickedItem}
                        subItemSidebar={subItemSidebar}
                    />
                </div>
                <div className="relative min-w-max lg:min-w-xl lg:col-span-2">{sidebarClickedItem}</div>
            </div>
        </div>
    )
}

export default HelpCenterPageWrapper
