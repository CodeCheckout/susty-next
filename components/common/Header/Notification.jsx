import {Fragment} from 'react'
import {Menu, Transition} from '@headlessui/react'
import {IoNotificationsOutline} from 'react-icons/io5'

const Notification = () => {
    return (
        <div>
            <>
                <Menu as="div" className="inline-block text-left">
                    <div>
                        <Menu.Button className="inline-flex justify-center w-full text-sm font-medium text-gray-700 focus:ring-indigo-500">
                            <IoNotificationsOutline
                                color="#a3a3a3"
                                className="w-6 h-6 hover:text-red-400 focus:text-red-400 cursor-pointer"
                            />
                        </Menu.Button>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute left-1/4 sm:left-1/2 mt-1 max-w-sm rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-20">
                            <div className="py-1">
                                <Menu.Item>
                                    <button
                                        type="button"
                                        className="relative inline-flex items-center w-full px-2 sm:px-4 py-2 text-sm font-medium border-b"
                                    >
                                        <div className="flex flex-row gap-0.5 items-left">
                                            <div className="mb-2">
                                                <img
                                                    src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
                                                    className="h-10 sm:h-14 w-20 rounded-full"
                                                    height={20}
                                                    width={20}
                                                    alt="Notification Image"
                                                />
                                            </div>
                                            <div className="flex flex-col text-sm font-medium text-gray-700 bg-white">
                                                <div className="block w-full px-1 py-2 ">
                                                    Clothes you don't wear =
                                                    extra cash. Sell them today.
                                                    Upload now.
                                                </div>
                                                <div className="block w-full px-4 py-1 text-gray-500 text-left">
                                                    16 hours ago
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                </Menu.Item>
                                <Menu.Item>
                                    <button
                                        type="button"
                                        className="relative inline-flex items-center w-full px-2 sm:px-4 py-2 text-sm font-medium border-b"
                                    >
                                        <div className="flex flex-row gap-0.5 items-left">
                                            <div className="mb-2">
                                                <img
                                                    src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
                                                    className="h-10 sm:h-14 w-20 rounded-full"
                                                    height={20}
                                                    width={20}
                                                    alt="Notification Image"
                                                />
                                            </div>
                                            <div className="flex flex-col text-sm font-medium text-gray-700 bg-white">
                                                <div className="block w-full px-1 py-2 ">
                                                    Clothes you don't wear =
                                                    extra cash. Sell them today.
                                                    Upload now.
                                                </div>
                                                <div className="block w-full px-4 py-1 text-gray-500 text-left">
                                                    16 hours ago
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                </Menu.Item>
                                <Menu.Item>
                                    <button
                                        type="button"
                                        className="relative inline-flex items-center w-full px-2 sm:px-4 py-2 text-sm font-medium border-b"
                                    >
                                        <div className="flex flex-row gap-0.5 items-left">
                                            <div className="mb-2">
                                                <img
                                                    src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
                                                    className="h-10 sm:h-14 w-20 rounded-full"
                                                    height={20}
                                                    width={20}
                                                    alt="Notification Image"
                                                />
                                            </div>
                                            <div className="flex flex-col text-sm font-medium text-gray-700 bg-white">
                                                <div className="block w-full px-1 py-2 ">
                                                    Clothes you don't wear =
                                                    extra cash. Sell them today.
                                                    Upload now.
                                                </div>
                                                <div className="block w-full px-4 py-1 text-gray-500 text-left">
                                                    16 hours ago
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                </Menu.Item>
                                <form
                                    method="POST"
                                    action="#"
                                    className="pt-3 pb-1 flex justify-center"
                                >
                                    <Menu.Item>
                                        <button
                                            type="submit"
                                            className="bg-transparent hover:bg-susty text-red-500 font-semibold hover:text-white py-2 px-4 border border-susty hover:border-transparent rounded"
                                        >
                                            See All
                                        </button>
                                    </Menu.Item>
                                </form>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </>
        </div>
    )
}

export default Notification
