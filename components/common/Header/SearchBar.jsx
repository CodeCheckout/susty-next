import React, {Fragment, useEffect, useState} from 'react'
import {HiCheck, HiSearch, HiSelector} from 'react-icons/hi'
import {Listbox, Transition, Menu} from '@headlessui/react'
import {useDebouncedValue} from '@mantine/hooks';
import axios from 'axios'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const SearchBar = ({setSelectedSearchBarOption, selectedSearchBarOption, searchBarOptions,}) => {
    const [value, setValue] = useState('');
    const [debounced] = useDebouncedValue(value, 200, {leading: true});
    const [searchedItems, setSearchedItems] = useState([]);

    useEffect(() => {
        async function searchProducts() {
            await axios.get('/api/product/search-products', {params: {productName: debounced}})
                .then((result) => {
                    setSearchedItems(result.data.productsList)
                }).catch((err) => {
                    console.log(err);
                });
        }

        searchProducts();

    }, [debounced]);

    return (
        <div className="px-2">
            <div className="md:mx-8 md:pr-0 relative rounded shadow-sm">
                <div className="relative rounded-md shadow-sm w-full">
                    <Menu as="div" className="text-left">
                        <input
                            onChange={(event) => {
                                setValue(event.currentTarget.value);
                            }}
                            value={value}
                            type="text"
                            name="account-number"
                            id="account-number"
                            className="pl-40 focus:ring-susty focus:border-susty block min-w-full pr-8 border-gray-300 rounded-md text-sm"
                            placeholder="Search for Items"
                        />
                        <Menu.Button className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                            {value.length > 0 ? <HiSearch
                                className="h-5 w-5 text-gray-600"
                                aria-hidden="true"
                            /> : <HiSearch
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                            />}
                        </Menu.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items
                                className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                    {searchedItems.length === 0 ?
                                        <Menu.Item>
                                            <div className={'block px-4 py-2 text-sm text-gray-500 font-medium'}>
                                                No Results Found
                                            </div>
                                        </Menu.Item> :
                                        <Menu.Item>
                                            {({active}) => (
                                                <div className={'flex flex-col'}>
                                                    {searchedItems.map((searches, index) => (
                                                        <a
                                                            key={index}
                                                            href={searches.title.toLowerCase()}
                                                            className={classNames(
                                                                active ? 'text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm hover:bg-gray-100 '
                                                            )}
                                                        >
                                                            {searches.title}
                                                        </a>
                                                    ))}
                                                </div>
                                            )}
                                        </Menu.Item>
                                    }
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
                <div className="absolute inset-y-0 left-0 bottom-1 flex items-center ">
                    <Listbox
                        value={selectedSearchBarOption}
                        onChange={setSelectedSearchBarOption}
                    >
                        {({open}) => (
                            <>
                                <div className="mt-1 relative">
                                    <Listbox.Button
                                        className="bg-white relative w-[8em] border rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-susty focus:border-susty text-sm">
                                        <span className="block truncate">
                                            {selectedSearchBarOption.name}
                                        </span>
                                        <span
                                            className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
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
                                        <Listbox.Options
                                            className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none text-sm">
                                            {searchBarOptions.map((person) => (
                                                <Listbox.Option
                                                    key={person.id}
                                                    className={({active}) =>
                                                        classNames(
                                                            active
                                                                ? 'text-white bg-susty'
                                                                : 'text-gray-900',
                                                            'cursor-default select-none relative py-2 pl-3 pr-9'
                                                        )
                                                    }
                                                    value={person}
                                                >
                                                    {({selected, active}) => (
                                                        <>
                                                            <span
                                                                className={classNames(
                                                                    selected
                                                                        ? 'font-semibold'
                                                                        : 'font-normal',
                                                                    'block truncate'
                                                                )}
                                                            >
                                                                {person.name}
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

export default SearchBar
