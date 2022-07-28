import React, {useState} from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import {Dialog} from '@headlessui/react'

const InviteCard = () => {
    const [price, setPrice] = useState('15.00')
    const [referralLink, setReferralLink] = useState(
        'https://susty-next.vercel.app'
    )
    const [copyLink, setCopyLink] = useState('')
    const [enableReferrals, setEnableReferrals] = useState(false)

    return (
        <div
            style={{
                backgroundImage: `url("https://5a2583d7dd16c25cb2e8-358d15e499fca729302e63598be13736.ssl.cf3.rackcdn.com/referrals/referrals_updated_tablets.png")`,
                width: '100%',
                height: '550px',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'start',
                backgroundSize: 'cover',
            }}
        >
            <div
                className={
                    'grid font-susty justify-start px-4 sm:pl-20 lg:pl-36 pt-20'
                }
            >
                <div className="max-w-max sm:w-96 bg-gray-50 p-6">
                    <h1 className="font-bold justify-items-center text-2xl">
                        Invite friends and earn up to ${price}{' '}
                    </h1>

                    <p className="pt-8">
                        Get $5.00 when a friend lists their first 3 items and
                        $10.00 when they sell.
                    </p>

                    <div className="pt-6">
                        <input
                            defaultValue={referralLink}
                            className="border-null w-full font-bold"
                        />
                    </div>

                    <div className="py-6">
                        <div className={`grid place-items-center`}>
                            <motion.button
                                onClick={() => setCopyLink(referralLink)}
                                whileHover={{scale: 1.02}}
                                whileTap={{scale: 0.98}}
                                className={`inline-flex items-center px-4 py-1.5 border border-gray-300 shadow-sm text-base font-medium rounded-md text-white bg-susty hover:bg-white hover:text-susty hover:border-susty focus:text-red-400 focus:border-susty focus:bg-red-50`}
                            >
                                Copy invite link
                            </motion.button>
                        </div>
                    </div>

                    <div
                        className={
                            'w-full bg-gray-50 p-5 hover:bg-gray-100 transition ease-in-out delay-50 cursor-pointer'
                        }
                        onClick={() => setEnableReferrals(true)}
                    >
                        <li className="group grid grid-cols-12">
                            <div className="col-span-11 flex">
                                <div>
                                    <img
                                        src="https://5a2583d7dd16c25cb2e8-358d15e499fca729302e63598be13736.ssl.cf3.rackcdn.com/referrals/referrals_icon.png"
                                        alt={'Image'}
                                        width="35px"
                                        height="35px"
                                    />
                                </div>
                                <div className="pl-5">
                                    <p className={'font-semibold'}>
                                        Your referrals
                                    </p>
                                </div>
                            </div>

                            <div className="col-span-1 justify-items-end">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="#7d7d7d"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </div>
                        </li>
                    </div>
                </div>
                <AnimatePresence>
                    {enableReferrals && (
                        <Dialog
                            static
                            as={motion.div}
                            open={enableReferrals}
                            className="relative z-10"
                            onClose={() => setEnableReferrals(false)}
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
                                                Your referrals
                                                <span
                                                    onClick={() =>
                                                        setEnableReferrals(
                                                            false
                                                        )
                                                    }
                                                    className={`mr-2 cursor-pointer`}
                                                >
                                                    Close
                                                </span>
                                            </p>
                                        </Dialog.Title>

                                        <div className="grid place-content-center">
                                            <img
                                                src="https://5a2583d7dd16c25cb2e8-358d15e499fca729302e63598be13736.ssl.cf3.rackcdn.com/referrals/rewards_invitee_empty_state.png"
                                                alt="Image_content__lvAec"
                                                width="120px"
                                                height="120px"
                                            />
                                        </div>
                                        <div className="grid place-content-center">
                                            <p className="text-2xl pt-6">
                                                No friends have joined yet
                                            </p>
                                        </div>
                                        <div className="grid place-content-center">
                                            <p className="py-6">
                                                Earn up to $15.00 to spend on
                                                Susty — share your invite link
                                                with friends
                                            </p>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </Dialog>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}

export default InviteCard
