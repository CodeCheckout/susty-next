import React from 'react'
import {Disclosure} from '@headlessui/react'
import {HiChevronRight} from 'react-icons/hi'

const SafetyAndReporting = () => {
    return (
        <div className={'p-4 bg-white'}>
            <div className=" bg-white text-left">
                <h1 className="text-3xl font-bold mt-0 mb-4">
                    Safety and reporting
                </h1>
                <div className="text-xs text-gray-500 mb-4">
                    Recommended for you
                </div>

                <Disclosure>
                    {({open}) => (
                        <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg  px-4 py-4 text-left text-sm md:text-base font-medium hover:bg-gray-100 focus:bg-gray-50 focus:outline-none focus-visible:ring">
                                <div className="pr-6">
                                    <div>
                                        <p className={'font-semibold'}>
                                            What you can sell on Susty
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
                                    What you can sell on Susty
                                </h1>
                                <p className="pt-4">
                                    Our Catalog Rules allow selling:
                                </p>

                                {/* <h1 className = "text-3xl mt-6 mb-2 font-semibold" >To cancel an order:</h1> */}
                                <ul className="pl-4 p-2 list-disc">
                                    <li className="pt-1">
                                        Women’s, men’s, and children’s clothing,
                                        footwear, and accessories
                                    </li>
                                    <li className="pt-1">
                                        Children’s toys, furniture, and
                                        childcare equipment
                                    </li>
                                    <li className="pt-1">
                                        New cosmetics, perfumes, and other
                                        beauty products or gadgets{' '}
                                    </li>
                                    <li className="pt-1">
                                        Small tech accessories (e.g.,
                                        headphones, smartwatches, phone cases)
                                    </li>
                                    <li className="pt-1">
                                        Homeware
                                        <ul className="pl-4 p-2 list-disc">
                                            <li className="pt-1">
                                                Textiles, tableware, and home
                                                accessories
                                            </li>
                                            <li className="pt-1">
                                                Here’s more on home items and
                                                exceptions
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="pt-1">
                                        Entertainment goods
                                        <ul className="pl-4 p-2 list-disc">
                                            <li className="pt-1">
                                                Video game consoles,
                                                accessories, and games (except
                                                those featuring loot boxes and
                                                digital games)
                                            </li>
                                            <li className="pt-1">
                                                Books with an ISBN code
                                            </li>
                                            <li className="pt-1">
                                                Tabletop/board games and puzzles
                                            </li>
                                            <li className="pt-1">
                                                Music and video items, such as
                                                CDs, DVDs, and vinyl
                                            </li>
                                            <li className="pt-1">
                                                Here’s more on entertainment
                                                items and exceptions
                                            </li>
                                        </ul>
                                    </li>
                                </ul>

                                <p className="pt-4">
                                    If the item you’re selling came with
                                    instructions of use, manuals or safety
                                    warnings, make sure to include these too.
                                </p>

                                <h1 className="text-xl font-semibold mt-6 mb-2">
                                    What you cannot sell
                                </h1>
                                <ul className="pl-4 p-2 list-disc">
                                    <li className="pt-1">
                                        Items that do not comply with applicable
                                        laws
                                    </li>
                                    <li className="pt-1">
                                        Counterfeits and items that infringe on
                                        copyright or intellectual property (IP)
                                        rights
                                    </li>
                                    <li className="pt-1">
                                        Creative works reproduced without the
                                        copyright/IP holder’s consent (e.g.,
                                        books, movies, music, video games)
                                    </li>
                                    <li className="pt-1">
                                        Items subject to age-rating
                                        classification with the age-rating
                                        labels missing (e.g., video games,
                                        movies)
                                    </li>
                                    <li className="pt-1">
                                        Food, drinks, and other perishables
                                    </li>
                                    <li className="pt-1">
                                        Detergents and cleaning chemicals
                                    </li>
                                    <li className="pt-1">
                                        Medications, professional medical
                                        supplies, prescription products,
                                        vitamins, and food supplements
                                    </li>
                                    <li className="pt-1">
                                        Live animals and pets
                                    </li>
                                    <li className="pt-1">
                                        Items for pets, wild animals, or farm
                                        animals
                                    </li>
                                    <li className="pt-1">
                                        Items that promote or display violence,
                                        discrimination, hatred, crime,
                                        terrorism, or a terrorist organization
                                    </li>
                                    <li className="pt-1">
                                        Items received for free, such as
                                        promotional or complimentary items
                                    </li>
                                    <li className="pt-1">
                                        Items that do not comply with hygiene
                                        standards, or pose risk to one’s health
                                        (e.g., used cosmetics, underwear
                                        bottoms, bedding, towels, piercings,
                                        etc.,)
                                    </li>
                                    <li className="pt-1">
                                        Animal fur, reptile skin, shell, or
                                        ivory products
                                    </li>
                                    <li className="pt-1">
                                        Electronic and high-tech products
                                        <ul className="pl-4 p-2 list-disc">
                                            <li className="pt-1">
                                                Smartphones, tablets, chargers,
                                                power banks, TVs, cameras, and
                                                similar gadgets
                                            </li>
                                            <li className="pt-1">
                                                Computers, monitors,
                                                peripherals, and PC parts
                                            </li>
                                            <li className="pt-1">
                                                Speakers and media players
                                                (e.g., DVD/CD players, record
                                                players)
                                            </li>
                                            <li className="pt-1">
                                                Home appliances (e.g., white
                                                goods, irons, vacuum cleaners)
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="pt-1">
                                        Music and sports equipment for adults
                                    </li>
                                    <li className="pt-1">
                                        Kitchen tools or accessories used to
                                        make and store food
                                    </li>
                                    <li className="pt-1">
                                        Furniture for adults, and garden or
                                        power tools
                                    </li>
                                    <li className="pt-1">Recalled products</li>
                                    <li className="pt-1">
                                        And more: see our Catalog Rules for a
                                        detailed list of prohibited items
                                    </li>
                                </ul>

                                <h1 className="text-xl font-semibold mt-6 mb-2">
                                    Did you see a similar item uploaded by
                                    another member?
                                </h1>
                                <p className="pt-4">
                                    We are constantly monitoring the catalog and
                                    removing any prohibited items. However, we
                                    don’t always notice them immediately. It
                                    would be a huge help if you could report
                                    listings that violate our rules.
                                </p>

                                <h1 className="text-xl font-semibold mt-6 mb-2">
                                    Make sure your items are clean
                                </h1>
                                <p className="pt-4">
                                    In general, all items that you put on sale
                                    should be clean. We recommend washing or
                                    disinfecting them in a way suitable to the
                                    item’s material.
                                </p>
                                <p className="pt-4">
                                    Any stains, defects, or similar flaws that
                                    don’t wash off must be mentioned in the
                                    item’s description. Please be aware that if
                                    they’re not noted, we may have to cancel the
                                    order.
                                </p>

                                <h1 className="text-xl font-semibold mt-6 mb-2">
                                    Make sure your electronics are safe to use
                                </h1>
                                <p className="pt-4">
                                    Damaged electrical devices are a health
                                    risk. If your socket-plug or battery-powered
                                    device gives off heat and has frayed or
                                    loose cables (or any other damage), it
                                    cannot be sold.
                                </p>

                                <h1 className="text-xl font-semibold mt-6 mb-2">
                                    Prohibited items and refunds
                                </h1>
                                <p className="pt-4">
                                    We cannot refund the cost of Bumps, Closet
                                    Spotlights, or bundles if they include
                                    prohibited items that we’ve had to hide or
                                    delete.
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
                                            Why your listing was hidden or
                                            deleted
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
                                    Why your listing was hidden or deleted
                                </h1>
                                <p className="pt-4">
                                    We pay great attention to content quality at
                                    Susty. So if a listing doesn’t align with
                                    our Catalog Rules, we have no choice but to
                                    hide or remove it.
                                </p>

                                <h1 className="text-3xl mt-6 mb-2 font-semibold">
                                    Hidden listings
                                </h1>
                                <p className="pt-4">
                                    We’ll have to hide your listing if:
                                </p>

                                <ul className="pl-4 p-2 list-disc">
                                    <li className="pt-1">
                                        The item is not in accordance with our
                                        Catalog Rules
                                    </li>
                                    <li className="pt-1">
                                        You haven’t provided authenticity proof
                                        for your item
                                    </li>
                                    <li className="pt-1">
                                        The item's price, condition, size, or
                                        hashtags are inaccurate, unclear, or
                                        intentionally misleading. For example:
                                        <ul className="pl-4 p-2 list-disc">
                                            <li className="pt-1">
                                                The item description doesn’t
                                                match the item{' '}
                                            </li>
                                            <li className="pt-1">
                                                Multiple (and unrelated) brands
                                                are mentioned in a single
                                                listing
                                            </li>
                                            <li className="pt-1">
                                                It’s uploaded for the purpose of
                                                bidding
                                            </li>
                                            <li className="pt-1">
                                                Unrelated or excessive hashtags
                                                are used
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="pt-1">
                                        The item's description promotes another
                                        marketplace
                                    </li>
                                    <li className="pt-1">
                                        The item is placed in the wrong catalog
                                        category
                                    </li>
                                    <li className="pt-1">
                                        The pictures are of low quality
                                    </li>
                                </ul>

                                <h1 className="text-3xl mt-6 mb-2 font-semibold">
                                    Deleted listings
                                </h1>
                                <p className="pt-4">
                                    We'll have to delete your listing if:
                                </p>
                                <ul className="pl-4 p-2 list-disc">
                                    <li className="pt-1">
                                        The item isn’t allowed to be sold on
                                        Susty because it is against the Catalog
                                        Rules
                                    </li>
                                    <li className="pt-1">
                                        The item is counterfeit
                                    </li>
                                    <li className="pt-1">
                                        The pictures are taken from another
                                        website, including stock photos
                                    </li>
                                    <li className="pt-1">
                                        The item infringes copyright or any
                                        other intellectual property (IP) rights
                                    </li>
                                    <li className="pt-1">
                                        The item is reproduced without the
                                        copyright/IP holder’s consent
                                    </li>
                                    <li className="pt-1">
                                        The item requires an age-rating label,
                                        but it’s missing
                                    </li>
                                    <li className="pt-1">
                                        The item is made from animal fur,
                                        reptile skin, shells, or ivory
                                    </li>
                                    <li className="pt-1">
                                        It’s uploaded for the purpose of
                                        reselling (i.e. commercial selling)
                                    </li>
                                    <li className="pt-1">
                                        It’s uploaded as a request for the item,
                                        not the item itself
                                    </li>
                                    <li className="pt-1">
                                        The item is listed more than once and is
                                        a duplicate
                                    </li>
                                    <li className="pt-1">
                                        The item promotes terrorism or a
                                        terrorist organization, promotes or
                                        displays violence, discrimination,
                                        hatred, or crime
                                    </li>
                                    <li className="pt-1">
                                        The item poses a risk to children's
                                        health (i.e. car seats, cribs and
                                        cradles, swimming equipment and toys,
                                        baby bottles and other feeding
                                        equipment, etc.,)
                                    </li>
                                    <li className="pt-1">
                                        It’s a cosmetic product or perfume that
                                        has been opened/used or that is not in
                                        its original sealed packaging (this
                                        restriction applies to makeup, cream,
                                        lotion, perfumes and hair care products)
                                    </li>
                                    <li className="pt-1">
                                        Underwear bottoms, bedding, or towels
                                        are listed without explicitly showing
                                        tags and/or original packaging (this
                                        way, it’ll be considered as used)
                                    </li>
                                </ul>

                                <p className="pt-4">
                                    Remember that the same items can’t be listed
                                    twice on Susty. If you have a few items
                                    which are similar or the same, please
                                    consider the following:
                                </p>
                                <ul className="pl-4 p-2 list-disc">
                                    <li className="pt-1">
                                        Create one listing and mention that you
                                        have 2 or more same items in the
                                        description;
                                    </li>
                                    <li className="pt-1">
                                        If you have the same items in different
                                        sizes, take pictures of all items' label
                                        sizes;
                                    </li>
                                    <li className="pt-1">
                                        If you have the same items in similar
                                        colors, use pictures from different
                                        angles and add the color to the
                                        description. Please take good quality
                                        pictures in which the color of the item
                                        is easily separable.
                                    </li>
                                </ul>
                                <p className="pt-4">
                                    Did you see a similar item uploaded by
                                    another member? We are constantly monitoring
                                    the catalog and removing any prohibited
                                    items. However, we don’t always notice them
                                    immediately. It would be a huge help if you
                                    could report listings that violate our
                                    rules.
                                </p>

                                <h1 className="text-xl mt-6 mb-2">
                                    Good to know:
                                </h1>
                                <ul className="pl-4 p-2 list-disc">
                                    <li className="pt-1">
                                        We'll notify you of the reason why we’ve
                                        deleted or hidden your listing.{' '}
                                    </li>
                                    <li className="pt-1">
                                        If we’ve hidden your listing, you can
                                        improve and republish it. Items that
                                        violate our Catalog Rules aren’t
                                        restored.
                                    </li>
                                    <li className="pt-1">
                                        We’ll have no choice but to suspend your
                                        account if you repeatedly do not follow
                                        the Catalog Rules
                                    </li>
                                    <li className="pt-1">
                                        We’ll have to block your account if you
                                        repeatedly act against our Item
                                        authenticity policy.
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
                                            Changing your email address
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
                                    Changing your email address
                                </h1>
                                <p className="pt-4">
                                    To change your email address:
                                </p>
                                <ul className="pl-4 p-2 list-decimal">
                                    <li className="pt-1">
                                        Click on your profile icon
                                    </li>
                                    <li className="pt-1">
                                        Go to Settings, and select Account
                                        settings
                                    </li>
                                    <li className="pt-1">
                                        Choose Change next to your email
                                        address, enter your new email address
                                    </li>
                                    <li className="pt-1">
                                        You’ll then receive a confirmation
                                        message to your new email address — open
                                        the message and hit Confirm this email
                                        there. You’re done!
                                    </li>
                                </ul>

                                <h1 className="text-xl mt-6 mb-2">
                                    Good to know:
                                </h1>
                                <ul className="pl-4 p-2 list-disc">
                                    <li className="pt-1">
                                        The confirmation email is valid for 24
                                        hours. If this time has passed, please
                                        go through the steps described above
                                        once again and you’ll receive a new
                                        confirmation message.
                                    </li>
                                    <li className="pt-1">
                                        The confirmation messages we send you
                                        might end up in the Spam and Junk
                                        folders of your email, so please make
                                        sure to check them as well.
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
                                            Phone number verification not
                                            working
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
                                    Phone number verification not working
                                </h1>
                                <p className="pt-4">
                                    We’re sorry to hear that you’re having
                                    trouble verifying your phone number.Here are
                                    some reasons why the verification may fail
                                    and how to solve it.{' '}
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
                                                            Typos
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
                                                    Double-check if you have
                                                    correctly entered your:
                                                </p>

                                                <ul className="pl-4 p-2 list-disc">
                                                    <li className="pt-1">
                                                        Phone number with a ‘+’
                                                        and country code (use
                                                        ‘+’ instead of ‘00’ and
                                                        leave no spaces)
                                                    </li>
                                                    <li className="pt-1">
                                                        4-digit code (press
                                                        Request code if you made
                                                        a mistake when entering
                                                        the code)
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
                                                            Invalid number
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
                                                    Only American phone numbers
                                                    work with phone
                                                    verification. Landline phone
                                                    numbers are invalid.
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
                                                            Same number used on
                                                            another account
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
                                                    You can have only one
                                                    standard Susty account, so
                                                    only one phone number can be
                                                    used for one account.
                                                </p>
                                                <p className="pt-4">
                                                    If you have a duplicate
                                                    Susty account, please choose
                                                    only one and delete the
                                                    other(s).
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
                                                            Old phone number
                                                            that needs an update
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
                                                    If you have already verified
                                                    a different phone number on
                                                    this account, you can change
                                                    your phone number and use
                                                    the new one.
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
                                                            Connection/
                                                            technical issues
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
                                                        Check if your phone has
                                                        a strong signal and
                                                        proper internet
                                                        connection
                                                    </li>
                                                    <li className="pt-1">
                                                        Restart your phone and
                                                        re-insert your SIM card
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
                                                            None of the above
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
                                                    If the problem persists,
                                                    please Contact us via the
                                                    button below and send us:
                                                </p>
                                                <ul className="pl-4 p-2 list-disc">
                                                    <li className="pt-1">
                                                        A screenshot of the
                                                        error message you
                                                        received
                                                    </li>
                                                    <li className="pt-1">
                                                        Your phone number with
                                                        the international code
                                                    </li>
                                                </ul>
                                                <p className="pt-4">
                                                    We will take a look into
                                                    this issue and get back to
                                                    you.
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

export default SafetyAndReporting
