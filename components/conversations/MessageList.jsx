import React, {useState} from 'react'
import {HiPlusSm} from 'react-icons/hi'
import router from 'next/router'
import Link from 'next/link'

const messagesStaticData = [
    {
        id: '18c02338-655e-461a-b48f-f42aa6a84844',
        src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        alt: 'profile picture',
        name: 'Susty',
        message: "Let's get started on vinted",
        createdAt: '1 week ago',
    },
    {
        id: '32304678-b2e3-4551-b16b-1f93cdce44ed',
        src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        alt: 'profile picture',
        name: 'John Smith',
        message: 'Invite friends and get vouchers',
        createdAt: '1 week ago',
    },
    {
        id: '634629e1-941f-42ba-8477-b8a8daf1e732',
        src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        alt: 'profile picture',
        name: 'David Rodenas',
        message: 'A gift to help you sell faster',
        createdAt: '1 week ago',
    },
    {
        id: '5c7d2b1a-6330-4b6c-8285-bbe7bbfa74bf',
        src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        alt: 'profile picture',
        name: 'Steven Sim',
        message: 'Your free bump will expire soon',
        createdAt: '1 day ago',
    },
]

const MessageList = () => {
    const [messages, setMessages] = useState(messagesStaticData)

    return (
        <div className={'bg-gray-100'}>
            <div className="py-4 px-4 md:max-w-4xl mx-auto pt-8">
                <div className={'w-full bg-white p-5 shadow-sm'}>
                    <div className="mt-4 px-1">
                        <Link href="/inbox/new">
                            <button
                                className={`inline-flex items-center px-4 py-1.5 border border-transparent shadow-sm text-xs font-medium rounded-md text-susty bg-red-100 hover:bg-susty hover:text-white hover:border-susty`}
                            >
                                <HiPlusSm className="w-5 h-5 mr-2 items-center" />
                                New Message
                            </button>
                        </Link>
                    </div>
                    <div className={'flex flex-col-reverse mt-10'}>
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={
                                    'flex flex-row gap-2 border-b-2 border-gray-200 py-5 px-2 lg:px-4 hover:bg-red-50 cursor-pointer'
                                }
                                onClick={async () => {
                                    await router.push({
                                        pathname: '/inbox/overview',
                                        query: {
                                            id: msg.id,
                                            name: msg.name,
                                        },
                                    })
                                }}
                            >
                                <div className={'shrink-0'}>
                                    <img
                                        className={
                                            'basis-1/4 sm:basis-1/6 md:basis-1/12 inline-block h-14 w-14 rounded-full'
                                        }
                                        src={msg.src}
                                        alt={msg.alt}
                                    />
                                </div>
                                <div
                                    className={
                                        'basis-1/2 sm:basis-4/6 md:basis-9/12 pl-3 flex flex-col pr-2 w-full '
                                    }
                                >
                                    <div
                                        className={
                                            'font-medium text-base capitalize'
                                        }
                                    >
                                        {msg.name}
                                    </div>
                                    <div className={'text-sm text-gray-500'}>
                                        {msg.message}
                                    </div>
                                </div>
                                <div className="basis-1/4 sm:basis-1/6 md:basis-2/12 w-full">
                                    <div
                                        className={
                                            'float-right md:text-sm text-xs font-normal text-gray-500 '
                                        }
                                    >
                                        {msg.createdAt}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MessageList
