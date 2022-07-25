import React, {Fragment, useState} from 'react';
import {Listbox, Transition} from "@headlessui/react";
import {motion} from "framer-motion";
import {HiCheck,HiSelector} from 'react-icons/hi'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const genders = [
    {id: 1, value: "Male"},
    {id: 2, value: "Female"},
    {id: 3, value: "Other"},
]

const months = [
    {id: 1, value: "January"},
    {id: 2, value: "February"},
    {id: 3, value: "March"},
    {id: 4, value: "April"},
    {id: 5, value: "May"},
]

const NameGenderAndBirthday = () => {
    const [selectedGender, setSelectedGender] = useState(genders[0]);
    const [selectedMonth, setSelectedMonth] = useState(months[0]);
    const [nameInput, setNameInput] = useState('');
    const [dayInput, setDayInput] = useState('');
    const [yearInput, setYearInput] = useState('');

    return (
        <div>
            <div className={`grid grid-cols-1 gap-3 bg-white p-4`}>
                <p className={'text-base font-medium'}>Name</p>
                <input
                    onChange={(e)=>{
                        setNameInput(e.target.value)
                    }}
                    value={nameInput}
                    name="full-name"
                    id="full-name"
                    className="pl-2 focus:outline-none focus:ring-1 focus:ring-susty focus:border-susty block w-full rounded-md sm:text-sm border border-gray-300 h-10"
                    placeholder="Type your name"
                />

                <p className={'text-base font-medium'}>Gender</p>
                <Listbox value={selectedGender} onChange={setSelectedGender}>
                    {({open}) => (
                        <>
                            <div className="relative">
                                <Listbox.Button
                                    className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-susty focus:border-susty sm:text-sm">
                                    <span
                                        className="block truncate">{selectedGender.value}</span>
                                    <span
                                        className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                        <HiSelector className="h-5 w-5 text-gray-400" aria-hidden="true"/>
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
                                        className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                        {genders.map((singleGender) => (
                                            <Listbox.Option
                                            key={singleGender.id}
                                            className={({active}) => classNames(active ? 'text-white bg-susty' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-3 pr-9')}
                                            value={singleGender}
                                        >
                                            {({selected, active}) => (<>
                                                <span
                                                    className={classNames(selected ? 'font-base ' : 'font-thin', 'block truncate')}>
                                                    {singleGender.value}
                                                </span>
                                                {selected ? (<span
                                                    className={classNames(active ? 'text-white' : 'text-susty', 'absolute inset-y-0 right-0 flex items-center pr-4')}
                                                >
                                                    <HiCheck className="h-5 w-5"
                                                               aria-hidden="true"/>
                                                </span>) : null}
                                            </>)}
                                        </Listbox.Option>))}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                        </>)}
                </Listbox>

                <p className={'text-base font-medium'}>Birthday</p>
                <div className={`grid grid-cols-3 gap-2`}>
                    <input
                        onChange={(e)=>{
                            setDayInput(e.target.value)
                        }}
                        value={dayInput}
                        name="day"
                        id="day"
                        className="pl-2 focus:outline-none focus:ring-1 focus:ring-susty focus:border-susty block w-full rounded-md sm:text-sm border border-gray-300 h-10"
                        placeholder="Day"
                    />

                    <Listbox value={selectedMonth} onChange={setSelectedMonth}>
                        {({open}) => (
                            <>
                                <div className="relative">
                                    <Listbox.Button
                                        className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-susty focus:border-susty sm:text-sm">
                                    <span
                                        className="block truncate">{selectedMonth.value}</span>
                                        <span
                                            className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                        <HiSelector className="h-5 w-5 text-gray-400" aria-hidden="true"/>
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
                                            className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                            {months.map((singleMonth) => (<Listbox.Option
                                                key={singleMonth.id}
                                                className={({active}) => classNames(active ? 'text-white bg-susty' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-3 pr-9')}
                                                value={singleMonth}
                                            >
                                                {({selected, active}) => (<>
                                                <span
                                                    className={classNames(selected ? 'font-base ' : 'font-thin', 'block truncate')}>
                                                    {singleMonth.value}
                                                </span>
                                                    {selected ? (<span
                                                        className={classNames(active ? 'text-white' : 'text-susty', 'absolute inset-y-0 right-0 flex items-center pr-4')}
                                                    >
                                                    <CheckIcon className="h-5 w-5"
                                                               aria-hidden="true"/>
                                                </span>) : null}
                                                </>)}
                                            </Listbox.Option>))}
                                        </Listbox.Options>
                                    </Transition>
                                </div>
                            </>)}
                    </Listbox>
                    <input
                        onChange={(e)=>{
                            setYearInput(e.target.value)
                        }}
                        value={yearInput}
                        name="year"
                        id="year"
                        className="pl-2 focus:outline-none focus:ring-1 focus:ring-susty focus:border-susty block w-full rounded-md sm:text-sm border border-gray-300 h-10 "
                        placeholder="Year"
                    />
                </div>
            </div>
            <div className={'flex mt-4 mb-5 justify-end'}>
                <motion.button
                    whileHover={{scale: 1.02}}
                    whileTap={{scale: 0.98}}
                    className={`inline-flex items-center px-4 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-white bg-susty hover:bg-white hover:text-susty hover:border-susty focus:text-red-400 focus:border-susty focus:bg-red-50`}>
                    Save
                </motion.button>
            </div>
        </div>
    );
};

export default NameGenderAndBirthday;