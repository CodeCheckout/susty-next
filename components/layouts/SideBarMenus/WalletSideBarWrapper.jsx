import React, { Fragment } from 'react';
import { Dialog, Disclosure, Transition } from '@headlessui/react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
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
        <div className={'min-h-max lg:mx-44'}>
            <div className="h-full overflow-hidden">
                <div className="flex ">
                    <Transition.Root show={sidebarOpen} as={Fragment}>
                        <Dialog
                            as="div"
                            className="fixed inset-0 z-40 flex lg:hidden"
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
                                <div className="relative flex w-full max-w-xs flex-1 flex-col bg-white focus:outline-none">
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
                                                className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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
                                    <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                                        <div className="flex flex-shrink-0 items-center px-4">
                                            <p className="text-xl font-semibold">
                                                Wallet
                                            </p>
                                        </div>
                                        <nav
                                            aria-label="Sidebar"
                                            className="mt-5"
                                        >
                                            <div className="space-y-1 px-2 text-lg">
                                                {arrayElements.map(
                                                    (item, idx) => (
                                                        <div key={item.id}>
                                                            <Disclosure>
                                                                {({ open }) => (
                                                                    <>
                                                                        <Disclosure.Button
                                                                            key={
                                                                                item.name
                                                                            }
                                                                            onClick={() => {
                                                                                setSidebarElement(
                                                                                    item.component
                                                                                );
                                                                                setSelectedItem(
                                                                                    item.id
                                                                                );
                                                                            }}
                                                                            className={classNames(
                                                                                selectedItem ===
                                                                                    item.id
                                                                                    ? 'cursor-pointer font-semibold text-gray-700'
                                                                                    : 'text-gray-500 hover:bg-gray-200 ',
                                                                                'group flex cursor-pointer items-center px-5 py-2'
                                                                            )}
                                                                        >
                                                                            {
                                                                                item.name
                                                                            }
                                                                        </Disclosure.Button>

                                                                        <Disclosure.Panel className="pl-6 text-sm">
                                                                            {item.subItems &&
                                                                                item.subItems.map(
                                                                                    (
                                                                                        subItem,
                                                                                        idx
                                                                                    ) =>  (
                                                                                            <div key={subItem.id}>
                                                                                                {subItem.id && (
                                                                                                    <div
                                                                                                        key={
                                                                                                            subItem.id
                                                                                                        }
                                                                                                    >
                                                                                                        <div
                                                                                                            onClick={() => {
                                                                                                                setSidebarElement(
                                                                                                                    subItem.component
                                                                                                                );
                                                                                                                setSelectedItem(
                                                                                                                    subItem.id
                                                                                                                );
                                                                                                            }}
                                                                                                            className={classNames(
                                                                                                                selectedItem ===
                                                                                                                    subItem.id
                                                                                                                    ? 'cursor-pointer font-semibold text-gray-700'
                                                                                                                    : 'text-gray-500 hover:bg-slate-200 ',
                                                                                                                'group flex cursor-pointer items-center rounded-md px-4 py-2'
                                                                                                            )}
                                                                                                        >
                                                                                                            <div>
                                                                                                                <p className="cursor-pointer text-left text-gray-500 transition ease-in-out">
                                                                                                                    {
                                                                                                                        subItem.name
                                                                                                                    }
                                                                                                                </p>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                )}
                                                                                            </div>
                                                                                        )
                                                                                    
                                                                                )}
                                                                        </Disclosure.Panel>
                                                                    </>
                                                                )}
                                                            </Disclosure>
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                            </Transition.Child>
                            <div
                                className="w-14 flex-shrink-0"
                                aria-hidden="true"
                            >
                                {/* Force sidebar to shrink to fit close icon */}
                            </div>
                        </Dialog>
                    </Transition.Root>
                    {/* Static sidebar for desktop */}
                    <div className="hidden min-h-screen lg:block lg:flex-shrink-0">
                        <div className="flex w-64 flex-col">
                            {/* Sidebar component, swap this element with another sidebar if you like */}
                            <div className="flex min-h-full flex-1 flex-col">
                                <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4 ">
                                    <div className="flex flex-shrink-0 items-center px-4">
                                        <p className="text-2xl font-semibold">
                                            Wallet
                                        </p>
                                    </div>
                                    <nav className="mt-5" aria-label="Sidebar">
                                        <div className="space-y-4 px-4">
                                            {arrayElements.map((item, idx) => (
                                                <div key={item.id}>
                                                    <Disclosure>
                                                        {({ open }) => (
                                                            <>
                                                                <Disclosure.Button
                                                                    key={
                                                                        item.name
                                                                    }
                                                                    onClick={() => {
                                                                        setSidebarElement(
                                                                            item.component
                                                                        );
                                                                        setSelectedItem(
                                                                            item.id
                                                                        );
                                                                    }}
                                                                    className={classNames(
                                                                        selectedItem ===
                                                                            item.id
                                                                            ? 'cursor-pointer font-semibold text-gray-700'
                                                                            : 'text-gray-500 hover:bg-gray-200 ',
                                                                        'group flex cursor-pointer items-center px-5 py-2'
                                                                    )}
                                                                >
                                                                    {item.name}
                                                                </Disclosure.Button>

                                                                <Disclosure.Panel className="pl-6 text-sm">
                                                                    {item.subItems &&
                                                                        item.subItems.map(
                                                                            (
                                                                                subItem,
                                                                                idx
                                                                            ) => {
                                                                                return (
                                                                                    <div key={subItem.id}>
                                                                                        {subItem.id && (
                                                                                            <div
                                                                                                key={
                                                                                                    subItem.id
                                                                                                }
                                                                                            >
                                                                                                <div
                                                                                                    onClick={() => {
                                                                                                        setSidebarElement(
                                                                                                            subItem.component
                                                                                                        );
                                                                                                        setSelectedItem(
                                                                                                            subItem.id
                                                                                                        );
                                                                                                    }}
                                                                                                    className={classNames(
                                                                                                        selectedItem ===
                                                                                                            subItem.id
                                                                                                            ? 'cursor-pointer font-semibold text-gray-700'
                                                                                                            : 'text-gray-500 hover:bg-slate-200 ',
                                                                                                        'group flex cursor-pointer items-center rounded-md px-4 py-2'
                                                                                                    )}
                                                                                                >
                                                                                                    <div>
                                                                                                        <p className="cursor-pointer text-left text-gray-500 transition ease-in-out">
                                                                                                            {
                                                                                                                subItem.name
                                                                                                            }
                                                                                                        </p>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        )}
                                                                                    </div>
                                                                                );
                                                                            }
                                                                        )}
                                                                </Disclosure.Panel>
                                                            </>
                                                        )}
                                                    </Disclosure>
                                                </div>
                                            ))}
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex min-w-0 flex-1 flex-col">
                        <div className="block lg:hidden">
                            <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-1.5">
                                <div className="text-xl font-normal capitalize text-gray-800">
                                    Wallet
                                </div>
                                <div>
                                    <button
                                        type="button"
                                        className="-mr-3 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900"
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
                        <div className="relative z-0 flex flex-1">
                            <main className="relative z-0 flex-1 focus:outline-none xl:order-last">
                                {/* Start main area*/}

                                <div className="scrollbar-hide inset-0 overflow-y-auto px-4 sm:px-6 lg:px-8">
                                    {sidebarElement}
                                </div>
                                {/* End main area */}
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WalletSideBarWrapper;
