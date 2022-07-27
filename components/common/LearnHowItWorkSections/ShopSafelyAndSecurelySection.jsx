import React from 'react';
import BasicPageWrapper from "../../layouts/BasicPageWrapper";
import Link from "next/link";
import {AnimatePresence, motion} from "framer-motion";
import { useRouter } from 'next/router'

const shoppingDetails = [
    {
        id: 1,
        topic: 'Find it',
        src: 'https://firebasestorage.googleapis.com/v0/b/susty-next.appspot.com/o/images%2Ffind-it-image.jpg?alt=media&token=af80607a-db00-4ea8-a891-d9ffb95e9b9a',
        alt: 'Mobile phone on hand',
        content: 'Download the Susty app for free. Browse millions of unique items, search thousands of brands, and find your favourites.'
    },
    {
        id: 2,
        topic: 'Buy it',
        src: 'https://firebasestorage.googleapis.com/v0/b/susty-next.appspot.com/o/images%2Fbuy-it-image.jpg?alt=media&token=263ae9b2-b880-47d4-acff-f0c9ec0022b3',
        alt: 'Lady packing ordered dresses',
        content: 'Ask the seller any questions, then buy with the tap of a button. Pay securely via bank card, or your Susty Balance.'
    },
    {
        id: 3,
        topic: 'Get it',
        src: 'https://firebasestorage.googleapis.com/v0/b/susty-next.appspot.com/o/images%2Fget-it-image.jpg?alt=media&token=55e8f7a6-e7c1-4875-8a45-f0c0feac7b1c',
        alt: 'Delivery handing over to the customer',
        content: 'You’ll see your item’s estimated delivery date at checkout, and we’ll let you know when it’s in the post. In a few days, it’ll be with you.'
    },
];

const ShopSafelyAndSecurelySection = () => {
    const router = useRouter();

    return (
        <BasicPageWrapper>
            <div className={`py-10 text-gray-900 text-3xl sm:text-4xl font-semibold`}>Shop safely and securely</div>
            <div className={`grid grid-cols-1 lg:grid-cols-3 gap-3 items-start`}>
                {shoppingDetails.map((detail) => {
                    return (
                        <div key={detail.id} className={`space-y-5`}>
                            <img src={detail.src} alt={detail.alt} width={200} height={100}
                                 className={`w-full h-full lg:h-56 object-cover`}/>
                            <h3 className={`text-2xl font-semibold`}>{detail.id}.{detail.topic}</h3>
                            <div className={`text-base sm:text-lg lg:text-base text-gray-600`}>{detail.content}</div>
                            <div className={`pt-2 pb-5`}>
                                <Link href={`/helpcenter`}><a className={`text-susty hover:underline`}>Learn more</a></Link>
                            </div>
                        </div>
                    )
                })}
            </div>
            <AnimatePresence>
                <motion.button
                    onClick={async ()=>{
                        await router.push(`/items`)
                    }}
                    whileHover={{scale: 1.02}}
                    whileTap={{scale: 0.98}}
                    className={`flex mx-auto text-center px-4 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-white bg-susty hover:bg-white hover:text-susty hover:border-susty focus:text-red-400 focus:border-susty focus:bg-red-50`}
                >
                    Start Shopping
                </motion.button>
            </AnimatePresence>
            <hr className={`mt-5 md:mt-10 text-gray-500`}/>
        </BasicPageWrapper>
    );
};

export default ShopSafelyAndSecurelySection;