import React, {useState} from 'react'
import {Combobox} from '@headlessui/react'
import {HiArrowRight, HiCheck, HiChevronUp} from 'react-icons/hi'
import {FiCamera} from 'react-icons/fi'
import {useClickOutside} from '@mantine/hooks'
import {AnimatePresence, motion} from 'framer-motion'

const peopleStaticData = [
    {id: 1, name: 'Kade Cooper'},
    {id: 2, name: 'Arlene Mccoy'},
    {id: 3, name: 'Devon Webb'},
    {
        id: 4,
        name: 'Tom Cook',
    },
    {id: 5, name: 'Tanya Fox'},
    {id: 6, name: 'Hellen Schmidt'},
    {id: 7, name: 'Sebastian Carlos'},
    {
        id: 8,
        name: 'Kris Raven',
    },
    {id: 9, name: 'Amir Diafi'},
    {id: 10, name: 'David Rodenas'},
]

const SendNewMessage = () => {
    const [people, setPeople] = useState(peopleStaticData)
    const [selected, setSelected] = useState(people[0])
    const [query, setQuery] = useState('')

    const filteredPeople =
        query === ''
            ? people
            : people.filter((person) =>
                  person.name
                      .toLowerCase()
                      .replace(/\s+/g, '')
                      .includes(query.toLowerCase().replace(/\s+/g, ''))
              )

    const [opened, setOpened] = useState(false)
    const ref = useClickOutside(() => setOpened(false))

    const [msgInput, setMsgInput] = useState('')

    return (
        <div className={'bg-gray-100'}>
            <div className="mx-auto py-4 px-4 pt-8 md:max-w-4xl">
                <div
                    className={
                        'ml-2 text-sm font-medium uppercase text-gray-400'
                    }
                >
                    New Message
                </div>
                <div className={'bg-white shadow-md'}>
                    <div
                        className={'mt-5 grid grid-cols-3 px-5 pt-5 pb-[20rem]'}
                    >
                        <div className={'col-span-1 text-sm'}>To:</div>
                        <div
                            className={
                                'col-span-2 col-span-1 col-start-2 col-end-12 lg:col-start-3'
                            }
                        >
                            <AnimatePresence>
                                <Combobox
                                    onClick={() => setOpened(true)}
                                    ref={ref}
                                    value={selected}
                                    onChange={setSelected}
                                >
                                    <div className="relative mt-1">
                                        <div className="relative w-full cursor-default overflow-hidden rounded-md border-b border-susty bg-white text-left focus-visible:outline-2 focus-visible:outline-susty focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-susty sm:text-sm">
                                            <Combobox.Input
                                                className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 ring-2 ring-susty"
                                                displayValue={(person) =>
                                                    person.name
                                                }
                                                onChange={(event) =>
                                                    setQuery(event.target.value)
                                                }
                                            />
                                            <Combobox.Button
                                                onClick={() => {
                                                    setOpened(true)
                                                }}
                                                className="absolute inset-y-0 right-0 flex items-center pr-2"
                                            >
                                                <HiChevronUp
                                                    className={`h-5 w-5 text-gray-400 ${
                                                        opened
                                                            ? ''
                                                            : 'rotate-180'
                                                    }`}
                                                    aria-hidden="true"
                                                />
                                            </Combobox.Button>
                                        </div>
                                        <motion.div
                                            initial={{opacity: 0, scale: 0}}
                                            animate={{opacity: 1, scale: 1}}
                                            exit={{opacity: 0, scale: 0}}
                                        >
                                            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                {filteredPeople.length === 0 &&
                                                query !== '' ? (
                                                    <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                                        Nothing found.
                                                    </div>
                                                ) : (
                                                    filteredPeople.map(
                                                        (person) => (
                                                            <Combobox.Option
                                                                key={person.id}
                                                                className={({
                                                                    active,
                                                                }) => `relative cursor-default select-none py-2 pl-10 pr-4 text-sm 
                                                ${
                                                    active
                                                        ? 'bg-susty text-white'
                                                        : 'text-gray-900'
                                                }`}
                                                                value={person}
                                                                onClick={() => {
                                                                    setOpened(
                                                                        false
                                                                    )
                                                                }}
                                                            >
                                                                {({
                                                                    selected,
                                                                    active,
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
                                                                                person.name
                                                                            }
                                                                        </span>
                                                                        {selected ? (
                                                                            <span
                                                                                className={`absolute inset-y-0 left-0 flex items-center pl-3 text-sm ${
                                                                                    active
                                                                                        ? 'text-white'
                                                                                        : 'text-red-600'
                                                                                }`}
                                                                            >
                                                                                <HiCheck
                                                                                    className="h-5 w-5"
                                                                                    aria-hidden="true"
                                                                                />
                                                                            </span>
                                                                        ) : null}
                                                                    </>
                                                                )}
                                                            </Combobox.Option>
                                                        )
                                                    )
                                                )}
                                            </Combobox.Options>
                                        </motion.div>
                                    </div>
                                </Combobox>
                            </AnimatePresence>
                        </div>
                    </div>
                    <div
                        className={
                            'relative grid grid-cols-6 items-center gap-2 border border-t-4 border-gray-100 pr-4 lg:grid-cols-10'
                        }
                    >
                        <FiCamera
                            className={
                                'relative col-span-1 col-start-1 col-end-2 mr-auto ml-4 mr-4 h-8 w-12 text-gray-400 lg:col-start-1 lg:col-end-2'
                            }
                        />
                        <input
                            onChange={(e) => {
                                setMsgInput(e.target.value)
                            }}
                            className={
                                'col-start-2 col-end-7 my-5 rounded-lg bg-gray-100 px-5 py-3 text-sm focus:outline-none lg:col-start-2 lg:col-end-11'
                            }
                            placeholder={'Write a message here'}
                        />
                        <HiArrowRight
                            className={`absolute col-start-6 h-5 w-5 font-semibold lg:col-start-10 ${
                                msgInput.length > 0
                                    ? 'text-susty'
                                    : 'text-gray-300'
                            }`}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SendNewMessage
