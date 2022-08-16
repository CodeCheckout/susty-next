import React, { useEffect, useState } from 'react';
import { Dialog } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { HiArrowRight, HiStar } from 'react-icons/hi';
import axios from 'axios';

const ReviewFromOneCustomer = ({ isSameUser, customer }) => {
    const [openReviewReplyModal, setOpenReviewReplyModal] = useState(false);
    const [replyInput, setReplyInput] = useState('');
    const [reviewerDetails, setReviewerDetails] = useState();

    useEffect(() => {
        async function getReviewer() {
            await axios
                .get('/api/user/fetch-user-details', {
                    params: { userId: customer.reviewerId },
                })
                .then((result) => {
                    setReviewerDetails(result.data.user);
                });
        }
        getReviewer();
    }, []);

    return (
        <div
            className={
                'my-2 flex flex-row items-center justify-between border-b border-gray-200 pb-4'
            }
        >
            {reviewerDetails && (
                <>
                    <div className={'flex flex-row items-center gap-3'}>
                        {reviewerDetails.image && (
                            <>
                                <img
                                    src={reviewerDetails.image.url}
                                    width={16}
                                    height={16}
                                    className={
                                        'h-12 w-12 rounded-full object-cover'
                                    }
                                    alt={reviewerDetails.image.name}
                                />
                            </>
                        )}

                        <div
                            className={'flex flex-col justify-items-end gap-1'}
                        >
                            <p className={'text-base font-medium text-susty'}>
                                {reviewerDetails.name}
                            </p>
                            <div className={'flex flex-row'}>
                                {Array(parseInt(customer.rating))
                                    .fill(0)
                                    .map((x, index) => {
                                        return (
                                            <HiStar
                                                key={index}
                                                className={
                                                    'h-5 w-5 text-amber-400'
                                                }
                                            />
                                        );
                                    })}
                                {Array(5 - parseInt(customer.rating))
                                    .fill(0)
                                    .map((x, index) => {
                                        return (
                                            <HiStar
                                                key={index}
                                                className={
                                                    'h-5 w-5 text-gray-300'
                                                }
                                            />
                                        );
                                    })}
                            </div>
                            <div className={'text-sm lg:text-base'}>
                                {customer.feedback}
                            </div>
                        </div>
                    </div>
                    <div className={'flex flex-col items-end gap-2'}>
                        <div className={'text-sm text-gray-600 lg:text-base'}>
                            3 days ago
                        </div>
                        {isSameUser === true ? (
                            <>
                                <div
                                    onClick={() => {
                                        setOpenReviewReplyModal(true);
                                    }}
                                    className={
                                        'text-sm text-susty hover:underline'
                                    }
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
                                        onClose={() =>
                                            setOpenReviewReplyModal(false)
                                        }
                                        animate={{
                                            opacity: 1,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            transition: { duration: 0.4 },
                                        }}
                                    >
                                        <div className="font-susty fixed inset-0 overflow-y-auto">
                                            <div className="max-w-96 flex min-h-full items-center justify-center bg-gray-700 bg-opacity-80 p-4 text-center">
                                                <motion.div
                                                    key={`modal-for-email`}
                                                    initial={{
                                                        scale: 0.8,
                                                        opacity: 0,
                                                    }}
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
                                                    className="w-full max-w-max transform overflow-hidden rounded-2xl bg-gray-50 bg-white p-6 text-left align-middle shadow-xl transition-all"
                                                >
                                                    <Dialog.Title
                                                        as="h3"
                                                        className={`mb-5`}
                                                    >
                                                        <p className="flex justify-between text-base font-medium leading-5 text-gray-500">
                                                            Add Reply
                                                            <span
                                                                onClick={() =>
                                                                    setOpenReviewReplyModal(
                                                                        false
                                                                    )
                                                                }
                                                                className={`mr-2 cursor-pointer text-susty`}
                                                            >
                                                                Close
                                                            </span>
                                                        </p>
                                                    </Dialog.Title>
                                                    <div
                                                        className={
                                                            'max-w-[18rem]'
                                                        }
                                                    >
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
                                                                {reviewerDetails.image && (
                                                                    <img
                                                                        src={
                                                                            reviewerDetails
                                                                                .image
                                                                                .url
                                                                        }
                                                                        width={
                                                                            16
                                                                        }
                                                                        height={
                                                                            16
                                                                        }
                                                                        alt={
                                                                            reviewerDetails
                                                                                .image
                                                                                .name
                                                                        }
                                                                        className={
                                                                            'h-10 w-10 rounded-full object-cover'
                                                                        }
                                                                    />
                                                                )}
                                                                <div
                                                                    className={
                                                                        'rounded-lg bg-gray-300 px-2.5 py-2 text-xs font-medium leading-relaxed shadow lg:text-sm'
                                                                    }
                                                                >
                                                                    {
                                                                        customer.feedback
                                                                    }
                                                                </div>
                                                            </div>
                                                            <div
                                                                className={
                                                                    'relative grid w-full grid-cols-8 items-center'
                                                                }
                                                            >
                                                                <input
                                                                    onChange={(
                                                                        e
                                                                    ) => {
                                                                        setReplyInput(
                                                                            e
                                                                                .target
                                                                                .value
                                                                        );
                                                                    }}
                                                                    type="text"
                                                                    className={
                                                                        'col-start-1 col-end-9 w-full rounded-lg border border-gray-300 px-2 py-1.5 text-xs outline-none focus:border-susty focus:ring-susty focus:ring-offset-susty lg:text-sm'
                                                                    }
                                                                    placeholder={
                                                                        'Write a reply here..'
                                                                    }
                                                                />
                                                                <HiArrowRight
                                                                    className={`absolute col-start-8 h-5 w-5 font-semibold ${
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
                </>
            )}
        </div>
    );
};

export default ReviewFromOneCustomer;
