import React from 'react'
import {Disclosure} from '@headlessui/react'
import {HiChevronRight} from 'react-icons/hi'

const MyAccountAndSettings = () => {
    return (
        <div className={'p-4 bg-white'}>
            <>
                <div className="bg-white text-left">
                    <h1 className="text-3xl font-bold mt-0 mb-4">
                        My account & Settings
                    </h1>
                    <div className="text-xs text-gray-500 py-2">
                        Recommended for you
                    </div>

                    <Disclosure>
                        {({open}) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg  px-4 py-4 text-left text-sm md:text-base font-medium hover:bg-gray-100 focus:bg-gray-50 focus:outline-none focus-visible:ring">
                                    <div className="pr-6">
                                        <div>
                                            <p className={'font-semibold'}>
                                                Activate your Susty Wallet
                                            </p>
                                        </div>
                                    </div>
                                    <HiChevronRight
                                        className={`${
                                            open ? 'rotate-90 transform' : ''
                                        } h-5 w-5 text-black`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="max-w-3xl p-4">
                                    <h1 className="text-3xl font-bold mt-0 mb-2">
                                        Activate your Susty Wallet
                                    </h1>
                                    <p className="pt-4">
                                        Here is how to activate your Susty
                                        Wallet:
                                    </p>
                                    <ul className="pl-4 p-2 list-decimal">
                                        <li className="pt-1">
                                            Hit the Profile icon
                                        </li>
                                        <li className="pt-1">Select Wallet</li>
                                        <li className="pt-1">
                                            Press Activate Wallet
                                        </li>
                                        <li className="pt-1">
                                            Enter your name, date of birth,
                                            address and SSN number (our payment
                                            service provider will store them
                                            safely)
                                        </li>
                                    </ul>
                                    <p className="pt-4">
                                        In moments, your Susty Wallet will be
                                        activated. You may use it to pay out
                                        your earnings to your bank account or
                                        pay for your purchases on Susty.
                                    </p>

                                    <p className="pt-4">
                                        Susty Wallet is provided by our payment
                                        service provider Adyen. By activating
                                        your Wallet, you become Adyen’s client
                                        and user of their payment services.
                                        Here’s more about how Susty Wallet
                                        works.
                                    </p>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure>
                        {({open}) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg  px-4 py-4 text-left text-sm md:text-base font-medium hover:bg-gray-100 focus:bg-gray-50 focus:outline-none focus-visible:ring">
                                    <div className="pr-6">
                                        <div>
                                            <p className={'font-semibold'}>
                                                Invite your friends to Susty
                                            </p>
                                        </div>
                                    </div>
                                    <HiChevronRight
                                        className={`${
                                            open ? 'rotate-90 transform' : ''
                                        } h-5 w-5 text-black`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="max-w-3xl p-4">
                                    <h1 className="text-3xl font-bold mt-0 mb-2">
                                        Invite your friends to Susty
                                    </h1>
                                    <p className="pt-4">
                                        You can invite friends to join Susty and
                                        earn up to $15 for every person who
                                        signs up, lists, and completes a sale.
                                    </p>

                                    <h1 className="mt-6 font-semibold">
                                        Inviting friends is simple:
                                    </h1>
                                    <ul className="pl-4 p-2 list-decimal">
                                        <li className="pt-1">
                                            Press your profile icon
                                        </li>
                                        <li className="pt-1">
                                            Choose Invite friends
                                        </li>
                                        <li className="pt-1">
                                            You’ll see a special link that you
                                            can share with your friends. The
                                            people you invite have to sign up
                                            using this link, we’ll notify you
                                            when they do.
                                        </li>
                                    </ul>

                                    <h1 className="text-2xl mt-6 mb-2">
                                        Types of coupons
                                    </h1>
                                    <ul className="pl-4 p-2 list-disc">
                                        <li className="pt-1">
                                            If a person you invite lists 3 items
                                            within 7 days of signing up, we’ll
                                            send you a gift coupon worth $5.
                                        </li>
                                        <li className="pt-1">
                                            If your friend completes a sale via
                                            the Buy now button during their
                                            first 30 days on Susty, you’ll
                                            receive an additional gift coupon
                                            worth $10 for bringing a successful
                                            seller to our community.
                                        </li>
                                    </ul>
                                    <p className="pt-4">
                                        As soon as you meet the criteria for
                                        receiving our gift coupon, we’ll send
                                        you a message to your Susty inbox.
                                    </p>

                                    <h1 className="text-xl mt-6 mb-2">
                                        Good to know:
                                    </h1>
                                    <ul className="pl-4 p-2 list-disc">
                                        <li className="pt-1">
                                            Coupons can be used for any purchase
                                            on Susty worth $15 or more. The
                                            purchases should be made by pressing
                                            the Buy now button. Learn how to use
                                            a coupon.
                                        </li>
                                        <li className="pt-1">
                                            Only 1 coupon can be used at a time.
                                        </li>
                                        <li className="pt-1">
                                            Referrals Terms & Conditions (part
                                            of Susty’s General Terms &
                                            Conditions) apply when using this
                                            offer.
                                        </li>
                                    </ul>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure>
                        {({open}) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg  px-4 py-4 text-left text-sm md:text-base font-medium hover:bg-gray-100 focus:bg-gray-50 focus:outline-none focus-visible:ring">
                                    <div className="pr-6">
                                        <div>
                                            <p className={'font-semibold'}>
                                                Managing your profile details
                                            </p>
                                        </div>
                                    </div>
                                    <HiChevronRight
                                        className={`${
                                            open ? 'rotate-90 transform' : ''
                                        } h-5 w-5 text-black`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="max-w-3xl p-4">
                                    <h1 className="text-3xl font-bold mt-0 mb-2">
                                        Managing your profile details
                                    </h1>
                                    <p className="pt-4">
                                        You can easily add or edit your profile
                                        details by following these steps:
                                    </p>
                                    <ul className="pl-4 p-2 list-decimal">
                                        <li className="pt-1">
                                            Go to your profile icon in the upper
                                            right corner
                                        </li>
                                        <li className="pt-1">Press Settings</li>
                                        <li className="pt-1">
                                            Add or change your profile details,
                                            then press Update profile
                                        </li>
                                    </ul>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure>
                        {({open}) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg  px-4 py-4 text-left text-sm md:text-base font-medium hover:bg-gray-100 focus:bg-gray-50 focus:outline-none focus-visible:ring">
                                    <div className="pr-6">
                                        <div>
                                            <p className={'font-semibold'}>
                                                Susty Wallet: how it works
                                            </p>
                                        </div>
                                    </div>
                                    <HiChevronRight
                                        className={`${
                                            open ? 'rotate-90 transform' : ''
                                        } h-5 w-5 text-black`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="max-w-3xl p-4">
                                    <h1 className="text-3xl font-bold mt-0 mb-2">
                                        Susty Wallet: how it works
                                    </h1>
                                    <p className="pt-4">
                                        You can easily add or edit your profile
                                        details by following these steps:
                                    </p>

                                    <div>
                                        <p className="text-lg pt-4">
                                            Systy Wallet is a secure e-wallet
                                            where the seller:
                                        </p>
                                        <ul className="pl-3 p-2 list-decimal">
                                            <li className="pt-1">
                                                Receives all earnings from sold
                                                items
                                            </li>
                                            <li className="pt-1">
                                                Can pay from it to buy on Susty
                                            </li>
                                            <li className="pt-1">
                                                Can pay out their money from it
                                                to their bank account
                                            </li>
                                        </ul>
                                        <p className="pt-2">
                                            You don’t need to use Systy Balance
                                            to buy on Susty. We offer other
                                            payment methods too. You also cannot
                                            top it up — it’s only there to store
                                            earnings.
                                        </p>

                                        <h1 className="text-3xl font-normal mt-0 mb-2 pt-8">
                                            Receiving earnings from sold items
                                        </h1>
                                        <ul className="pl-4 p-2 list-decimal">
                                            <li className="pt-1">
                                                Buyer pays for an item → Payment
                                                appears under 'pending balance'
                                                in the seller's Systy Balance
                                            </li>
                                            <li className="pt-1">
                                                Buyer hits Everything’s OK when
                                                the item is delivered or 2 days
                                                after the item’s delivery if the
                                                buyer is inactive or if an issue
                                                is raised during the 2 days
                                                period, after the resolution of
                                                the issue → Order is completed →
                                                Payment moves from 'pending
                                                balance' to 'available balance'
                                            </li>
                                            <li className="pt-1">
                                                Once the payment is available in
                                                the seller’s balance, the seller
                                                can:
                                                <ul className="pl-4 p-0 list-disc">
                                                    <li className="pt-1">
                                                        Use it to make purchases
                                                        on Susty
                                                    </li>
                                                    <li className="pt-1">
                                                        Make a payout to a bank
                                                        account
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>

                                        <h1 className="text-3xl font-normal mt-0 mb-2 pt-8">
                                            Why we have Systy Balance
                                        </h1>
                                        <p className="pt-2">
                                            Our payment service provider Adyen
                                            will delay the transfer of funds to
                                            the seller. Such delays are a common
                                            practice in online marketplaces.
                                        </p>
                                        <p className="pt-2">
                                            This ensures that the buyer receives
                                            the purchased item. If something
                                            goes wrong, we may refund the buyer
                                            (though you can mutually agree on a
                                            different resolution). So, it helps
                                            us keep Susty safe and secure for
                                            both buyers and sellers.
                                        </p>

                                        <h1 className="text-3xl font-normal mt-0 mb-2 pt-8">
                                            About our payment service provider
                                        </h1>
                                        <p className="pt-2">
                                            Adyen, N.V. is a federally-licensed
                                            branch of a foreign bank. It
                                            provides and manages Systy Balance
                                            for us as a financial service.
                                        </p>
                                        <p className="pt-3">
                                            Want to be a seller and use Systy
                                            Balance? You’ll have to activate
                                            your Systy Balance, agree to Adyen’s
                                            Terms and Conditions and become
                                            Adyen’s client.
                                        </p>
                                        <p className="pt-3">
                                            This way, we’re not involved in
                                            handling or holding your money. We
                                            leave it to the professionals who do
                                            it safely.
                                        </p>
                                    </div>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure>
                        {({open}) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg  px-4 py-4 text-left text-sm md:text-base font-medium hover:bg-gray-100 focus:bg-gray-50 focus:outline-none focus-visible:ring">
                                    <div className="pr-6">
                                        <div>
                                            <p className={'font-semibold'}>
                                                Managing shipping options for
                                                selling
                                            </p>
                                        </div>
                                    </div>
                                    <HiChevronRight
                                        className={`${
                                            open ? 'rotate-90 transform' : ''
                                        } h-5 w-5 text-black`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="max-w-3xl p-4">
                                    <h1 className="text-3xl font-bold mt-0 mb-2">
                                        Managing shipping options for selling
                                    </h1>

                                    <div>
                                        <p className="pt-5">
                                            You can decide which carriers to
                                            suggest to your buyers. The more
                                            shipping options you’ll suggest, the
                                            quicker you can sell your items.{' '}
                                        </p>
                                        <p className="pt-6 font-bold">
                                            You can do that in your profile:
                                        </p>
                                        <ol className="pl-4 p-2 list-decimal">
                                            <li className="pt-1">
                                                Go to your profile;
                                            </li>
                                            <li className="pt-1">
                                                Select Settings;
                                            </li>
                                            <li className="pt-1">
                                                Choose Shipping;
                                            </li>
                                            <li className="pt-1">
                                                Turn off/on your chosen shipping
                                                options by pressing on the
                                                toggle. (Some shipping options
                                                will be on by default for you as
                                                a seller and cannot be turned
                                                off).
                                            </li>
                                        </ol>
                                        <p className="pt-5">
                                            Buyers will then choose one of the
                                            shipping options you suggest. Once
                                            the buyer makes their purchase,
                                            follow the delivery instructions
                                            you’ll receive in your inbox.
                                            Otherwise, the order may be canceled
                                            and your buyer refunded.{' '}
                                        </p>

                                        <div>
                                            <p className="pt-6 font-bold">
                                                Good to know:
                                            </p>
                                            <ul className="pl-4 p-2 list-disc">
                                                <li className="pt-1">
                                                    You can change the shipping
                                                    option before the buyer
                                                    presses the Buy now button.
                                                </li>
                                                <li className="pt-1">
                                                    Your location determines
                                                    which shipping options are
                                                    available to you.
                                                </li>
                                                <li className="pt-1">
                                                    You can see the nearest
                                                    drop-off location and the
                                                    opening hours of your chosen
                                                    carrier.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>
            </>
        </div>
    )
}

export default MyAccountAndSettings
