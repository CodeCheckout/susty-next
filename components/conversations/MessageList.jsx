import React, {useEffect, useState} from 'react'
import {HiPlusSm} from 'react-icons/hi'
import router from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import moment from 'moment'

const MessageList = () => {
    const [messages, setMessages] = useState([])

    //TODO check how to get the current user id - localstorage.getitem()
    useEffect(() => {
        const fetchMessages = async () => {
            await axios
                .get('/api/messages/getMessages', {
                    params: {sender: '62de47ab819e077df87d0661'},
                })
                .then((result) => {
                    setTimeout(() => setMessages(result.data.message), 1000)
                })
                .then((result) => {
                    if (!result.data.message) {
                        return null
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        }

        fetchMessages()
    }, [])

    return (
        <div className={'bg-gray-100'}>
            <div className="mx-auto py-4 px-4 pt-8 md:max-w-4xl">
                <div className={'w-full bg-white p-5 shadow-sm'}>
                    <div className="mt-4 px-1">
                        <Link href="/inbox/new">
                            <button
                                className={`inline-flex items-center rounded-md border border-transparent bg-red-100 px-4 py-1.5 text-xs font-medium text-susty shadow-sm hover:border-susty hover:bg-susty hover:text-white`}
                            >
                                <HiPlusSm className="mr-2 h-5 w-5 items-center" />
                                New Message
                            </button>
                        </Link>
                    </div>

                    <div className="w-full overflow-auto bg-white shadow md:h-[410px] xl:h-[630px]">
                        <div className="h-full w-full">
                            <div className={'mt-10 flex flex-col-reverse'}>
                                {messages.map((item) => (
                                    <div key={item} id={item}>
                                        <div
                                            className={
                                                'flex cursor-pointer flex-row gap-2 border-b-2 border-gray-200 py-5 px-2 hover:bg-red-50 lg:px-4'
                                            }
                                            onClick={async () => {
                                                await router.push({
                                                    pathname: '/inbox/overview',
                                                    query: {
                                                        id: item.id,
                                                        name: item.name,
                                                    },
                                                })
                                            }}
                                        >
                                            <div className={'shrink-0'}>
                                                <img
                                                    src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
                                                    className={
                                                        'inline-block h-14 w-14 basis-1/4 rounded-full sm:basis-1/6 md:basis-1/12'
                                                    }
                                                    //src={item.src}
                                                    alt={item.alt}
                                                />
                                            </div>
                                            <div
                                                className={
                                                    'flex w-full basis-1/2 flex-col pl-3 pr-2 sm:basis-4/6 md:basis-9/12 '
                                                }
                                            >
                                                <div
                                                    className={
                                                        'text-base font-medium capitalize'
                                                    }
                                                >
                                                    {item.name}
                                                </div>
                                                <div
                                                    className={
                                                        'text-sm text-gray-500'
                                                    }
                                                >
                                                    {item.message}
                                                </div>
                                            </div>
                                            <div className="w-full basis-1/4 sm:basis-1/6 md:basis-2/12">
                                                <div
                                                    className={
                                                        'float-right text-xs font-normal text-gray-500 md:text-sm '
                                                    }
                                                >
                                                    {moment(item.createdAt)
                                                        .startOf('minute')
                                                        .fromNow()}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MessageList
