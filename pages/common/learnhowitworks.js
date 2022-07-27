import React from 'react'
import SellingIsSimpleSection from '../../components/common/LearnHowItWorkSections/SellingIsSimpleSection'
import ShopSafelyAndSecurelySection from '../../components/common/LearnHowItWorkSections/ShopSafelyAndSecurelySection'
import YouAreSafeWithUsSection from '../../components/common/LearnHowItWorkSections/YouAreSafeWithUsSection'
import ButtonBannerSection from '../../components/common/LearnHowItWorkSections/ButtonBannerSection'

const LearnHowItWorks = () => {
    return (
        <div>
            <div className={'sm:flex sm:flex-col'}>
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/susty-next.appspot.com/o/images%2Fonline-shopping-banner-learn-how-it-works.jpg?alt=media&token=3120078b-d54e-4f1c-b67e-756c5596255e"
                    alt="Learn how it works banner"
                    width={280}
                    height={100}
                    className={`block w-[40rem] h-[20rem] md:w-[90rem] md:h-[35rem] object-contain object-center md:object-contain md:object-right`}
                />
                <div
                    className={`relative left-[0.5rem] -right-[2rem] top-5 sm:top-10 md:absolute md:left-10 md:inset-y-44 p-8 text-base sm:text-lg md:text-3xl font-bold text-gray-800 text-center capitalize border-4 border-red-300 w-[35rem] bg-gradient-to-r from-red-100 to-zinc-50`}
                >
                    <p className={`pb-5 leading-relaxed`}>
                        Susty is your best platform for pre-owned and brand new
                        pieces you'll love
                    </p>
                    <div
                        className={`text-xs sm:text-sm text-gray-600 font-medium`}
                    >
                        One community, thousands of brands, and a whole lot of
                        second-hand style. Ready to get started? Here’s how it
                        works.
                    </div>
                </div>
            </div>
            <SellingIsSimpleSection />
            <ShopSafelyAndSecurelySection />
            <YouAreSafeWithUsSection />
            <ButtonBannerSection />
        </div>
    )
}

export default LearnHowItWorks
