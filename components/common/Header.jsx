import React, {Fragment, useState} from 'react'
import {Menu, Popover, Transition} from '@headlessui/react'
import {useRouter} from 'next/router'

import {HiChevronDown, HiMenu, HiX} from 'react-icons/hi'
import {
    AiOutlineHeart,
    AiOutlineMail,
    AiOutlineQuestionCircle,
} from 'react-icons/ai'
import LoginSignupButton from '../buttons/loginsignupbutton'

import SearchBar from './Header/SearchBar'
import Notification from './Header/Notification'

import Link from 'next/link'

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

const userDropdown = [
    {id: '86a66b51-14df-4947-9580-2f6f44e70e07', name: 'Account', path: '#'},
    {id: '03380728-d104-473b-bb9c-b7671185d114', name: 'Profile', path: '#'},
    {id: 'd0960412-44f7-4120-8851-b605328b2738', name: 'Settings', path: '#'},
    {
        id: '6417e8c7-b9b8-46de-a25a-829700003b79',
        name: 'Personalization',
        path: '#',
    },
    {id: '3236825c-ac12-4656-b099-4a395adb2eb0', name: 'Wallet', path: '#'},
    {id: 'bbced0e1-2e6b-4525-99e9-6b2006ad0c42', name: 'Donations', path: '#'},
    {id: '8c69d15d-3669-4ec8-a5c5-308f16cbb3aa', name: 'Log out', path: '#'},
]

const languageDropdown = [
    {
        id: '423f9b07-1d8d-4b79-bd9a-0038dc0fb94a',
        short: 'EN',
        long: 'English, US(English)',
    },
    {
        id: '42eb2a91-6c77-4f24-a233-e1ca1ec27f07',
        short: 'US',
        long: 'Español, US(Spanish)',
    },
]

