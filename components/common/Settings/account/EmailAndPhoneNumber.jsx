import React, {useState} from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import {Dialog} from '@headlessui/react'
import {HiArrowRight, HiArrowUp, HiCheck, HiSupport} from 'react-icons/hi'

const EmailAndPhoneNumber = () => {
    const [user, setUser] = useState({
        email: 'wyasaslowe@gmail.com',
        phone: '+1 (917) 593-3243',
        verified: false,
    })

    const [openMailModal, setOpenMailModal] = useState(false)
    const [openPhoneModal, setOpenPhoneModal] = useState(false)

    const [oldPhoneNumberInput, setOldPhoneNumberInput] = useState('')
    const [newPhoneNumberInput, setNewPhoneNumberInput] = useState('')

    return (
        <div>
            <>
                <div className={`bg-white`}>
                    <div className={`grid grid-cols-4 px-5 py-3`}>
                        <div className={`col-span-3`}>
                            <p
                                className={`text-base font-medium text-gray-800`}
                            >
                                {user.email}
                            </p>
                            <p
                                className={`flex text-xs text-gray-500 items-center`}
                            >
                                <HiCheck
                                    className={`h-4 w-4 mr-2 text-green-700`}
                                />
                                Verified
                            </p>
                        </div>
                        <div className={`grid place-items-center`}>
                            <motion.button
                                onClick={() => setOpenMailModal(true)}
                                whileHover={{scale: 1.02}}
                                whileTap={{scale: 0.98}}
                                className={`inline-flex items-center px-4 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-white bg-susty hover:bg-white hover:text-susty hover:border-susty focus:text-red-400 focus:border-susty focus:bg-red-50`}
                            >
                                Change
                            </motion.button>
                        </div>
                    </div>
                    <hr className={`my-1`} />
                    <div className={`grid grid-cols-4 px-5 py-3`}>
                        <div className={`col-span-3`}>
                            <p
                                className={`text-base font-medium text-gray-800`}
                            >
                                {/*TODO change this to **** after the APIs are made*/}
                                {user.phone}
                            </p>
                        </div>
                        <div className={`grid place-items-center`}>
                            <motion.button
                                onClick={() => setOpenPhoneModal(true)}
                                whileHover={{scale: 1.02}}
                                whileTap={{scale: 0.98}}
                                className={`inline-flex items-center px-4 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-white bg-susty hover:bg-white hover:text-susty hover:border-susty focus:text-red-400 focus:border-susty focus:bg-red-50`}
                            >
                                Change
                            </motion.button>
                        </div>
                    </div>
                </div>
                <div className={`mx-2 text-xs font-normal text-gray-500 pt-3`}>
                    <p>
                        Your phone number will only be used to help you log in.
                        It won’t be made public or used for marketing purposes.
                    </p>
                </div>
            </>
            <>
                <AnimatePresence>
                    {openMailModal && (
                        <Dialog
                            static
                            as={motion.div}
                            open={openMailModal}
                            className="relative z-10"
                            onClose={() => setOpenMailModal(false)}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                                transition: {duration: 0.4},
                            }}
                        >
                            <div className="fixed inset-0 overflow-y-auto font-susty">
                                <div className="flex min-h-full items-center justify-center p-4 text-center bg-gray-700 bg-opacity-80">
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
                                        className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
                                    >
                                        <Dialog.Title
                                            as="h3"
                                            className={`mb-5`}
                                        >
                                            <p className="text-lg font-medium leading-5 text-gray-500 flex justify-between">
                                                Confirm change
                                                <span
                                                    onClick={() =>
                                                        setOpenMailModal(false)
                                                    }
                                                    className={`mr-2 cursor-pointer text-susty`}
                                                >
                                                    Close
                                                </span>
                                            </p>
                                        </Dialog.Title>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500 leading-relaxed">
                                                You need to confirm{' '}
                                                <span
                                                    className={`font-semibold`}
                                                >
                                                    {user.email}
                                                </span>{' '}
                                                is your email address before you
                                                can update it.
                                            </p>
                                        </div>

                                        <div className="mt-4 px-1 flex justify-between">
                                            <motion.button
                                                onClick={() =>
                                                    setOpenMailModal(false)
                                                }
                                                whileHover={{scale: 1.02}}
                                                whileTap={{scale: 0.98}}
                                                className={`inline-flex items-center px-4 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-white bg-susty hover:bg-white hover:text-susty hover:border-susty focus:text-red-400 focus:border-susty focus:bg-red-50`}
                                            >
                                                <HiArrowUp className="w-4 h-4 mr-2" />
                                                Send confirmation email
                                            </motion.button>
                                            <motion.button
                                                onClick={(x) => {
                                                    alert(
                                                        'Redirect to help page'
                                                    )
                                                }}
                                                whileHover={{scale: 1.02}}
                                                whileTap={{scale: 0.98}}
                                                className={`inline-flex items-center px-4 py-1.5 border border-red-300 shadow-sm text-sm font-medium rounded-md text-susty bg-red-100 hover:bg-susty hover:text-white hover:border-susty focus:text-red-400 focus:border-susty focus:bg-red-50`}
                                            >
                                                <HiSupport
                                                    className={`h-5 w-5 mr-2`}
                                                />
                                                Help
                                            </motion.button>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </Dialog>
                    )}
                </AnimatePresence>
            </>
            <>
                <AnimatePresence>
                    {openPhoneModal && (
                        <Dialog
                            static
                            as={motion.div}
                            open={openPhoneModal}
                            className="relative z-10"
                            onClose={() => setOpenPhoneModal(false)}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                                transition: {duration: 0.4},
                            }}
                        >
                            <div className="fixed inset-0 overflow-y-auto font-susty">
                                <div className="flex min-h-full items-center justify-center p-4 text-center bg-gray-700 bg-opacity-80">
                                    <motion.div
                                        key={`modal-for-phoneNumber`}
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
                                        className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
                                    >
                                        <Dialog.Title
                                            as="h3"
                                            className={`mb-5`}
                                        >
                                            <p className="text-lg font-medium leading-5 text-gray-500 flex justify-between">
                                                Change phone number
                                                <span
                                                    onClick={() =>
                                                        setOpenPhoneModal(false)
                                                    }
                                                    className={`mr-2 cursor-pointer text-susty`}
                                                >
                                                    Close
                                                </span>
                                            </p>
                                        </Dialog.Title>
                                        <div className="mt-2">
                                            <div className="relative flex items-stretch flex-grow focus-within:z-10 flex-col">
                                                <input
                                                    onChange={(e) => {
                                                        setOldPhoneNumberInput(
                                                            e.target.value
                                                        )
                                                    }}
                                                    value={oldPhoneNumberInput}
                                                    name="oldPhoneNumber"
                                                    id="oldPhoneNumber"
                                                    className="pl-2 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 block w-full rounded-md sm:text-sm border border-gray-300 h-10"
                                                    placeholder="Old phone number"
                                                />
                                                <br />
                                                <input
                                                    onChange={(e) => {
                                                        setNewPhoneNumberInput(
                                                            e.target.value
                                                        )
                                                    }}
                                                    value={newPhoneNumberInput}
                                                    name="newPhoneNumber"
                                                    id="newPhoneNumber"
                                                    className="pl-2 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 block w-full rounded-md sm:text-sm border border-gray-300 h-10"
                                                    placeholder="New phone number"
                                                />
                                                <div
                                                    className={`grid place-items-center mt-2`}
                                                >
                                                    <p
                                                        className={`font-thin mx-1 text-xs text-gray-500`}
                                                    >
                                                        You’ll receive a
                                                        verification code to
                                                        this number
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-4 px-1 flex justify-between">
                                            <motion.button
                                                onClick={() =>
                                                    setOpenPhoneModal(false)
                                                }
                                                whileHover={{scale: 1.02}}
                                                whileTap={{scale: 0.98}}
                                                className={`inline-flex items-center px-4 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-white bg-susty hover:bg-white hover:text-susty hover:border-susty focus:text-red-400 focus:border-susty focus:bg-red-50`}
                                            >
                                                Continue
                                                <HiArrowRight className="w-4 h-4 ml-4 mt-0.5" />
                                            </motion.button>
                                            <motion.button
                                                onClick={(x) => {
                                                    alert(
                                                        'Redirect to help page'
                                                    )
                                                }}
                                                whileHover={{scale: 1.02}}
                                                whileTap={{scale: 0.98}}
                                                className={`inline-flex items-center px-4 py-1.5 border border-red-300 shadow-sm text-sm font-medium rounded-md text-susty bg-red-100 hover:bg-susty hover:text-white hover:border-susty focus:text-red-400 focus:border-susty focus:bg-red-50`}
                                            >
                                                <HiSupport
                                                    className={`h-5 w-5 mr-2`}
                                                />
                                                Help
                                            </motion.button>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </Dialog>
                    )}
                </AnimatePresence>
            </>
        </div>
    )
}

export default EmailAndPhoneNumber
