import {Fragment} from 'react'
import {Menu, Transition} from '@headlessui/react'
import {IoNotificationsOutline} from 'react-icons/io5'

const Notification = () => {
    return (
        <div className={''}>
            <>
                <Menu as="div" className="inline-block text-left">
                    <div>
                        <Menu.Button className="inline-flex justify-center w-full text-sm font-medium text-gray-700   focus:ring-indigo-500">
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
                        <Menu.Items className="origin-top-right absolute right-0 mt-1 max-w-sm rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-20">
                            <div className="py-1">
                                <Menu.Item>
                                    <button
                                        type="button"
                                        className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b"
                                    >
                                        <div className="grid  gap- flex items-left">
                                            <div className="mb-2">
                                                <img
                                                    src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
                                                    className="h-18 w-32 rounded-full"
                                                    alt=""
                                                />
                                            </div>
                                        </div>

                                        <div className=" text-sm font-medium text-gray-700 bg-white">
                                            <a
                                                href="#"
                                                className="block w-full px-1 py-2 "
                                            >
                                                Clothes you don't wear = extra
                                                cash. Sell them today. Upload
                                                now.
                                            </a>
                                            <a
                                                href="#"
                                                className="block w-full px-1 py-2 text-left"
                                            >
                                                16 hours ago
                                            </a>
                                        </div>
                                    </button>
                                </Menu.Item>
                                <Menu.Item>
                                    <button
                                        type="button"
                                        className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b"
                                    >
                                        <div className="grid  gap- flex items-left">
                                            <div className="mb-2">
                                                <img
                                                    src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
                                                    className="h-18 w-32 rounded-full"
                                                    alt=""
                                                />
                                            </div>
                                        </div>

                                        <div className=" text-sm font-medium text-gray-700 bg-white">
                                            <a
                                                href="#"
                                                className="block w-full px-1 py-2 "
                                            >
                                                Clothes you don't wear = extra
                                                cash. Sell them today. Upload
                                                now.
                                            </a>
                                            <a
                                                href="#"
                                                className="block w-full px-1 py-2 text-left"
                                            >
                                                16 hours ago
                                            </a>
                                        </div>
                                    </button>
                                </Menu.Item>
                                <Menu.Item>
                                    <button
                                        type="button"
                                        className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b"
                                    >
                                        <div className="grid  gap- flex items-left">
                                            <div className="mb-2">
                                                <img
                                                    src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
                                                    className="h-18 w-32 rounded-full"
                                                    alt=""
                                                />
                                            </div>
                                        </div>

                                        <div className=" text-sm font-medium text-gray-700 bg-white">
                                            <a
                                                href="#"
                                                className="block w-full px-1 py-2 "
                                            >
                                                Clothes you don't wear = extra
                                                cash. Sell them today. Upload
                                                now.
                                            </a>
                                            <a
                                                href="#"
                                                className="block w-full px-1 py-2 text-left"
                                            >
                                                16 hours ago
                                            </a>
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
