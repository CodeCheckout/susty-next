import React, {useState} from 'react'
import Link from 'next/link'
import {AiOutlineClose} from 'react-icons/ai'
import {Disclosure, Switch} from '@headlessui/react'
import {HiMinusSm, HiPlusSm} from 'react-icons/hi'
import {motion} from 'framer-motion'

const Footer = () => {
    const [showPopUp, setShopPopUp] = useState(false)

    const [enabled1, setEnabled1] = useState(false)
    const [enabled2, setEnabled2] = useState(false)
    const [enabled3, setEnabled3] = useState(false)
    const [enabled4, setEnabled4] = useState(false)

    return (
        <>
            <div
                className={
                    'relative bottom-0 left-0 right-0 top-[22vh] -z-10 px-2 py-3 sm:px-4 lg:px-14 border-t border-gray-200'
                }
            >
                <div className={'flex flex-row gap-2 sm:gap-4 mx-0.5 my-2'}>
                    <Link href={'/footer/policy'}>
                        <a
                            className={
                                'text-[0.65rem] md:text-sm text-gray-500 font-semibold hover:underline'
                            }
                        >
                            Privacy Policy
                        </a>
                    </Link>
                    <Link href={'/footer/cookie'}>
                        <a
                            className={
                                'text-[0.65rem] md:text-sm text-gray-500 font-semibold hover:underline'
                            }
                        >
                            Cookie Policy
                        </a>
                    </Link>
                    <div
                        onClick={() => {
                            setShopPopUp(true)
                        }}
                        className={
                            'text-[0.65rem] md:text-sm text-gray-500 font-semibold hover:underline'
                        }
                    >
                        Cookie Settings
                    </div>
                    <Link href={'/footer/conditions'}>
                        <a
                            className={
                                'text-[0.65rem] md:text-sm text-gray-500 font-semibold hover:underline'
                            }
                        >
                            Terms & Conditions
                        </a>
                    </Link>
                </div>
            </div>
            <>
                <div className={'bg-gray-100 px-2 sm:px-6 md:px-10 lg:px-52'}>
                    <div>
                        {showPopUp ? (
                            <>
                                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                    <div className="relative w-auto my-6 mx-auto max-w-2xl ">
                                        {/*content*/}
                                        <div className="overflow-y-auto h-[640px]  border-0  shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                            {/*header*/}
                                            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-200 rounded-t">
                                                <p className="text-xl font-semibold">
                                                    About Your Privacy
                                                </p>
                                                <AiOutlineClose
                                                    className="w-4 h-4"
                                                    onClick={() =>
                                                        setShopPopUp(false)
                                                    }
                                                />
                                            </div>
                                            {/*body*/}
                                            <div className="relative p-6 flex-auto">
                                                <p className="text-sm mt-1 leading-relaxed text-gray-600">
                                                    We process your data to
                                                    deliver content or
                                                    advertisements and measure
                                                    the delivery of such content
                                                    or advertisements to extract
                                                    insights about our website.
                                                    We share this information
                                                    with our partners on the
                                                    basis of consent. You may
                                                    exercise your right to
                                                    consent, based on a specific
                                                    purpose below or at a
                                                    partner level in the link
                                                    under each purpose. These
                                                    choices will be signaled to
                                                    our vendors participating in
                                                    the Transparency and Consent
                                                    Framework.
                                                </p>
                                                <a
                                                    href="#"
                                                    className="text-susty text-sm no-underline hover:underline"
                                                >
                                                    More information
                                                </a>
                                                <p className="mt-5 text-sm text-gray-600">
                                                    Consent ID: 88309039
                                                </p>
                                                <p className="text-sm text-gray-600">
                                                    Consent Date: Fri May 13
                                                    2022 17:23:41 GMT+0530
                                                    (India Standard Time)
                                                </p>
                                                <p className="mt-5 text-xl">
                                                    Manage Consent Preferences
                                                </p>
                                                <div className="border mt-2">
                                                    <div className="border border-gray-600 border-b-0">
                                                        <Disclosure>
                                                            {({open}) => (
                                                                <>
                                                                    <Disclosure.Button
                                                                        as={
                                                                            'div'
                                                                        }
                                                                        className="flex w-full justify-between   px-4 py-2 text-left text-sm font-medium text-susty  focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                                                                    >
                                                                        <span
                                                                            className={`${
                                                                                open
                                                                                    ? 'rotate-180 transform'
                                                                                    : ''
                                                                            } h-5 w-5 text-susty`}
                                                                        >
                                                                            {open ? (
                                                                                <>
                                                                                    <HiMinusSm />
                                                                                </>
                                                                            ) : (
                                                                                <>
                                                                                    <HiPlusSm />
                                                                                </>
                                                                            )}
                                                                        </span>

                                                                        <span className="pr-72 mr-6">
                                                                            What
                                                                            is
                                                                            your
                                                                            refund
                                                                            policy?
                                                                        </span>
                                                                        <span>
                                                                            <Switch
                                                                                checked={
                                                                                    enabled1
                                                                                }
                                                                                onChange={
                                                                                    setEnabled1
                                                                                }
                                                                                className={`${
                                                                                    enabled1
                                                                                        ? 'bg-susty'
                                                                                        : 'bg-gray-300'
                                                                                }
          relative inline-flex h-[24px] w-[48px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                                                                            >
                                                                                <span className="sr-only">
                                                                                    Use
                                                                                    setting
                                                                                </span>
                                                                                <span
                                                                                    aria-hidden="true"
                                                                                    className={`${
                                                                                        enabled1
                                                                                            ? 'translate-x-[1.53rem]'
                                                                                            : 'translate-x-0'
                                                                                    }
            pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                                                                                />
                                                                            </Switch>
                                                                        </span>
                                                                    </Disclosure.Button>
                                                                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-xs text-gray-500">
                                                                        If
                                                                        you're
                                                                        unhappy
                                                                        with
                                                                        your
                                                                        purchase
                                                                        for any
                                                                        reason,
                                                                        email us
                                                                        within
                                                                        90 days
                                                                        and
                                                                        we'll
                                                                        refund
                                                                        you in
                                                                        full, no
                                                                        questions
                                                                        asked.
                                                                    </Disclosure.Panel>
                                                                </>
                                                            )}
                                                        </Disclosure>
                                                    </div>

                                                    <div className="border border-gray-600 border-b-0">
                                                        <Disclosure>
                                                            {({open}) => (
                                                                <>
                                                                    <Disclosure.Button
                                                                        as={
                                                                            'div'
                                                                        }
                                                                        className="flex w-full justify-between   px-4 py-2 text-left text-sm font-medium text-susty  focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                                                                    >
                                                                        <span
                                                                            className={`${
                                                                                open
                                                                                    ? 'rotate-180 transform'
                                                                                    : ''
                                                                            } h-5 w-5 text-susty`}
                                                                        >
                                                                            {open ? (
                                                                                <>
                                                                                    <HiMinusSm />
                                                                                </>
                                                                            ) : (
                                                                                <>
                                                                                    <HiPlusSm />
                                                                                </>
                                                                            )}
                                                                        </span>

                                                                        <span className="pr-72 mr-6">
                                                                            What
                                                                            is
                                                                            your
                                                                            refund
                                                                            policy?
                                                                        </span>

                                                                        <span>
                                                                            <Switch
                                                                                checked={
                                                                                    enabled2
                                                                                }
                                                                                onChange={
                                                                                    setEnabled2
                                                                                }
                                                                                className={`${
                                                                                    enabled2
                                                                                        ? 'bg-susty'
                                                                                        : 'bg-gray-300'
                                                                                }
          relative inline-flex h-[24px] w-[48px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                                                                            >
                                                                                <span className="sr-only">
                                                                                    Use
                                                                                    setting
                                                                                </span>
                                                                                <span
                                                                                    aria-hidden="true"
                                                                                    className={`${
                                                                                        enabled2
                                                                                            ? 'translate-x-[1.53rem]'
                                                                                            : 'translate-x-0'
                                                                                    }
            pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                                                                                />
                                                                            </Switch>
                                                                        </span>
                                                                    </Disclosure.Button>
                                                                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-xs text-gray-500">
                                                                        If
                                                                        you're
                                                                        unhappy
                                                                        with
                                                                        your
                                                                        purchase
                                                                        for any
                                                                        reason,
                                                                        email us
                                                                        within
                                                                        90 days
                                                                        and
                                                                        we'll
                                                                        refund
                                                                        you in
                                                                        full, no
                                                                        questions
                                                                        asked.
                                                                    </Disclosure.Panel>
                                                                </>
                                                            )}
                                                        </Disclosure>
                                                    </div>

                                                    <div className="border border-gray-600 border-b-0">
                                                        <Disclosure>
                                                            {({open}) => (
                                                                <>
                                                                    <Disclosure.Button
                                                                        as={
                                                                            'div'
                                                                        }
                                                                        className="flex w-full justify-between   px-4 py-2 text-left text-sm font-medium text-susty  focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                                                                    >
                                                                        <span
                                                                            className={`${
                                                                                open
                                                                                    ? 'rotate-180 transform'
                                                                                    : ''
                                                                            } h-5 w-5 text-susty`}
                                                                        >
                                                                            {open ? (
                                                                                <>
                                                                                    <HiMinusSm />
                                                                                </>
                                                                            ) : (
                                                                                <>
                                                                                    <HiPlusSm />
                                                                                </>
                                                                            )}
                                                                        </span>

                                                                        <span className="pr-72 mr-6">
                                                                            What
                                                                            is
                                                                            your
                                                                            refund
                                                                            policy?
                                                                        </span>
                                                                        <span>
                                                                            <Switch
                                                                                checked={
                                                                                    enabled3
                                                                                }
                                                                                onChange={
                                                                                    setEnabled3
                                                                                }
                                                                                className={`${
                                                                                    enabled3
                                                                                        ? 'bg-susty'
                                                                                        : 'bg-gray-300'
                                                                                }
          relative inline-flex h-[24px] w-[48px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                                                                            >
                                                                                <span className="sr-only">
                                                                                    Use
                                                                                    setting
                                                                                </span>
                                                                                <span
                                                                                    aria-hidden="true"
                                                                                    className={`${
                                                                                        enabled3
                                                                                            ? 'translate-x-[1.53rem]'
                                                                                            : 'translate-x-0'
                                                                                    }
            pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                                                                                />
                                                                            </Switch>
                                                                        </span>
                                                                    </Disclosure.Button>
                                                                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-xs text-gray-500">
                                                                        If
                                                                        you're
                                                                        unhappy
                                                                        with
                                                                        your
                                                                        purchase
                                                                        for any
                                                                        reason,
                                                                        email us
                                                                        within
                                                                        90 days
                                                                        and
                                                                        we'll
                                                                        refund
                                                                        you in
                                                                        full, no
                                                                        questions
                                                                        asked.
                                                                    </Disclosure.Panel>
                                                                </>
                                                            )}
                                                        </Disclosure>
                                                    </div>

                                                    <div className="border border-gray-600">
                                                        <Disclosure>
                                                            {({open}) => (
                                                                <>
                                                                    <Disclosure.Button
                                                                        as={
                                                                            'div'
                                                                        }
                                                                        className="flex w-full justify-between   px-4 py-2 text-left text-sm font-medium text-susty  focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                                                                    >
                                                                        <span
                                                                            className={`${
                                                                                open
                                                                                    ? 'rotate-180 transform'
                                                                                    : ''
                                                                            } h-5 w-5 text-susty`}
                                                                        >
                                                                            {open ? (
                                                                                <>
                                                                                    <HiMinusSm />
                                                                                </>
                                                                            ) : (
                                                                                <>
                                                                                    <HiPlusSm />
                                                                                </>
                                                                            )}
                                                                        </span>

                                                                        <span className="pr-72 mr-6">
                                                                            What
                                                                            is
                                                                            your
                                                                            refund
                                                                            policy?
                                                                        </span>
                                                                        <span>
                                                                            <Switch
                                                                                checked={
                                                                                    enabled4
                                                                                }
                                                                                onChange={
                                                                                    setEnabled4
                                                                                }
                                                                                className={`${
                                                                                    enabled4
                                                                                        ? 'bg-susty'
                                                                                        : 'bg-gray-300'
                                                                                }
          relative inline-flex h-[24px] w-[48px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                                                                            >
                                                                                <span className="sr-only">
                                                                                    Use
                                                                                    setting
                                                                                </span>
                                                                                <span
                                                                                    aria-hidden="true"
                                                                                    className={`${
                                                                                        enabled4
                                                                                            ? 'translate-x-[1.53rem]'
                                                                                            : 'translate-x-0'
                                                                                    }
            pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                                                                                />
                                                                            </Switch>
                                                                        </span>
                                                                    </Disclosure.Button>
                                                                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-xs text-gray-500">
                                                                        If
                                                                        you're
                                                                        unhappy
                                                                        with
                                                                        your
                                                                        purchase
                                                                        for any
                                                                        reason,
                                                                        email us
                                                                        within
                                                                        90 days
                                                                        and
                                                                        we'll
                                                                        refund
                                                                        you in
                                                                        full, no
                                                                        questions
                                                                        asked.
                                                                    </Disclosure.Panel>
                                                                </>
                                                            )}
                                                        </Disclosure>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*footer*/}
                                            <div
                                                className={`grid justify-items-end mr-3 mb-4`}
                                            >
                                                <motion.button
                                                    onClick={() =>
                                                        setShopPopUp(false)
                                                    }
                                                    whileHover={{scale: 1.02}}
                                                    whileTap={{scale: 0.98}}
                                                    className={`inline-flex items-center px-4 py-1.5 border border-gray-300 shadow-sm text-base font-medium rounded-md text-white bg-susty hover:bg-white hover:text-susty hover:border-susty focus:text-red-400 focus:border-susty focus:bg-red-50`}
                                                >
                                                    Confirm my choices
                                                </motion.button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : null}
                    </div>
                </div>
            </>
        </>
    )
}

export default Footer
