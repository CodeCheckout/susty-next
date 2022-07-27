import React from 'react';
import {AnimatePresence, motion} from "framer-motion";
import {useRouter} from "next/router";

const ButtonBannerSection = () => {
    const router = useRouter();

    return (
        <div className={`relative mt-10`}>
            <img src="https://firebasestorage.googleapis.com/v0/b/susty-next.appspot.com/o/images%2Fnew-bg-banner.jpg?alt=media&token=279c7c59-9087-4af6-923b-d564626dcca1" alt="Button Banner Image" width={1400} height={1000} className={`w-full h-[24rem] object-fill object-center contrast-200`}/>
            <div className={`absolute left-[1.5rem] sm:left-[14rem] md:left-[20rem] lg:right-[22rem] inset-y-[8rem]`}>
                <div className={`text-4xl md:text-5xl font-semibold text-gray-900 mb-10 text-center`}>Ready to go?</div>
                <AnimatePresence>
                    <div className={`flex flex-row gap-3 justify-center items-center`}>
                        <motion.button
                            onClick={async ()=>{
                                await router.push(`/items`)
                            }}
                            whileHover={{scale: 1.02}}
                            whileTap={{scale: 0.98}}
                            className={`inline-flex items-center px-6 py-3 border border-susty shadow-sm text-sm md:text-base font-medium rounded-md text-white bg-susty hover:bg-white hover:text-susty hover:border-susty focus:text-red-400 focus:border-susty focus:bg-red-50`}
                        >
                            Start Shopping
                        </motion.button>
                        <motion.button
                            onClick={async ()=>{
                                await router.push(`/items/add`)
                            }}
                            whileHover={{scale: 1.02}}
                            whileTap={{scale: 0.98}}
                            className={`inline-flex items-center px-6 py-3 border border-red-300 shadow-sm text-sm md:text-base font-medium rounded-md text-susty bg-red-100 hover:bg-susty hover:text-white hover:border-susty focus:text-red-400 focus:border-susty focus:bg-red-50`}
                        >
                            Start Selling
                        </motion.button>
                    </div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default ButtonBannerSection;