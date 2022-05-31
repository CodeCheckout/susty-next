import React, {Fragment} from 'react'
import {Popover, Transition} from '@headlessui/react'
import {
    HiChartBar,
    HiChevronDown,
    HiCursorClick,
    HiDocumentReport,
    HiRefresh,
    HiShieldCheck,
    HiViewGrid,
} from 'react-icons/hi'

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

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const BottomCategories = () => {
    return (
        <div>
            <Popover.Group as="nav" className="hidden md:flex space-x-10">
                <Popover className="relative">
                    {({open}) => (
                        <>
                            <Popover.Button
                                className={classNames(
                                    open ? 'text-gray-900' : 'text-gray-500',
                                    'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                )}
                            >
                                <span>Solutions</span>
                                <HiChartBar
                                    className={classNames(
                                        open
                                            ? 'text-gray-600'
                                            : 'text-gray-400',
                                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                                    )}
                                    aria-hidden="true"
                                />
                            </Popover.Button>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                                            {solutions.map((solution) => (
                                                <a
                                                    key={solution.name}
                                                    href={solution.href}
                                                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                                >
                                                    <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                                                        <solution.icon
                                                            className="h-6 w-6"
                                                            aria-hidden="true"
                                                        />
                                                    </div>
                                                    <div className="ml-4">
                                                        <p className="text-base font-medium text-gray-900">
                                                            {solution.name}
                                                        </p>
                                                        <p className="mt-1 text-sm text-gray-500">
                                                            {
                                                                solution.description
                                                            }
                                                        </p>
                                                    </div>
                                                </a>
                                            ))}
                                        </div>
                                        <div className="p-5 bg-gray-50 sm:p-8">
                                            <a
                                                href="#"
                                                className="-m-3 p-3 flow-root rounded-md hover:bg-gray-100"
                                            >
                                                <div className="flex items-center">
                                                    <div className="text-base font-medium text-gray-900">
                                                        Enterprise
                                                    </div>
                                                    <span className="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-indigo-100 text-indigo-800">
                                                        New
                                                    </span>
                                                </div>
                                                <p className="mt-1 text-sm text-gray-500">
                                                    Empower your entire team
                                                    with even more advanced
                                                    tools.
                                                </p>
                                            </a>
                                        </div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>

                <a
                    href="#"
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                    Pricing
                </a>
                <a
                    href="#"
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                    Docs
                </a>

                <Popover className="relative">
                    {({open}) => (
                        <>
                            <Popover.Button
                                className={classNames(
                                    open ? 'text-gray-900' : 'text-gray-500',
                                    'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                )}
                            >
                                <span>More</span>
                                <HiChevronDown
                                    className={classNames(
                                        open
                                            ? 'text-gray-600'
                                            : 'text-gray-400',
                                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                                    )}
                                    aria-hidden="true"
                                />
                            </Popover.Button>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
                                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                            {resources.map((resource) => (
                                                <a
                                                    key={resource.name}
                                                    href={resource.href}
                                                    className="-m-3 p-3 block rounded-md hover:bg-gray-50"
                                                >
                                                    <p className="text-base font-medium text-gray-900">
                                                        {resource.name}
                                                    </p>
                                                    <p className="mt-1 text-sm text-gray-500">
                                                        {resource.description}
                                                    </p>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>
            </Popover.Group>
        </div>
    )
}

export default BottomCategories
