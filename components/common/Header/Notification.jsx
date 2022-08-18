import {Fragment} from 'react'
import {Popover, Transition} from '@headlessui/react'
import {IoNotificationsOutline} from 'react-icons/io5'
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import moment from 'moment'

const Notification = () => {
    const [notifications, setNotifications] = useState([])

    //TODO check how to get the current user id - localstorage.getitem()
    useEffect(() => {
        const fetchNotifications = async () => {
            await axios
                .get('/api/notification/getNotification', {
                    params: {user: '62de47ab819e077df87d0661'},
                })
                .then((result) => {
                    setTimeout(
                        () => setNotifications(result.data.notification),
                        1000
                    )
                })
                .then((result) => {
                    if (!result.data.notification) {
                        return null
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        }

        fetchNotifications()
    }, [])

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    return (
        <Popover className="relative">
            {({open}) => (
                <>
                    <Popover.Button
                        className={classNames(
                            open ? 'text-gray-900' : 'text-gray-500',
                            'focus:ring-none group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-indigo-500 focus:ring-offset-2'
                        )}
                    >
                        <IoNotificationsOutline
                            color="#a3a3a3"
                            className="h-6 w-6 cursor-pointer hover:text-red-400 focus:text-red-400"
                        />
                    </Popover.Button>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                    >
                        <Popover.Panel className="absolute left-1/2 z-10 mt-3  w-80 -translate-x-1/2 transform px-2 sm:px-0">
                            <div className="overflow-hidden rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 ">
                                <div className="  bg-white ">
                                    {notifications.map((item) => (
                                        <div key={item} id={item}>
                                            <button
                                                type="button"
                                                className=" inline-flex items-center border-b w-auto px-2 py-2 text-sm font-medium"
                                            >
                                                <div className="items-left w-fit m-1 flex-none">
                                                    <div className="m-1 ">
                                                        <img
                                                            src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
                                                            className="h-16 w-16 rounded-full"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>

                                                <div className=" w-fit bg-white pl-1 text-left text-sm font-medium text-gray-700 ">
                                                    <a
                                                        href="#"
                                                        className="block w-full px-1 py-1 "
                                                    >
                                                        <span className="text-susty">
                                                            {item.partner}
                                                        </span>{' '}
                                                        <span>
                                                            {item.message}
                                                        </span>
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="block w-full px-1 py-1 text-left"
                                                    >
                                                        {moment(item.createdAt)
                                                            .startOf('minute')
                                                            .fromNow()}
                                                    </a>
                                                </div>
                                            </button>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-center space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                                    <button
                                        type="submit"
                                        className="rounded border border-susty bg-transparent py-2 px-4 font-semibold text-red-500 hover:border-transparent hover:bg-susty hover:text-white"
                                    >
                                        See All
                                    </button>
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    )
}

export default Notification
