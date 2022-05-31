import React, {Fragment} from 'react'
import {Listbox, Transition} from '@headlessui/react'
import {HiCheck, HiSelector} from 'react-icons/hi'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const people = [
    {
        name: 'New with tags',
        username:
            'A brand-new, unused item with tags attached or in the original packaging.',
    },
    {
        name: 'New with tags',
        username:
            'A brand-new, unused item without tags or original packaging.',
    },
    {
        name: 'Very good',
        username:
            'A lightly used item that may have slight imperfections, but still looks great. Include photos and descriptions of any flaws in your listing.',
    },
    {
        name: 'Good',
        username:
            'A used item that may show imperfections and signs of wear. Include photos and descriptions of flaws in your listing.',
    },
    {
        name: 'Satisfactory',
        username:
            'A frequently used item with imperfections and signs of wear. Include photos and descriptions of flaws in your listing.',
    },
]

const categoryFirst = ['Women', 'Men', 'Kids', 'Home', 'Entertainment']

const categorySecond = [
    'Clothes',
    'Shoes',
    'Bags',
    'Accessories',
    'Beauty',
    'Grooming',
    'Toys & games',
    'Baby care',
    'Strollers',
    'Chairs',
    'School supplies',
    'Textile',
    'Home accessories',
    'Video games & consoles',
    'Games & puzzles',
    'Music & video',
    'Books',
]

const categoryThird = [
    'Coats & jackets',
    'Jumpers & sweaters',
    'Suits & blazers',
    'Dresses',
    'Skirts',
    'Jeans',
    'Pants & leggings',
    'Shorts & cropped pants',
    'Swimwear',
    'Boots',
    'Heels',
    'Flats',
    'Ankle boots',
    'Flip-flops',
    'Handbags',
    'Backpacks',
    'Tote bags',
    'Clutches',
    'Purses & wallets',
    'Makeup bags',
    'Jewelry',
    'Watches',
    'Belts',
    'Sunglasses',
    'Gloves',
    'Hats & caps',
    'Makeup',
    'Perfume',
    'Face care',
    'Pants',
    'Shorts',
    'T-shits',
    'Sneakers',
    'Sport shoes',
]

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL', 'One size']

