import React, {useState} from 'react'
import {motion} from 'framer-motion'

const Language = () => {
    const [languageInput, setLanguageInput] = useState('English')

    const languageHandler = (e) => {
        setLanguageInput(e.target.value)
    }

    return (
        <div className={'mt-10 sm:mt-0'}>
            <div className="md:grid md:grid-cols-3 md:gap-6 bg-white px-6 py-2">
                <div className="px-3 sm:px-0 md:col-span-1 flex items-center">
                    <div className="px-2 sm:px-0">
                        <h3 className="text-base font-medium leading-6 text-gray-800">
                            Language
                        </h3>
                    </div>
                </div>
                <div className="md:mt-0 md:col-span-2">
                    <div className="overflow-hidden sm:rounded-md">
                        <div className="px-4 py-5  sm:p-6">
                            <div>
                                <div className="col-span-6 sm:col-span-3">
                                    <select
                                        onChange={languageHandler}
                                        value={languageInput}
                                        id="language"
                                        name="language"
                                        autoComplete="language-name"
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none ring-none focus:ring-susty focus:border-red-400 sm:text-sm"
                                    >
                                        <option value={'English'}>
                                            English
                                        </option>
                                        <option value={'Spanish'}>
                                            Spanish
                                        </option>
                                    </select>
                                </div>

                                <div className="col-span-6 sm:col-span-3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className={'px-4 py-3 text-xs text-gray-500'}>
                We translate the most important information you need to buy,
                sell, and be in the know.
            </p>

            <div className={'flex mt-4 mb-5 justify-end'}>
                <motion.button
                    whileHover={{scale: 1.02}}
                    whileTap={{scale: 0.98}}
                    className={`inline-flex items-center px-4 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-white bg-susty hover:bg-white hover:text-susty hover:border-susty focus:text-red-400 focus:border-susty focus:bg-red-50`}
                >
                    Update Profile
                </motion.button>
            </div>
        </div>
    )
}

export default Language
