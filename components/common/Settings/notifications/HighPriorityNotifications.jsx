import React, {useState} from 'react'
import {Switch} from '@headlessui/react'

const HighPriorityNotifications = () => {
    const [enabledNewMessages, setEnabledNewMessages] = useState(false)
    const [enabledNewFeedback, setEnabledNewFeedback] = useState(false)
    const [enabledDiscountItems, setEnabledDiscountItems] = useState(false)

    return (
        <div>
            <div className={'w-full bg-white'}>
                <div className="p-3">
                    <p className="text-sm text-gray-500">
                        High-priority notifications
                    </p>
                </div>
                <div
                    className={
                        'grid grid-cols-5 gap-5 p-5 border-b border-gray-200'
                    }
                >
                    <div className={'col-span-4'}>
                        <p className={'font-medium text-gray-800'}>
                            New messages
                        </p>
                    </div>
                    <div className={'col-span-1 ml-auto'}>
                        <Switch
                            checked={enabledNewMessages}
                            onChange={setEnabledNewMessages}
                            className={`${
                                enabledNewMessages ? 'bg-susty' : 'bg-gray-300'
                            }
                            relative inline-flex h-[24px] w-[48px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                        >
                            <span className="sr-only">Use setting</span>
                            <span
                                aria-hidden="true"
                                className={`${
                                    enabledNewMessages
                                        ? 'translate-x-[1.53rem]'
                                        : 'translate-x-0'
                                }
                            pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                            />
                        </Switch>
                    </div>
                </div>
            </div>
            <div className={'w-full bg-white'}>
                <div
                    className={
                        'grid grid-cols-5 gap-5 p-5 border-b border-gray-200'
                    }
                >
                    <div className={'col-span-4'}>
                        <p className={'font-medium text-gray-800'}>
                            New feedback
                        </p>
                    </div>
                    <div className={'col-span-1 ml-auto'}>
                        <Switch
                            checked={enabledNewFeedback}
                            onChange={setEnabledNewFeedback}
                            className={`${
                                enabledNewFeedback ? 'bg-susty' : 'bg-gray-300'
                            }
                            relative inline-flex h-[24px] w-[48px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                        >
                            <span className="sr-only">Use setting</span>
                            <span
                                aria-hidden="true"
                                className={`${
                                    enabledNewFeedback
                                        ? 'translate-x-[1.53rem]'
                                        : 'translate-x-0'
                                }
                            pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                            />
                        </Switch>
                    </div>
                </div>
            </div>
            <div className={'w-full bg-white'}>
                <div className={'grid grid-cols-5 gap-5 p-5'}>
                    <div className={'col-span-4'}>
                        <p className={'font-medium text-gray-800'}>
                            Discounted items
                        </p>
                    </div>
                    <div className={'col-span-1 ml-auto'}>
                        <Switch
                            checked={enabledDiscountItems}
                            onChange={setEnabledDiscountItems}
                            className={`${
                                enabledDiscountItems
                                    ? 'bg-susty'
                                    : 'bg-gray-300'
                            }
                            relative inline-flex h-[24px] w-[48px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                        >
                            <span className="sr-only">Use setting</span>
                            <span
                                aria-hidden="true"
                                className={`${
                                    enabledDiscountItems
                                        ? 'translate-x-[1.53rem]'
                                        : 'translate-x-0'
                                }
                            pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                            />
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HighPriorityNotifications
