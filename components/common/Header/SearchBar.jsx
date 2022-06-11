import React, {Fragment} from 'react'
import {HiCheck, HiSearch, HiSelector} from 'react-icons/hi'
import {Listbox, Transition} from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const SearchBar = ({setSelectedSearchBarOption, selectedSearchBarOption, searchBarOptions,}) => {
    return (
        <div className='px-2'>
            <div className="md:mx-8 md:pr-0 relative rounded shadow-sm">
                <div className="relative rounded-md shadow-sm w-full">
                    <input
                        type="text"
                        name="account-number"
                        id="account-number"
                        className="pl-40 focus:ring-susty focus:border-susty block w-full pr-8 border-gray-300 rounded-md text-sm"
                        placeholder="Search for Items"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                        <HiSearch
                            className="h-5 w-5 text-gray-400 text-susty"
                            aria-hidden="true"
                        />
                    </div>
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
