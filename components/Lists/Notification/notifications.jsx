import React, {useEffect, useState} from 'react'

const Notifications = () => {
    return (
        <>
            <div className={'bg-gray-100'}>
                <div className="  flex justify-center xl:pt-750">
                    <div className=" max-w-2xl bg-white text-gray-900 text-gray-700">
                        <div className="text-center text-xl font-medium">
                            {' '}
                            Notifications
                        </div>
                        <button
                            type="button"
                            className="relative inline-flex w-full items-center border-b px-4 py-2 text-sm font-medium"
                        >
                            <div className="items-left flex grid grid-cols-2 gap-1">
                                <div className="mb-4">
                                    <img
                                        src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
                                        className="h-20 w-20 rounded-full"
                                        alt=""
                                    />
                                </div>
                            </div>

                            <div className=" bg-white text-sm font-medium text-gray-700">
                                <a href="#" className="block w-full px-1 py-2 ">
                                    Clothes you don't wear = extra cash. Sell
                                    them today. Upload now.
                                </a>
                                <a
                                    href="#"
                                    className="block w-full px-1 py-2 text-left"
                                >
                                    16 hours ago
                                </a>
                            </div>
                        </button>
                        <button
                            type="button"
                            className="relative inline-flex w-full items-center border-b px-4 py-2 text-sm font-medium"
                        >
                            <div className="items-left flex grid grid-cols-2 gap-1">
                                <div className="mb-4">
                                    <img
                                        src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
                                        className="h-20 w-20 rounded-full"
                                        alt=""
                                    />
                                </div>
                            </div>

                            <div className=" bg-white text-sm font-medium text-gray-700">
                                <a href="#" className="block w-full px-1 py-2 ">
                                    Clothes you don't wear = extra cash. Sell
                                    them today. Upload now.
                                </a>
                                <a
                                    href="#"
                                    className="block w-full px-1 py-2 text-left"
                                >
                                    16 hours ago
                                </a>
                            </div>
                        </button>
                        <button
                            type="button"
                            className="relative inline-flex w-full items-center border-b px-4 py-2 text-sm font-medium"
                        >
                            <div className="items-left flex grid grid-cols-2 gap-1">
                                <div className="mb-4">
                                    <img
                                        src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
                                        className="h-20 w-20 rounded-full"
                                        alt=""
                                    />
                                </div>
                            </div>

                            <div className=" bg-white text-sm font-medium text-gray-700">
                                <a href="#" className="block w-full px-1 py-2 ">
                                    Clothes you don't wear = extra cash. Sell
                                    them today. Upload now.
                                </a>
                                <a
                                    href="#"
                                    className="block w-full px-1 py-2 text-left"
                                >
                                    16 hours ago
                                </a>
                            </div>
                        </button>
                        <button
                            type="button"
                            className="relative inline-flex w-full items-center border-b px-4 py-2 text-sm font-medium"
                        >
                            <div className="items-left flex grid grid-cols-2 gap-1">
                                <div className="mb-4">
                                    <img
                                        src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
                                        className="h-20 w-20 rounded-full"
                                        alt=""
                                    />
                                </div>
                            </div>

                            <div className=" bg-white text-sm font-medium text-gray-700">
                                <a href="#" className="block w-full px-1 py-2 ">
                                    Clothes you don't wear = extra cash. Sell
                                    them today. Upload now.
                                </a>
                                <a
                                    href="#"
                                    className="block w-full px-1 py-2 text-left"
                                >
                                    16 hours ago
                                </a>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Notifications
