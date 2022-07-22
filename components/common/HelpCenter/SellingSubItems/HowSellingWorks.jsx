import React from 'react';
import {Disclosure} from "@headlessui/react";
import {HiChevronRight} from "react-icons/hi";

const HowSellingWorks = () => {
    return (
        <div className={'p-4 bg-white'}>
            <div className=" bg-white text-left">
                <h1 className="text-3xl font-bold mt-0 mb-4">How selling works</h1>
                <div className="text-xs text-gray-500 mb-4">Pick a topic</div>
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
                                    <p className="py-4">In both the description and photos, you should note any defects,
                                        alterations, missing parts, etc., of the item.</p>

                                    <h1 className="text-xl mt-6 mb-2 font-semibold">
                                        Choosing the correct item category
                                    </h1>
                                    <p className="pt-4">
                                        Item categories also determine the shipping options available. So choosing the
                                        correct item will help you choose the right package size!
                                    </p>
                                    <p className="pt-4">
                                        Also, note that the custom shipping and no shipping (meet up and collect) option
                                        is only available for items in the heavy category.
                                    </p>
                                    <p className="pt-4">
                                        Here are a few examples of uploading items to the correct category:
                                    </p>
                                    <ol className="pl-4 p-2 list-disc">
                                        <li className="pt-1">
                                            Curling iron
                                        </li>
                                        <p className="py-3 text-gray-600">Women > Beauty > Beauty tools > Hair styling
                                            tools</p>
                                        <li className="pt-1">
                                            Men's running shoes
                                        </li>
                                        <p className="py-3 text-gray-600">Men > Shoes > Sports shoes > Running</p>
                                        <li className="pt-1">
                                            Decorative cushion
                                        </li>
                                        <p className="py-3 text-gray-600">Home > Textiles > Cushions</p>
                                    </ol>
                                    <p className="py-3">Note that children's books should be uploaded under
                                        ‘Entertainment > Books > Kids & young adults’, not the Kids category.</p>
                                </div>
                                <div>
                                    <h1 className="text-xl mt-6 mb-2">
                                        Good to know:
                                    </h1>
                                    <ul className="pl-4 p-2 list-disc">
                                        <li className="pt-1">
                                            You can only sell books with an ISBN — a 10 or 13-digit number found above
                                            the book’s barcode. The barcode is usually on the back cover or one of the
                                            final pages of the book.
                                        </li>
                                        <li className="pt-1">
                                            For items that require an age-rating label (like video games), make sure
                                            that the photo displays such labeling.
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
                                            Selling step-by-step
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
                                    Selling step-by-step
                                </h1>
                                <div>
                                    <h1 className="text-3xl mt-6 mb-2 font-semibold">
                                        1. Build a trusted profile, adjust your jewelry settings
                                    </h1>
                                    <ul className="pl-4 p-2 list-decimal">
                                        <li className="pt-1">
                                            Add your profile picture and verify your account to show you’re a real
                                            person.
                                        </li>
                                        <li className="pt-1">
                                            Write something about yourself in the About you section.
                                        </li>
                                        <li className="pt-1">
                                            If you wish to exclude certain carriers from your listings, adjust your
                                            shipping
                                            options.
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h1 className="text-xl mt-6 mb-2">
                                        2. List your items
                                    </h1>
                                    <ul className="pl-4 p-2 list-disc">
                                        <li className="pt-1">
                                            Find out what you can sell on Susty.
                                        </li>
                                        <li className="pt-1">
                                            Add a few clear, nice photos of the item. If it’s an item from a well-known
                                            brand, you should add at least 5 pictures of it to show its authenticity.
                                        </li>
                                        <li className="pt-1">
                                            Be specific and honest in the item's description and select the correct
                                            package
                                            size.
                                        </li>
                                        <li className="pt-1">
                                            Remember that listing has no fees, and uploading more items can help you
                                            sell
                                            faster.
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h1 className="text-xl mt-6 mb-2">
                                        3. While you wait for buyers
                                    </h1>
                                    <ul className="pl-4 p-2 list-disc">
                                        <li className="pt-1">
                                            Get noticed — bump your items and use Closet Spotlight to boost your
                                            wardrobe’s visibility.
                                        </li>
                                        <li className="pt-1">
                                            You can sell more items through a bundle sale (it’s possible to set
                                            discounts for item bundles).
                                        </li>
                                        <li className="pt-1">
                                            Once a buyer contacts you, use the Make an offer button to suggest a better
                                            price for a single item.
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h1 className="text-xl mt-6 mb-2">
                                        4. It’s sold! Time to ship
                                    </h1>
                                    <ul className="pl-4 p-2 list-disc">
                                        <li className="pt-1">
                                            Pack your item. A personal touch is always nice.
                                        </li>
                                        <li className="pt-1">
                                            Ship the item within 5 working days of the sale.
                                        </li>
                                        <li className="pt-1">
                                            Use the shipping option your buyer has chosen to avoid issues with package
                                            tracking or order cancellation.
                                        </li>
                                        <li className="pt-1">
                                            You can track your package on Susty.
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h1 className="text-xl mt-6 mb-2">
                                        5. Delivered! Get your earnings and leave feedback
                                    </h1>
                                    <ul className="pl-4 p-2 list-disc">
                                        <li className="pt-1">
                                            As soon as the buyer presses Everything is OK, your payment will become
                                            available in your Susty balance.
                                        </li>
                                        <li className="pt-1">
                                            Payouts may take up to 5 working days to appear in your bank account.
                                        </li>
                                        <li className="pt-1">
                                            Leave feedback for your buyers and help to build trust within the community.
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h1 className="text-xl mt-6 mb-2">
                                        Good to know
                                    </h1>
                                    <ul className="pl-4 p-2 list-disc">
                                        <li className="pt-1">
                                            If you experience improper behavior, harassment or spam activities from
                                            other members, report it so we can immediately put a stop to it.
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
                                            Is selling on Susty free?
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
                                    Is selling on Susty free?
                                </h1>
                                <p className="pt-4">
                                    There are no fees for uploading your items or selling them on Susty. This means
                                    once your sale is successfully closed, you’ll receive the full selling price
                                    straight to your Susty Wallet.
                                </p>
                                <p className='text-susty'>Start Selling!</p>
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

                                <ul className="pl-4 p-2 list-decimal">
                                    <li className="pt-1">
                                        Women’s, men’s, and children’s clothing, footwear, and accessories
                                    </li>
                                    <li className="pt-1">
                                        Children’s toys, furniture, and childcare equipment
                                    </li>
                                    <li className="pt-1">
                                        New cosmetics, perfumes, and other beauty products or gadgets
                                    </li>
                                    <li className="pt-1">
                                        Small tech accessories (e.g., headphones, smartwatches, phone cases)
                                    </li>
                                    <li className="pt-1">
                                        Homeware
                                    </li>
                                    <li className="pt-1">
                                        Entertainment goods
                                    </li>
                                </ul>
                                <div>
                                    <h1 className="text-xl mt-6 mb-2 font-semibold">
                                        What you cannot sell
                                    </h1>
                                    <ul className="pl-4 p-2 list-disc">
                                        <li className="pt-1">
                                            Items that do not comply with applicable laws
                                        </li>
                                        <li className="pt-1">
                                            Counterfeits and items that infringe on copyright or intellectual property
                                            (IP) rights
                                        </li>
                                        <li className="pt-1">
                                            Creative works reproduced without the copyright/IP holder’s consent (e.g.,
                                            books, movies, music, video games)
                                        </li>
                                        <li className="pt-1">
                                            Items subject to age-rating classification with the age-rating labels
                                            missing (e.g., video games, movies)
                                        </li>
                                        <li className="pt-1">
                                            Food, drinks, and other perishables
                                        </li>
                                        <li className="pt-1">
                                            Detergents and cleaning chemicals
                                        </li>
                                        <li className="pt-1">
                                            Medications, professional medical supplies, prescription products, vitamins,
                                            and food supplements
                                        </li>
                                        <li className="pt-1">
                                            Live animals and pets
                                        </li>
                                        <li className="pt-1">
                                            Items for pets, wild animals, or farm animals
                                        </li>
                                        <li className="pt-1">
                                            Items that promote or display violence, discrimination, hatred, crime,
                                            terrorism, or a terrorist organization
                                        </li>
                                        <li className="pt-1">
                                            Items received for free, such as promotional or complimentary items
                                        </li>
                                        <li className="pt-1">
                                            Items that do not comply with hygiene standards, or pose risk to one’s
                                            health (e.g., used cosmetics, underwear bottoms, bedding, towels, piercings,
                                            etc.,)
                                        </li>
                                        <li className="pt-1">
                                            Animal fur, reptile skin, shell, or ivory products
                                        </li>
                                        <li className="pt-1">
                                            Electronic and high-tech products
                                        </li>
                                        <li className="pt-1">
                                            Music and sports equipment for adults
                                        </li>
                                        <li className="pt-1">
                                            EKitchen tools or accessories used to make and store food
                                        </li>
                                        <li className="pt-1">
                                            Furniture for adults, and garden or power tools
                                        </li>
                                        <li className="pt-1">
                                            Recalled products
                                        </li>
                                    </ul>
                                </div>
                                <div className='py-5'>
                                    <p className='text-base font-semibold'>Did you see a similar item uploaded by another member?</p>
                                    <p className='text-base pt-4'>We are constantly monitoring the catalog and removing any prohibited items. However, we don’t always notice them immediately. It would be a huge help if you could report listings that violate our rules.</p>
                                </div>
                                <div className='py-5'>
                                    <p className='text-base font-semibold'>Make sure your items are clean</p>
                                    <p className='text-base pt-4'>In general, all items that you put on sale should be clean. We recommend washing or disinfecting them in a way suitable to the item’s material.</p>
                                    <p className='text-base pt-4'>Any stains, defects, or similar flaws that don’t wash off must be mentioned in the item’s description. Please be aware that if they’re not noted, we may have to cancel the order.</p>
                                </div>
                                <div className='py-5'>
                                    <p className='text-base font-semibold'>Make sure your electronics are safe to use</p>
                                    <p className='text-base pt-4'>Damaged electrical devices are a health risk. If your socket-plug or battery-powered device gives off heat and has frayed or loose cables (or any other damage), it cannot be sold.</p>
                                </div>
                                <div className='py-5'>
                                    <p className='text-base font-semibold'>Prohibited items and refunds</p>
                                    <p className='text-base pt-4'>We cannot refund the cost of Bumps, Closet Spotlights, or bundles if they include prohibited items that we’ve had to hide or delete.</p>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </div>
    );
};

export default HowSellingWorks;