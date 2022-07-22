import React from 'react'
import {Disclosure} from '@headlessui/react'
import {HiChevronRight} from 'react-icons/hi'

const Buying = () => {
    return (
        <div className={'p-4'}>
            <div className=" bg-white text-left">
                <h1 className="text-3xl font-bold mt-0 mb-4">Buying</h1>
                <div className="text-xs text-gray-500">Recommended for you</div>
                <div>
                    <Disclosure>
                        {({open}) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg  px-4 py-4 text-left text-sm md:text-base font-medium hover:bg-gray-100 focus:bg-gray-50 focus:outline-none focus-visible:ring">
                                    <div className="pr-6">
                                        <div>
                                            <p className={'font-semibold'}>
                                                Canceling an order
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
                                        Canceling an order
                                    </h1>
                                    <p className="pt-4">
                                        A buyer and a seller can cancel their
                                        order only if the item hasn’t been
                                        shipped yet.{' '}
                                    </p>

                                    <h1 className="text-3xl mt-6 mb-2 font-semibold">
                                        To cancel an order:
                                    </h1>
                                    <ul className="pl-4 p-2 list-decimal">
                                        <li className="pt-1">
                                            Open your conversation screen with
                                            the other member
                                        </li>
                                        <li className="pt-1">
                                            Press ⓘ at the top-right corner
                                        </li>
                                        <li className="pt-1">
                                            Choose Cancel order and select a
                                            reason from the list, or choose
                                            Other and type in the reason
                                        </li>
                                    </ul>

                                    <h1 className="text-xl mt-6 mb-2">
                                        Good to know:
                                    </h1>
                                    <ul className="pl-4 p-2 list-disc">
                                        <li className="pt-1">
                                            A mutual agreement between the buyer
                                            and seller about canceling their
                                            order will help them avoid automatic
                                            negative feedback.
                                        </li>
                                        <li className="pt-1">
                                            After an order is canceled, sellers
                                            can press Re-upload on their
                                            conversation screen to put the item
                                            on sale again.
                                        </li>
                                        <li className="pt-1">
                                            In certain cases, we may cancel an
                                            order too.
                                        </li>
                                    </ul>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>
                <Disclosure>
                    {({open}) => (
                        <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg  px-4 py-4 text-left text-sm md:text-base font-medium hover:bg-gray-100 focus:bg-gray-50 focus:outline-none focus-visible:ring">
                                <div className="pr-6">
                                    <div>
                                        <p className={'font-semibold'}>
                                            Payment methods
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
                                    Payment methods
                                </h1>
                                <p className="pt-4">
                                    After pressing the Buy now button, you’ll be
                                    able to choose the payment method for your
                                    order. Payment methods available on Susty
                                    are:
                                </p>

                                <Disclosure>
                                    {({open}) => (
                                        <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg  px-4 py-4 text-left text-sm md:text-base font-medium hover:bg-gray-100 focus:bg-gray-50 focus:outline-none focus-visible:ring">
                                                <div className="pr-6">
                                                    <div>
                                                        <p
                                                            className={
                                                                'font-semibold'
                                                            }
                                                        >
                                                            Valid credit/ debit
                                                            cards
                                                        </p>
                                                    </div>
                                                </div>
                                                <HiChevronRight
                                                    className={`${
                                                        open
                                                            ? 'rotate-90 transform'
                                                            : ''
                                                    } h-5 w-5 text-black`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="w-full p-4">
                                                <ul className="pl-4 p-2 list-disc">
                                                    <li className="pt-1">
                                                        We accept Visa,
                                                        MasterCard, JCB,
                                                        Discover, and Diners
                                                        Club.
                                                    </li>
                                                    <li className="pt-2">
                                                        Prepaid cards (PCS) and
                                                        virtual cards are also
                                                        accepted.
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
                                                        <p
                                                            className={
                                                                'font-semibold'
                                                            }
                                                        >
                                                            Apple Pay
                                                        </p>
                                                    </div>
                                                </div>
                                                <HiChevronRight
                                                    className={`${
                                                        open
                                                            ? 'rotate-90 transform'
                                                            : ''
                                                    } h-5 w-5 text-black`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="w-full p-4">
                                                <ul className="pl-4 p-2 list-disc">
                                                    <li className="pt-1">
                                                        If you have Apple Pay
                                                        set up on your iOS
                                                        device, you can use it
                                                        to pay on Susty.
                                                    </li>
                                                    <li className="pt-2">
                                                        Confirm the payment with
                                                        your Touch ID without
                                                        leaving the checkout
                                                        screen. Note that
                                                        another verification
                                                        method may be used (such
                                                        as Face ID or a
                                                        passcode), depending on
                                                        your device.
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
                                                        <p
                                                            className={
                                                                'font-semibold'
                                                            }
                                                        >
                                                            Google Pay
                                                        </p>
                                                    </div>
                                                </div>
                                                <HiChevronRight
                                                    className={`${
                                                        open
                                                            ? 'rotate-90 transform'
                                                            : ''
                                                    } h-5 w-5 text-black`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="w-full p-4">
                                                <ul className="pl-4 p-2 list-disc">
                                                    <li className="pt-1">
                                                        If Google Pay is
                                                        installed on your
                                                        Android device, you can
                                                        use it to pay for your
                                                        Susty order.
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
                                                        <p
                                                            className={
                                                                'font-semibold'
                                                            }
                                                        >
                                                            Your Susty Wallet
                                                        </p>
                                                    </div>
                                                </div>
                                                <HiChevronRight
                                                    className={`${
                                                        open
                                                            ? 'rotate-90 transform'
                                                            : ''
                                                    } h-5 w-5 text-black`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="w-full p-4">
                                                <ul className="pl-4 p-2 list-disc">
                                                    <li className="pt-1">
                                                        If you have money in
                                                        your Susty Wallet
                                                        (Balance) as a result of
                                                        your sales, this payment
                                                        method will be chosen
                                                        automatically.
                                                    </li>
                                                    <li className="pt-2">
                                                        While paying with your
                                                        Susty Wallet, for
                                                        security reasons, we’ll
                                                        ask you to confirm your
                                                        bank card information
                                                        (if you haven’t
                                                        registered one yet).
                                                        This applies even if the
                                                        amount of your purchase
                                                        is fully covered by the
                                                        money available on your
                                                        Susty Wallet.
                                                    </li>
                                                    <li className="pt-2">
                                                        You can cover a part of
                                                        an item’s price by
                                                        another payment method
                                                        if the funds in your
                                                        Susty Wallet aren’t
                                                        enough.
                                                    </li>
                                                    <li className="pt-2">
                                                        Don’t want to use your
                                                        earnings for purchases
                                                        on Susty? You can pay
                                                        out money from your
                                                        Susty Wallet to your
                                                        bank account at any
                                                        time.
                                                    </li>
                                                </ul>
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>

                                <p className="pt-4">
                                    Note that Buyer Protection applies to all
                                    payments made using the Buy now button for a
                                    fee. If you buy outside of Susty, we won’t
                                    be able to help you if a problem arises.
                                </p>

                                <h1 className="text-xl mt-6 mb-2">
                                    Good to know:
                                </h1>
                                <ul className="pl-4 p-2 list-disc">
                                    <li className="pt-1">
                                        Your Google Pay, Apple Pay, and credit &
                                        debit cards payment information is
                                        encrypted and protected.
                                    </li>
                                    <li className="pt-1">
                                        Not all of the payment methods mentioned
                                        above may be available to each member.
                                    </li>
                                    <li className="pt-1">
                                        A small charge may be applied to your
                                        bank card to ensure its validity. This
                                        charge will be refunded immediately.
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
                                            Using a coupon
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
                                    Using a coupon
                                </h1>
                                <p className="pt-4">
                                    We appreciate you spreading the word about
                                    Susty and we’ll be happy to send you a
                                    coupon for inviting your friend to Susty.{' '}
                                </p>

                                <h1 className="text-xl mt-6 mb-2 font-semibold">
                                    To use a coupon:
                                </h1>
                                <ul className="pl-4 p-2 list-decimal">
                                    <li className="pt-1">
                                        Simply find an item you love and press
                                        Buy now.
                                    </li>
                                    <li className="pt-1">
                                        The coupon will be applied to the
                                        purchase automatically. You’ll see it at
                                        the checkout screen after entering your
                                        payment details.
                                    </li>
                                </ul>

                                <h1 className="text-xl mt-6 mb-2 font-semibold">
                                    I can’t see my coupon{' '}
                                </h1>
                                <p className="pt-4">
                                    Sometimes the reason you don’t see your
                                    coupon is because the invited users didn’t
                                    sign up using the link. If your coupon seems
                                    to be missing, please send us the username
                                    of the member you invited, and a screenshot
                                    proving that you shared your invitation link
                                    with them.
                                </p>

                                <h1 className="text-xl mt-6 mb-2 font-semibold">
                                    Good to know:
                                </h1>
                                <ul className="pl-4 p-2 list-disc">
                                    <li className="pt-1">
                                        Coupons can be used to buy items that
                                        cost at least $15
                                    </li>
                                    <li className="pt-1">
                                        Coupons only cover the item’s price (not
                                        postage costs or the Buyer Protection
                                        fee)
                                    </li>
                                    <li className="pt-1">
                                        Coupons are eligible for 30 days (their
                                        expiry date is in the coupon message)
                                    </li>
                                    <li className="pt-1">
                                        Only 1 coupon can be used at a time, and
                                        it can't be redeemed in cash
                                    </li>
                                </ul>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </div>
    )
}

export default Buying
