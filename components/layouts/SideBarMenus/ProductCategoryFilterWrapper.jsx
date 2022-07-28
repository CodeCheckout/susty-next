import React, {Fragment, useEffect, useState} from 'react'
import {Dialog, Disclosure, Menu, Switch, Transition} from '@headlessui/react'
import {AnimatePresence, motion} from 'framer-motion'
import {AiOutlineClose} from 'react-icons/ai'
import {
    HiBookmarkAlt,
    HiChevronDown,
    HiFilter,
    HiMinusSm,
    HiPlusSm,
    HiViewGrid,
    HiHome,
} from 'react-icons/hi'
import axios from 'axios'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const sortOptionsStaticData = [
    {id: 1, name: 'Most Popular', href: '#'},
    {id: 2, name: 'Best Rating', href: '#'},
    {id: 3, name: 'Newest', href: '#'},
    {id: 4, name: 'Price: Low to High', href: '#'},
    {id: 5, name: 'Price: High to Low', href: '#'},
]

const subCategoriesStaticData = [
    {id: 1, name: 'Totes', href: '#'},
    {id: 2, name: 'Backpacks', href: '#'},
    {id: 3, name: 'Travel Bags', href: '#'},
    {id: 4, name: 'Hip Bags', href: '#'},
    {id: 5, name: 'Laptop Sleeves', href: '#'},
]

const filtersStaticData = [
    {
        id: 'color',
        name: 'Color',
        options: [
            {
                value: 'black',
                label: 'Black',
                colorTag: 'bg-black ring ring-offset-1 ring-gray-700',
                checked: false,
            },
            {
                value: 'gray',
                label: 'Gray',
                colorTag: 'bg-gray-500 ring ring-offset-1 ring-gray-300',
                checked: false,
            },
            {
                value: 'white',
                label: 'White',
                colorTag: 'bg-white ring ring-offset-1 ring-gray-200',
                checked: false,
            },
            {
                value: 'blue',
                label: 'Blue',
                colorTag: 'bg-blue-700 ring ring-offset-1 ring-blue-300',
                checked: false,
            },
            {
                value: 'navy',
                label: 'Navy',
                colorTag: 'bg-indigo-900 ring ring-offset-1 ring-indigo-300',
                checked: false,
            },
            {
                value: 'red',
                label: 'Red',
                colorTag: 'bg-red-600 ring ring-offset-1 ring-red-300',
                checked: false,
            },
            {
                value: 'orange',
                label: 'Orange',
                colorTag: 'bg-orange-600 ring ring-offset-1 ring-orange-300',
                checked: false,
            },
            {
                value: 'brown',
                label: 'Brown',
                colorTag: 'bg-amber-900 ring ring-offset-1 ring-amber-700',
                checked: false,
            },
            {
                value: 'mustard',
                label: 'Mustard',
                colorTag: 'bg-amber-600 ring ring-offset-1 ring-amber-200',
                checked: false,
            },
            {
                value: 'yellow',
                label: 'Yellow',
                colorTag: 'bg-yellow-500 ring ring-offset-1 ring-yellow-200',
                checked: false,
            },
            {
                value: 'mint',
                label: 'Mint',
                colorTag: 'bg-emerald-300 ring ring-offset-1 ring-emerald-200',
                checked: false,
            },
            {
                value: 'lime',
                label: 'Lime',
                colorTag: 'bg-lime-500 ring ring-offset-1 ring-lime-200',
                checked: false,
            },
            {
                value: 'green',
                label: 'Green',
                colorTag: 'bg-green-600 ring ring-offset-1 ring-green-300',
                checked: false,
            },
            {
                value: 'dark-green',
                label: 'Dark Green',
                colorTag: 'bg-green-900 ring ring-offset-1 ring-green-500',
                checked: false,
            },
            {
                value: 'dark-purple',
                label: 'Lilac',
                colorTag: 'bg-purple-800 ring ring-offset-1 ring-purple-300',
                checked: false,
            },
            {
                value: 'lilac',
                label: 'Lilac',
                colorTag: 'bg-fuchsia-400 ring ring-offset-1 ring-fuchsia-300',
                checked: false,
            },
            {
                value: 'pink',
                label: 'Pink',
                colorTag: 'bg-pink-600 ring ring-offset-1 ring-pink-200',
                checked: false,
            },
            {
                value: 'rose',
                label: 'Rose',
                colorTag: 'bg-rose-200 ring ring ring-offset-1 ring-rose-100',
                checked: false,
            },
            {
                value: 'silver',
                label: 'Silver',
                colorTag:
                    'bg-gradient-to-r from-slate-500 to-slate-100 ring ring-offset-1 ring-slate-300',
                checked: false,
            },
            {
                value: 'gold',
                label: 'Gold',
                colorTag:
                    'bg-gradient-to-r from-yellow-600 to-yellow-100 ring ring-offset-1 ring-amber-200',
                checked: false,
            },
        ],
    },
    {
        id: 'brand',
        name: 'Brand',
        options: [
            {value: 'nike', label: 'Nike', checked: false},
            {value: 'zara', label: 'Zara', checked: false},
            {value: 'adidas', label: 'Adidas', checked: false},
            {value: 'h-and-m', label: 'H&M', checked: false},
            {value: 'levis', label: "Levi's", checked: false},
            {value: 'ralph-lauren', label: 'Ralph Lauren', checked: false},
            {value: 'mango', label: 'Mango', checked: false},
            {value: 'lacoste', label: 'Lacoste', checked: false},
        ],
    },
    {
        id: 'size',
        name: 'Size',
        options: [
            {value: 'extra-small', label: 'XS', checked: false},
            {value: 'small', label: 'S', checked: false},
            {value: 'medium', label: 'M', checked: false},
            {value: 'large', label: 'L', checked: false},
            {value: 'extra-large', label: 'XL', checked: false},
            {value: 'double-extra-large', label: 'XXL', checked: false},
        ],
    },
    {
        id: 'condition',
        name: 'Condition',
        options: [
            {value: 'new-with-tags', label: 'New with Tags', checked: false},
            {
                value: 'new-without-tags',
                label: 'New without Tags',
                checked: false,
            },
            {value: 'very-good', label: 'Very good', checked: false},
            {value: 'good', label: 'Good', checked: false},
            {value: 'satisfactory', label: 'Satisfactory', checked: false},
        ],
    },
]

