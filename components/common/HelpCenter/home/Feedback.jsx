import React, {useState} from 'react';
import {Dialog} from '@headlessui/react'
import {AnimatePresence, motion} from "framer-motion";

const Feedback = () => {
    const [openFeedbackModal, setOpenFeedbackModal] = useState(false);

    return (
        <>
            <div className='my-5 max-w-full'>
                <div
                    className={"w-full bg-gray-50 p-5 hover:bg-gray-100 transition ease-in-out delay-50 cursor-pointer"}
                    onClick={() => setOpenFeedbackModal(true)}
                >
                    <li className="group flex justify-between">
                        <div>
                            <p className={"font-semibold"}>Send your feedback</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                             stroke="#7d7d7d" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                        </svg>
                    </li>
                </div>
            </div>
            <AnimatePresence>
                {openFeedbackModal && (
                    <Dialog
                        static
                        as={motion.div}
                        open={openFeedbackModal}
                        className="relative z-10"
                        onClose={() => setOpenFeedbackModal(false)}
                        animate={{
                            opacity: 1,
                        }}
                        exit={{
                            opacity: 0,
                            transition: {duration: 0.4}
                        }}
                    >
                        <div className="fixed inset-0 overflow-y-auto font-susty">
                            <div
                                className="flex min-h-full items-center justify-center p-4 text-center bg-gray-700 bg-opacity-80">
                                <motion.div
                                    key={`modal-for-email`}
                                    initial={{scale: 0.8, opacity: 0}}
                                    animate={{
                                        scale: 1,
                                        opacity: 1,
                                        duration: 0.01,
                                    }}
                                    exit={{
                                        scale: 0,
                                        opacity: 0,
                                        duration: 0.2,
                                    }}
                                    className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className={`mb-5`}
                                    >
                                        <p className="text-lg font-medium leading-5 text-gray-500 flex justify-between">
                                            Send us your feedback
                                            <span
                                                onClick={() => setOpenFeedbackModal(false)}
                                                className={`mr-2 cursor-pointer text-susty`}>
                                                      Close
                                                </span>
                                        </p>

                                    </Dialog.Title>
                                    <div className="mt-2 flex flex-col gap-2">
                                        <p className="text-sm text-gray-500 leading-relaxed">
                                            We’re always eager to hear what you think about Susty. Do you love a particular feature, or have you got an idea of how we can make your experience better?
                                        </p>
                                        <p className="text-sm text-gray-500 leading-relaxed">
                                            Your insight can help us bring to life the improvements that you need the most, so don’t hesitate and share your thoughts. We value every opinion we get!
                                        </p>
                                    </div>

                                    <div className="mt-4 px-1">
                                        <motion.button
                                            onClick={(x) => {
                                                alert('Redirect to help page')
                                            }}
                                            whileHover={{scale: 1.02}}
                                            whileTap={{scale: 0.98}}
                                            className={`inline-flex items-center px-4 py-1.5 border border-red-300 bg-susty shadow-sm text-sm font-medium rounded-md text-white hover:bg-red-100 hover:text-susty hover:border-susty focus:text-red-400 focus:border-susty focus:bg-red-50`}>
                                            Share Feedback
                                        </motion.button>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </Dialog>
                )}</AnimatePresence>
        </>
    );
};

export default Feedback;