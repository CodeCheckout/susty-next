/* This example requires Tailwind CSS v2.0+ */
import React, {Fragment, useState} from 'react'
import {Popover, Transition} from '@headlessui/react'
import {
    HiChartBar,
    HiCursorClick,
    HiDocumentReport,
    HiMenu,
    HiRefresh,
    HiShieldCheck,
    HiViewGrid,
    HiX,
} from 'react-icons/hi'
import SearchBar from './Header/SearchBar'
import {FiHelpCircle} from 'react-icons/fi'
import LoginSignupButton from '../buttons/LoginSignupButton'
import {useRouter} from 'next/router'

const searchBarOptions = [
    {id: 1, name: 'Catalog  '},
    {id: 2, name: 'Members'},
    {id: 3, name: 'Forum'},
    {id: 4, name: 'Help Center'},
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const solutions = [
    {
        name: 'Analytics',
        description:
            'Get a better understanding of where your traffic is coming from.',
        href: '#',
        icon: HiChartBar,
    },
    {
        name: 'Engagement',
        description:
            'Speak directly to your customers in a more meaningful way.',
        href: '#',
        icon: HiCursorClick,
    },
    {
        name: 'Security',
        description: "Your customers' data will be safe and secure.",
        href: '#',
        icon: HiShieldCheck,
    },
    {
        name: 'Integrations',
        description:
            "Connect with third-party tools that you're already using.",
        href: '#',
        icon: HiViewGrid,
    },
    {
        name: 'Automations',
        description:
            'Build strategic funnels that will drive your customers to convert',
        href: '#',
        icon: HiRefresh,
    },
    {
        name: 'Reports',
        description:
            'Get detailed reports that will help you make more informed decisions ',
        href: '#',
        icon: HiDocumentReport,
    },
]
const resources = [
    {
        name: 'Help Center',
        description:
            'Get all of your questions answered in our forums or contact support.',
        href: '#',
    },
    {
        name: 'Guides',
        description:
            'Learn how to maximize our platform to get the most out of it.',
        href: '#',
    },
    {
        name: 'Events',
        description:
            'See what meet-ups and other events we might be planning near you.',
        href: '#',
    },
    {
        name: 'Security',
        description: 'Understand how we take your privacy seriously.',
        href: '#',
    },
]

const Header = () => {
    const router = useRouter()

    const [selectedSearchBarOption, setSelectedSearchBarOption] = useState(
        searchBarOptions[0]
    )

    return (
        <Popover className="relative bg-white">
            <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                    <a href="#">
                        <span className="sr-only">Workflow</span>
                        <img
                            className="h-8 w-auto sm:h-10"
                            src="https://firebasestorage.googleapis.com/v0/b/susty-next.appspot.com/o/Susty.png?alt=media&token=08d4c7c6-fcda-4381-bbe6-4ea5c9eb5b85"
                            alt=""
                        />
                    </a>
                </div>

                <div className="-mr-2 -my-2 md:hidden">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open menu</span>
                        <HiMenu className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                </div>

                <div className={'hidden md:block'}>
                    <SearchBar
                        selectedSearchBarOption={selectedSearchBarOption}
                        setSelectedSearchBarOption={setSelectedSearchBarOption}
                        searchBarOptions={searchBarOptions}
                    />
                </div>

                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 gap-3">
                    <LoginSignupButton />
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
            </div>
            <div className={'md:hidden block'}>
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
                            <div className="flex items-center justify-between">
                                <div>
                                    <img
                                        className="h-8 w-auto"
                                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                        alt="Workflow"
                                    />
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
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
                            <div className="mt-6">
                                <nav className="grid grid-cols-1 gap-7">
                                    {solutions.map((solution) => (
                                        <a
                                            key={solution.name}
                                            href={solution.href}
                                            className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                                        >
                                            <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
                                                <solution.icon
                                                    className="h-6 w-6"
                                                    aria-hidden="true"
                                                />
                                            </div>
                                            <div className="ml-4 text-base font-medium text-gray-900">
                                                {solution.name}
                                            </div>
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        </div>
                        <div className="py-6 px-5">
                            <div className="grid grid-cols-2 gap-4">
                                <a
                                    href="#"
                                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                                >
                                    Pricing
                                </a>

                                <a
                                    href="#"
                                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                                >
                                    Docs
                                </a>

                                <a
                                    href="#"
                                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                                >
                                    Enterprise
                                </a>
                                {resources.map((resource) => (
                                    <a
                                        key={resource.name}
                                        href={resource.href}
                                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                                    >
                                        {resource.name}
                                    </a>
                                ))}
                            </div>
                            <div className="mt-6">
                                <a
                                    href="#"
                                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                                >
                                    Sign up
                                </a>
                                <p className="mt-6 text-center text-base font-medium text-gray-500">
                                    Existing customer?{' '}
                                    <a
                                        href="#"
                                        className="text-indigo-600 hover:text-indigo-500"
                                    >
                                        Sign in
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}

export default Header
