import React from 'react'
import {Disclosure} from '@headlessui/react'
import {HiChevronRight} from 'react-icons/hi'

const PaymentsAndPayouts = () => {
    return (
        <div className={'p-4 bg-white'}>
            <div className={'bg-white text-left'}>
                <h1 className="text-3xl font-bold mt-0 mb-4">
                    Payments & Payouts
                </h1>
                <div className="text-xs text-gray-500 mb-4">
                    Recommended for you
                </div>
                <div>
                    <Disclosure>
                        {({open}) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg  px-4 py-4 text-left text-sm md:text-base font-medium hover:bg-gray-100 focus:bg-gray-50 focus:outline-none focus-visible:ring">
                                    <div className="pr-6">
                                        <div>
                                            <p className={'font-semibold'}>
                                                Paying out your earnings
                                            </p>
                                        </div>
                                    </div>
                                    <HiChevronRight
                                        className={`${
                                            open ? 'rotate-90 transform' : ''
                                        } h-5 w-5 text-black`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="max-w-3xl">
                                    <div className="">
                                        <div className="mx-5 p-10 bg-white text-left">
                                            <div>
                                                <h1 className="text-3xl font-bold mt-0 mb-4">
                                                    Paying out your earnings
                                                </h1>
                                                <p className="pt-5">
                                                    Before all else, you should
                                                    make sure your Susty Wallet
                                                    is activated. If you’re
                                                    about to make your first
                                                    payout, please complete
                                                    these simple steps (you’ll
                                                    only have to do it once).
                                                </p>
                                                <h1 className="text-3xl font-normal mt-0 mb-2 pt-8">
                                                    To make a payout:
                                                </h1>
                                                <ul className="p-3 list-decimal">
                                                    <li className="pt-1">
                                                        Go to your Susty Wallet
                                                    </li>
                                                    <li className="pt-1">
                                                        Press Pay out to bank
                                                        account
                                                    </li>
                                                </ul>

                                                <p className="pt-5">
                                                    Your earnings will
                                                    automatically appear in your
                                                    bank account in 5 working
                                                    days after the payout
                                                    (excluding weekends and
                                                    public holidays).
                                                </p>
                                                <p className="pt-5">
                                                    Here’s what to do if your
                                                    payout doesn’t appear in
                                                    your bank account in 5
                                                    working days.
                                                </p>

                                                <h1 className="text-3xl font-normal mt-0 mb-2 pt-8">
                                                    Good to know:
                                                </h1>
                                                <ul className="p-3 list-disc">
                                                    <li className="pt-1">
                                                        The minimum withdrawal
                                                        amount is $0.1
                                                    </li>
                                                    <li className="pt-1">
                                                        Only earnings from
                                                        completed orders can be
                                                        paid out — pending
                                                        balance cannot
                                                    </li>
                                                    <li className="pt-1">
                                                        Only payouts to a bank
                                                        account are allowed
                                                    </li>
                                                    <li className="pt-1">
                                                        If you were requested to
                                                        pass an identity check
                                                        (as part of mandatory
                                                        regulatory requirements
                                                        for our payment service
                                                        provider) your payouts
                                                        will be stopped until
                                                        you pass the identity
                                                        check (KYC).
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>
                <div>
                    <Disclosure>
                        {({open}) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg  px-4 py-4 text-left text-sm md:text-base font-medium hover:bg-gray-100 focus:bg-gray-50 focus:outline-none focus-visible:ring">
                                    <div className="pr-6">
                                        <div>
                                            <p className={'font-semibold'}>
                                                Adding your payout details
                                            </p>
                                        </div>
                                    </div>
                                    <HiChevronRight
                                        className={`${
                                            open ? 'rotate-90 transform' : ''
                                        } h-5 w-5 text-black`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel>
                                    <div className="max-w-3xl mt-6">
                                        <div className="mx-5 bg-white">
                                            <h1 className="text-3xl font-bold mt-0 mb-4">
                                                Adding your payout details
                                            </h1>

                                            <p className="pt-3">
                                                If it’s your first payout, make
                                                certain that your Susty Wallet
                                                is activated. Then, carefully
                                                enter your bank details to
                                                ensure that your funds reach
                                                your bank account:
                                            </p>
                                            <ul className="pl-3 p-2 list-decimal">
                                                <li className="pt-1">
                                                    Press on your profile icon
                                                </li>
                                                <li className="pt-1">
                                                    Select Settings
                                                </li>
                                                <li className="pt-1">
                                                    Choose Payments
                                                </li>
                                                <li className="pt-1">
                                                    Press Add bank account under
                                                    Payout options to add your
                                                    bank account information
                                                </li>
                                                <li className="pt-1">
                                                    Fill in the information and
                                                    save it. The details will be
                                                    there for your future
                                                    payouts.
                                                </li>
                                            </ul>

                                            <h1 className="text-3xl font-normal mt-0 mb-2 pt-8">
                                                Details needed to make a payout
                                            </h1>
                                            <p className="pt-3">
                                                To pay out your earnings, you'll
                                                need to insert:
                                            </p>

                                            <ul className="pl-3 p-2 list-decimal">
                                                <li className="pt-1">
                                                    Account holder’s full name
                                                </li>
                                                <li className="pt-1">
                                                    The bank account code
                                                    (entered without spaces)
                                                </li>
                                                <li className="pt-1">
                                                    Your billing address
                                                </li>
                                            </ul>

                                            <p className="pt-3">
                                                Please note that if you were
                                                requested to pass an identity
                                                check (as part of mandatory
                                                regulatory requirements for our
                                                payment service provider) your
                                                payouts will be stopped until
                                                you pass the identity check
                                                (KYC).
                                            </p>
                                        </div>
                                    </div>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>
                <div>
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
                                <Disclosure.Panel>
                                    <div className="max-w-3xl mt-6">
                                        <div className="mx-5 bg-white">
                                            <h1 className="text-3xl font-bold mt-0 mb-4">
                                                Payment methods
                                            </h1>

                                            <p className="pt-3">
                                                After pressing the Buy now
                                                button, you’ll be able to choose
                                                the payment method for your
                                                order. Payment methods available
                                                on Susty are:
                                            </p>

                                            <div className="pt-4">
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
                                                                            Valid
                                                                            credit/
                                                                            debit
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
                                                            <Disclosure.Panel className="max-w-3xl p-4">
                                                                <ul className="pl-4 p-2 list-disc">
                                                                    <li className="pt-1">
                                                                        We
                                                                        accept
                                                                        Visa,
                                                                        MasterCard,
                                                                        JCB,
                                                                        Discover,
                                                                        and
                                                                        Diners
                                                                        Club.
                                                                    </li>
                                                                    <li className="pt-1">
                                                                        Prepaid
                                                                        cards
                                                                        (PCS)
                                                                        and
                                                                        virtual
                                                                        cards
                                                                        are also
                                                                        accepted.
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
                                                                    <p
                                                                        className={
                                                                            'font-semibold'
                                                                        }
                                                                    >
                                                                        Apple
                                                                        Pay
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
                                                        <Disclosure.Panel className="max-w-3xl p-4">
                                                            <ul className="pl-4 p-2 list-disc">
                                                                <li className="pt-1">
                                                                    If you have
                                                                    Apple Pay
                                                                    set up on
                                                                    your iOS
                                                                    device, you
                                                                    can use it
                                                                    to pay on
                                                                    Susty.
                                                                </li>
                                                                <li className="pt-1">
                                                                    Confirm the
                                                                    payment with
                                                                    your Touch
                                                                    ID without
                                                                    leaving the
                                                                    checkout
                                                                    screen. Note
                                                                    that another
                                                                    verification
                                                                    method may
                                                                    be used
                                                                    (such as
                                                                    Face ID or a
                                                                    passcode),
                                                                    depending on
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
                                                                        Google
                                                                        Pay
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
                                                        <Disclosure.Panel className="max-w-3xl p-4">
                                                            <ul className="pl-4 p-2 list-disc">
                                                                <li className="pt-1">
                                                                    If Google
                                                                    Pay is
                                                                    installed on
                                                                    your Android
                                                                    device, you
                                                                    can use it
                                                                    to pay for
                                                                    your Susty
                                                                    order.
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
                                                                        Your
                                                                        Susty
                                                                        Wallet
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
                                                        <Disclosure.Panel className="max-w-3xl p-4">
                                                            <ul className="pl-4 p-2 list-disc">
                                                                <li className="pt-1">
                                                                    If you have
                                                                    money in
                                                                    your Susty
                                                                    Wallet
                                                                    (Balance) as
                                                                    a result of
                                                                    your sales,
                                                                    this payment
                                                                    method will
                                                                    be chosen
                                                                    automatically.
                                                                </li>
                                                                <li className="pt-1">
                                                                    While paying
                                                                    with your
                                                                    Susty
                                                                    Wallet, for
                                                                    security
                                                                    reasons,
                                                                    we’ll ask
                                                                    you to
                                                                    confirm your
                                                                    bank card
                                                                    information
                                                                    (if you
                                                                    haven’t
                                                                    registered
                                                                    one yet).
                                                                    This applies
                                                                    even if the
                                                                    amount of
                                                                    your
                                                                    purchase is
                                                                    fully
                                                                    covered by
                                                                    the money
                                                                    available on
                                                                    your Susty
                                                                    Wallet.
                                                                </li>
                                                                <li className="pt-1">
                                                                    You can
                                                                    cover a part
                                                                    of an item’s
                                                                    price by
                                                                    another
                                                                    payment
                                                                    method if
                                                                    the funds in
                                                                    your Susty
                                                                    Wallet
                                                                    aren’t
                                                                    enough.
                                                                </li>
                                                                <li className="pt-1">
                                                                    Don’t want
                                                                    to use your
                                                                    earnings for
                                                                    purchases on
                                                                    Susty? You
                                                                    can pay out
                                                                    money from
                                                                    your Susty
                                                                    Wallet to
                                                                    your bank
                                                                    account at
                                                                    any time.
                                                                </li>
                                                            </ul>
                                                        </Disclosure.Panel>
                                                    </>
                                                )}
                                            </Disclosure>

                                            <p className="pt-3">
                                                Note that Buyer Protection
                                                applies to all payments made
                                                using the Buy now button for a
                                                fee. If you buy outside of
                                                Susty, we won’t be able to help
                                                you if a problem arises.
                                            </p>

                                            <h1 className="text-3xl font-normal mt-0 mb-2 pt-8">
                                                Good to know:
                                            </h1>
                                            <ul className="pl-3 p-2 list-disc">
                                                <li className="pt-1">
                                                    Your Google Pay, Apple Pay,
                                                    and credit & debit cards
                                                    payment information is
                                                    encrypted and protected.
                                                </li>
                                                <li className="pt-1">
                                                    Not all of the payment
                                                    methods mentioned above may
                                                    be available to each member.
                                                </li>
                                                <li className="pt-1">
                                                    A small charge may be
                                                    applied to your bank card to
                                                    ensure its validity. This
                                                    charge will be refunded
                                                    immediately.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>
                <div>
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
                                <Disclosure.Panel>
                                    <div className="max-w-3xl mt-6">
                                        <div className="mx-5 bg-white">
                                            <h1 className="text-3xl font-bold mt-0 mb-4">
                                                Using a coupon
                                            </h1>
                                            <p className="pt-3">
                                                We appreciate you spreading the
                                                word about Susty and we’ll be
                                                happy to send you a coupon for
                                                inviting your friend to Susty.{' '}
                                            </p>

                                            <h1 className="text-xl font-normal mt-0 mb-2 pt-8">
                                                To use a coupon:
                                            </h1>
                                            <ul className="pl-3 p-2 list-decimal">
                                                <li className="pt-1">
                                                    Simply find an item you love
                                                    and press Buy now.
                                                </li>
                                                <li className="pt-1">
                                                    The coupon will be applied
                                                    to the purchase
                                                    automatically. You’ll see it
                                                    at the checkout screen after
                                                    entering your payment
                                                    details.
                                                </li>
                                            </ul>

                                            <h1 className="text-xl font-normal mt-0 mb-2 pt-8">
                                                I can’t see my coupon{' '}
                                            </h1>
                                            <p className="pt-3">
                                                Sometimes the reason you don’t
                                                see your coupon is because the
                                                invited users didn’t sign up
                                                using the link. If your coupon
                                                seems to be missing, please send
                                                us the username of the member
                                                you invited, and a screenshot
                                                proving that you shared your
                                                invitation link with them.
                                            </p>

                                            <h1 className="text-xl font-normal mt-0 mb-2 pt-8">
                                                Good to know:
                                            </h1>
                                            <ul className="pl-3 p-2 list-disc">
                                                <li className="pt-1">
                                                    Coupons can be used to buy
                                                    items that cost at least $15
                                                </li>
                                                <li className="pt-1">
                                                    Coupons only cover the
                                                    item’s price (not postage
                                                    costs or the Buyer
                                                    Protection fee)
                                                </li>
                                                <li className="pt-1">
                                                    Coupons are eligible for 30
                                                    days (their expiry date is
                                                    in the coupon message)
                                                </li>
                                                <li className="pt-1">
                                                    Only 1 coupon can be used at
                                                    a time, and it can't be
                                                    redeemed in cash
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>
                <div>
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
                                <Disclosure.Panel>
                                    <div className="max-w-3xl mt-6">
                                        <div className="mx-5 bg-white">
                                            <h1 className="text-3xl font-bold mt-0 mb-4">
                                                Susty Wallet: how it works
                                            </h1>

                                            <p className="pt-3">
                                                Susty Wallet is a secure
                                                e-wallet where the seller:
                                            </p>
                                            <ul className="pl-3 p-2 list-disc">
                                                <li className="pt-1">
                                                    Receives all earnings from
                                                    sold items
                                                </li>
                                                <li className="pt-1">
                                                    Can pay from it to buy on
                                                    Susty
                                                </li>
                                                <li className="pt-1">
                                                    Can pay out their money from
                                                    it to their bank account
                                                </li>
                                            </ul>
                                            <p className="pt-3">
                                                You don’t need to use Susty
                                                Wallet to buy on Susty. We offer
                                                other payment methods too. You
                                                also cannot top it up — it’s
                                                only there to store earnings.
                                            </p>

                                            <h1 className="text-3xl font-normal mt-0 mb-2 pt-8">
                                                Receiving earnings from sold
                                                items
                                            </h1>
                                            <ul className="pl-3 p-2 list-disc">
                                                <li className="pt-1">
                                                    Buyer pays for an item →
                                                    Payment appears under
                                                    'pending balance' in the
                                                    seller's Susty Wallet
                                                </li>
                                                <li className="pt-1">
                                                    Buyer hits Everything’s OK
                                                    when the item is delivered
                                                    or 2 days after the item’s
                                                    delivery if the buyer is
                                                    inactive or if an issue is
                                                    raised during the 2 days
                                                    period, after the resolution
                                                    of the issue → Order is
                                                    completed → Payment moves
                                                    from 'pending balance' to
                                                    'available balance'
                                                </li>
                                                <li className="pt-1">
                                                    Once the payment is
                                                    available in the seller’s
                                                    balance, the seller can:
                                                    <ul className="pl-3 list-disc">
                                                        <li className="pt-1">
                                                            Use it to make
                                                            purchases on Susty
                                                        </li>
                                                        <li className="pt-1">
                                                            Make a payout to a
                                                            bank account
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>

                                            <h1 className="text-3xl font-normal mt-0 mb-2 pt-8">
                                                Why we have Susty Wallet
                                            </h1>
                                            <p className="pt-3">
                                                Our payment service provider
                                                Adyen will delay the transfer of
                                                funds to the seller. Such delays
                                                are a common practice in online
                                                marketplaces.
                                            </p>
                                            <p className="pt-3">
                                                This ensures that the buyer
                                                receives the purchased item. If
                                                something goes wrong, we may
                                                refund the buyer (though you can
                                                mutually agree on a different
                                                resolution). So, it helps us
                                                keep Susty safe and secure for
                                                both buyers and sellers.
                                            </p>

                                            <h1 className="text-3xl font-normal mt-0 mb-2 pt-8">
                                                About our payment service
                                                provider
                                            </h1>
                                            <p className="pt-3">
                                                Adyen, N.V. is a
                                                federally-licensed branch of a
                                                foreign bank. It provides and
                                                manages Susty Wallet for us as a
                                                financial service.
                                            </p>
                                            <p className="pt-3">
                                                Want to be a seller and use
                                                Susty Wallet? You’ll have to
                                                activate your Susty Wallet,
                                                agree to Adyen’s Terms and
                                                Conditions and become Adyen’s
                                                client.
                                            </p>
                                            <p className="pt-3">
                                                This way, we’re not involved in
                                                handling or holding your money.
                                                We leave it to the professionals
                                                who do it safely.
                                            </p>
                                        </div>
                                    </div>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>
            </div>
        </div>
    )
}

export default PaymentsAndPayouts
