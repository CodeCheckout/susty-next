import React, {useState} from 'react';
import {AnimatePresence, motion} from "framer-motion";
import {Dialog} from "@headlessui/react";
import {HiChevronRight} from 'react-icons/hi'
import Link from "next/link";
import BasicPageWrapper from "../../layouts/BasicPageWrapper";

const imageStaticList = [{
    id: 1,
    src: "https://5a2583d7dd16c25cb2e8-358d15e499fca729302e63598be13736.ssl.cf3.rackcdn.com/referrals/referrals_share.png",
    alt: "Envelope Image",
    topic: "Share your link",
    description: "Invite people to join Vinted by sharing your link with them."
}, {
    id: 2,
    src: "https://5a2583d7dd16c25cb2e8-358d15e499fca729302e63598be13736.ssl.cf3.rackcdn.com/referrals/referrals_friends.png",
    alt: "Mobile Image",
    topic: "Tell your friends to list",
    description: "When they list 3 items within 7 days of joining, you’ll get a $5 voucher. You’ll get an extra $10 voucher if they complete a sale within 30 days."
}, {
    id: 3,
    src: "https://5a2583d7dd16c25cb2e8-358d15e499fca729302e63598be13736.ssl.cf3.rackcdn.com/referrals/referrals_voucher.png",
    alt: "Shoe Image",
    topic: "Spend your voucher",
    description: "Buy an item that costs $15 or more (not including shipping), and your voucher will be automatically deducted from the item price."
},];

const mobileImg = 'https://5a2583d7dd16c25cb2e8-358d15e499fca729302e63598be13736.ssl.cf3.rackcdn.com/referrals/how_it_works_icon.png';

const ReferralsWork = () => {
    const [openReferralsModal, setOpenReferralsModal] = useState(false);
    const [imageList, setImageList] = useState(imageStaticList);

    return (
        <BasicPageWrapper>
            <div className={"hidden md:block mt-10"}>
                <div className={"grid grid-rows-6 gap-1 px-8"}>
                    <div className={"row-span-1 text-3xl font-medium"}>How referrals work</div>
                    <div className={"row-span-4 grid grid-cols-3 gap-8"}>
                        {imageList.map((image)=>(
                            <div key={image.id}>
                                <div className={"col-span-1 my-5"}>
                                    <img src={image.src} alt={image.alt} className={"object-cover box-content"} width={"300"}
                                         height={"300"}/>
                                    <div className={"text-2xl font-medium my-2"}>{image.topic}</div>
                                    <div className={"text-sm text-gray-500 font-medium"}>{image.description}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={"row-span-1 text-xs text-gray-500"}>
                        This offer is subject to <Link href={"/"}><a className={"text-susty hover:underline"}>terms
                        &
                        conditions.</a></Link> The people you refer need to consent to receiving your
                        referral invite. To receive your voucher, your friend must list 3 items within 7 days. If
                        your
                        friend sells an item within 30 days, you’ll receive an additional voucher. To learn more,
                        <Link href={"/"}>
                            <a className={"text-susty hover:underline"}> visit the FAQ.</a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={"block md:hidden"}>
                <div className={"grid grid-cols-6 gap-4 items-center py-2 my-2 mx-1 px-5"}>
                    <div className={"col-span-1"}>
                        <img src={mobileImg} width={"30"} height={"30"} alt={'Image'}/>
                    </div>
                    <div className={"col-span-4 font-medium pr-5"}>
                        How referrals work
                    </div>
                    <div className={"col-span-1 ml-auto"}>
                        <HiChevronRight className={"w-5 h-5"} onClick={() => setOpenReferralsModal(true)}/>
                    </div>
                    <>
                        <AnimatePresence>
                            {openReferralsModal && (
                                <Dialog
                                    static
                                    as={motion.div}
                                    open={openReferralsModal}
                                    className="relative z-10"
                                    onClose={() => setOpenReferralsModal(false)}
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
                                            className="flex min-h-max items-center justify-center p-4 text-center bg-gray-700 bg-opacity-80">
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

                                                className="w-full min-h-max max-w-md mt-32 transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                                <Dialog.Title
                                                    as="h3"
                                                    className={`mb-5`}
                                                >
                                                    <p className="text-base font-medium leading-5 flex justify-between ml-10 sm:ml-28">
                                                        How referrals work
                                                        <span
                                                            onClick={() => setOpenReferralsModal(false)}
                                                            className={`mr-2 cursor-pointer text-gray-500`}>
                                                      Close
                                                </span>
                                                    </p>

                                                </Dialog.Title>


                                                <div className={"grid grid-rows-3 gap-y-8"}>
                                                    {imageList.map((image)=>(
                                                        <div key={image.id}>
                                                            <div className={"row-span-2"}>
                                                                <img src={image.src} alt={image.alt}
                                                                     className={"mx-auto object-cover box-content"}
                                                                     width={"200"}
                                                                     height={"200"}/>
                                                                <div className={"text-base font-medium my-2"}>{image.topic}</div>
                                                                <div className={"text-sm text-gray-500 font-medium"}>{image.description}</div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>

                                            </motion.div>
                                        </div>
                                    </div>
                                </Dialog>
                            )}</AnimatePresence>
                    </>
                </div>
            </div>
        </BasicPageWrapper>
    );
};

export default ReferralsWork;