const CategoryBrandCondition = ({
    categoryOne,
    categoryTwo,
    categoryThree,
    setCategoryOne,
    setCategoryTwo,
    setCategoryThree,
    selected,
    setSelected,
    brand,
    setBrand,
    size,
    setSize,
}) => {
    return (
        <div className={`bg-gray-50 w-54 p-4 shadow rounded-sm grid gap-2`}>
            <div className={`grid grid-cols-5 pb-2`}>
                <p className={`font-medium text-lg`}>Main Category</p>
                <div className="flex items-center col-start-3 w-full col-span-3">
                    <Listbox value={categoryOne} onChange={setCategoryOne}>
                        {({open}) => (
                            <>
                                <div className="mt-1 relative w-full">
                                    <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-0 focus:ring-susty focus:border-susty sm:text-sm">
                                        <span className="w-full inline-flex truncate">
                                            <span className="truncate">
                                                {categoryOne}
                                            </span>
                                        </span>
                                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                            <HiSelector
                                                className="h-5 w-5 text-gray-400"
                                                aria-hidden="true"
                                            />
                                        </span>
                                    </Listbox.Button>

                                    <Transition
                                        show={open}
                                        as={Fragment}
                                        leave="transition ease-in duration-100"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                            {categoryFirst.map(
                                                (catOne, index) => (
                                                    <div key={index}>
                                                        <div>
                                                            <Listbox.Option
                                                                key={catOne}
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
                                                                value={catOne}
                                                            >
                                                                {({
                                                                    categoryOne,
                                                                    active,
                                                                }) => (
                                                                    <>
                                                                        <div className="grid">
                                                                            <div
                                                                                className={classNames(
                                                                                    categoryOne
                                                                                        ? 'font-semibold'
                                                                                        : 'font-medium',
                                                                                    'antialiased'
                                                                                )}
                                                                            >
                                                                                {
                                                                                    catOne
                                                                                }
                                                                            </div>
                                                                        </div>

                                                                        {categoryOne ? (
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
                                                        </div>
                                                        <hr />
                                                    </div>
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

            <div className={`grid grid-cols-5 pb-2`}>
                <p className={`font-medium text-lg`}>Sub Category 1</p>
                <div className="flex items-center col-start-3 w-full col-span-3">
                    <Listbox value={categoryTwo} onChange={setCategoryTwo}>
                        {({open}) => (
                            <>
                                <div className="mt-1 relative w-full">
                                    <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-0 focus:ring-susty focus:border-susty sm:text-sm">
                                        <span className="w-full inline-flex truncate">
                                            <span className="truncate">
                                                {categoryTwo}
                                            </span>
                                        </span>
                                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                            <HiSelector
                                                className="h-5 w-5 text-gray-400"
                                                aria-hidden="true"
                                            />
                                        </span>
                                    </Listbox.Button>

                                    <Transition
                                        show={open}
                                        as={Fragment}
                                        leave="transition ease-in duration-100"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                            {categorySecond.map(
                                                (catTwo, index) => (
                                                    <div key={index}>
                                                        <div>
                                                            <Listbox.Option
                                                                key={catTwo}
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
                                                                value={catTwo}
                                                            >
                                                                {({
                                                                    categoryTwo,
                                                                    active,
                                                                }) => (
                                                                    <>
                                                                        <div className="grid">
                                                                            <div
                                                                                className={classNames(
                                                                                    categoryTwo
                                                                                        ? 'font-semibold'
                                                                                        : 'font-medium',
                                                                                    'antialiased'
                                                                                )}
                                                                            >
                                                                                {
                                                                                    catTwo
                                                                                }
                                                                            </div>
                                                                        </div>

                                                                        {categoryTwo ? (
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
                                                        </div>
                                                        <hr />
                                                    </div>
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

            <div className={`grid grid-cols-5 pb-2`}>
                <p className={`font-medium text-lg`}>Sub Category 2</p>
                <div className="flex items-center col-start-3 w-full col-span-3">
                    <Listbox value={categoryThree} onChange={setCategoryThree}>
                        {({open}) => (
                            <>
                                <div className="mt-1 relative w-full">
                                    <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-0 focus:ring-susty focus:border-susty sm:text-sm">
                                        <span className="w-full inline-flex truncate">
                                            <span className="truncate">
                                                {categoryThree}
                                            </span>
                                        </span>
                                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                            <HiSelector
                                                className="h-5 w-5 text-gray-400"
                                                aria-hidden="true"
                                            />
                                        </span>
                                    </Listbox.Button>

                                    <Transition
                                        show={open}
                                        as={Fragment}
                                        leave="transition ease-in duration-100"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                            {categoryThird.map(
                                                (catThree, index) => (
                                                    <div key={index}>
                                                        <div>
                                                            <Listbox.Option
                                                                key={catThree}
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
                                                                value={catThree}
                                                            >
                                                                {({
                                                                    categoryThree,
                                                                    active,
                                                                }) => (
                                                                    <>
                                                                        <div className="grid">
                                                                            <div
                                                                                className={classNames(
                                                                                    categoryThree
                                                                                        ? 'font-semibold'
                                                                                        : 'font-medium',
                                                                                    'antialiased'
                                                                                )}
                                                                            >
                                                                                {
                                                                                    catThree
                                                                                }
                                                                            </div>
                                                                        </div>

                                                                        {categoryThree ? (
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
                                                        </div>
                                                        <hr />
                                                    </div>
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

            <hr />

            <div className={`grid grid-cols-5 py-2`}>
                <p className={`font-medium text-lg`}>Brand</p>
                <div className="flex items-center col-start-3 col-span-3">
                    <input
                        name="brand"
                        id="brand"
                        className="pl-2 focus:outline-none focus:ring-0 focus:ring-red-500 focus:border-red-500 block w-full rounded-md sm:text-sm border border-gray-300 h-10 col-start-3 col-span-3"
                        placeholder="Brand"
                        onChange={(e) => setBrand(e.target.value)}
                    />
                </div>
            </div>

            <hr />

            <div className={`grid grid-cols-5 pb-2`}>
                <p className={`font-medium text-lg`}>Size</p>
                <div className="flex items-center col-start-3 w-full col-span-3">
                    <Listbox value={size} onChange={setSize}>
                        {({open}) => (
                            <>
                                <div className="mt-1 relative w-full">
                                    <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-0 focus:ring-susty focus:border-susty sm:text-sm">
                                        <span className="w-full inline-flex truncate">
                                            <span className="truncate">
                                                {size}
                                            </span>
                                        </span>
                                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                            <HiSelector
                                                className="h-5 w-5 text-gray-400"
                                                aria-hidden="true"
                                            />
                                        </span>
                                    </Listbox.Button>

                                    <Transition
                                        show={open}
                                        as={Fragment}
                                        leave="transition ease-in duration-100"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                            {sizes.map((catThree, index) => (
                                                <div key={index}>
                                                    <div>
                                                        <Listbox.Option
                                                            key={catThree}
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
                                                            value={catThree}
                                                        >
                                                            {({
                                                                sizenow,
                                                                active,
                                                            }) => (
                                                                <>
                                                                    <div className="grid">
                                                                        <div
                                                                            className={classNames(
                                                                                sizenow
                                                                                    ? 'font-semibold'
                                                                                    : 'font-medium',
                                                                                'antialiased'
                                                                            )}
                                                                        >
                                                                            {
                                                                                catThree
                                                                            }
                                                                        </div>
                                                                    </div>

                                                                    {sizenow ? (
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
                                                    </div>
                                                    <hr />
                                                </div>
                                            ))}
                                        </Listbox.Options>
                                    </Transition>
                                </div>
                            </>
                        )}
                    </Listbox>
                </div>
            </div>

            <hr />

            <div className={`grid grid-cols-5 pt-2`}>
                <p className={`font-medium text-lg`}>Condition</p>
                <div className={`flex items-center col-start-3 col-span-3`}>
                    <Listbox value={selected} onChange={setSelected}>
                        {({open}) => (
                            <>
                                <div className="mt-1 relative w-full">
                                    <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-0 focus:ring-susty focus:border-susty sm:text-sm">
                                        <span className="w-full inline-flex truncate">
                                            <span className="truncate">
                                                {selected.name}
                                            </span>
                                            {/*<span*/}
                                            {/*    className="ml-2 truncate text-gray-500">{selected.username}</span>*/}
                                        </span>
                                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                            <HiSelector
                                                className="h-5 w-5 text-gray-400"
                                                aria-hidden="true"
                                            />
                                        </span>
                                    </Listbox.Button>

                                    <Transition
                                        show={open}
                                        as={Fragment}
                                        leave="transition ease-in duration-100"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                            {people.map((person, index) => (
                                                <div key={index}>
                                                    <div>
                                                        <Listbox.Option
                                                            key={
                                                                person.username
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
                                                            value={person}
                                                        >
                                                            {({
                                                                selected,
                                                                active,
                                                            }) => (
                                                                <>
                                                                    <div className="grid">
                                                                        <div
                                                                            className={classNames(
                                                                                selected
                                                                                    ? 'font-semibold'
                                                                                    : 'font-medium',
                                                                                'antialiased'
                                                                            )}
                                                                        >
                                                                            {
                                                                                person.name
                                                                            }
                                                                        </div>
                                                                        <div
                                                                            className={classNames(
                                                                                selected
                                                                                    ? 'font-medium'
                                                                                    : 'font-normal',
                                                                                'antialiased'
                                                                            )}
                                                                        >
                                                                            {
                                                                                person.username
                                                                            }
                                                                        </div>
                                                                    </div>

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
                                                    </div>
                                                    <hr />
                                                </div>
                                            ))}
                                        </Listbox.Options>
                                    </Transition>
                                </div>
                            </>
                        )}
                    </Listbox>
                </div>
            </div>
        </div>
    )
}

export default CategoryBrandCondition
