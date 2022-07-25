import React, {useState} from 'react';
import {Switch} from "@headlessui/react";

const Location = () => {
    const [enabled, setEnabled] = useState(false);
    const [countryInput, setCountryInput] = useState('New Zealand');
    const [townInput, setTownInput] = useState('Wellington');

    const countryHandler = (e) => {
        setCountryInput(e.target.value)
    }

    const townHandler = (e) => {
        setTownInput(e.target.value)
    }

    return (
        <div className="mt-10 sm:mt-0 bg-white px-6 py-2">
            <p className='pt-3 text-sm text-gray-500'>My Location</p>
            <div className="md:grid md:grid-cols-3 md:gap-3 py-2 border-b border-gray-200">
                <div className="md:col-span-1 flex items-center">
                    <div className="px-4 sm:px-0">
                        <h3 className="text-base font-medium leading-6 text-gray-800">
                            Country
                        </h3>
                    </div>
                </div>
                <div className="md:mt-0 md:col-span-2">
                    <div className="overflow-hidden sm:rounded-md">
                        <div className="px-4 py-5 sm:p-6">
                            <div>
                                <div className="col-span-6 sm:col-span-3">
                                    <select
                                        onChange={countryHandler}
                                        value={countryInput}
                                        id="country"
                                        name="country"
                                        autoComplete="country-name"
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none ring-none focus:ring-susty focus:border-red-400 sm:text-sm"
                                    >
                                        <option value={'New Zealand'}>New Zealand</option>
                                        <option value={'Australia'}>Australia</option>
                                        <option value={'Canada'}>Canada</option>
                                        <option value={'Mexico'}>Mexico</option>
                                    </select>
                                </div>

                                <div className="col-span-6 sm:col-span-3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:grid md:grid-cols-3 md:gap-3 py-2 border-b border-gray-200">
                <div className="md:col-span-1 flex items-center">
                    <div className="px-4 sm:px-0">
                        <h3 className="text-base font-medium leading-6 text-gray-800">
                            Town/City
                        </h3>
                    </div>
                </div>
                <div className="md:mt-0 md:col-span-2">
                    <div className="overflow-hidden sm:rounded-md">
                        <div className="px-4 py-5 sm:p-6">
                            <div>
                                <div className="col-span-6 sm:col-span-3">
                                    <select
                                        onChange={townHandler}
                                        value={townInput}
                                        id="town"
                                        name="town"
                                        autoComplete="town-name"
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none ring-none focus:ring-susty focus:border-red-400 sm:text-sm"
                                    >
                                        <option value={'Wellington'}>Wellington</option>
                                        <option value={'Canberra'}>Canberra</option>
                                        <option value={'Ottawa'}>Ottawa</option>
                                        <option value={'Mexico City'}>Mexico City</option>
                                    </select>
                                </div>
                                <div className="col-span-6 sm:col-span-3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 md:grid md:grid-cols-3 md:gap-3 py-2 items-center">
                <div className="col-span-2 md:col-span-1 flex items-center">
                    <div>
                        <h3 className="text-base font-medium leading-6 text-gray-800">
                            Show city in profile
                        </h3>
                    </div>
                </div>
                <div className=" mt-0 col-span-1 md:col-span-2">
                    <div className="overflow-hidden sm:rounded-md">
                        <div className="px-4 py-5 sm:p-6 flex items-center float-right">
                            <div className="float-right">
                                <div className="">
                                    <Switch
                                        checked={enabled}
                                        onChange={setEnabled}
                                        className={`${enabled ? 'bg-susty' : 'bg-gray-300'} 
                        relative inline-flex h-[24px] w-[48px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                                    >
                        <span
                            aria-hidden="true"
                            className={`${
                                enabled ? 'translate-x-[1.53rem]' : 'translate-x-0'}
                            pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                        />
                                    </Switch>
                                </div>

                                <div className="col-span-6 sm:col-span-3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Location;