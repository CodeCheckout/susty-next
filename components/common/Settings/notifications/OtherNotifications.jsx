import React, {useState} from 'react';
import {Switch} from '@headlessui/react';

const OtherNotifications = () => {
    const [enabledFavItems, setEnabledFavItems] = useState(false);
    const [enabledNewFollowers, setEnabledNewFollowers] = useState(false);
    const [enabledNewItems, setEnabledNewItems] = useState(false);
    const [enabledMentions, setEnabledMentions] = useState(false);
    const [enabledForumMessages, setEnabledForumMessages] = useState(false);

    return (
        <div className={"mb-14"}>
            <div className={"w-full bg-white"}>
                <div className='p-3'>
                    <p className='text-sm text-gray-500'>Other notifications</p>
                </div>
                <div className={"grid grid-cols-5 gap-5 p-5 border-b border-gray-200"}>
                    <div className={"col-span-4"}>
                        <p className={"font-medium text-gray-800"}>Favourited Items</p>
                    </div>
                    <div className={"col-span-1 ml-auto"}>
                        <Switch
                            checked={enabledFavItems}
                            onChange={setEnabledFavItems}
                            className={`${enabledFavItems ? 'bg-susty' : 'bg-gray-300'}
                           relative inline-flex h-[24px] w-[48px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                        >
                            <span className="sr-only">Use setting</span>
                            <span
                                aria-hidden="true"
                                className={`${enabledFavItems ? 'translate-x-[1.53rem]' : 'translate-x-0'}
                            pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                            />
                        </Switch>
                    </div>
                </div>
            </div>
            <div className={"w-full bg-white"}>
                <div className={"grid grid-cols-5 gap-5 p-5 border-b border-gray-200"}>
                    <div className={"col-span-4"}>
                        <p className={"font-medium text-gray-800"}>New followers</p>
                    </div>
                    <div className={"col-span-1 ml-auto"}>
                        <Switch
                            checked={enabledNewFollowers}
                            onChange={setEnabledNewFollowers}
                            className={`${enabledNewFollowers ? 'bg-susty' : 'bg-gray-300'}
                            relative inline-flex h-[24px] w-[48px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                        >
                            <span className="sr-only">Use setting</span>
                            <span
                                aria-hidden="true"
                                className={`${enabledNewFollowers ? 'translate-x-[1.53rem]' : 'translate-x-0'}
                            pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                            />
                        </Switch>
                    </div>
                </div>
            </div>
            <div className={"w-full bg-white"}>
                <div className={"grid grid-cols-5 gap-5 p-5 border-b border-gray-200"}>
                    <div className={"col-span-4"}>
                        <p className={"font-medium text-gray-800"}>New items</p>
                    </div>
                    <div className={"col-span-1 ml-auto"}>
                        <Switch
                            checked={enabledNewItems}
                            onChange={setEnabledNewItems}
                            className={`${enabledNewItems ? 'bg-susty' : 'bg-gray-300'}
                            relative inline-flex h-[24px] w-[48px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                        >
                            <span className="sr-only">Use setting</span>
                            <span
                                aria-hidden="true"
                                className={`${enabledNewItems ? 'translate-x-[1.53rem]' : 'translate-x-0'}
                            pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                            />
                        </Switch>
                    </div>
                </div>
            </div>
            <div className={"w-full bg-white"}>
                <div className={"grid grid-cols-5 gap-5 p-5 border-b border-gray-200"}>
                    <div className={"col-span-4"}>
                        <p className={"font-medium text-gray-800"}>Mentions</p>
                    </div>
                    <div className={"col-span-1 ml-auto"}>
                        <Switch
                            checked={enabledMentions}
                            onChange={setEnabledMentions}
                            className={`${enabledMentions ? 'bg-susty' : 'bg-gray-300'}
                            relative inline-flex h-[24px] w-[48px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                        >
                            <span className="sr-only">Use setting</span>
                            <span
                                aria-hidden="true"
                                className={`${enabledMentions ? 'translate-x-[1.53rem]' : 'translate-x-0'}
                            pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                            />
                        </Switch>
                    </div>
                </div>
            </div>
            <div className={"w-full bg-white"}>
                <div className={"grid grid-cols-5 gap-5 p-5"}>
                    <div className={"col-span-4"}>
                        <p className={"font-medium text-gray-800"}>Susty Team forum messages</p>
                    </div>
                    <div className={"col-span-1 ml-auto"}>
                        <Switch
                            checked={enabledForumMessages}
                            onChange={setEnabledForumMessages}
                            className={`${enabledForumMessages ? 'bg-susty' : 'bg-gray-300'}
                            relative inline-flex h-[24px] w-[48px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                        >
                            <span className="sr-only">Use setting</span>
                            <span
                                aria-hidden="true"
                                className={`${enabledForumMessages ? 'translate-x-[1.53rem]' : 'translate-x-0'}
                            pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                            />
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OtherNotifications;