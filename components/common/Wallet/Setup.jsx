import React, {Fragment, useState} from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import {Menu, Popover, Transition, Listbox} from '@headlessui/react'
import {HiSelector} from 'react-icons/hi'

const month = [
    {id: '15261cf9-8af5-437a-b74a-57c1c67acccc', name: 'January'},
    {id: '7525a3fb-4b3b-4cc9-bf76-469505cc2a0d', name: 'February'},
    // testing for space
    {id: 'deec776c-b19f-4489-97c6-88460df93088', name: 'March'},
    {id: 'b07f174a-3d9c-4fee-ae64-93af554dfbb5', name: 'April'},
    {id: '0279a461-5844-435b-835d-c745f4bf6318', name: 'May'},
    {id: '4c4faf19-f859-4a63-9388-5719be6394d1', name: 'June'},
    {id: '718d1e9c-6cc9-4337-b4c8-289343bf0b0b', name: 'July'},
    {id: '449075c5-aef2-48de-a494-161ec62dd837', name: 'August'},
    {id: '70f90482-1441-4c28-bfb4-7d0b77a53fbf', name: 'September'},
    {id: '717df3f6-9798-4f4b-96fa-6d2c09c3b0a7', name: 'Octomber'},
    {id: '5b82ed7f-e52f-4565-82c8-3fcae640f3b3', name: 'November'},
    {id: '5411e173-04c6-4722-be0d-35bd6b9c3269', name: 'December'},
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Setup = () => {
    const [monthList, setMonthList] = useState(month)
    const [selectedMonth, setSelectedMonth] = useState(month[0].name)

    return (
        <>
            <div className={'m-3 bg-white p-4'}>
                <div className=" bg-white text-left">
                    <div className="mb-4 text-xs text-gray-500">
                        Personal info
                    </div>

                    <div className={`my-4 grid grid-cols-5 pb-2`}>
                        <p className={`col-span-2 text-sm sm:text-base`}>
                            Account holder's name
                        </p>
                        <input
                            name="title"
                            id="title"
                            className="col-span-3 col-start-3 block h-10 w-full border-b-2 pl-2 text-sm focus:border-red-500 focus:outline-none focus:ring-0 focus:ring-red-500"
                            placeholder="Susty spy"
                        />
                    </div>

                    <div className={`my-4 grid grid-cols-5 pb-2`}>
                        <p className={`col-span-2 text-sm sm:text-base`}>
                            Date of birth
                        </p>
                        <div className="col-span-3 col-start-3 inline-flex">
                            <input
                                name="dob_day"
                                id="dob_day"
                                className="col-span-3 col-start-3 mr-2 block h-10 w-full border-b-2 pl-2 text-xs md:text-sm focus:border-red-500 focus:outline-none focus:ring-0 focus:ring-red-500"
                                placeholder="Day"
                            />

                            <div className="col-span-3 col-start-3 mx-2 flex w-full items-center">
                                <Listbox
                                    value={selectedMonth}
                                    onChange={setSelectedMonth}
                                >
                                    {({open}) => (
                                        <>
                                            <div className="relative mt-1 w-full">
                                                <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left text-sm shadow-sm focus:border-susty focus:outline-none focus:ring-0 focus:ring-susty">
                                                    <span className="inline-flex w-full truncate">
                                                        <span className="truncate text-xs md:text-sm">
                                                            {selectedMonth}
                                                        </span>
                                                    </span>
                                                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
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
                                                    <Listbox.Options className="absolute text-xs md:text-sm z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                        {monthList.map(
                                                            (month, index) => (
                                                                <div
                                                                    key={
                                                                        month.id
                                                                    }
                                                                >
                                                                    <div>
                                                                        <Listbox.Option
                                                                            key={
                                                                                month.id
                                                                            }
                                                                            className={({
                                                                                active,
                                                                            }) =>
                                                                                classNames(
                                                                                    active
                                                                                        ? 'bg-susty text-white'
                                                                                        : 'text-gray-900',
                                                                                    'relative cursor-default select-none py-2 pl-3 pr-9'
                                                                                )
                                                                            }
                                                                            value={
                                                                                month.name
                                                                            }
                                                                        >
                                                                            {({
                                                                                selectedMonth,
                                                                                active,
                                                                            }) => (
                                                                                <>
                                                                                    <div className="grid">
                                                                                        <div
                                                                                            className={classNames(
                                                                                                selectedMonth
                                                                                                    ? 'font-normal'
                                                                                                    : 'font-normal',
                                                                                                'antialiased'
                                                                                            )}
                                                                                        >
                                                                                            {
                                                                                                month.name
                                                                                            }
                                                                                        </div>
                                                                                    </div>

                                                                                    {selectedMonth ? (
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

                            <input
                                name="dob_year"
                                id="dob_year"
                                className="col-span-3 block h-10 w-full border-b-2 pl-2 text-xs md:text-sm focus:border-red-500 focus:outline-none focus:ring-0 focus:ring-red-500"
                                placeholder="Year"
                            />
                        </div>
                    </div>
                    <div className={`my-4 grid grid-cols-5 pb-2`}>
                        <p className={`col-span-2 text-sm sm:text-base `}>
                            Social Security number (last 4 digits)
                        </p>
                        <div className="col-span-3 col-start-3 inline-flex ">
                            <input
                                name="title"
                                id="title"
                                className="col-span-3 col-start-3 block h-10 w-full border-b-2 pl-2 text-sm focus:border-red-500 focus:outline-none focus:ring-0 focus:ring-red-500"
                                placeholder="Susty spy"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className={'m-3 bg-white p-4'}>
                <div className=" bg-white text-left">
                    <div className="mb-4 text-xs text-gray-500">
                        Billing address
                    </div>

                    <div
                        className={`flex justify-between p-4 hover:bg-slate-50`}
                    >
                        <p className={`text-sm font-medium sm:text-base`}>
                            Add billing address
                        </p>
                        <div>
                            <AiOutlinePlus size={20} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Setup