const sortByFilterStaticData = [
    {id: 1, name: 'Relevance'},
    {id: 2, name: 'Price: high to low'},
    {id: 3, name: 'Price: low to high'},
    {id: 4, name: 'Newest first'},
]

const ProductCategoryFilterWrapper = ({
    children,
    topic,
    noOfItems,
    pagePath,
    productResult,
    setProductResult,
}) => {
    const [sortOptions, setSortOptions] = useState(sortOptionsStaticData)
    const [subCategories, setSubCategories] = useState(subCategoriesStaticData)
    const [filters, setFilters] = useState(filtersStaticData)
    const [sortByFilter, setSortByFilter] = useState(sortByFilterStaticData)

    const [enabled, setEnabled] = useState(false) //swapping value

    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
    const [subCat1, setSubCat1] = useState()
    const [subCat2, setSubCat2] = useState()
    const [mainCat, setMainCat] = useState('Women')
    const [inputPriceFrom, setInputPriceFrom] = useState()
    const [inputPriceTo, setInputPriceTo] = useState()
    const [color, setColor] = useState()
    const [brand, setBrand] = useState()
    const [size, setSize] = useState()
    const [condition, setCondition] = useState()
    const [sortBy, setSortBy] = useState()

    //TODO check this axios call again
    useEffect(() => {
        const data = {
            mainCat,
            subCatOne: subCat1,
            subCatTwo: subCat2,
            condition,
            color,
            brand,
            size,
            sortBy,
            swapping: enabled,
            priceFrom: inputPriceFrom,
            priceTo: inputPriceTo,
        }

        async function fetchData() {
            await axios
                .get('/api/product/filter-products', {params: data})
                .then((result) => setProductResult(result.data.result))
                .catch((err) => {
                    console.log(err)
                })
        }

        fetchData()
    }, [
        color,
        brand,
        size,
        condition,
        sortBy,
        enabled,
        inputPriceFrom,
        inputPriceTo,
    ])

    return (
        <div className="bg-white mt-5">
            <div className={'mt-2'}>
                {/* Mobile filter dialog */}
                <Transition.Root show={mobileFiltersOpen} as={Fragment}>
                    <Dialog
                        as="div"
                        className="fixed inset-0 flex z-40 lg:hidden"
                        onClose={setMobileFiltersOpen}
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
                            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
                        </Transition.Child>

                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="translate-x-full"
                        >
                            <div className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
                                <div className="px-4 flex items-center justify-between">
                                    <h2 className="text-lg font-medium text-gray-900">
                                        Filters
                                    </h2>
                                    <button
                                        type="button"
                                        className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400"
                                        onClick={() =>
                                            setMobileFiltersOpen(false)
                                        }
                                    >
                                        <span className="sr-only">
                                            Close menu
                                        </span>
                                        <AiOutlineClose
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </button>
                                </div>

                                {/* Filters */}
                                <form className="mt-4 border-t border-gray-200">
                                    <h3 className="sr-only">Categories</h3>
                                    <ul
                                        role="list"
                                        className="font-medium text-gray-900 px-2 py-3"
                                    >
                                        {subCategories.map((category) => (
                                            <li key={category.id}>
                                                <a
                                                    href={category.href}
                                                    className="block px-2 py-3"
                                                >
                                                    {category.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>

                                    {filters.map((section) => (
                                        <Disclosure
                                            as="div"
                                            key={section.id}
                                            className="border-t border-gray-200 px-4 py-5"
                                        >
                                            {({open}) => (
                                                <>
                                                    <h3 className="-mx-2 -my-3 flow-root">
                                                        <Disclosure.Button className="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500">
                                                            <span className="font-medium text-gray-900">
                                                                {section.name}
                                                            </span>
                                                            <span className="ml-6 flex items-center">
                                                                {open ? (
                                                                    <HiMinusSm
                                                                        className="h-5 w-5"
                                                                        aria-hidden="true"
                                                                    />
                                                                ) : (
                                                                    <HiPlusSm
                                                                        className="h-5 w-5"
                                                                        aria-hidden="true"
                                                                    />
                                                                )}
                                                            </span>
                                                        </Disclosure.Button>
                                                    </h3>
                                                    <Disclosure.Panel className="pt-6">
                                                        <div className="space-y-6">
                                                            {section.options.map(
                                                                (
                                                                    option,
                                                                    optionIdx
                                                                ) => (
                                                                    <div
                                                                        key={
                                                                            option.value
                                                                        }
                                                                        className="flex items-center"
                                                                    >
                                                                        <input
                                                                            id={`filter-mobile-${section.id}-${optionIdx}`}
                                                                            name={`${section.id}[]`}
                                                                            defaultValue={
                                                                                option.value
                                                                            }
                                                                            type="checkbox"
                                                                            defaultChecked={
                                                                                option.checked
                                                                            }
                                                                            className="h-4 w-4 border-gray-300 rounded text-susty focus:ring-red-500"
                                                                            onChange={(
                                                                                e
                                                                            ) => {
                                                                                option.checked =
                                                                                    !option.checked
                                                                                if (
                                                                                    section.id ==
                                                                                    'color'
                                                                                ) {
                                                                                    if (
                                                                                        option.checked ==
                                                                                        false
                                                                                    ) {
                                                                                        setColor()
                                                                                    } else {
                                                                                        setColor(
                                                                                            e
                                                                                                .target
                                                                                                .value
                                                                                        )
                                                                                    }
                                                                                } else if (
                                                                                    section.id ==
                                                                                    'brand'
                                                                                ) {
                                                                                    if (
                                                                                        option.checked ==
                                                                                        false
                                                                                    ) {
                                                                                        setBrand()
                                                                                    } else {
                                                                                        setBrand(
                                                                                            e
                                                                                                .target
                                                                                                .value
                                                                                        )
                                                                                    }
                                                                                } else if (
                                                                                    section.id ==
                                                                                    'size'
                                                                                ) {
                                                                                    if (
                                                                                        option.checked ==
                                                                                        false
                                                                                    ) {
                                                                                        setSize()
                                                                                    } else {
                                                                                        setSize(
                                                                                            e
                                                                                                .target
                                                                                                .value
                                                                                        )
                                                                                    }
                                                                                } else if (
                                                                                    section.id ==
                                                                                    'condition'
                                                                                ) {
                                                                                    if (
                                                                                        option.checked ==
                                                                                        false
                                                                                    ) {
                                                                                        setCondition()
                                                                                    } else {
                                                                                        setCondition(
                                                                                            e
                                                                                                .target
                                                                                                .value
                                                                                        )
                                                                                    }
                                                                                }

                                                                                console.log(
                                                                                    e
                                                                                        .target
                                                                                        .value
                                                                                )
                                                                            }}
                                                                        />
                                                                        <label
                                                                            htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                                                            className="ml-3 min-w-0 flex-1 text-gray-500"
                                                                        >
                                                                            {
                                                                                option.label
                                                                            }
                                                                        </label>
                                                                    </div>
                                                                )
                                                            )}
                                                        </div>
                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                    ))}
                                    <Disclosure
                                        as="div"
                                        className="border-t border-gray-200 px-4 py-5"
                                    >
                                        {({open}) => (
                                            <>
                                                <h3 className="-mx-2 -my-3 flow-root">
                                                    <Disclosure.Button className="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500">
                                                        <span className="font-medium text-gray-900">
                                                            Price
                                                        </span>
                                                        <span className="ml-6 flex items-center">
                                                            {open ? (
                                                                <HiMinusSm
                                                                    className="h-5 w-5"
                                                                    aria-hidden="true"
                                                                />
                                                            ) : (
                                                                <HiPlusSm
                                                                    className="h-5 w-5"
                                                                    aria-hidden="true"
                                                                />
                                                            )}
                                                        </span>
                                                    </Disclosure.Button>
                                                </h3>
                                                <Disclosure.Panel className="pt-6">
                                                    <div className="space-y-6">
                                                        <div className="flex flex-row justify-between gap-4 items-center">
                                                            <div
                                                                className={
                                                                    'flex flex-col gap-2 items-center'
                                                                }
                                                            >
                                                                <label
                                                                    htmlFor={
                                                                        'filter-mobile-price-from'
                                                                    }
                                                                    className="ml-3 min-w-0 text-sm flex-1 text-gray-500"
                                                                >
                                                                    From
                                                                </label>
                                                                <input
                                                                    onChange={(
                                                                        e
                                                                    ) => {
                                                                        setInputPriceFrom(
                                                                            e
                                                                                .target
                                                                                .value
                                                                        )
                                                                    }}
                                                                    value={
                                                                        inputPriceFrom
                                                                    }
                                                                    id={
                                                                        'filter-mobile-price-from'
                                                                    }
                                                                    type="text"
                                                                    className="py-2 max-w-[8rem] text-xs border-b border-gray-300 outline-none rounded ring-0 ring-offset-0 focus:border-susty focus:ring-susty"
                                                                    placeholder={
                                                                        'USD'
                                                                    }
                                                                />
                                                            </div>
                                                            <div
                                                                className={
                                                                    'flex flex-col gap-2 items-center'
                                                                }
                                                            >
                                                                <label
                                                                    htmlFor={
                                                                        'filter-mobile-price-to'
                                                                    }
                                                                    className="ml-3 min-w-0 text-sm flex-1 text-gray-500"
                                                                >
                                                                    To
                                                                </label>
                                                                <input
                                                                    onChange={(
                                                                        e
                                                                    ) => {
                                                                        setInputPriceTo(
                                                                            e
                                                                                .target
                                                                                .value
                                                                        )
                                                                    }}
                                                                    value={
                                                                        inputPriceTo
                                                                    }
                                                                    id={
                                                                        'filter-mobile-price-to'
                                                                    }
                                                                    type="text"
                                                                    className="py-2 max-w-[8rem] text-xs border-b border-gray-300 outline-none rounded ring-0 ring-offset-0 focus:border-susty focus:ring-susty"
                                                                    placeholder={
                                                                        'USD'
                                                                    }
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                    <Disclosure
                                        as="div"
                                        className="border-t border-gray-200 px-4 py-5"
                                    >
                                        {({open}) => (
                                            <>
                                                <h3 className="-mx-2 -my-3 flow-root">
                                                    <Disclosure.Button className="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500">
                                                        <span className="font-medium text-gray-900">
                                                            Swap
                                                        </span>
                                                        <span className="ml-6 flex items-center">
                                                            {open ? (
                                                                <HiMinusSm
                                                                    className="h-5 w-5"
                                                                    aria-hidden="true"
                                                                />
                                                            ) : (
                                                                <HiPlusSm
                                                                    className="h-5 w-5"
                                                                    aria-hidden="true"
                                                                />
                                                            )}
                                                        </span>
                                                    </Disclosure.Button>
                                                </h3>
                                                <Disclosure.Panel className="pt-6">
                                                    <div className="space-y-6">
                                                        <div className="flex flex-row justify-between gap-4 items-center">
                                                            <label
                                                                htmlFor={
                                                                    'filter-mobile-swap-items'
                                                                }
                                                                className="ml-3 min-w-0 text-base flex-1 text-gray-600"
                                                            >
                                                                Find items for
                                                                swap
                                                            </label>
                                                            <span>
                                                                <Switch
                                                                    checked={
                                                                        enabled
                                                                    }
                                                                    onChange={
                                                                        setEnabled
                                                                    }
                                                                    className={`${
                                                                        enabled
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
                                                                            enabled
                                                                                ? 'translate-x-[1.53rem]'
                                                                                : 'translate-x-0'
                                                                        }
                                                                                            pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                                                                    />
                                                                </Switch>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                    <Disclosure
                                        as="div"
                                        className="border-t border-gray-200 px-4 py-5"
                                    >
                                        {({open}) => (
                                            <>
                                                <h3 className="-mx-2 -my-3 flow-root">
                                                    <Disclosure.Button className="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500">
                                                        <span className="font-medium text-gray-900">
                                                            Sort By
                                                        </span>
                                                        <span className="ml-6 flex items-center">
                                                            {open ? (
                                                                <HiMinusSm
                                                                    className="h-5 w-5"
                                                                    aria-hidden="true"
                                                                />
                                                            ) : (
                                                                <HiPlusSm
                                                                    className="h-5 w-5"
                                                                    aria-hidden="true"
                                                                />
                                                            )}
                                                        </span>
                                                    </Disclosure.Button>
                                                </h3>
                                                <Disclosure.Panel className="pt-6">
                                                    <div className="space-y-6">
                                                        <div className="flex flex-col">
                                                            {sortByFilter.map(
                                                                (
                                                                    sortBy,
                                                                    sortByIdx
                                                                ) => (
                                                                    <div
                                                                        key={
                                                                            sortBy.id
                                                                        }
                                                                        className={
                                                                            'flex flex-row gap-3 items-center my-2'
                                                                        }
                                                                    >
                                                                        <input
                                                                            id={`filter-mobile-${sortByFilter.id}-${sortByIdx}`}
                                                                            name={`${sortByFilter.id}[]`}
                                                                            type="radio"
                                                                            value={
                                                                                sortBy.name
                                                                            }
                                                                            className="focus:ring-red-500 h-4 w-4 text-susty border-gray-300"
                                                                            onChange={(
                                                                                e
                                                                            ) =>
                                                                                setSortBy(
                                                                                    e
                                                                                        .target
                                                                                        .value
                                                                                )
                                                                            }
                                                                        />
                                                                        <label
                                                                            htmlFor={`filter-mobile-${sortByFilter.id}-${sortByIdx}`}
                                                                            className="ml-3 min-w-0 text-base flex-1 text-gray-700"
                                                                        >
                                                                            {
                                                                                sortBy.name
                                                                            }
                                                                        </label>
                                                                    </div>
                                                                )
                                                            )}
                                                        </div>
                                                    </div>
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                </form>
                            </div>
                        </Transition.Child>
                    </Dialog>
                </Transition.Root>

                <main className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <AnimatePresence>
                        <div
                            className={
                                'grid grid-cols-6 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 justify-between items-center'
                            }
                        >
                            <div
                                className={
                                    'col-span-4 sm:col-span-3 md:col-span-4 lg:col-span-6 text-gray-600'
                                }
                            >
                                <nav className="flex" aria-label="Breadcrumb">
                                    <ol
                                        role="list"
                                        className="flex items-center space-x-0.5 sm:space-x-4"
                                    >
                                        <li>
                                            <div>
                                                <a
                                                    href="#"
                                                    className="text-gray-400 hover:text-gray-500"
                                                >
                                                    <HiHome
                                                        className="flex-shrink-0 h-5 w-5"
                                                        aria-hidden="true"
                                                    />
                                                    <span className="sr-only">
                                                        Home
                                                    </span>
                                                </a>
                                            </div>
                                        </li>
                                        {pagePath.map((page) => (
                                            <li key={page.id}>
                                                <div className="flex items-center">
                                                    <svg
                                                        className="flex-shrink-0 h-5 w-5 text-gray-300"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                        aria-hidden="true"
                                                    >
                                                        <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                                                    </svg>
                                                    <a
                                                        href={page.href}
                                                        className="sm:ml-2 sm:ml-4 text-xs sm:text-sm  font-medium text-gray-500 hover:text-gray-700 capitalize"
                                                        aria-current={
                                                            page.current
                                                                ? 'page'
                                                                : undefined
                                                        }
                                                    >
                                                        {page.name}
                                                    </a>
                                                </div>
                                            </li>
                                        ))}
                                    </ol>
                                </nav>
                            </div>
                            <div
                                className={
                                    'flex ml-auto col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-2 mt-2 lg:mt-4 px-1 max-w-[10rem]'
                                }
                            >
                                <motion.button
                                    whileHover={{scale: 1.02}}
                                    whileTap={{scale: 0.98}}
                                    className={`inline-flex justify-center items-center px-2 sm:px-4 py-1.5 min-w-full border border-gray-300 shadow-sm text-xs sm:text-base font-medium rounded-md text-white bg-susty hover:bg-white hover:text-susty hover:border-susty focus:text-red-400 focus:border-susty focus:bg-red-50`}
                                >
                                    <HiBookmarkAlt className="w-3 h-3 sm:w-5 sm:h-5 mr-2 items-center" />
                                    Save Search
                                </motion.button>
                            </div>
                        </div>
                    </AnimatePresence>
                    <div className="relative z-8 flex items-baseline justify-between pt-6 pb-6 border-b border-gray-200">
                        <div
                            className={
                                'flex flex-row gap-2 sm:gap-4 items-center'
                            }
                        >
                            <h1 className="text-2xl sm:text-4xl font-semibold tracking-tight text-gray-900">
                                {topic}
                            </h1>
                            <div
                                className={'text-sm sm:text-base text-gray-500'}
                            >
                                {noOfItems}+ results
                            </div>
                        </div>
                        <div className="flex items-center">
                            <Menu
                                as="div"
                                className="relative inline-block text-left"
                            >
                                <div>
                                    <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                        Sort
                                        <HiChevronDown
                                            className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
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
                                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="py-1">
                                            {sortOptions.map((option) => (
                                                <Menu.Item key={option.id}>
                                                    {({active}) => (
                                                        <a
                                                            href={option.href}
                                                            className={
                                                                'block px-4 py-2 text-sm font-medium text-gray-900 hover:font-semibold hover:bg-gray-100'
                                                            }
                                                        >
                                                            {option.name}
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                            ))}
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>

                            <button
                                type="button"
                                className="p-2 -m-2 ml-5 sm:ml-7 text-gray-400 hover:text-gray-500"
                            >
                                <span className="sr-only">View grid</span>
                                <HiViewGrid
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                />
                            </button>
                            <button
                                type="button"
                                className="p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden"
                                onClick={() => setMobileFiltersOpen(true)}
                            >
                                <span className="sr-only">Filters</span>
                                <HiFilter
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                />
                            </button>
                        </div>
                    </div>

                    <section
                        aria-labelledby="products-heading"
                        className="pt-6 pb-10"
                    >
                        <h2 id="products-heading" className="sr-only">
                            Products
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
                            {/* Filters */}
                            <form className="hidden lg:block min-w-max sticky top-0 h-[60vh] overflow-y-auto pr-5 mt-5">
                                <h3 className="sr-only">Categories</h3>
                                <ul
                                    role="list"
                                    className="text-sm font-medium text-gray-900 space-y-4 pb-6 border-b border-gray-200"
                                >
                                    {subCategories.map((category) => (
                                        <li key={category.id}>
                                            <a href={category.href}>
                                                {category.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>

                                {filters.map((section) => (
                                    <Disclosure
                                        as="div"
                                        key={section.id}
                                        className="border-b border-gray-200 py-5"
                                    >
                                        {({open}) => (
                                            <>
                                                <h3 className="-my-3 flow-root">
                                                    <Disclosure.Button className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500">
                                                        <span className="font-medium text-gray-900">
                                                            {section.name}
                                                        </span>
                                                        <span className="ml-6 flex items-center">
                                                            {open ? (
                                                                <HiMinusSm
                                                                    className="h-5 w-5"
                                                                    aria-hidden="true"
                                                                />
                                                            ) : (
                                                                <HiPlusSm
                                                                    className="h-5 w-5"
                                                                    aria-hidden="true"
                                                                />
                                                            )}
                                                        </span>
                                                    </Disclosure.Button>
                                                </h3>
                                                <Disclosure.Panel className="pt-6">
                                                    <div className="space-y-4">
                                                        {section.options.map(
                                                            (
                                                                option,
                                                                optionIdx
                                                            ) => (
                                                                <div
                                                                    key={
                                                                        option.value
                                                                    }
                                                                    className="flex flex-row justify-between items-center"
                                                                >
                                                                    <div
                                                                        className={
                                                                            'flex flex-row items-center'
                                                                        }
                                                                    >
                                                                        <input
                                                                            id={`filter-${section.id}-${optionIdx}`}
                                                                            name={`${section.id}[]`}
                                                                            defaultValue={
                                                                                option.value
                                                                            }
                                                                            type="checkbox"
                                                                            defaultChecked={
                                                                                option.checked
                                                                            }
                                                                            className="h-4 w-4 border-gray-300 rounded text-susty focus:ring-red-500"
                                                                            onChange={(
                                                                                e
                                                                            ) => {
                                                                                option.checked =
                                                                                    !option.checked
                                                                                if (
                                                                                    section.id ==
                                                                                    'color'
                                                                                ) {
                                                                                    if (
                                                                                        option.checked ==
                                                                                        false
                                                                                    ) {
                                                                                        setColor()
                                                                                    } else {
                                                                                        setColor(
                                                                                            e
                                                                                                .target
                                                                                                .value
                                                                                        )
                                                                                    }
                                                                                } else if (
                                                                                    section.id ==
                                                                                    'brand'
                                                                                ) {
                                                                                    if (
                                                                                        option.checked ==
                                                                                        false
                                                                                    ) {
                                                                                        setBrand()
                                                                                    } else {
                                                                                        setBrand(
                                                                                            e
                                                                                                .target
                                                                                                .value
                                                                                        )
                                                                                    }
                                                                                } else if (
                                                                                    section.id ==
                                                                                    'size'
                                                                                ) {
                                                                                    if (
                                                                                        option.checked ==
                                                                                        false
                                                                                    ) {
                                                                                        setSize()
                                                                                    } else {
                                                                                        setSize(
                                                                                            e
                                                                                                .target
                                                                                                .value
                                                                                        )
                                                                                    }
                                                                                } else if (
                                                                                    section.id ==
                                                                                    'condition'
                                                                                ) {
                                                                                    if (
                                                                                        option.checked ==
                                                                                        false
                                                                                    ) {
                                                                                        setCondition()
                                                                                    } else {
                                                                                        setCondition(
                                                                                            e
                                                                                                .target
                                                                                                .value
                                                                                        )
                                                                                    }
                                                                                }
                                                                            }}
                                                                        />

                                                                        <label
                                                                            htmlFor={`filter-${section.id}-${optionIdx}`}
                                                                            className="ml-3 text-sm text-gray-600"
                                                                        >
                                                                            {
                                                                                option.label
                                                                            }
                                                                        </label>
                                                                    </div>
                                                                    <span
                                                                        className={classNames(
                                                                            option.colorTag +
                                                                                ' w-4 h-4 rounded-full'
                                                                        )}
                                                                    />
                                                                </div>
                                                            )
                                                        )}
                                                    </div>
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                ))}
                                <Disclosure
                                    as="div"
                                    className="border-b border-gray-200 py-5"
                                >
                                    {({open}) => (
                                        <>
                                            <h3 className="-my-3 flow-root">
                                                <Disclosure.Button className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500">
                                                    <span className="font-medium text-gray-900">
                                                        Price
                                                    </span>
                                                    <span className="ml-6 flex items-center">
                                                        {open ? (
                                                            <HiMinusSm
                                                                className="h-5 w-5"
                                                                aria-hidden="true"
                                                            />
                                                        ) : (
                                                            <HiPlusSm
                                                                className="h-5 w-5"
                                                                aria-hidden="true"
                                                            />
                                                        )}
                                                    </span>
                                                </Disclosure.Button>
                                            </h3>
                                            <Disclosure.Panel className="pt-6">
                                                <div className="space-y-6">
                                                    <div className="flex flex-row items-center gap-4 mx-auto">
                                                        <div
                                                            className={
                                                                'flex flex-col gap-2 items-center'
                                                            }
                                                        >
                                                            <label
                                                                htmlFor={
                                                                    'filter-price-from'
                                                                }
                                                                className="ml-3 min-w-0 text-sm flex-1 text-gray-500"
                                                            >
                                                                From
                                                            </label>
                                                            <input
                                                                onChange={(
                                                                    e
                                                                ) => {
                                                                    setInputPriceFrom(
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }}
                                                                value={
                                                                    inputPriceFrom
                                                                }
                                                                id={
                                                                    'filter-price-from'
                                                                }
                                                                type="text"
                                                                className="py-2 max-w-[6rem] text-xs border-b border-gray-300 outline-none rounded ring-0 ring-offset-0 focus:border-susty focus:ring-susty"
                                                                placeholder={
                                                                    'USD'
                                                                }
                                                            />
                                                        </div>
                                                        <div
                                                            className={
                                                                'flex flex-col gap-2 items-center'
                                                            }
                                                        >
                                                            <label
                                                                htmlFor={
                                                                    'filter-price-to'
                                                                }
                                                                className="ml-3 min-w-0 text-sm flex-1 text-gray-500"
                                                            >
                                                                To
                                                            </label>
                                                            <input
                                                                onChange={(
                                                                    e
                                                                ) => {
                                                                    setInputPriceTo(
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }}
                                                                value={
                                                                    inputPriceTo
                                                                }
                                                                id={
                                                                    'filter-price-to'
                                                                }
                                                                type="text"
                                                                className="py-2 max-w-[6rem] text-xs border-b border-gray-300 outline-none rounded ring-0 ring-offset-0 focus:border-susty focus:ring-susty"
                                                                placeholder={
                                                                    'USD'
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                                <Disclosure
                                    as="div"
                                    className="border-b border-gray-200 py-5"
                                >
                                    {({open}) => (
                                        <>
                                            <h3 className="-my-3 flow-root">
                                                <Disclosure.Button className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500">
                                                    <span className="font-medium text-gray-900">
                                                        Swap
                                                    </span>
                                                    <span className="ml-6 flex items-center">
                                                        {open ? (
                                                            <HiMinusSm
                                                                className="h-5 w-5"
                                                                aria-hidden="true"
                                                            />
                                                        ) : (
                                                            <HiPlusSm
                                                                className="h-5 w-5"
                                                                aria-hidden="true"
                                                            />
                                                        )}
                                                    </span>
                                                </Disclosure.Button>
                                            </h3>
                                            <Disclosure.Panel className="pt-6">
                                                <div className="space-y-6">
                                                    <div className="flex flex-row justify-between gap-4 items-center">
                                                        <label
                                                            htmlFor={
                                                                'filter-swap-items'
                                                            }
                                                            className="ml-3 min-w-0 text-base flex-1 text-gray-600"
                                                        >
                                                            Find items for swap
                                                        </label>
                                                        <span>
                                                            <Switch
                                                                checked={
                                                                    enabled
                                                                }
                                                                onChange={
                                                                    setEnabled
                                                                }
                                                                className={`${
                                                                    enabled
                                                                        ? 'bg-susty'
                                                                        : 'bg-gray-300'
                                                                }
                                                                                        relative inline-flex h-[24px] w-[48px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                                                            >
                                                                <span className="sr-only">
                                                                    Use setting
                                                                </span>
                                                                <span
                                                                    aria-hidden="true"
                                                                    className={`${
                                                                        enabled
                                                                            ? 'translate-x-[1.53rem]'
                                                                            : 'translate-x-0'
                                                                    }
                                                                                             pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                                                                />
                                                            </Switch>
                                                        </span>
                                                    </div>
                                                </div>
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                                <Disclosure
                                    as="div"
                                    className="border-t border-gray-200 py-5"
                                >
                                    {({open}) => (
                                        <>
                                            <h3 className="-my-3 flow-root">
                                                <Disclosure.Button className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500">
                                                    <span className="font-medium text-gray-900">
                                                        Sort By
                                                    </span>
                                                    <span className="ml-6 flex items-center">
                                                        {open ? (
                                                            <HiMinusSm
                                                                className="h-5 w-5"
                                                                aria-hidden="true"
                                                            />
                                                        ) : (
                                                            <HiPlusSm
                                                                className="h-5 w-5"
                                                                aria-hidden="true"
                                                            />
                                                        )}
                                                    </span>
                                                </Disclosure.Button>
                                            </h3>
                                            <Disclosure.Panel className="pt-6">
                                                <div className="space-y-6">
                                                    <div className="flex flex-col">
                                                        {sortByFilter.map(
                                                            (
                                                                sortBy,
                                                                sortByIdx
                                                            ) => (
                                                                <div
                                                                    key={
                                                                        sortBy.id
                                                                    }
                                                                    className={
                                                                        'flex flex-row gap-3 items-center my-2'
                                                                    }
                                                                >
                                                                    <input
                                                                        id={`filter-${sortByFilter.id}-${sortByIdx}`}
                                                                        name={`${sortByFilter.id}[]`}
                                                                        type="radio"
                                                                        value={
                                                                            sortBy.name
                                                                        }
                                                                        className="focus:ring-red-500 h-4 w-4 text-susty border-gray-300"
                                                                        onChange={(
                                                                            e
                                                                        ) =>
                                                                            setSortBy(
                                                                                e
                                                                                    .target
                                                                                    .value
                                                                            )
                                                                        }
                                                                    />
                                                                    <label
                                                                        htmlFor={`filter-${sortByFilter.id}-${sortByIdx}`}
                                                                        className="ml-3 min-w-0 text-base flex-1 text-gray-700"
                                                                    >
                                                                        {
                                                                            sortBy.name
                                                                        }
                                                                    </label>
                                                                </div>
                                                            )
                                                        )}
                                                    </div>
                                                </div>
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                            </form>

                            {/* Product grid */}
                            <div className="lg:col-span-3 lg:col-start-2">
                                <div className="min-h-max lg:h-full overflow-y-auto">
                                    {children}
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default ProductCategoryFilterWrapper
