import React from 'react'
import {useRouter} from 'next/router'

const CTA = () => {
    const router = useRouter()

    const slides = {
        women: 'https://firebasestorage.googleapis.com/v0/b/susty-next.appspot.com/o/Slide1.png?alt=media&token=54dc1d99-b1f2-4059-a261-a8f2b6be3365',
        men: 'https://firebasestorage.googleapis.com/v0/b/susty-next.appspot.com/o/Slide2.png?alt=media&token=c23cb27e-4493-4084-90b4-740fb58cb2f5',
        kids: 'https://firebasestorage.googleapis.com/v0/b/susty-next.appspot.com/o/Slide3.png?alt=media&token=11651c89-7afd-4107-934e-74f8e62ea817',
    }

    return (
        <>
            <div className={'hidden lg:block px-20'}>
                <div className={'grid grid-cols-4 gap-2'}>
                    <div className={'col-span-3'}>
                        <div className="flex flex-col gap-3 w-full">
                            <div
                                className="relative w-full group bg-gray-800 duration-300 cursor-pointer"
                                onClick={async () => await router.push(`/`)}
                            >
                                <p className="absolute bottom-3 left-16 text-white text-2xl transition ease-in-out delay-150 group-hover:underline group-hover:-translate-y-2">
                                    Women
                                </p>
                                <img
                                    src={slides.women}
                                    className="w-full h-full my-auto object-cover group-hover:opacity-40 transition-opacity"
                                    alt="Logo"
                                />
                            </div>
                            <div
                                className="relative w-full group bg-gray-800 duration-300 cursor-pointer"
                                onClick={async () => await router.push(`/`)}
                            >
                                <p className="absolute bottom-3 left-16 text-white text-2xl transition ease-in-out delay-150 group-hover:underline group-hover:-translate-y-2">
                                    Men
                                </p>
                                <img
                                    src={slides.men}
                                    className="w-full h-full my-auto object-cover group-hover:opacity-40 transition-opacity "
                                    alt="Logo"
                                />
                            </div>
                            <div
                                className="relative w-full group bg-gray-800 duration-300 cursor-pointer"
                                onClick={async () => await router.push(`/`)}
                            >
                                <p className="absolute bottom-3 left-16 text-white text-2xl transition ease-in-out delay-150 group-hover:underline group-hover:-translate-y-2">
                                    Kids
                                </p>
                                <img
                                    src={slides.kids}
                                    className="w-full h-full my-auto object-cover group-hover:opacity-40 transition-opacity"
                                    alt="Logo"
                                />
                            </div>
                        </div>
                    </div>
                    <div className={'col-span-1'}>
                        <div className="bg-white h-full w-full border flex flex-col border-red-300 p-5">
                            <p className="text-5xl font-bold lg:pt-32 mx-auto">
                                Recycle your
                            </p>
                            <p className="text-5xl font-bold pt-6 mx-auto">
                                Clothes for
                            </p>
                            <p className="text-5xl font-bold pt-6 mx-auto">
                                money?
                            </p>
                            <button
                                onClick={async () => await router.push(`/items/add`)}
                                className={
                                    'px-4 py-3 mt-auto w-full text-xl bg-red-400 hover:bg-red-50 focus:bg-white text-white hover:text-red-400 focus:text-black border border-red-400 hover:border-red-400 focus:border-black'
                                }
                            >
                                Sell Now
                            </button>
                            <div
                                onClick={async () => await router.push(`/`)}
                                className="text-red-400 underline text-lg mt-10 hover:text-black no-underline"
                            >
                                Learn How it works
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'block lg:hidden mt-6'}>
                <div className={'grid grid-rows-3 gap-8'}>
                    <div className={'row-span-2'}>
                        <div className="bg-white h-full w-full border flex flex-col border-red-300 p-5">
                            <p className="text-5xl font-bold pt-16 mx-auto">
                                Recycle your
                            </p>
                            <p className="text-5xl font-bold pt-6 mx-auto">
                                Clothes for
                            </p>
                            <p className="text-5xl font-bold py-6 mx-auto">
                                money?
                            </p>
                            <button
                                onClick={async () => await router.push(`/`)}
                                className={
                                    'px-4 py-3 mt-auto w-full text-xl bg-red-400 hover:bg-red-50 focus:bg-white text-white hover:text-red-400 focus:text-black border border-red-400 hover:border-red-400 focus:border-black'
                                }
                            >
                                Sell Now
                            </button>
                            <div
                                onClick={async () => await router.push(`/`)}
                                className="text-red-400 underline text-lg mt-10 hover:text-black no-underline"
                            >
                                Learn How it works
                            </div>
                        </div>
                    </div>
                    <div className={'row-span-1'}>
                        <div className="flex flex-row gap-3 h-full w-full">
                            <div
                                className="relative h-full w-full group bg-gray-800 duration-300 cursor-pointer"
                                onClick={async () => await router.push(`/`)}
                            >
                                <p className="absolute bottom-3 left-16 text-white text-2xl transition ease-in-out delay-150 group-hover:underline group-hover:-translate-y-2">
                                    Women
                                </p>
                                <img
                                    src={slides.women}
                                    className="w-full h-full object-cover object-left group-hover:opacity-40 transition-opacity"
                                    alt="Logo"
                                />
                            </div>
                            <div
                                className="relative h-full w-full group bg-gray-800 duration-300 cursor-pointer"
                                onClick={async () => await router.push(`/`)}
                            >
                                <p className="absolute bottom-3 left-16 text-white text-2xl transition ease-in-out delay-150 group-hover:underline group-hover:-translate-y-2">
                                    Men
                                </p>
                                <img
                                    src={slides.men}
                                    className="w-full h-full object-cover group-hover:opacity-40 transition-opacity"
                                    alt="Logo"
                                />
                            </div>
                            <div
                                className="relative h-full w-full group bg-gray-800 duration-300 cursor-pointer"
                                onClick={async () => await router.push(`/`)}
                            >
                                <p className="absolute bottom-3 left-16 text-white text-2xl transition ease-in-out delay-150 group-hover:underline group-hover:-translate-y-2">
                                    Kids
                                </p>
                                <img
                                    src={slides.kids}
                                    className="w-full h-full object-cover group-hover:opacity-40 transition-opacity"
                                    alt="Logo"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CTA
