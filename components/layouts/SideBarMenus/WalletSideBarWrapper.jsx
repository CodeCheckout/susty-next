import React, {Fragment} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const WalletSideBarWrapper = ({
    arrayElements,
    sidebarOpen,
    sidebarElement,
    selectedItem,
    setSidebarOpen,
    setSidebarElement,
    setSelectedItem,
}) => {
    return (
        <div className={'lg:mx-44 min-h-max'}>
            <div className="h-full overflow-hidden">
                <div className="flex ">
                    <Transition.Root show={sidebarOpen} as={Fragment}>
                        <Dialog
                            as="div"
                            className="fixed inset-0 flex z-40 lg:hidden"
                            onClose={setSidebarOpen}
                        >
                            <Transition.Child
                                as={Fragment}
                                enter="transition-opacity ease-linear duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="transition-opacity ease-linear duration-300"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                            </Transition.Child>
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white focus:outline-none">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-300"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute top-0 right-0 -mr-12 pt-2">
                                            <button
                                                type="button"
                                                className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                                onClick={() =>
                                                    setSidebarOpen(false)
                                                }
                                            >
                                                <span className="sr-only">
                                                    Close sidebar
                                                </span>
                                                <AiOutlineClose
                                                    className="h-6 w-6 text-white"
                                                    aria-hidden="true"
                                                />
                                            </button>
                                        </div>
                                    </Transition.Child>
                                    <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                                        <div className="flex-shrink-0 flex items-center px-4">
                                            <p className="font-semibold text-xl">
                                                Wallet
                                            </p>
                                        </div>
                                        <nav
                                            aria-label="Sidebar"
                                            className="mt-5"
                                        >
                                            <div className="px-2 space-y-1 text-lg">
                                                {arrayElements.map(
                                                    (item, idx) => (
                                                        <a
                                                            key={item.name}
                                                            //   href={item.href}
                                                            onClick={() => {
                                                                setSidebarElement(
                                                                    item.component
                                                                )
                                                                setSelectedItem(
                                                                    idx
                                                                )
                                                                setSidebarOpen(
                                                                    false
                                                                )
                                                            }}
                                                            className={classNames(
                                                                selectedItem ===
                                                                    idx
                                                                    ? 'text-gray-900 font-semibold cursor-pointer'
                                                                    : 'text-gray-500 hover:bg-gray-200 ',
                                                                'group flex items-center px-5 py-2 rounded-md cursor-pointer'
                                                            )}
                                                        >
                                                            {item.name}
                                                        </a>
                                                    )
                                                )}
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                            </Transition.Child>
                            <div
                                className="flex-shrink-0 w-14"
                                aria-hidden="true"
                            >
                                {/* Force sidebar to shrink to fit close icon */}
                            </div>
                        </Dialog>
                    </Transition.Root>
                    {/* Static sidebar for desktop */}
                    <div className="hidden lg:block lg:flex-shrink-0 min-h-screen">
                        <div className="flex flex-col w-64">
                            {/* Sidebar component, swap this element with another sidebar if you like */}
                            <div className="flex-1 flex flex-col min-h-full">
                                <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto ">
                                    <div className="flex items-center flex-shrink-0 px-4">
                                        <p className="font-semibold text-2xl">
                                            Wallet
                                        </p>
                                    </div>
                                    <nav className="mt-5" aria-label="Sidebar">
                                        <div className="px-4 space-y-4">
                                            {arrayElements.map((item, idx) => (
                                                <a
                                                    key={item.name}
                                                    // href={item.href}
                                                    onClick={() => {
                                                        setSidebarElement(
                                                            item.component
                                                        )
                                                        setSelectedItem(idx)
                                                    }}
                                                    className={classNames(
                                                        selectedItem === idx
                                                            ? 'text-gray-800 font-semibold cursor-pointer'
                                                            : 'text-gray-500 hover:bg-gray-200 ',
                                                        'group flex items-center px-5 py-2 cursor-pointer'
                                                    )}
                                                >
                                                    {item.name}
                                                </a>
                                            ))}
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col min-w-0 flex-1">
                        <div className="block lg:hidden">
                            <div className="flex items-center justify-between bg-gray-50 border-b border-gray-200 px-4 py-1.5">
                                <div className="text-gray-800 font-normal text-xl capitalize">
                                    Wallet
                                </div>
                                <div>
                                    <button
                                        type="button"
                                        className="-mr-3 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900"
                                        onClick={() => setSidebarOpen(true)}
                                    >
                                        <span className="sr-only">
                                            Open sidebar
                                        </span>
                                        <AiOutlineMenu
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 relative z-0 flex">
                            <main className="flex-1 relative z-0 focus:outline-none xl:order-last">
                                {/* Start main area*/}

                                <div className="inset-0 px-4 sm:px-6 lg:px-8 overflow-y-auto scrollbar-hide">
                                    {sidebarElement}
                                </div>
                                {/* End main area */}
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WalletSideBarWrapper
