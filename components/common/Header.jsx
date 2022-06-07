import React, {Fragment, useEffect, useState} from 'react'
import {Popover, Transition} from '@headlessui/react'
import {useRouter} from 'next/router'
import SearchBar from './Header/SearchBar'
import {HiMenu, HiX} from 'react-icons/hi'
import LoginSignupButton from '../buttons/loginsignupbutton'
import {useLocalStorage} from '@mantine/hooks'

const searchBarStaticOptions = [
    {id: 1, name: 'Catalog  '},
    {id: 2, name: 'Members'},
    {id: 3, name: 'Forum'},
    {id: 4, name: 'Help Center'},
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const guestMobileArrayStaticData = [
    {
        id: 1,
        name: 'Men',
        icon: '',
        path: '#',
    },
    {
        id: 2,
        name: 'Women',
        icon: '',
        path: '#',
    },
    {
        id: 3,
        name: 'Kids',
        icon: '',
        path: '#',
    },
    {
        id: 4,
        name: 'Home',
        icon: '',
        path: '#',
    },
    {
        id: 5,
        name: 'Entertainment',
        icon: '',
        path: '#',
    },
]

const catalogMobileArrayStaticData = [
    {
        id: 1,
        name: 'About',
        path: '#',
    },
    {
        id: 2,
        name: 'Members',
        path: '#',
    },
    {
        id: 3,
        name: 'Forum',
        path: '#',
    },
    {
        id: 4,
        name: 'Help center',
        path: '#',
    },
    {
        id: 5,
        name: 'FAQs',
        path: '#',
    },
]

const DesktopView = () => {
    const [searchBarOptions, setSearchBarOptions] = useState(
        searchBarStaticOptions
    )
    const [guestMobileArray, setGuestMobileArray] = useState(
        guestMobileArrayStaticData
    )
    const [catalogMobileArray, setCatalogMobileArray] = useState(
        catalogMobileArrayStaticData
    )

    const router = useRouter()

    // const [loggedIn, setLoggedIn] = useState(false)
    const [loggedIn, setLoggedIn] = useState(false)

    const [selectedSearchBarOption, setSelectedSearchBarOption] = useState(
        searchBarOptions[0]
    )

    const [sustyAuth, setSustyAuth] = useLocalStorage({
        key: 'susty',
        defaultValue: {},
    })
    useEffect(() => {
        if (Object.keys(sustyAuth).length > 0) {
            setLoggedIn(true)
        } else {
            setLoggedIn(false)
        }
    }, [sustyAuth])

    return (
        <>
            <Popover className="relative ">
                <div className="flex justify-between items-center">
                    <div className="flex justify-start">
                        <a href="#">
                            <span className="sr-only">Workflow</span>
                            <img
                                className="h-8 w-auto sm:h-10"
                                src="https://firebasestorage.googleapis.com/v0/b/susty-next.appspot.com/o/Susty.png?alt=media&token=08d4c7c6-fcda-4381-bbe6-4ea5c9eb5b85"
                                alt="Image"
                            />
                        </a>
                    </div>

                    {/* <div className="-mr-2 -my-2 md:hidden ">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open menu</span>
                        <HiMenu className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                </div> */}

                    <div className={'hidden md:block w-full'}>
                        <SearchBar
                            selectedSearchBarOption={selectedSearchBarOption}
                            setSelectedSearchBarOption={
                                setSelectedSearchBarOption
                            }
                            searchBarOptions={searchBarOptions}
                        />
                    </div>
                    <div className="inline-flex gap-2">
                        {loggedIn && (
                            <>
                                <div className="md:-ml-4 lg:-ml-4">
                                    <svg
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        aria-label="Messages"
                                        fill="#9e9e9e"
                                        strokeWidth="0.5"
                                    >
                                        <path d="M3.5 18.5V6.54l8.54 6.4 8.45-6.34v11.9H3.5zm15.95-13l-7.41 5.56L4.62 5.5h14.83zM20.5 4H3.5C2.67 4 2 4.67 2 5.5v13c0 .83.67 1.5 1.5 1.5h17c.82 0 1.5-.67 1.5-1.5v-13c0-.83-.68-1.5-1.5-1.5z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <svg
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        aria-label="Notifications"
                                        fill="#9e9e9e"
                                        strokeWidth="0.5"
                                    >
                                        <path d="M4.5 17.5c0-2.08 1.71-3.18 1.77-3.21l.73-.44V9a5.5 5.5 0 0 1 11 0v4l.01.84.7.44a4.01 4.01 0 0 1 1.79 3.22h-16zm8 3a2.5 2.5 0 0 1-2.29-1.5h4.58a2.5 2.5 0 0 1-2.29 1.5zm7-7.5V9a7 7 0 1 0-14 0v4S3 14.5 3 17.5c0 .83.67 1.5 1.5 1.5h4.14a4 4 0 0 0 7.72 0h4.14c.83 0 1.5-.67 1.5-1.5 0-3-2.5-4.5-2.5-4.5z"></path>
                                    </svg>
                                </div>
                                <div className="md:mr-2 lg:mr-2 -mr-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="#9e9e9e"
                                        strokeWidth="0.5"
                                    >
                                        <path d="M16.66 3C13.98 3 12 5.24 12 5.24S10.02 3 7.34 3a5.1 5.1 0 0 0-2.85.9c-3.65 2.42-3.1 7.53.43 10.93A105.1 105.1 0 0 0 12 21s3.8-2.99 7.09-6.17c3.51-3.4 4.08-8.51.42-10.93a5.1 5.1 0 0 0-2.85-.9m0 1.5c.7 0 1.35.21 2.02.66a3.9 3.9 0 0 1 1.8 2.98c.17 1.87-.74 3.97-2.44 5.61A100.22 100.22 0 0 1 12 19.07a100.22 100.22 0 0 1-6.04-5.32c-1.7-1.64-2.61-3.74-2.44-5.6a3.9 3.9 0 0 1 1.8-3 3.6 3.6 0 0 1 2.02-.65c1.95 0 3.53 1.72 3.54 1.73l1.11 1.25 1.13-1.24c.02-.02 1.59-1.74 3.54-1.74"></path>
                                    </svg>
                                </div>
                            </>
                        )}

                        <div className="-mr-2 -my-2 md:hidden ">
                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-400">
                                <span className="sr-only">Open menu</span>
                                <HiMenu
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                />
                            </Popover.Button>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center justify-end md:flex-1 gap-3">
                        <LoginSignupButton
                            loggedIn={loggedIn}
                            setLoggedIn={setLoggedIn}
                        />
                        <button
                            onClick={async () => {
                                await router.push('/items/add')
                            }}
                            type="button"
                            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-susty hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        >
                            Sell&nbsp;now
                        </button>
                    </div>

                    <div className="hidden md:block mx-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="#9e9e9e"
                            strokeWidth="0.5"
                        >
                            <path d="M12.75 14.506h-1.5v-1.139c0-1.077.598-2.064 1.522-2.514a1.78 1.78 0 0 0 .927-2.068 1.741 1.741 0 0 0-1.218-1.218 1.766 1.766 0 0 0-1.559.305 1.75 1.75 0 0 0-.685 1.395h-1.5c0-1.017.46-1.958 1.266-2.58a3.285 3.285 0 0 1 2.853-.574 3.244 3.244 0 0 1 2.297 2.297c.398 1.542-.31 3.1-1.723 3.79-.413.202-.68.66-.68 1.167v1.139zM12 2c5.523 0 10 4.478 10 10 0 5.523-4.477 10-10 10-5.524 0-10-4.477-10-10C2 6.479 6.476 2 12 2zm0 1.5c-4.687 0-8.5 3.814-8.5 8.5 0 4.687 3.813 8.5 8.5 8.5 4.686 0 8.499-3.813 8.499-8.5 0-4.686-3.813-8.5-8.5-8.5H12zm-1.003 13.507c0-.5526.448-1.0005 1.0005-1.0005.5526 0 1.0005.448 1.0005 1.0005 0 .5523-.4477 1-1 1s-1-.4477-1-1h-.001z"></path>
                        </svg>
                    </div>
                </div>
                <div className={'md:hidden block '}>
                    <SearchBar
                        selectedSearchBarOption={selectedSearchBarOption}
                        setSelectedSearchBarOption={setSelectedSearchBarOption}
                        searchBarOptions={searchBarOptions}
                    />
                </div>

                <Transition
                    as={Fragment}
                    enter="duration-200 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel
                        focus
                        className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                    >
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                            <div className="pt-5 pb-6 px-5">
                                <div className="flex items-center justify-end">
                                    {/* <div>
                                    <img
                                        className="h-8 w-auto"
                                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                        alt="Workflow"
                                    />
                                </div> */}
                                    <div className="-mr-2">
                                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-400">
                                            <span className="sr-only">
                                                Close menu
                                            </span>
                                            <HiX
                                                className="h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        </Popover.Button>
                                    </div>
                                </div>

                                <button
                                    onClick={async () => {
                                        await router.push('/items/add')
                                    }}
                                    type="button"
                                    className="w-full items-center px-3 py-3 my-3 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-susty hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                >
                                    Sell&nbsp;now
                                </button>
                                <LoginSignupButton />

                                <div className="mt-6">
                                    <p className="text-slate-400 mb-4">
                                        Categories
                                    </p>
                                    <nav className="grid grid-cols-1 ">
                                        {guestMobileArray.map((item) => (
                                            <div key={item.id}>
                                                <a
                                                    key={item.name}
                                                    href={item.path}
                                                    className="-m-3 p-3 items-center rounded-lg hover:bg-gray-50 "
                                                >
                                                    <div className="ml-4 text-base font-medium text-gray-900 ">
                                                        {item.name}
                                                    </div>
                                                </a>
                                                <hr className="-my-1 " />
                                            </div>
                                        ))}
                                    </nav>
                                </div>

                                <div className="mt-6">
                                    <p className="text-slate-400 mb-4">
                                        Catalog
                                    </p>
                                    <nav className="grid grid-cols-1 gap-4">
                                        {catalogMobileArray.map((item) => (
                                            <div key={item.id}>
                                                <a
                                                    key={item.name}
                                                    href={item.path}
                                                    className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50 "
                                                >
                                                    {/* <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
                                                    <solution.icon
                                                        className="h-6 w-6"
                                                        aria-hidden="true"
                                                    />
                                                </div> */}
                                                    <div className="ml-4 text-base font-medium text-gray-900 ">
                                                        {item.name}
                                                    </div>
                                                </a>
                                                <hr className="-my-1 " />
                                            </div>
                                        ))}
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover>
        </>
    )
}

export default DesktopView
