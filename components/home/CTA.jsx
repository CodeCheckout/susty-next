import React, {useState} from 'react'
import {useRouter} from 'next/router'
import {AnimatePresence, motion} from 'framer-motion'

const slidesStaticData = [
    {
        id: 1,
        title: 'Women',
        src: 'https://firebasestorage.googleapis.com/v0/b/susty-next.appspot.com/o/Slide1.png?alt=media&token=54dc1d99-b1f2-4059-a261-a8f2b6be3365',
        alt: 'Women with Cloths Image',
    },
    {
        id: 2,
        title: 'Men',
        src: 'https://firebasestorage.googleapis.com/v0/b/susty-next.appspot.com/o/Slide2.png?alt=media&token=c23cb27e-4493-4084-90b4-740fb58cb2f5',
        alt: 'Mens with Cloths Image',
    },
    {
        id: 3,
        title: 'Kids',
        src: 'https://firebasestorage.googleapis.com/v0/b/susty-next.appspot.com/o/Slide3.png?alt=media&token=11651c89-7afd-4107-934e-74f8e62ea817',
        alt: 'Kids with Cloths Image',
    },
]

const CTA = () => {
    const [slides, setSlides] = useState(slidesStaticData)

    const router = useRouter()

    return (
        <>
            <div className={'hidden lg:block pt-2'}>
                <div className={'grid grid-cols-4 gap-2'}>
                    <div className={'col-span-3'}>
                        <AnimatePresence>
                            <div className="flex flex-col gap-3 w-full">
                                {slides.map((slide) => (
                                    <motion.div
                                        key={slide.id}
                                        whileHover={{
                                            scale: 1.01,
                                        }}
                                        className="relative w-full group bg-gray-800 duration-300 cursor-pointer"
                                        onClick={async () =>
                                            await router.push(`/`)
                                        }
                                    >
                                        <p className="absolute bottom-3 left-16 text-white text-2xl transition ease-in-out delay-150 group-hover:underline group-hover:-translate-y-2">
                                            {slide.title}
                                        </p>
                                        <img
                                            src={slide.src}
                                            className="w-full h-full my-auto object-cover group-hover:opacity-40 transition-opacity"
                                            alt={slide.alt}
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </AnimatePresence>
                    </div>
                    <div className={'col-span-1'}>
                        <div className="bg-white h-full w-full border flex flex-col border-red-300 p-5">
                            <p className="text-4xl font-bold pt-16 mx-auto leading-relaxed">
                                Recycle your
                            </p>
                            <p className="text-4xl font-bold pt-6 mx-auto">
                                Clothes for
                            </p>
                            <p className="text-4xl font-bold py-6 mx-auto">
                                money?
                            </p>
                            <motion.button
                                onClick={async () =>
                                    await router.push(`/items/add`)
                                }
                                whileHover={{scale: 1.02}}
                                whileTap={{scale: 0.98}}
                                className={`inline-flex justify-center items-center capitalize px-4 py-1.5 border border-gray-300 shadow-sm text-base font-medium rounded-md text-white bg-susty hover:bg-white hover:text-susty hover:border-susty focus:text-red-400 focus:border-susty focus:bg-red-50`}
                            >
                                Sell Now
                            </motion.button>
                            <div
                                onClick={async () => await router.push(`/`)}
                                className="text-red-400 underline text-sm pt-10 hover:text-black no-underline"
                            >
                                Learn How it works
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'block lg:hidden px-2 pt-2'}>
                <div className={'grid grid-rows-3 gap-8'}>
                    <div className={'row-span-2'}>
                        <div className="bg-white h-full w-full border flex flex-col border-red-300 p-5">
                            <p className="text-5xl font-bold pt-16 mx-auto leading-relaxed">
                                Recycle your
                            </p>
                            <p className="text-5xl font-bold pt-6 mx-auto">
                                Clothes for
                            </p>
                            <p className="text-5xl font-bold py-6 mx-auto">
                                money?
                            </p>
                            <motion.button
                                onClick={async () =>
                                    await router.push(`/items/add`)
                                }
                                whileHover={{scale: 1.02}}
                                whileTap={{scale: 0.98}}
                                className={`inline-flex justify-center items-center capitalize px-4 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-md text-white bg-susty hover:bg-white hover:text-susty hover:border-susty focus:text-red-400 focus:border-susty focus:bg-red-50`}
                            >
                                Sell Now
                            </motion.button>
                            <div
                                onClick={async () => await router.push(`/`)}
                                className="text-red-400 underline text-sm mt-10 hover:text-black no-underline"
                            >
                                Learn How it works
                            </div>
                        </div>
                    </div>
                    <div className={'row-span-1'}>
                        <AnimatePresence>
                            <div className="flex flex-row gap-3 h-[12rem] w-full">
                                {slides.map((slide) => (
                                    <motion.div
                                        key={slide.id}
                                        whileHover={{
                                            scale: 1.01,
                                        }}
                                        className="relative h-full w-full group bg-gray-800 duration-300 cursor-pointer"
                                        onClick={async () =>
                                            await router.push(`/`)
                                        }
                                    >
                                        <p className="absolute bottom-3 left-16 text-white text-xl sm:text-2xl transition ease-in-out delay-150 group-hover:underline group-hover:-translate-y-2">
                                            {slide.title}
                                        </p>
                                        <img
                                            src={slide.src}
                                            className="w-full h-full object-cover object-center group-hover:opacity-40 transition-opacity"
                                            alt={slide.alt}
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CTA
