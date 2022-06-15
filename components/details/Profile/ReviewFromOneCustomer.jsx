import React, {useState} from 'react'
import {Dialog} from '@headlessui/react'
import {AnimatePresence, motion} from 'framer-motion'
import {HiArrowRight, HiStar} from 'react-icons/hi'

const ReviewFromOneCustomer = ({
    isSameUser,
    customer,
    name,
    src,
    alt,
    feedback,
    rate,
}) => {
    const [openReviewReplyModal, setOpenReviewReplyModal] = useState(false)
    const [replyInput, setReplyInput] = useState('')

    return (
        <div
            className={
                'flex flex-row justify-between items-center my-2 pb-4 border-b border-gray-200'
            }
        >
            <div className={'flex flex-row items-center gap-3'}>
                <img
                    src={src}
                    width={16}
                    height={16}
                    className={'w-12 h-12 rounded-full object-cover'}
                    alt={alt}
                />
                <div className={'flex flex-col justify-items-end gap-1'}>
                    <p className={'text-susty text-base font-medium'}>{name}</p>
                    <div className={'flex flex-row'}>
                        {Array(parseInt(customer.rate))
                            .fill(0)
                            .map((x, index) => {
                                return (
                                    <HiStar
                                        key={index}
                                        className={'w-5 h-5 text-amber-400'}
                                    />
                                )
                            })}
                        {Array(5 - parseInt(customer.rate))
                            .fill(0)
                            .map((x, index) => {
                                return (
                                    <HiStar
                                        key={index}
                                        className={'w-5 h-5 text-gray-300'}
                                    />
                                )
                            })}
                    </div>
                    <div className={'text-sm lg:text-base'}>{feedback}</div>
                </div>
            </div>
            <div className={'flex flex-col gap-2 items-end'}>
                <div className={'text-gray-600 text-sm lg:text-base'}>
                    3 days ago
                </div>
                {isSameUser === true ? (
                    <>
                        <div
                            onClick={() => {
                                setOpenReviewReplyModal(true)
                            }}
                            className={'text-susty text-sm hover:underline'}
                        >
                            reply
                        </div>
                    </>
                ) : (
                    <></>
                )}
                <AnimatePresence>
                    {openReviewReplyModal && (
                        <>
                            <Dialog
                                static
                                as={motion.div}
                                open={openReviewReplyModal}
                                className="relative z-10"
                                onClose={() => setOpenReviewReplyModal(false)}
                                animate={{
                                    opacity: 1,
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: {duration: 0.4},
                                }}
                            >
                                <div className="fixed inset-0 overflow-y-auto font-susty">
                                    <div className="flex min-h-full max-w-96 items-center justify-center p-4 text-center bg-gray-700 bg-opacity-80">
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
                                            className="w-full bg-gray-50 max-w-max transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
                                        >
                                            <Dialog.Title
                                                as="h3"
                                                className={`mb-5`}
                                            >
                                                <p className="text-base font-medium leading-5 text-gray-500 flex justify-between">
                                                    Add Reply
                                                    <span
                                                        onClick={() =>
                                                            setOpenReviewReplyModal(
                                                                false
                                                            )
                                                        }
                                                        className={`mr-2 text-susty cursor-pointer`}
                                                    >
                                                        Close
                                                    </span>
                                                </p>
                                            </Dialog.Title>
                                            <div className={'max-w-[18rem]'}>
                                                <div
                                                    className={
                                                        'flex flex-col gap-4'
                                                    }
                                                >
                                                    <div
                                                        className={
                                                            'flex flex-row gap-3'
                                                        }
                                                    >
                                                        <img
                                                            src={src}
                                                            width={16}
                                                            height={16}
                                                            alt={alt}
                                                            className={
                                                                'w-10 h-10 rounded-full object-cover'
                                                            }
                                                        />
                                                        <div
                                                            className={
                                                                'px-2.5 py-2 bg-gray-300 shadow rounded-lg text-xs lg:text-sm font-medium leading-relaxed'
                                                            }
                                                        >
                                                            {feedback}
                                                        </div>
                                                    </div>
                                                    <div
                                                        className={
                                                            'w-full grid grid-cols-8 items-center relative'
                                                        }
                                                    >
                                                        <input
                                                            onChange={(e) => {
                                                                setReplyInput(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }}
                                                            type="text"
                                                            className={
                                                                'col-start-1 col-end-9 w-full text-xs lg:text-sm px-2 py-1.5 rounded-lg border border-gray-300 outline-none focus:border-susty focus:ring-susty focus:ring-offset-susty'
                                                            }
                                                            placeholder={
                                                                'Write a reply here..'
                                                            }
                                                        />
                                                        <HiArrowRight
                                                            className={`absolute col-start-8 w-5 h-5 font-semibold ${
                                                                replyInput.length >
                                                                0
                                                                    ? 'text-susty'
                                                                    : 'text-gray-300'
                                                            }`}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </Dialog>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}

export default ReviewFromOneCustomer
