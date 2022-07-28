import React from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import {Dialog} from '@headlessui/react'

const PurchaseHistoryModal = ({item, isOpen, setIsOpen}) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <Dialog
                    static
                    as={motion.div}
                    open={isOpen}
                    className="relative z-10"
                    onClose={() => setIsOpen(false)}
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
                                <Dialog.Title as="h3" className={`mb-5`}>
                                    <p className="text-lg font-medium leading-5 text-gray-500 flex justify-between">
                                        Purchase History
                                        <span
                                            onClick={() => setIsOpen(false)}
                                            className={`mr-2 cursor-pointer text-susty`}
                                        >
                                            Close
                                        </span>
                                    </p>
                                </Dialog.Title>
                                <div className="my-4">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <p className="my-1 text-xs text-gray-500">
                                                        Product &nbsp;
                                                    </p>
                                                </td>
                                                <td>
                                                    <p className="my-1 text-xs text-gray-500">
                                                        : &nbsp; {item.product}
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p className="my-1 text-xs text-gray-500">
                                                        Price &nbsp;
                                                    </p>
                                                </td>
                                                <td>
                                                    <p className="my-1 text-xs text-gray-500">
                                                        : &nbsp; {item.price}
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p className="my-1 text-xs text-gray-500">
                                                        User &nbsp;
                                                    </p>
                                                </td>
                                                <td>
                                                    <p className="my-1 text-xs text-gray-500">
                                                        : &nbsp; {item.user}
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p className="my-1 text-xs text-gray-500">
                                                        Date &nbsp;
                                                    </p>
                                                </td>
                                                <td>
                                                    <p className="my-1 text-xs text-gray-500">
                                                        : &nbsp; {item.date}
                                                    </p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </Dialog>
            )}
        </AnimatePresence>
    )
}

export default PurchaseHistoryModal
