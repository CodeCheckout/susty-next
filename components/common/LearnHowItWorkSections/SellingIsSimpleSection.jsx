import React from 'react'
import BasicPageWrapper from '../../layouts/BasicPageWrapper'
import Link from 'next/link'
import {AnimatePresence, motion} from 'framer-motion'
import {useRouter} from 'next/router'

const sellingDetails = [
    {
        id: 1,
        topic: 'List for free',
        src: 'https://firebasestorage.googleapis.com/v0/b/susty-next.appspot.com/o/images%2Flist-it-image.jpg?alt=media&token=9016ede1-de62-441e-8eeb-0cc0717c740a',
        alt: 'Mobile phone with susty website',
        content:
            'Download the Susty app for free. Take photos of your item, describe it, and set your price. Tap “Upload” and your listing is live.',
    },
    {
        id: 2,
        topic: 'Sell it, ship it',
        src: 'https://firebasestorage.googleapis.com/v0/b/susty-next.appspot.com/o/images%2Fsell-it-dress.jpg?alt=media&token=7fa8c965-5295-44ee-8f0b-1f7edb8f51e9',
        alt: 'Lady packing ordered dresses',
        content:
            'Sold! Box your item, print your prepaid shipping label, and pop to the drop-off point within 5 days.',
    },
    {
        id: 3,
        topic: 'It’s payday!',
        src: 'https://firebasestorage.googleapis.com/v0/b/susty-next.appspot.com/o/images%2Fpay-day-image.jpg?alt=media&token=1edf7921-9158-431d-a627-7462932a2846',
        alt: 'Delivery handing over to the customer',
        content:
            'There are zero selling fees, so what you earn is yours to keep. You’ll be paid as soon as the buyer confirms everything’s OK.',
    },
]

const SellingIsSimpleSection = () => {
    const router = useRouter()

    return (
        <BasicPageWrapper>
            <div
                className={`py-10 text-gray-900 text-3xl sm:text-4xl font-semibold`}
            >
                Selling is simple
            </div>
            <div
                className={`grid grid-cols-1 lg:grid-cols-3 gap-3 items-start`}
            >
                {sellingDetails.map((detail) => {
                    return (
                        <div key={detail.id} className={`space-y-5`}>
                            <img
                                src={detail.src}
                                alt={detail.alt}
                                width={200}
                                height={100}
                                className={`w-full h-full lg:h-56 object-cover`}
                            />
                            <h3 className={`text-2xl font-semibold`}>
                                {detail.id}.{detail.topic}
                            </h3>
                            <div
                                className={`text-base sm:text-lg lg:text-base text-gray-600`}
                            >
                                {detail.content}
                            </div>
                            <div className={`pt-2 pb-5`}>
                                <Link href={`/helpcenter`}>
                                    <a className={`text-susty hover:underline`}>
                                        Learn more
                                    </a>
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>
            <AnimatePresence>
                <motion.button
                    onClick={async () => {
                        await router.push(`/items/add`)
                    }}
                    whileHover={{scale: 1.02}}
                    whileTap={{scale: 0.98}}
                    className={`flex mx-auto text-center px-4 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-white bg-susty hover:bg-white hover:text-susty hover:border-susty focus:text-red-400 focus:border-susty focus:bg-red-50`}
                >
                    Start Selling
                </motion.button>
            </AnimatePresence>
            <hr className={`mt-5 md:mt-10 text-gray-500`} />
        </BasicPageWrapper>
    )
}

export default SellingIsSimpleSection
