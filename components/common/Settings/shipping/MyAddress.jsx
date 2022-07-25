import React, {Fragment, useState} from 'react'
import {Dialog, Listbox, Transition} from '@headlessui/react'
import Flags from 'country-flag-icons/react/3x2'
import {AnimatePresence, motion} from 'framer-motion'
import Link from 'next/link'
import {
    HiBookmarkAlt,
    HiCheck,
    HiChevronRight,
    HiInformationCircle,
    HiSelector,
} from 'react-icons/hi'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const NZ = <Flags.NZ title={'New Zealand'} className={'w-6 h-6'} />
const AU = <Flags.AU title={'Australia'} className={'w-6 h-6'} />

const countries = [
    {id: 1, name: 'New Zealand', flag: NZ},
    {id: 2, name: 'Australia', flag: AU},
    {id: 3, name: 'Select Country', flag: 'Flag'},
]

const MyAddress = () => {
    const [selectedCountry, setSelectedCountry] = useState(countries[2])
    const [openAddressModal, setOpenAddressModal] = useState(false)
    const [inputFullName, setInputFullName] = useState('')
    const [inputAddressLine1, setInputAddressLine1] = useState('')
    const [inputAddressLine2, setInputAddressLine2] = useState('')
    const [inputZipCode, setInputZipCode] = useState('')
    const [inputTown, setInputTown] = useState('')

    return (
        <div className="w-full ">
            <div className="w-full bg-white">
                <div className={'text-gray-500 p-4 text-sm'}>My Address</div>
                <div
                    className={
                        'flex flex-row items-center justify-between px-4 py-3 hover:bg-gray-50'
                    }
                >
                    <p className={'text-base'}>Add Address</p>
                    <HiChevronRight
                        className={'w-5 h-5'}
                        onClick={() => setOpenAddressModal(true)}
                    />
                </div>
                <>
                    <AnimatePresence>
                        {openAddressModal && (
                            <Dialog
                                static
                                as={motion.div}
                                open={openAddressModal}
                                className="relative z-10"
                                onClose={() => setOpenAddressModal(false)}
                                animate={{
                                    opacity: 1,
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: {duration: 0.4},
                                }}
                            >
                                <div className="fixed inset-0 overflow-y-auto font-susty">
                                    <div className="flex min-h-full max-w-96 items-center justify-center px-4 py-3 text-center bg-gray-700 bg-opacity-80">
                                        <motion.div
                                            key={`modal-for-email`}
                                            initial={{scale: 0.8, opacity: 0}}
                                            animate={{
                                                scale: 1,
                                                opacity: 1,
                                                duration: 0.01,
                                            }}
                                            exit={{
                                                scale: 0,
                                                opacity: 0,
                                                duration: 0.2,
                                            }}
                                            className="w-full bg-gray-50 max-w-max transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
                                        >
                                            <Dialog.Title
                                                as="h3"
                                                className={`mb-5`}
                                            >
                                                <p className="text-base font-medium leading-5 text-gray-500 flex justify-between">
                                                    Add Address
                                                    <span
                                                        onClick={() =>
                                                            setOpenAddressModal(
                                                                false
                                                            )
                                                        }
                                                        className={`mr-2 text-susty cursor-pointer`}
                                                    >
                                                        Close
                                                    </span>
                                                </p>
                                            </Dialog.Title>
                                            <div
                                                className={
                                                    'w-72 sm:w-96 border border-gray-200 p-3'
                                                }
                                            >
                                                <div
                                                    className={
                                                        'flex flex-row gap-2 '
                                                    }
                                                >
                                                    <HiInformationCircle
                                                        className={
                                                            'text-susty w-10 h-10'
                                                        }
                                                    />
                                                    <p className={'text-sm'}>
                                                        Your ZIP Code is used to
                                                        calculate applicable
                                                        sales tax.{' '}
                                                        <Link href={'#'}>
                                                            <a
                                                                className={
                                                                    'text-susty hover:underline'
                                                                }
                                                            >
                                                                Learn more.
                                                            </a>
                                                        </Link>
                                                    </p>
                                                </div>
                                            </div>

                                            <div
                                                className={
                                                    'mt-2 mb-4 grid grid-cols-1 grid-rows-6 gap-y-2'
                                                }
                                            >
                                                <div>
                                                    <div className="block px-4 text-sm font-medium text-gray-700 my-1">
                                                        Country
                                                    </div>
                                                    <div
                                                        className={
                                                            'flex gap-0 absolute max-w-max text-sm rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-1 focus:ring-susty focus:border-susty'
                                                        }
                                                    >
                                                        <Listbox
                                                            value={
                                                                selectedCountry.flag
                                                            }
                                                            onChange={
                                                                setSelectedCountry
                                                            }
                                                        >
                                                            {({open}) => (
                                                                <>
                                                                    <div className="py-1 relative pl-4 bg-white overflow-hidden">
                                                                        <Listbox.Button className="bg-white relative w-full border border-transparent focus:outline-none pl-3 pr-6 py-1 text-left cursor-default sm:text-sm">
                                                                            <span className="block truncate text-sm">
                                                                                {
                                                                                    selectedCountry.flag
                                                                                }
                                                                            </span>
                                                                            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"></span>
                                                                        </Listbox.Button>

                                                                        <Transition
                                                                            show={
                                                                                false
                                                                            }
                                                                            as={
                                                                                Fragment
                                                                            }
                                                                            leave="transition ease-in duration-100"
                                                                            leaveFrom="opacity-100"
                                                                            leaveTo="opacity-0"
                                                                        >
                                                                            <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                                                                {countries.map(
                                                                                    (
                                                                                        country
                                                                                    ) => (
                                                                                        <Listbox.Option
                                                                                            key={
                                                                                                country.id
                                                                                            }
                                                                                            className={({
                                                                                                active,
                                                                                            }) =>
                                                                                                classNames(
                                                                                                    active
                                                                                                        ? 'text-white bg-susty'
                                                                                                        : 'text-gray-900',
                                                                                                    'text-sm cursor-default select-none relative py-2 pl-3 pr-9'
                                                                                                )
                                                                                            }
                                                                                            value={
                                                                                                country
                                                                                            }
                                                                                        >
                                                                                            {({
                                                                                                selected,
                                                                                                active,
                                                                                            }) => (
                                                                                                <>
                                                                                                    <span
                                                                                                        className={classNames(
                                                                                                            selected
                                                                                                                ? 'font-semibold'
                                                                                                                : 'font-normal',
                                                                                                            'block truncate'
                                                                                                        )}
                                                                                                    >
                                                                                                        {
                                                                                                            country.flag
                                                                                                        }
                                                                                                    </span>
                                                                                                    {selected ? (
                                                                                                        <span
                                                                                                            className={classNames(
                                                                                                                active
                                                                                                                    ? 'text-white'
                                                                                                                    : 'text-susty',
                                                                                                                'absolute inset-y-0 right-0 flex items-center pr-4'
                                                                                                            )}
                                                                                                        >
                                                                                                            <HiCheck
                                                                                                                className="h-5 w-5"
                                                                                                                aria-hidden="true"
                                                                                                            />
                                                                                                        </span>
                                                                                                    ) : null}
                                                                                                </>
                                                                                            )}
                                                                                        </Listbox.Option>
                                                                                    )
                                                                                )}
                                                                            </Listbox.Options>
                                                                        </Transition>
                                                                    </div>
                                                                </>
                                                            )}
                                                        </Listbox>
                                                        <Listbox
                                                            value={
                                                                selectedCountry
                                                            }
                                                            onChange={
                                                                setSelectedCountry
                                                            }
                                                            className={
                                                                'absolute'
                                                            }
                                                        >
                                                            {({open}) => (
                                                                <>
                                                                    <div className="relative bg-white">
                                                                        <Listbox.Button className="bg-white relative w-full border border-transparent pl-3 pr-16 py-2 text-left cursor-default sm:text-sm">
                                                                            <span className="block truncate">
                                                                                {
                                                                                    selectedCountry.name
                                                                                }
                                                                            </span>
                                                                            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                                                                <HiSelector
                                                                                    className="h-5 w-5 text-gray-400"
                                                                                    aria-hidden="true"
                                                                                />
                                                                            </span>
                                                                        </Listbox.Button>

                                                                        <Transition
                                                                            show={
                                                                                open
                                                                            }
                                                                            as={
                                                                                Fragment
                                                                            }
                                                                            leave="transition ease-in duration-100"
                                                                            leaveFrom="opacity-100"
                                                                            leaveTo="opacity-0"
                                                                        >
                                                                            <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                                                                {countries.map(
                                                                                    (
                                                                                        country
                                                                                    ) => (
                                                                                        <Listbox.Option
                                                                                            key={
                                                                                                country.id
                                                                                            }
                                                                                            className={({
                                                                                                active,
                                                                                            }) =>
                                                                                                classNames(
                                                                                                    active
                                                                                                        ? 'text-white bg-susty'
                                                                                                        : 'text-gray-900',
                                                                                                    'cursor-default select-none relative py-2 pl-3 pr-9'
                                                                                                )
                                                                                            }
                                                                                            value={
                                                                                                country
                                                                                            }
                                                                                        >
                                                                                            {({
                                                                                                selected,
                                                                                                active,
                                                                                            }) => (
                                                                                                <>
                                                                                                    <span
                                                                                                        className={classNames(
                                                                                                            selected
                                                                                                                ? 'font-semibold'
                                                                                                                : 'font-normal',
                                                                                                            'block truncate'
                                                                                                        )}
                                                                                                    >
                                                                                                        {
                                                                                                            country.name
                                                                                                        }
                                                                                                    </span>
                                                                                                    {selected ? (
                                                                                                        <span
                                                                                                            className={classNames(
                                                                                                                active
                                                                                                                    ? 'text-white'
                                                                                                                    : 'text-susty',
                                                                                                                'absolute inset-y-0 right-0 flex items-center pr-4'
                                                                                                            )}
                                                                                                        >
                                                                                                            <HiCheck
                                                                                                                className="h-5 w-5"
                                                                                                                aria-hidden="true"
                                                                                                            />
                                                                                                        </span>
                                                                                                    ) : null}
                                                                                                </>
                                                                                            )}
                                                                                        </Listbox.Option>
                                                                                    )
                                                                                )}
                                                                            </Listbox.Options>
                                                                        </Transition>
                                                                    </div>
                                                                </>
                                                            )}
                                                        </Listbox>
                                                    </div>
                                                </div>
                                                <div className={'max-w-full'}>
                                                    <div className="block px-4 text-sm font-medium text-gray-700 my-1">
                                                        Full name
                                                    </div>
                                                    <div>
                                                        <input
                                                            type={'text'}
                                                            onChange={(e) => {
                                                                setInputFullName(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }}
                                                            value={
                                                                inputFullName
                                                            }
                                                            className={
                                                                'px-4 py-1.5 text-sm min-w-full rounded-md shadow-sm border border-gray-300 focus:border-susty focus:ring-susty focus:ring-offset-susty'
                                                            }
                                                            placeholder={
                                                                'eg: John Snow'
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                                <div className={'max-w-full'}>
                                                    <div className="block px-4 text-sm font-medium text-gray-700 my-1">
                                                        Address line 1
                                                    </div>
                                                    <div>
                                                        <input
                                                            type={'text'}
                                                            onChange={(e) => {
                                                                setInputAddressLine1(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }}
                                                            value={
                                                                inputAddressLine1
                                                            }
                                                            className={
                                                                'px-4 py-1.5 text-sm min-w-full rounded-md shadow-sm border border-gray-300 focus:border-susty focus:ring-susty focus:ring-offset-susty'
                                                            }
                                                            placeholder={
                                                                'eg: 136, Hill Street'
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                                <div className={'max-w-full'}>
                                                    <div className="block px-4 text-sm font-medium text-gray-700 my-1">
                                                        Address line 2
                                                        (Optional)
                                                    </div>
                                                    <div>
                                                        <input
                                                            type={'text'}
                                                            onChange={(e) => {
                                                                setInputAddressLine2(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }}
                                                            value={
                                                                inputAddressLine2
                                                            }
                                                            className={
                                                                'px-4 py-1.5 text-sm min-w-full rounded-md shadow-sm border border-gray-300 focus:border-susty focus:ring-susty focus:ring-offset-susty'
                                                            }
                                                            placeholder={
                                                                'eg: Apt2'
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                                <div className={'max-w-full'}>
                                                    <div className="block px-4 text-sm font-medium text-gray-700 my-1">
                                                        Zip code
                                                    </div>
                                                    <div>
                                                        <input
                                                            type={'number'}
                                                            min={0}
                                                            max={9999}
                                                            onChange={(e) => {
                                                                setInputZipCode(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }}
                                                            value={inputZipCode}
                                                            className={
                                                                'px-4 py-1.5 text-sm min-w-full rounded-md shadow-sm border border-gray-300 focus:border-susty focus:ring-susty focus:ring-offset-susty appearance-none'
                                                            }
                                                            placeholder={
                                                                'eg: 0604'
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                                <div className={'max-w-full'}>
                                                    <div className="block px-4 text-sm font-medium text-gray-700 my-1">
                                                        Town/City
                                                    </div>
                                                    <div>
                                                        <input
                                                            type={'text'}
                                                            onChange={(e) => {
                                                                setInputTown(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }}
                                                            value={inputTown}
                                                            className={
                                                                'px-4 py-1.5 text-sm min-w-full rounded-md shadow-sm border border-gray-300 focus:border-susty focus:ring-susty focus:ring-offset-susty'
                                                            }
                                                            placeholder={
                                                                'eg: Wellington'
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt-2 px-1 max-w-full">
                                                <motion.button
                                                    onClick={() =>
                                                        setOpenAddressModal(
                                                            false
                                                        )
                                                    }
                                                    whileHover={{scale: 1.02}}
                                                    whileTap={{scale: 0.98}}
                                                    className={`inline-flex items-center justify-center py-1.5 min-w-full border border-gray-300 shadow-sm text-sm font-medium rounded-md text-white bg-susty hover:bg-white hover:text-susty hover:border-susty focus:text-red-400 focus:border-susty focus:bg-red-50`}
                                                >
                                                    <HiBookmarkAlt className="w-5 h-5 mr-2 items-center" />
                                                    Save Changes
                                                </motion.button>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </Dialog>
                        )}
                    </AnimatePresence>
                </>
            </div>
        </div>
    )
}

export default MyAddress
