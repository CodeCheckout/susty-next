import React, {Fragment, useState} from 'react'
import {Menu, Switch, Transition} from '@headlessui/react'
import {HiChevronDown} from 'react-icons/hi'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const percentageArray = [5, 10, 15, 20, 25, 30, 40, 50]

const SelectDiscount = () => {
    const [enabled, setEnabled] = useState(false)
    const [clickedDropOne, setClickedDropOne] = useState('10')
    const [clickedDropTwo, setClickedDropTwo] = useState('50')
    const [clickedDropThree, setClickedDropThree] = useState('50')

    return (
        <div className={'block'}>
            <div>
                <div className={'w-full bg-white'}>
                    <div className={'grid grid-cols-5 gap-2 p-5'}>
                        <div className={'col-span-4'}>
                            <p className={'font-medium text-gray-800'}>
                                Select Discount
                            </p>
                        </div>
                        <div className={'col-span-1 ml-auto'}>
                            <Switch
                                checked={enabled}
                                onChange={setEnabled}
                                className={`${
                                    enabled ? 'bg-susty' : 'bg-gray-300'
                                }
                                relative inline-flex h-[24px] w-[48px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                            >
                                <span className="sr-only">Use setting</span>
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
                        </div>
                    </div>
                </div>
                <div className={'px-3 mt-3 mb-6 text-xs text-gray-500'}>
                    You can give discounts in ascending order, starting with any
                    number of items. <br></br> The better the deal, the more
                    you'll sell! For help, see the FAQ.
                </div>
            </div>

            {enabled && (
                <div>
                    <div className={`bg-white`}>
                        <div
                            className={`grid grid-cols-2 p-5 pr-0 items-center`}
                        >
                            <div className={`col-span-1`}>
                                <p className={`text-base`}>2 items</p>
                            </div>
                            <div className={`grid place-items-center`}>
                                <div className="w-full pr-3">
                                    <Menu
                                        as="div"
                                        className="relative inline-block text-left w-full"
                                    >
                                        <div>
                                            <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                                                {clickedDropOne}%
                                                <HiChevronDown
                                                    className="-mr-1 ml-2 h-5 w-5"
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
                                            <Menu.Items className="z-10 origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                {percentageArray.map(
                                                    (elements, idx) => (
                                                        <div
                                                            className="py-1"
                                                            key={elements}
                                                        >
                                                            <Menu.Item>
                                                                {({active}) => (
                                                                    <a
                                                                        href="#"
                                                                        className={classNames(
                                                                            active
                                                                                ? 'bg-gray-100 text-gray-900'
                                                                                : 'text-gray-700',
                                                                            'block px-4 py-2 text-sm'
                                                                        )}
                                                                        onClick={() =>
                                                                            setClickedDropOne(
                                                                                elements
                                                                            )
                                                                        }
                                                                    >
                                                                        {
                                                                            elements
                                                                        }
                                                                    </a>
                                                                )}
                                                            </Menu.Item>
                                                        </div>
                                                    )
                                                )}
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div>
                            </div>
                        </div>
                        <hr className={`my-1`} />
                    </div>
                    <div className={`bg-white`}>
                        <div
                            className={`grid grid-cols-2 p-5 pr-0 items-center`}
                        >
                            <div className={`col-span-1`}>
                                <p className={`text-base`}>3 items</p>
                            </div>
                            <div className={`grid place-items-center`}>
                                <div className="w-full pr-3">
                                    <Menu
                                        as="div"
                                        className="relative inline-block text-left w-full"
                                    >
                                        <div>
                                            <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                                                {clickedDropTwo}%
                                                <HiChevronDown
                                                    className="-mr-1 ml-2 h-5 w-5"
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
                                            <Menu.Items className="z-10 origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                {percentageArray.map(
                                                    (elements) => (
                                                        <div
                                                            className="py-1"
                                                            key={elements}
                                                        >
                                                            <Menu.Item>
                                                                {({active}) => (
                                                                    <a
                                                                        href="#"
                                                                        className={classNames(
                                                                            active
                                                                                ? 'bg-gray-100 text-gray-900'
                                                                                : 'text-gray-700',
                                                                            'block px-4 py-2 text-sm'
                                                                        )}
                                                                        onClick={() =>
                                                                            setClickedDropTwo(
                                                                                elements
                                                                            )
                                                                        }
                                                                    >
                                                                        {
                                                                            elements
                                                                        }
                                                                    </a>
                                                                )}
                                                            </Menu.Item>
                                                        </div>
                                                    )
                                                )}
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div>
                            </div>
                        </div>
                        <hr className={`my-1`} />
                    </div>
                    <div className={`bg-white`}>
                        <div
                            className={`grid grid-cols-2 p-5 pr-0 items-center`}
                        >
                            <div className={`col-span-1`}>
                                <p className={`text-base`}>5 items</p>
                            </div>
                            <div className={`grid place-items-center`}>
                                <div className="w-full pr-3">
                                    <Menu
                                        as="div"
                                        className="relative inline-block text-left w-full"
                                    >
                                        <div>
                                            <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                                                {clickedDropThree}%
                                                <HiChevronDown
                                                    className="-mr-1 ml-2 h-5 w-5"
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
                                            <Menu.Items className="z-10 origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                {percentageArray.map(
                                                    (elements, idx) => (
                                                        <div
                                                            className="py-1"
                                                            key={elements}
                                                        >
                                                            <Menu.Item>
                                                                {({active}) => (
                                                                    <a
                                                                        href="#"
                                                                        className={classNames(
                                                                            active
                                                                                ? 'bg-gray-100 text-gray-900'
                                                                                : 'text-gray-700',
                                                                            'block px-4 py-2 text-sm'
                                                                        )}
                                                                        onClick={() =>
                                                                            setClickedDropThree(
                                                                                elements
                                                                            )
                                                                        }
                                                                    >
                                                                        {
                                                                            elements
                                                                        }
                                                                    </a>
                                                                )}
                                                            </Menu.Item>
                                                        </div>
                                                    )
                                                )}
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div>
                            </div>
                        </div>
                        <hr className={`my-1`} />
                    </div>
                </div>
            )}
        </div>
    )
}

export default SelectDiscount