const HeaderSection = () => {
    const [searchBarOptions, setSearchBarOptions] = useState(
        searchBarStaticOptions
    )
    const [guestMobileArray, setGuestMobileArray] = useState(
        guestMobileArrayStaticData
    )
    const [catalogMobileArray, setCatalogMobileArray] = useState(
        catalogMobileArrayStaticData
    )
    const [userActivityArray, setUserActivityArray] = useState(userDropdown)
    const [languageArray, setLanguageArray] = useState(languageDropdown)
    const [selectedLanguage, setSelectedLanguage] = useState('EN')

    const router = useRouter()

    // const [loggedIn, setLoggedIn] = useState(false)
    const [loggedIn, setLoggedIn] = useState(true)

    const [selectedSearchBarOption, setSelectedSearchBarOption] = useState(
        searchBarOptions[0]
    )

    return (
        <>
            <div
                className={
                    'px-2 py-3 sm:px-4 lg:px-14 sticky top-0 z-40 bg-white'
                }
            >
                <Popover className="relative ">
                    <div className="flex justify-between items-center">
                        <div className="flex justify-start mb-1">
                            <a href="#">
                                <span className="sr-only">Workflow</span>
                                <img
                                    className="h-8 min-w-fit sm:h-10"
                                    src="https://firebasestorage.googleapis.com/v0/b/susty-next.appspot.com/o/Susty.png?alt=media&token=08d4c7c6-fcda-4381-bbe6-4ea5c9eb5b85"
                                    alt="Image"
                                />
                            </a>
                        </div>

                        <div className={'hidden md:block w-full pl-4'}>
                            <SearchBar
                                selectedSearchBarOption={
                                    selectedSearchBarOption
                                }
                                setSelectedSearchBarOption={
                                    setSelectedSearchBarOption
                                }
                                searchBarOptions={searchBarOptions}
                            />
                        </div>
                        <div className="inline-flex gap-2">
                            {loggedIn && (
                                <>
                                    <div className=" mr-1">
                                        <Link href="/final/inbox">
                                            <a>
                                                <AiOutlineMail
                                                    color="#a3a3a3"
                                                    className="w-6 h-6 cursor-pointer"
                                                />
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="mx-1">
                                        <Notification />
                                    </div>
                                    <div className="mx-1">
                                        <Link href="/favorite/">
                                            <a>
                                                <AiOutlineHeart
                                                    color="#a3a3a3"
                                                    className="w-6 h-6 cursor-pointer"
                                                />
                                            </a>
                                        </Link>
                                    </div>

                                    <Menu
                                        as="div"
                                        className="relative inline-block text-left mx-1 hidden md:block"
                                    >
                                        <div>
                                            <Menu.Button className="inline-flex justify-center -my-1 pl-2 md:pl-0 md:mr-8 md:pr-2 w-full rounded-md ring-0 text-sm font-medium text-gray-700">
                                                <img
                                                    alt="User"
                                                    className="rounded-full"
                                                    height="30"
                                                    width="30"
                                                    src="https://firebasestorage.googleapis.com/v0/b/susty-next.appspot.com/o/default_profile_pic.png?alt=media&token=ddfbe30b-a94f-4390-94cf-416285ac2fde"
                                                />
                                                <HiChevronDown
                                                    color="#a3a3a3"
                                                    className=" ml-0.5 h-8 w-3"
                                                    aria-hidden="true"
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
                                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none overflow-visible z-50">
                                                <div className="py-1">
                                                    {userActivityArray.map(
                                                        (item, idx) => {
                                                            return (
                                                                <Menu.Item
                                                                    key={
                                                                        item.id
                                                                    }
                                                                >
                                                                    {({
                                                                        active,
                                                                    }) => (
                                                                        <a
                                                                            href={
                                                                                item.path
                                                                            }
                                                                            className={classNames(
                                                                                active
                                                                                    ? 'bg-gray-100 text-gray-900'
                                                                                    : 'text-gray-700',
                                                                                'block px-4 py-2 text-sm'
                                                                            )}
                                                                        >
                                                                            {
                                                                                item.name
                                                                            }
                                                                        </a>
                                                                    )}
                                                                </Menu.Item>
                                                            )
                                                        }
                                                    )}
                                                </div>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </>
                            )}

                            <div className="-mr-2 -my-2 md:hidden">
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
                                className="inline-flex items-center px-2 py-1.5 mx-1 border border-transparent text-sm leading-4 font-normal rounded-md shadow-sm text-white bg-susty hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                            >
                                Sell&nbsp;now
                            </button>
                        </div>

                        <div className="hidden md:block mx-3">
                            <AiOutlineQuestionCircle
                                color="#a3a3a3"
                                className="h-6 w-6"
                            />
                        </div>

                        <Menu
                            as="div"
                            className="hidden md:block relative inline-block text-left mx-1"
                        >
                            <div>
                                <Menu.Button className="inline-flex justify-center -my-1 pl-2 md:pl-0 md:mr-0 md:pr-0 w-full rounded-md ring-0 text-sm font-medium text-gray-700">
                                    <div>{selectedLanguage}</div>
                                    <HiChevronDown
                                        color="#a3a3a3"
                                        className=" ml-0.5 h-5 w-3"
                                        aria-hidden="true"
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
                                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none overflow-visible z-50">
                                    <div className="py-1">
                                        {languageArray.map((item, idx) => {
                                            return (
                                                <Menu.Item key={item.id}>
                                                    {({active}) => (
                                                        <a
                                                            onClick={() =>
                                                                setSelectedLanguage(
                                                                    item.short
                                                                )
                                                            }
                                                            className={classNames(
                                                                active
                                                                    ? 'bg-gray-100 text-gray-900'
                                                                    : 'text-gray-700',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            {item.long}
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                            )
                                        })}
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>
                    <div className={'md:hidden block mt-1'}>
                        <SearchBar
                            selectedSearchBarOption={selectedSearchBarOption}
                            setSelectedSearchBarOption={
                                setSelectedSearchBarOption
                            }
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
                            className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50"
                        >
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                                <div className="pt-5 pb-6 px-5">
                                    <div className="flex items-center justify-end">
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
                                                        className="-m-3 p-3 items-center rounded-lg"
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
                                        <nav className="grid grid-cols-1">
                                            {catalogMobileArray.map((item) => (
                                                <div key={item.id}>
                                                    <a
                                                        key={item.name}
                                                        href={item.path}
                                                        className="-m-3 p-3  items-center rounded-lg "
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
            </div>
        </>
    )
}

export default HeaderSection
