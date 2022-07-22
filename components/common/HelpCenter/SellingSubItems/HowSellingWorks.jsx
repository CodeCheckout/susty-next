import React from 'react';
import {Disclosure} from "@headlessui/react";
import {HiChevronRight} from "react-icons/hi";

const HowSellingWorks = () => {
    return (
        <div className={'p-4 bg-white'}>
            <div className=" bg-white text-left">
                <h1 className="text-3xl font-bold mt-0 mb-4">How selling works</h1>
                <div className="text-xs text-gray-500">Pick a topic</div>
                <Disclosure>
                    {({open}) => (
                        <>
                            <Disclosure.Button
                                className="flex w-full justify-between rounded-lg  px-4 py-4 text-left text-sm md:text-base font-medium hover:bg-gray-100 focus:bg-gray-50 focus:outline-none focus-visible:ring">
                                <div className="pr-6">
                                    <div>
                                        <p className={'font-semibold'}>
                                            Sales tax on Susty: info for sellers
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
                                <div>
                                    <h1 className="text-3xl font-bold mt-0 mb-2">
                                        Sales tax on Susty: info for sellers
                                    </h1>
                                    <p className="pt-4">
                                        Marketplace facilitator laws require us to collect the sales tax from our
                                        customers
                                        and remit it to the respective authorities.
                                    </p>
                                    <p className="pt-4">
                                        This obligation applies to us in states where we exceed the specific threshold
                                        set
                                        by that state. Thus, the states where we collect the sales tax are:
                                    </p>

                                    <h1 className="text-3xl mt-6 mb-2 font-semibold">
                                        When does the sales tax apply?
                                    </h1>
                                    <ul className="pl-4 p-2 list-decimal">
                                        <li className="pt-1">
                                            When you buy a Bump or Closet Spotlight
                                        </li>
                                        <p>Whenever you buy one of these services, you may also have to pay the sales
                                            tax on
                                            top of the service price. The applicable sales tax amount will be visible at
                                            checkout.</p>
                                        <li className="pt-1">
                                            When someone buys your item on Susty
                                        </li>
                                        <p>Where applicable, the buyer will have to pay the sales tax when buying an
                                            item on
                                            Susty. The sales tax may apply to the purchase of the item.</p>
                                        <p>During the purchase, the sales tax will be added on top of the buyer’s order
                                            value. So, the sales tax will increase the total price for the buyer. It
                                            won’t
                                            impact your earnings.</p>
                                        <p>You’ll see the sales tax amounts at checkout and in the invoice issued after
                                            each
                                            purchase. Your invoices are accessible via our website but not the app.</p>
                                    </ul>

                                    <h1 className="text-xl mt-6 mb-2">
                                        What is the sales tax rate?
                                    </h1>
                                    <p>We calculate the sales tax rate automatically, and it depends on the item/service
                                        type and price as well as the drop-off and delivery locations.</p>
                                    <p>For this reason, we will ask you for your ZIP code when you upload your first
                                        item.
                                        You’ll only need to enter it once. If it ever changes, don’t forget to update
                                        your
                                        shipping address.</p>
                                    <h1 className="text-xl mt-6 mb-2">
                                        What are my obligations as a seller?
                                    </h1>
                                    <p>If you sell an item to someone from a state where Susty collects and remits sales
                                        tax, the sales tax will form a part of the items/services price. We’ll
                                        calculate,
                                        collect and remit it to the respective authorities without bothering you.</p>
                                    <h1 className="text-xl mt-6 mb-2">
                                        Good to know
                                    </h1>
                                    <p>Susty is an online marketplace platform. Therefore, we must follow the
                                        marketplace facilitator laws, which require us to collect the sales tax, even if
                                        yard sales are free from this obligation.</p>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure>
                    {({open}) => (
                        <>
                            <Disclosure.Button
                                className="flex w-full justify-between rounded-lg  px-4 py-4 text-left text-sm md:text-base font-medium hover:bg-gray-100 focus:bg-gray-50 focus:outline-none focus-visible:ring">
                                <div className="pr-6">
                                    <div>
                                        <p className={'font-semibold'}>
                                            "Significantly not as described" items at Susty
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
                                    "Significantly not as described" items at Susty
                                </h1>
                                <p className="pt-4">
                                    If a Susty member receives an item that is significantly not as described in its
                                    listing description and pictures — it is considered SNAD.
                                </p>
                                <div>
                                    <h1 className="text-xl mt-6 mb-2">
                                        What is considered SNAD?
                                    </h1>
                                    <p className="py-3">Here are the main cases that would be considered SNAD:</p>
                                    <ul className="pl-4 p-2 list-disc">
                                        <li className="pt-1">
                                            Wrong color
                                        </li>
                                        <li className="pt-1">
                                            Incorrect size
                                        </li>
                                        <li className="pt-1">
                                            Missing item parts
                                        </li>
                                        <li className="pt-1">
                                            A bundle that’s missing an item(s)
                                        </li>
                                        <li className="pt-1">
                                            A damaged item (stained, ripped, broken, holed or damaged in any other way)
                                            that wasn’t detailed in the description or pictures
                                        </li>
                                        <li className="pt-1">
                                            Different material from the one mentioned in the description
                                        </li>
                                        <li className="pt-1">
                                            Counterfeit
                                        </li>
                                        <li className="pt-1">
                                            Any other visible flaw that wasn’t detailed in the listing
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h1 className="text-xl mt-6 mb-2">
                                        What is not SNAD?
                                    </h1>
                                    <ul className="pl-4 p-2 list-disc">
                                        <li className="pt-1">
                                            Items that you don’t like or that don’t fit you
                                        </li>
                                        <li className="pt-1">
                                            Items that have a slightly different color due to the lighting in the item’s
                                            pictures
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h1 className="text-xl mt-6 mb-2">
                                        What happens when there’s a SNAD case?
                                    </h1>
                                    <ul className="pl-4 p-2 list-disc">
                                        <li className="pt-1">
                                            If the buyer thinks an item is SNAD, they should press I have an issue on
                                            the conversation screen with the seller (within 2 days of the item’s
                                            delivery) and follow the instructions.
                                        </li>
                                        <li className="pt-1">
                                            If an issue is reported, we will suspend the order. The seller will be able
                                            to see more details on their conversation screen with the buyer.
                                        </li>
                                        <li className="pt-1">
                                            The buyer and seller can then find an agreement together. If they don’t,
                                            we’ll step in to help.
                                        </li>
                                        <li className="pt-1">
                                            We'll reach out to the seller and ask them to dispute the claim within 48
                                            hours or provide the buyer with the return address (except when the item is
                                            counterfeit).
                                        </li>
                                        <li className="pt-1">
                                            If the seller disputes the claim and we still consider the item to be SNAD,
                                            we’ll cancel the order and ask the buyer to return the item. We’ll then
                                            refund the buyer.
                                        </li>
                                        <li className="pt-1">
                                            If the seller fails to give their address within 48 hours, we’ll refund the
                                            buyer, and the order will be completed. In this case, the seller and buyer
                                            should find a solution regarding the item’s return on their own.
                                        </li>
                                    </ul>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure>
                    {({open}) => (
                        <>
                            <Disclosure.Button
                                className="flex w-full justify-between rounded-lg  px-4 py-4 text-left text-sm md:text-base font-medium hover:bg-gray-100 focus:bg-gray-50 focus:outline-none focus-visible:ring">
                                <div className="pr-6">
                                    <div>
                                        <p className={'font-semibold'}>
                                            Uploading an item step by step
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
                                    Uploading an item step by step
                                </h1>
                                <p className="pt-4">
                                    Here’s how to upload an item on Susty:
                                </p>
                                <div>
                                    <ol className="pl-4 p-2 list-decimal">
                                        <li className="pt-1">
                                            Add 1–20 clear, sharp photos
                                        </li>
                                        <li className="pt-1">
                                            Add a title and describe your item in detail
                                        </li>
                                        <li className="pt-1">
                                            Select the appropriate category for the item you’re selling
                                        </li>
                                        <li className="pt-1">
                                            Insert a competitive price
                                        </li>
                                        <li className="pt-1">
                                            Mark whether you’d be interested in swapping the item
                                        </li>
                                        <li className="pt-1">
                                            Select the size of your package.
                                        </li>
                                    </ol>
                                    <p className="py-4">In both the description and photos, you should note any defects, alterations, missing parts, etc., of the item.</p>

                                    <h1 className="text-xl mt-6 mb-2 font-semibold">
                                        Choosing the correct item category
                                    </h1>
                                    <p className="pt-4">
                                        Item categories also determine the shipping options available. So choosing the correct item will help you choose the right package size!
                                    </p>
                                    <p className="pt-4">
                                        Also, note that the custom shipping and no shipping (meet up and collect) option is only available for items in the heavy category.
                                    </p>
                                    <p className="pt-4">
                                        Here are a few examples of uploading items to the correct category:
                                    </p>
                                    <ol className="pl-4 p-2 list-disc">
                                        <li className="pt-1">
                                            Curling iron
                                        </li>
                                        <p className="py-3 text-gray-600">Women > Beauty > Beauty tools > Hair styling tools</p>
                                        <li className="pt-1">
                                            Men's running shoes
                                        </li>
                                        <p className="py-3 text-gray-600">Men > Shoes > Sports shoes > Running</p>
                                        <li className="pt-1">
                                            Decorative cushion
                                        </li>
                                        <p className="py-3 text-gray-600">Home > Textiles > Cushions</p>
                                    </ol>
                                    <p className="py-3">Note that children's books should be uploaded under ‘Entertainment > Books > Kids & young adults’, not the Kids category.</p>
                                </div>
                                <div>
                                    <h1 className="text-xl mt-6 mb-2">
                                        Good to know:
                                    </h1>
                                    <ul className="pl-4 p-2 list-disc">
                                        <li className="pt-1">
                                            You can only sell books with an ISBN — a 10 or 13-digit number found above the book’s barcode. The barcode is usually on the back cover or one of the final pages of the book.
                                        </li>
                                        <li className="pt-1">
                                            For items that require an age-rating label (like video games), make sure that the photo displays such labeling.
                                        </li>
                                    </ul>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>

                <Disclosure>
                    {({open}) => (
                        <>
                            <Disclosure.Button
                                className="flex w-full justify-between rounded-lg  px-4 py-4 text-left text-sm md:text-base font-medium hover:bg-gray-100 focus:bg-gray-50 focus:outline-none focus-visible:ring">
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
                <Disclosure>
                    {({open}) => (
                        <>
                            <Disclosure.Button
                                className="flex w-full justify-between rounded-lg  px-4 py-4 text-left text-sm md:text-base font-medium hover:bg-gray-100 focus:bg-gray-50 focus:outline-none focus-visible:ring">
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
                                            <Disclosure.Button
                                                className="flex w-full justify-between rounded-lg  px-4 py-4 text-left text-sm md:text-base font-medium hover:bg-gray-100 focus:bg-gray-50 focus:outline-none focus-visible:ring">
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
                                            <Disclosure.Button
                                                className="flex w-full justify-between rounded-lg  px-4 py-4 text-left text-sm md:text-base font-medium hover:bg-gray-100 focus:bg-gray-50 focus:outline-none focus-visible:ring">
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
                                            <Disclosure.Button
                                                className="flex w-full justify-between rounded-lg  px-4 py-4 text-left text-sm md:text-base font-medium hover:bg-gray-100 focus:bg-gray-50 focus:outline-none focus-visible:ring">
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
                                            <Disclosure.Button
                                                className="flex w-full justify-between rounded-lg  px-4 py-4 text-left text-sm md:text-base font-medium hover:bg-gray-100 focus:bg-gray-50 focus:outline-none focus-visible:ring">
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
                            <Disclosure.Button
                                className="flex w-full justify-between rounded-lg  px-4 py-4 text-left text-sm md:text-base font-medium hover:bg-gray-100 focus:bg-gray-50 focus:outline-none focus-visible:ring">
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
    );
};

export default HowSellingWorks;