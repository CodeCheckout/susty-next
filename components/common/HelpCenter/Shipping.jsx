import React from 'react'
import {Disclosure} from '@headlessui/react'
import {HiChevronRight} from 'react-icons/hi'

const Shipping = () => {
    return (
        <div className={'p-4 bg-white'}>
            <div className="bg-white text-left">
                <h1 className="text-3xl font-bold mt-0 mb-4">Shipping</h1>
                <div className="text-xs text-gray-500 mb-4 py-2">
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
                                                Changing your shipping address
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
                                        Changing your shipping address
                                    </h1>
                                    <p className="pt-4">
                                        When you buy your first item, we will
                                        ask you to enter your shipping address
                                        and it will be saved for your future
                                        purchases.{' '}
                                    </p>

                                    <h1 className="text-3xl mt-6 mb-2 font-semibold">
                                        To edit your address:
                                    </h1>
                                    <ul className="pl-4 p-2 list-decimal">
                                        <li className="pt-1">
                                            Press on the profile icon{' '}
                                        </li>
                                        <li className="pt-1">
                                            Select Settings
                                        </li>
                                        <li className="pt-1">
                                            Choose Shipping
                                        </li>
                                        <li className="pt-1">
                                            Press on the address field and edit
                                            the address
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
                                            Shipping label not received
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
                                    Shipping label not received
                                </h1>
                                <p className="pt-4">
                                    We’re sorry if you experience issues with
                                    getting the label. Below we’ve pulled
                                    together a list of the solutions to solve
                                    this.
                                </p>

                                <h1 className="text-2xl mt-6 mb-2">
                                    If you can’t get the shipping label
                                </h1>
                                <ul className="pl-4 p-2 list-disc">
                                    <li className="pt-1">
                                        Try both checking your email, and
                                        downloading the label on the
                                        conversation screen.
                                    </li>
                                    <li className="pt-1">
                                        See if you've entered the correct email
                                        address in your profile settings. If
                                        not, you can change your email address.
                                    </li>
                                    <li className="pt-1">
                                        Check your Spam or Junk folder, or use
                                        the search function of your mailbox.
                                        Look for a message from
                                        no-reply@Susty.com. This is the address
                                        from which we send you shipping labels.
                                    </li>
                                    <li className="pt-1">
                                        Try downloading the shipping label using
                                        a different device. For example, use
                                        your laptop or smartphone.
                                    </li>
                                    <li className="pt-1">
                                        Wait a couple of hours, and then try to
                                        download the label again. Use the button
                                        Get shipping label on the conversation
                                        screen with your buyer to do this.
                                    </li>
                                </ul>

                                <h1 className="text-2xl mt-6 mb-2">
                                    Still not working?
                                </h1>
                                <p className="pt-4">
                                    If you can’t get the label repeatedly, even
                                    after waiting a few hours or days, you can
                                    follow these steps:
                                </p>
                                <ul className="pl-4 p-2 list-disc">
                                    <li className="pt-1">
                                        Cancel the order and inform the buyer
                                        about it to avoid automatic negative
                                        feedback
                                    </li>
                                    <li className="pt-1">
                                        Re-upload the item to Susty
                                    </li>
                                    <li className="pt-1">
                                        Ask the buyer to rebuy the item and
                                        choose a different pick-up point.
                                    </li>
                                </ul>
                                <p className="pt-4">
                                    Thank you for taking the time to solve this
                                    issue. If you need our help, please contact
                                    us using the button below.
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
                                            Shipping basics for sellers
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
                                    Shipping basics for sellers
                                </h1>
                                <p className="pt-4">
                                    In this article, we’ll guide you through the
                                    essential things you might want to know
                                    about shipping on Susty.
                                </p>

                                <h1 className="text-2xl mt-6 mb-2 font-semibold">
                                    Understanding how shipping works
                                </h1>
                                <p className="font-semibold pt-4">
                                    Who pays for shipping?
                                </p>
                                <p className="pt-4">
                                    The cost of shipping is always covered by
                                    buyers. It is added to the item’s price as a
                                    part of the total buyer’s purchase.
                                </p>

                                <p className="font-semibold pt-4">
                                    Buyers decide how you should ship
                                </p>
                                <p className="pt-4">
                                    When your buyer purchases the item, and
                                    selects one of the carriers you are
                                    proposing, you should make sure to use that
                                    shipping method. Otherwise, your order will
                                    be automatically canceled and the buyer will
                                    be refunded.
                                </p>
                                <p className="pt-4">
                                    This may happen simply because Susty cannot
                                    track the package if it was sent with a
                                    different shipping provider than it was
                                    indicated in the order details.
                                </p>

                                <p className="font-semibold pt-4">
                                    Shipping timeline{' '}
                                </p>
                                <p className="pt-4">
                                    You’ll have 5 working days to send a sold
                                    item. If you happen to miss this deadline,
                                    we’ll have no choice but to cancel the order
                                    and refund the buyer.
                                </p>

                                <h1 className="text-2xl mt-6 mb-2 font-semibold">
                                    Shipping types on Susty
                                </h1>
                                <p className="pt-4">
                                    Let’s break down the 3 types of shipping
                                    available to you as a seller:
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
                                                                With pre-paid
                                                                labels generated
                                                                on Susty
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
                                                    <p className="pt-4">
                                                        With this type of
                                                        shipping, we’ll send you
                                                        a prepaid shipping label
                                                        — just download it,
                                                        print it, and stick it
                                                        to the package.{' '}
                                                    </p>
                                                    <p className="pt-4">
                                                        You and your buyer can
                                                        track the package's
                                                        journey on Susty.
                                                    </p>
                                                    <p className="pt-4">
                                                        Carrier with pre-paid
                                                        shipping label include:
                                                    </p>

                                                    <ul className="pl-4 p-2 list-disc">
                                                        <li className="pt-1">
                                                            Press on the profile
                                                            icon{' '}
                                                        </li>
                                                    </ul>
                                                    <p className="pt-4">
                                                        USPS is a shipping
                                                        service with which Susty
                                                        issues a prepaid
                                                        shipping label to the
                                                        seller. When sending
                                                        your packages with USPS,
                                                        you may choose from the
                                                        following shipping
                                                        services:
                                                    </p>

                                                    <ul className="pl-4 p-2 list-disc">
                                                        <li className="pt-1">
                                                            First Class (only
                                                            Small)
                                                        </li>
                                                        <li className="pt-1">
                                                            Priority mail
                                                            (Medium & Large)
                                                        </li>
                                                    </ul>

                                                    <p className="pt-4">
                                                        You can order your
                                                        package collection from
                                                        home. Just enter your
                                                        pickup location to see
                                                        if it is eligible for
                                                        pickups.
                                                    </p>
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                </div>

                                <p className="pt-4">
                                    You will be compensated up to $100 if the
                                    item is lost or damaged during shipment.
                                    With Priority mail (M & L package sizes),
                                    you’ll have to file a claim for compensation
                                    with USPS yourself.
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
                                                                Custom shipping
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
                                                    <p className="pt-4">
                                                        If you ship hazardous
                                                        materials, such as
                                                        flammable liquids (i.e.,
                                                        perfumes), aerosol
                                                        sprays (i.e.,
                                                        hairsprays) or items
                                                        containing lithium
                                                        batteries, you’ll have
                                                        to offer your buyers
                                                        delivery via custom
                                                        shipping — other carrier
                                                        than the one available
                                                        on Susty, a carrier of
                                                        your choice. In this
                                                        case, pack an item
                                                        following the
                                                        regulations of your
                                                        chosen carrier. Always
                                                        choose shipping
                                                        providers that offer
                                                        tracked shipping with
                                                        compensation. In case of
                                                        a lost or damaged
                                                        package, file a
                                                        complaint directly with
                                                        your chosen carrier.
                                                    </p>
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                </div>
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
                                                                No shipping
                                                                (meet-up and
                                                                collection)
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
                                                    <p className="pt-4">
                                                        This is more practical
                                                        for items that are
                                                        difficult to ship — such
                                                        as heavy or bulky items
                                                        from the Kids, Home, or
                                                        Entertainment
                                                        categories. If you offer
                                                        this option, you can
                                                        simply arrange to meet
                                                        up with your buyer.
                                                    </p>
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
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
                                            Shipping options for buyers
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
                                    Shipping options for buyers
                                </h1>
                                <p className="pt-4">
                                    When you buy an item, you'll see all the
                                    delivery choices and their cost next to the
                                    item’s price. The options you’ll be offered
                                    will depend on the items you are buying,
                                    your and your seller’s location, also the
                                    seller’s settings.
                                </p>

                                <h1 className="text-3xl mt-6 mb-2">
                                    Available shipping options
                                </h1>

                                <p className="pt-4">
                                    There are 3 ways that your package can be
                                    delivered to you:
                                </p>
                                <ul className="pl-4 p-2 list-disc">
                                    <li className="pt-1 font-semibold">
                                        USPS (prepaid shipping label generated
                                        on Susty)
                                    </li>
                                </ul>

                                <p className="pt-4">
                                    Have your purchase sent directly to your
                                    address.
                                </p>
                                <ul className="pl-4 p-2 list-disc">
                                    <li className="pt-1 font-semibold">
                                        Custom shipping
                                    </li>
                                </ul>

                                <p className="pt-4">
                                    The seller will send you the item using a
                                    method that’s not listed on Susty.
                                </p>
                                <ul className="pl-4 p-2 list-disc">
                                    <li className="pt-1 font-semibold">
                                        No shipping (meet-up and collect)
                                    </li>
                                </ul>

                                <p className="pt-4">
                                    This is more practical for items that are
                                    difficult to ship — such as heavy or bulky
                                    items from the Kids, Home, or Entertainment
                                    categories. If the seller offers this
                                    option, you can simply arrange a meet-up to
                                    collect the item from them.
                                </p>
                                <p className="pt-4">
                                    Learn how each of the shipping options works
                                    or find out the shipping routes that the
                                    providers cover.
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
                                            How to send an item with each
                                            shipping provider
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
                                                            Ship an item using
                                                            Custom Shipping
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
                                                <div>
                                                    <h1 className="text-3xl font-bold mt-0 mb-4">
                                                        Ship an item using
                                                        Custom Shipping
                                                    </h1>
                                                    <p className="pt-5">
                                                        Sellers who want to use
                                                        shipping options that
                                                        aren’t available on
                                                        Susty can enable custom
                                                        shipping when uploading
                                                        an item.
                                                    </p>

                                                    <h1 className="text-2xl mt-0 mb-4 pt-6">
                                                        How to enable custom
                                                        shipping
                                                    </h1>
                                                    <p className="pt-4">
                                                        When uploading the item,
                                                        follow these steps:
                                                    </p>
                                                    <ul className="p-3 list-disc">
                                                        <li className="pt-1">
                                                            Check the weight and
                                                            dimensions of your
                                                            item
                                                        </li>
                                                        <li className="pt-1">
                                                            Set the shipping
                                                            costs depending on
                                                            the provider you’re
                                                            going to choose to
                                                            ship your item
                                                        </li>
                                                        <li className="pt-1">
                                                            Press Select your
                                                            package size below,
                                                            then choose Custom
                                                            shipping
                                                        </li>
                                                        <li className="pt-1">
                                                            Enter the shipping
                                                            costs while adding
                                                            your item
                                                        </li>
                                                    </ul>

                                                    <h1 className="text-2xl mt-0 mb-4 pt-6">
                                                        How to ship with custom
                                                        shipping
                                                    </h1>
                                                    <p className="pt-4">
                                                        You can only ship with
                                                        custom shipping if you
                                                        had enabled it for the
                                                        specific item before the
                                                        sale.
                                                    </p>
                                                    <ul className="p-3 list-decimal">
                                                        <li className="pt-1">
                                                            Make sure to pack
                                                            the item thoroughly.
                                                            <ul className="pl-3 pt-1 list-disc">
                                                                <li className="pt-1">
                                                                    Keep a photo
                                                                    of the
                                                                    package
                                                                    until the
                                                                    order is
                                                                    completed.
                                                                    (Assuming
                                                                    the carrier
                                                                    offers
                                                                    compensation,
                                                                    this might
                                                                    help you get
                                                                    it if the
                                                                    package gets
                                                                    damaged.)
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="pt-4">
                                                            Ship the package.
                                                            Check with your
                                                            selected shipping
                                                            provider to find out
                                                            how this can be
                                                            done.
                                                            <ul className="pl-3 pt-1 list-disc">
                                                                <li className="pt-1">
                                                                    Keep your
                                                                    proof of
                                                                    shipping,
                                                                    such as a
                                                                    shipping
                                                                    receipt.
                                                                    You’ll have
                                                                    to attach it
                                                                    on Susty to
                                                                    mark the
                                                                    item as
                                                                    sent.
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="pt-4">
                                                            Press Shipping
                                                            Instructions in the
                                                            conversation screen,
                                                            attach proof of
                                                            shipping, and press
                                                            “Item shipped”
                                                            within 5 working
                                                            days of the sale.
                                                            Otherwise, your
                                                            order will be
                                                            automatically
                                                            canceled. Please
                                                            inform the buyer if
                                                            you can’t send the
                                                            item in time.
                                                        </li>
                                                    </ul>

                                                    <p className="pt-4">
                                                        Once the buyer receives
                                                        their item, they may
                                                        manually complete the
                                                        order. If they’re
                                                        inactive, the order will
                                                        automatically update to
                                                        “Delivered” status after
                                                        21 days.
                                                    </p>
                                                    <p className="pt-4">
                                                        Your earnings will
                                                        appear in your Susty
                                                        Wallet once the buyer
                                                        gets the item and the
                                                        order gets completed.
                                                        Here’s how receiving the
                                                        payment works in more
                                                        detail.
                                                    </p>

                                                    <h1 className="text-xl font-semibold mt-0 mb-1 pt-8">
                                                        Other things to know
                                                        when choosing custom
                                                        shipping:
                                                    </h1>

                                                    <ul className="p-3 list-disc">
                                                        <li className="pt-1">
                                                            Always enter the
                                                            exact shipping price
                                                            that you’re going to
                                                            pay to the carrier
                                                            when selecting
                                                            custom shipping.
                                                            That’s because your
                                                            buyer will cover the
                                                            amount you enter -
                                                            not the amount you
                                                            actually pay.
                                                        </li>
                                                        <li className="pt-1">
                                                            When choosing your
                                                            own carrier, please
                                                            familiarise with
                                                            their rules and
                                                            restrictions, and
                                                            follow them when
                                                            using their services
                                                            to avoid any
                                                            delivery issues.
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
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg  px-4 py-4 text-left text-sm md:text-base font-medium hover:bg-gray-100 focus:bg-gray-50 focus:outline-none focus-visible:ring">
                                                <div className="pr-6">
                                                    <div>
                                                        <p
                                                            className={
                                                                'font-semibold'
                                                            }
                                                        >
                                                            Hand an item over
                                                            without shipping
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
                                                <h1 className="text-3xl font-bold mt-0 mb-2">
                                                    Hand an item over without
                                                    shipping
                                                </h1>
                                                <p className="pt-4">
                                                    You may choose this option
                                                    for heavy or bulky items
                                                    from the Kids or Home
                                                    categories. Once you sell
                                                    such an item, please:{' '}
                                                </p>

                                                <ul className="pl-4 p-2 list-decimal">
                                                    <li className="pt-1">
                                                        Chat with the buyer via
                                                        the conversation screen
                                                        to decide where and when
                                                        they could collect the
                                                        item from you.
                                                    </li>
                                                    <li className="pt-2">
                                                        Meet the buyer and pass
                                                        the item on to them.
                                                    </li>
                                                </ul>

                                                <p className="pt-4">
                                                    The buyer should then
                                                    confirm that they’ve
                                                    received the item, and
                                                    complete the order. If the
                                                    buyer is inactive, the order
                                                    will update to “Delivered”
                                                    status 21 days after the
                                                    sale.
                                                </p>
                                                <p className="pt-4">
                                                    Your earnings will appear in
                                                    your Susty Wallet once the
                                                    buyer gets the item and the
                                                    order is completed. Here’s
                                                    how receiving the payment
                                                    works in more detail.
                                                </p>

                                                <h1 className="text-xl mt-6 mb-2 font-semibold">
                                                    Be mindful of your security
                                                </h1>
                                                <p className="pt-4">
                                                    When meeting other members
                                                    in person, we recommend
                                                    doing it in public, not
                                                    sharing your personal
                                                    details and using common
                                                    sense to keep safe. We
                                                    believe in the friendliness
                                                    of our community, but always
                                                    remember that you are
                                                    meeting a stranger.
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
                                                        <p
                                                            className={
                                                                'font-semibold'
                                                            }
                                                        >
                                                            Ship an item with
                                                            USPS
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
                                                <h1 className="text-3xl font-bold mt-0 mb-2">
                                                    Ship an item with USPS
                                                </h1>
                                                <p className="pt-4">
                                                    When sending your packages
                                                    with USPS, you may choose
                                                    from the following shipping
                                                    services:
                                                </p>

                                                <ul className="pl-4 p-2 list-disc">
                                                    <li className="pt-1">
                                                        First Class (only Small){' '}
                                                    </li>
                                                    <li className="pt-1">
                                                        Priority mail (Medium &
                                                        Large){' '}
                                                    </li>
                                                </ul>

                                                <p className="pt-4">
                                                    Method of shipping: Sender’s
                                                    address/Post office →
                                                    Buyer’s address.
                                                </p>
                                                <p className="pt-4">
                                                    To ship your package with
                                                    this carrier:
                                                </p>

                                                <ul className="pl-4 p-2 list-decimal">
                                                    <li className="pt-1">
                                                        Get shipping label in
                                                        the conversation screen
                                                        once the item is sold.
                                                        Print it out and attach
                                                        it to the package.
                                                        Please note that if you
                                                        don’t use the label
                                                        provided by Susty, your
                                                        order may be canceled
                                                        automatically.{' '}
                                                    </li>
                                                    <li className="pt-4">
                                                        {' '}
                                                        Make sure to pack the
                                                        item thoroughly.
                                                        <ul className="list-disc">
                                                            <li className="pt-1 pl-4 p-2">
                                                                Keep a photo of
                                                                the package
                                                                until the order
                                                                is completed. If
                                                                the item gets
                                                                damaged in
                                                                transit due to
                                                                inappropriate
                                                                packaging, you
                                                                won’t be able to
                                                                receive
                                                                compensation.
                                                            </li>
                                                            <p className="pt-4">
                                                                DO NOT use
                                                                Priority
                                                                packaging for
                                                                small packages —
                                                                they are shipped
                                                                First Class.
                                                                When choosing a
                                                                box, please
                                                                don’t use FLAT
                                                                RATE boxes —
                                                                they don't work
                                                                with any
                                                                Susty-generated
                                                                shipping labels.
                                                            </p>
                                                            <p className="pt-4">
                                                                If you ship
                                                                items that are
                                                                considered
                                                                hazardous
                                                                materials (e.g.,
                                                                perfumes, nail
                                                                polish removers,
                                                                aerosol
                                                                containers), or
                                                                items containing
                                                                lithium
                                                                batteries, you
                                                                must use custom
                                                                shipping
                                                                instead.
                                                            </p>
                                                        </ul>
                                                    </li>
                                                    <li className="pt-4">
                                                        Drop the package off in
                                                        your mailbox, at the
                                                        post office, or call
                                                        USPS and order a pick up
                                                        from home free of charge
                                                        within 5 working days.
                                                        Note that tracking may
                                                        take up to 48 hours to
                                                        update, so please don’t
                                                        wait until the last day.
                                                        If we receive no update
                                                        after 5 working days,
                                                        we’ll have no choice but
                                                        to cancel the order.
                                                        <ul className="list-disc">
                                                            <li className="pt-3 pl-4 p-2">
                                                                Keep your proof
                                                                of shipping
                                                                until the order
                                                                is completed,
                                                                e.g. the copy of
                                                                the shipping
                                                                label or the
                                                                receipt. (In
                                                                case any
                                                                shipping issues
                                                                arise, this
                                                                might help us
                                                                solve them.)
                                                            </li>
                                                            <li className="pt-1 pl-4 p-2">
                                                                Both you and the
                                                                buyer can track
                                                                the package in
                                                                the conversation
                                                                screen. If the
                                                                tracking doesn’t
                                                                update in 48
                                                                hours, you may
                                                                press Item
                                                                shipped to
                                                                inform the buyer
                                                                that you’ve
                                                                shipped the
                                                                item.
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>

                                                <p className="pt-4">
                                                    Your earnings will appear in
                                                    your Susty e-wallet once the
                                                    buyer gets the item and
                                                    presses Everything is OK.
                                                    Here’s how receiving the
                                                    payment works in more
                                                    detail.
                                                </p>

                                                <h1 className="text-2xl mt-6 mb-2">
                                                    Postage cost and
                                                    Compensation
                                                </h1>
                                                <p className="pt-4">
                                                    The shipping rate will be
                                                    shown to buyers at checkout.
                                                    It will vary depending on
                                                    the size of the package.
                                                </p>
                                                <p className="pt-4">
                                                    In case of a lost or damaged
                                                    package, please contact us.
                                                    We may compensate you up to
                                                    $100. With Priority mail (M
                                                    & L package sizes), you’ll
                                                    have to file a claim for
                                                    compensation with USPS
                                                    yourself.
                                                </p>
                                                <p className="pt-4">
                                                    If you used custom shipping,
                                                    reach out to the shipping
                                                    company to file a claim, as
                                                    we won’t be able to support
                                                    you. For further details,
                                                    including information about
                                                    compensation, please refer
                                                    to our Terms and Conditions.
                                                </p>
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </div>
    )
}

export default Shipping
