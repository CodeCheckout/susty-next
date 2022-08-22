import React, {useState} from 'react'
import {
    HiInformationCircle,
    HiLocationMarker,
    HiArrowRight,
} from 'react-icons/hi'
import {FiCamera, FiEye} from 'react-icons/fi'
import {useRouter} from 'next/router'

const receiverMessageStaticData = [
    {
        id: 1,
        username: 'John Smith',
        imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        alt: 'profile picture',
        chat: 'susty94, your free bump is about to expire. Use it! Pick an item you want to sell quick, bump it and sell it up to 5 times faster. Are you ready to upload your first item on Susty? To make selling even easier than it is already, we’re giving you 1 free bump, which you can activate within the next 7 days. A bump can make your item more visible to potential buyers. A bumped item appears high up in the newsfeed and catalog search results once a day, for 3 days in a row. Team Susty',
        country: 'New Zealand',
        active: '4 months',
        updatedAt: '6 minutes',
    },
]

const senderMessageStaticData = [{id: 1, chat: 'Hi, I will Check them.'}]

const MessageOverview = ({inboxId}) => {
    const router = useRouter()

    const [receiverMessage, setReceiverMessage] = useState(
        receiverMessageStaticData
    )
    const [senderMessage, setSenderMessage] = useState(senderMessageStaticData)
    const [msgInput, setMsgInput] = useState('')
    const [receiverUsername, setReceiverUsername] = useState(router.query.name)

    return (
        <div className={'bg-gray-100'}>
            <div className="mx-auto py-4 px-4 pt-8 md:max-w-4xl">
                <div className={'bg-white px-2 shadow-sm lg:px-2'}>
                    <div className={'flex flex-col'}>
                        {receiverMessage.map((receive) => (
                            <div
                                key={receive.id}
                                className={'flex flex-col gap-1'}
                            >
                                <div
                                    className={
                                        'float-left mb-8 grid items-center border-b-2 border-gray-100 py-5 px-3 shadow-sm'
                                    }
                                >
                                    <div
                                        className={
                                            'mx-auto text-base text-susty lg:mx-0'
                                        }
                                    >
                                        {receiverUsername}
                                    </div>
                                    <HiInformationCircle
                                        className={
                                            'h5 col-start-4 ml-auto w-5 lg:col-start-6'
                                        }
                                    />
                                </div>
                                <div className={'float-left flex px-2 sm:px-5'}>
                                    <div className={'shrink-0 sm:mr-4'}>
                                        <img
                                            className={
                                                'inline-block h-9 w-9 rounded-full md:h-12 md:w-12'
                                            }
                                            src={receive.imageUrl}
                                            alt={receive.alt}
                                        />
                                    </div>
                                    <div className={'max-w-md'}>
                                        <div
                                            className={
                                                'rounded-lg border border-gray-100 p-4 shadow-sm'
                                            }
                                        >
                                            <div
                                                className={
                                                    'flex flex-col gap-2'
                                                }
                                            >
                                                <div
                                                    className={'font-semibold'}
                                                >
                                                    Hi! I'm {receiverUsername}
                                                </div>
                                                <div
                                                    className={
                                                        'text-sm leading-relaxed'
                                                    }
                                                >
                                                    {receive.chat}
                                                </div>
                                                <div
                                                    className={
                                                        'mt-4 flex flex-row items-center gap-3 text-xs text-gray-500'
                                                    }
                                                >
                                                    <HiLocationMarker
                                                        className={'h-4 w-4'}
                                                    />
                                                    <span>
                                                        {receive.country}
                                                    </span>
                                                </div>
                                                <div
                                                    className={
                                                        'flex flex-row items-center gap-3 text-xs text-gray-500'
                                                    }
                                                >
                                                    <FiEye
                                                        className={'h-4 w-4'}
                                                    />
                                                    <span>
                                                        Last seen{' '}
                                                        {receive.active} ago
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={
                                        'inline-flex place-content-center pt-5 pb-3 text-xs font-medium text-gray-400'
                                    }
                                >
                                    in {receive.updatedAt}
                                </div>
                            </div>
                        ))}
                        {senderMessage.map((send) => (
                            <div
                                key={send.id}
                                className={
                                    'ml-auto mr-4 max-w-md rounded-lg bg-gray-100 px-5 py-3 text-sm leading-relaxed shadow-sm'
                                }
                            >
                                {send.chat}
                            </div>
                        ))}
                        <div
                            className={
                                'mt-5 mb-3 inline-flex place-content-center text-sm font-medium text-susty'
                            }
                        >
                            Translate this conversation
                        </div>
                        <div
                            className={
                                'relative grid grid-cols-5 items-center gap-2 border-t-2 border-gray-100 px-2 sm:grid-cols-12 sm:px-5 lg:grid-cols-10'
                            }
                        >
                            <FiCamera
                                className={
                                    'relative col-start-1 col-end-2 m-1 h-8 w-12 text-gray-400 sm:m-4 lg:col-start-1 lg:col-end-2'
                                }
                            />
                            <input
                                onChange={(e) => {
                                    setMsgInput(e.target.value)
                                }}
                                className={
                                    'col-start-2 col-end-13 my-5 rounded-lg bg-gray-100 px-5 py-3 text-sm focus:outline-none sm:col-start-3 lg:col-start-2 lg:col-end-11'
                                }
                                placeholder={'Write a message here'}
                            />
                            <HiArrowRight
                                className={`absolute col-start-6 h-5 w-5 font-semibold sm:col-start-12 lg:col-start-10 ${
                                    msgInput.length > 0
                                        ? 'text-susty'
                                        : 'text-gray-300'
                                }`}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MessageOverview
