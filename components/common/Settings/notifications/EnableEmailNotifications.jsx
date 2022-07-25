import React, {useState} from 'react';
import {Switch} from '@headlessui/react'

const EnableEmailNotifications = () => {
    const [enabled, setEnabled] = useState(false)

    return (
        <div>
            <div className={"w-full bg-white"}>
                <div className={"grid grid-cols-5 gap-2 p-5"}>
                    <div className={"col-span-4"}>
                        <p className={"font-medium text-gray-800"}>Enable email notifications</p>
                    </div>
                    <div className={"col-span-1 ml-auto"}>
                        <Switch
                            checked={enabled}
                            onChange={setEnabled}
                            className={`${enabled ? 'bg-susty' : 'bg-gray-300'} 
                            relative inline-flex h-[24px] w-[48px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                        >
                            <span className="sr-only">Use setting</span>
                            <span
                                aria-hidden="true"
                                className={`${enabled ? 'translate-x-[1.53rem]' : 'translate-x-0'}
                            pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                            />
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EnableEmailNotifications;