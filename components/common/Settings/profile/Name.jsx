import React, {useState} from 'react';
import {motion} from "framer-motion";

const Name = () => {
    const [aboutYouInput, setAboutYouInput] = useState('');

    return (
        <div className="mt-10 sm:mt-0 bg-white px-6 py-2">
            <div className="md:grid md:grid-cols-3 md:gap-6 pb-4 border-b border-gray-200">
                <div className="md:col-span-1 flex items-center">
                    <div className="px-4 sm:px-0">
                        <h3 className="text-base font-medium leading-6 text-gray-800">
                            Your Photo
                        </h3>
                    </div>
                </div>
                <div className="mt-5 md:mt-0 col-span-2">
                    <div className="overflow-hidden sm:rounded-md">
                        <div className="px-4 sm:p-6">
                            <div className="flex md:float-right">
                                <div className="col-span-6 sm:col-span-3">
                      <span className="inline-block h-16 w-16 rounded-full overflow-hidden bg-gray-100">
                        <svg
                            className="h-full w-full text-gray-300"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                          <path
                              d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"/>
                        </svg>
                      </span>
                                </div>

                                <div className="col-span-6 flex ml-4 justify-center items-center">
                                    <motion.button
                                        whileHover={{scale: 1.02}}
                                        whileTap={{scale: 0.98}}
                                        className={`inline-flex items-center px-4 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-white bg-susty hover:bg-white hover:text-susty hover:border-susty focus:text-red-400 focus:border-susty focus:bg-red-50`}>
                                        Choose Photo
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-5 sm:mt-0">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1 md:pt-0 pt-4 flex items-center">
                        <div className="px-4 sm:px-0">
                            <h3 className="text-base font-medium leading-6 text-gray-800">
                                About you
                            </h3>
                        </div>
                    </div>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <form action="#" method="POST">
                            <div className="overflow-hidden sm:rounded-md">
                                <div className="px-4 md:py-5  sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6">
                          <textarea
                              onChange={(e) => {
                                  setAboutYouInput(e.target.value)
                              }}
                              value={aboutYouInput}
                              name="street-address"
                              id="street-address"
                              autoComplete="street-address"
                              placeholder={'Tell us more about yourself and your style'}
                              className="mt-1 focus:outline-none focus:ring-susty focus:border-red-400 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Name;