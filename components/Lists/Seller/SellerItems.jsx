import React, {useState, Fragment, useEffect} from 'react'
import {Listbox, Transition} from '@headlessui/react'
import {HiCheck, HiSelector} from 'react-icons/hi'
import {categoryObj} from '../../../services/categoryObj'
import SellerItemCard from '../../Cards/Item/SellerItemCard'
import axios from 'axios'

const sortBy = [
    {id: 1, name: 'Relevance'},
    {id: 2, name: 'Price: high to low'},
    {id: 3, name: 'Price: low to high'},
    {id: 4, name: 'Newest first'},
]

const categories = categoryObj

const SellerItems = ({userId, isSameUser}) => {
    const [selected, setSelected] = useState(sortBy[0])
    const [selectedCategory, setSelectedCategory] = useState(categories[0])
    const [selectedSubCategory, setSelectedSubCategory] = useState(
        selectedCategory.subCategory[0]
    )
    const [userDetails, setUserDetails] = useState({})
    const [retrieveStatus, setRetrieveStatus] = useState(false)

    useEffect(() => {
        async function getUserDetails() {
            await axios
                .get('/api/user/fetch-seller-products', {
                    params: {userId: userId},
                })
                .then((result) => {
                    setUserDetails(result.data.products)
                    setRetrieveStatus(result.data.success)
                })
        }
        getUserDetails()
    }, [])

    return (
        <>
            {retrieveStatus ? (
                <>
                    <div
                        className={
                            'flex flex-col items-center justify-between lg:flex-row'
                        }
                    >
                        <div
                            className={'text-sm font-medium sm:text-lg lg:pl-8'}
                        >
                            {userDetails.products.length} items
                        </div>
                        {isSameUser === true ? (
                            <></>
                        ) : (
                            <>
                                <div
                                    className={
                                        'flex flex-col items-center gap-1 lg:flex-row lg:gap-2'
                                    }
                                >
                                    <div
                                        className={
                                            'flex flex-row items-center gap-1 lg:gap-2'
                                        }
                                    >
                                        <div
                                            className={'w-[9rem] lg:w-[12rem]'}
                                        >
                                            <Listbox
                                                value={selectedCategory}
                                                onChange={setSelectedCategory}
                                            >
                                                <div className="relative mt-1">
                                                    <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left text-xs shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300">
                                                        <span className="block truncate">
                                                            {
                                                                selectedCategory.name
                                                            }
                                                        </span>
                                                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                            <HiSelector
                                                                className="h-5 w-5 text-gray-400"
                                                                aria-hidden="true"
                                                            />
                                                        </span>
                                                    </Listbox.Button>
                                                    <Transition
                                                        as={Fragment}
                                                        leave="transition ease-in duration-100"
                                                        leaveFrom="opacity-100"
                                                        leaveTo="opacity-0"
                                                    >
                                                        <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-xs shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                            {categories.map(
                                                                (category) => (
                                                                    <Listbox.Option
                                                                        key={
                                                                            category.id
                                                                        }
                                                                        className={({
                                                                            active,
                                                                        }) =>
                                                                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                                                active
                                                                                    ? 'bg-red-100 text-red-900'
                                                                                    : 'text-gray-900'
                                                                            }`
                                                                        }
                                                                        value={
                                                                            category
                                                                        }
                                                                    >
                                                                        {({
                                                                            selected,
                                                                        }) => (
                                                                            <>
                                                                                <span
                                                                                    className={`block truncate ${
                                                                                        selected
                                                                                            ? 'font-medium'
                                                                                            : 'font-normal'
                                                                                    }`}
                                                                                >
                                                                                    {
                                                                                        category.name
                                                                                    }
                                                                                </span>
                                                                                {selected ? (
                                                                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-susty">
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
                                            </Listbox>
                                        </div>
                                        <div
                                            className={'w-[10rem] lg:w-[12rem]'}
                                        >
                                            <Listbox
                                                value={selectedSubCategory}
                                                onChange={
                                                    setSelectedSubCategory
                                                }
                                            >
                                                <div className="relative mt-1">
                                                    <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left text-xs shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300">
                                                        <span className="block truncate">
                                                            {
                                                                selectedSubCategory.name
                                                            }
                                                        </span>
                                                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                            <HiSelector
                                                                className="h-5 w-5 text-gray-400"
                                                                aria-hidden="true"
                                                            />
                                                        </span>
                                                    </Listbox.Button>
                                                    <Transition
                                                        as={Fragment}
                                                        leave="transition ease-in duration-100"
                                                        leaveFrom="opacity-100"
                                                        leaveTo="opacity-0"
                                                    >
                                                        <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-xs shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                            {selectedCategory.subCategory.map(
                                                                (category) => (
                                                                    <Listbox.Option
                                                                        key={
                                                                            category.id
                                                                        }
                                                                        className={({
                                                                            active,
                                                                        }) =>
                                                                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                                                active
                                                                                    ? 'bg-red-100 text-red-900'
                                                                                    : 'text-gray-900'
                                                                            }`
                                                                        }
                                                                        value={
                                                                            category
                                                                        }
                                                                    >
                                                                        {({
                                                                            selected,
                                                                        }) => (
                                                                            <>
                                                                                <span
                                                                                    className={`block truncate ${
                                                                                        selected
                                                                                            ? 'font-medium'
                                                                                            : 'font-normal'
                                                                                    }`}
                                                                                >
                                                                                    {
                                                                                        category.name
                                                                                    }
                                                                                </span>
                                                                                {selected ? (
                                                                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-susty">
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
                                            </Listbox>
                                        </div>
                                    </div>
                                    <div className={'w-[10rem] lg:w-[12rem]'}>
                                        <Listbox
                                            value={selected}
                                            onChange={setSelected}
                                        >
                                            <div className="relative mt-1">
                                                <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left text-xs shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300">
                                                    <span className="block truncate">
                                                        {selected.name}
                                                    </span>
                                                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                        <HiSelector
                                                            className="h-5 w-5 text-gray-400"
                                                            aria-hidden="true"
                                                        />
                                                    </span>
                                                </Listbox.Button>
                                                <Transition
                                                    as={Fragment}
                                                    leave="transition ease-in duration-100"
                                                    leaveFrom="opacity-100"
                                                    leaveTo="opacity-0"
                                                >
                                                    <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-xs shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                        {sortBy.map(
                                                            (sortedBy) => (
                                                                <Listbox.Option
                                                                    key={
                                                                        sortedBy.id
                                                                    }
                                                                    className={({
                                                                        active,
                                                                    }) =>
                                                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                                            active
                                                                                ? 'bg-red-100 text-red-900'
                                                                                : 'text-gray-900'
                                                                        }`
                                                                    }
                                                                    value={
                                                                        sortedBy
                                                                    }
                                                                >
                                                                    {({
                                                                        selected,
                                                                    }) => (
                                                                        <>
                                                                            <span
                                                                                className={`block truncate ${
                                                                                    selected
                                                                                        ? 'font-medium'
                                                                                        : 'font-normal'
                                                                                }`}
                                                                            >
                                                                                {
                                                                                    sortedBy.name
                                                                                }
                                                                            </span>
                                                                            {selected ? (
                                                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-susty">
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
                                        </Listbox>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>

                    {userDetails.products && (
                        <>
                            <div
                                className={
                                    'grid grid-cols-2 justify-items-center gap-3 py-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
                                }
                            >
                                {userDetails.products.map((product) => (
                                    <div key={product}>
                                        <SellerItemCard productId={product} />
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </>
            ) : (
                <>
                    <div className="mt-14 grid place-content-center gap-4">
                        <div className="grid place-content-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-24 w-24"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="#8f8f8f"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                        <p className={'text-2xl font-medium text-center'}>
                            No items yet
                        </p>
                        <p className="font-susty text-gray-500">
                            The user doesn't have any products.
                        </p>
                    </div>
                </>
            )}
        </>
    )
}

export default SellerItems
