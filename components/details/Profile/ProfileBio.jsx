import React, {Fragment, useState} from 'react';
import {Popover, Transition, Tab} from '@headlessui/react'
import {motion} from "framer-motion";
import {
    HiCheckCircle,
    HiClock,
    HiLocationMarker,
    HiPencil,
    HiRss,
    HiChatAlt
} from "react-icons/hi";

import Link from "next/link";
import ProfileCloset from "./ProfileCloset";
import ProfileReviews from "./ProfileReviews";
import {BsThreeDots} from 'react-icons/bs';

const solutions = [{id: 1, name: "Report", href: "#"}, {id: 2, name: "Block", href: "#"},];

const tabsStaticData = {
    Closet: [
        {
            id: 1,
            title: 'Does drinking coffee make you smarter?',
            date: '5h ago',
            commentCount: 5,
            shareCount: 2,
        },
        {
            id: 2,
            title: "So you've bought coffee... now what?",
            date: '2h ago',
            commentCount: 3,
            shareCount: 2,
        },
    ],
    Reviews: [
        {
            id: 1,
            title: 'Is tech making coffee better or worse?',
            date: 'Jan 7',
            commentCount: 29,
            shareCount: 16,
        },
        {
            id: 2,
            title: 'The most innovative things happening in coffee',
            date: 'Mar 19',
            commentCount: 24,
            shareCount: 12,
        },
    ]
};

const sellerData = {
    id: 1,
    username: "susty94",
    profileImg: "https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=0hb44OrI",
    profileAlt: "profile image",
    storeLocation: "PHILADELPHIA, PA, United States"
};

const discountFromBundles = "25%";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const ProfileBio = () => {
    const [tabs, setTabs] = useState(tabsStaticData);
    const [isSameUser, setIsSameUser] = useState(false);
    const [isFollow, setIsFollow] = useState(false);
    const [anyReviews, setAnyReviews] = useState(true);

    return (
        <>
            <div className={"hidden md:block"}>
                <div className={"grid grid-cols-10 lg:grid-cols-11 gap-1 lg:gap-8 my-5 items-center"}>
                    <div className={"col-span-3 lg:col-span-2"}>
                        <img src={sellerData.profileImg} alt={sellerData.profileAlt}
                             width={196}
                             height={196} className={"w-52 h-52 object-cover rounded-full mx-3"}/>
                    </div>
                    <div className={"col-span-7 lg:col-span-9"}>
                        <div className={"grid grid-rows-2 lg:flex lg:justify-between items-center pb-5"}>
                            <div className={"flex flex-col gap-1"}>
                                <div className={"text-2xl font-medium"}>{sellerData.username}</div>
                                <div className={"text-sm text-gray-500"}>No reviews yet</div>
                            </div>
                            {isSameUser === true ? <>
                                <motion.button
                                    whileHover={{scale: 1.02}}
                                    whileTap={{scale: 0.98}}
                                    className={`inline-flex items-center max-w-fit px-4 py-1.5 mr-16 border border-red-300 shadow-sm text-sm font-medium rounded-md text-susty bg-red-100 hover:bg-susty hover:text-white hover:border-susty focus:text-red-400 focus:border-susty focus:bg-red-50`}>
                                    <HiPencil className={`h-5 w-5 mr-2`}/>
                                    Edit profile
                                </motion.button>
                            </> : <>
                                <div className={'flex flex-row lg:justify-end items-center gap-2'}>
                                    <motion.button
                                        whileHover={{scale: 1.02}}
                                        whileTap={{scale: 0.98}}
                                        className={`inline-flex items-center px-4 py-1.5 border border-red-300 shadow-sm text-sm font-medium rounded-md text-susty bg-red-100 hover:bg-susty hover:text-white hover:border-susty focus:text-red-400 focus:border-susty focus:bg-red-50`}>
                                        <HiChatAlt className={`h-5 w-5 mr-2`}/>
                                        Message
                                    </motion.button>
                                    {isFollow === true ? <>
                                        <motion.button
                                            onClick={() => {
                                                setIsFollow(false)
                                            }}
                                            whileHover={{scale: 1.02}}
                                            whileTap={{scale: 0.98}}
                                            className={`inline-flex items-center px-4 py-1.5 border border-red-300 shadow-sm text-sm font-medium rounded-md text-white hover:text-susty bg-susty hover:bg-red-100 hover:border-susty focus:text-red-400 focus:border-susty focus:bg-red-50`}>
                                            Following
                                        </motion.button>
                                    </> : <>
                                        <motion.button
                                            onClick={() => {
                                                setIsFollow(true)
                                            }}
                                            whileHover={{scale: 1.02}}
                                            whileTap={{scale: 0.98}}
                                            className={`inline-flex items-center px-4 py-1.5 border border-red-300 shadow-sm text-sm font-medium rounded-md text-white hover:text-susty bg-susty hover:bg-red-100 hover:border-susty focus:text-red-400 focus:border-susty focus:bg-red-50`}>
                                            Follow
                                        </motion.button>
                                    </>}
                                    <div className={'px-1.5 py-1 hover:bg-gray-50'}>
                                        <Popover>
                                            {({open}) => (
                                                <>
                                                    <Popover.Button
                                                        className={`${open ? '' : 'text-opacity-90'}
                                                                    group inline-flex items-center rounded-md px-3 py-1 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                                                    >
                                                        <BsThreeDots className={'text-gray-600'}/>
                                                    </Popover.Button>
                                                    <Transition
                                                        as={Fragment}
                                                        enter="transition ease-out duration-200"
                                                        enterFrom="opacity-0 translate-y-1"
                                                        enterTo="opacity-100 translate-y-0"
                                                        leave="transition ease-in duration-150"
                                                        leaveFrom="opacity-100 translate-y-0"
                                                        leaveTo="opacity-0 translate-y-1"
                                                    >
                                                        <Popover.Panel
                                                            className="absolute left-3/5 z-10 mt-3 max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-lg">
                                                            <div
                                                                className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                                                <div
                                                                    className="relative flex flex-col gap-2 bg-white px-3 py-2">
                                                                    {solutions.map((item) => (
                                                                        <a
                                                                            key={item.name}
                                                                            href={item.href}
                                                                            className="inline-flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                                                        >
                                                                            <div className="mx-2">
                                                                                <p className="text-sm font-medium text-gray-900">
                                                                                    {item.name}
                                                                                </p>
                                                                            </div>
                                                                        </a>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </Popover.Panel>
                                                    </Transition>
                                                </>
                                            )}
                                        </Popover>
                                    </div>
                                </div>
                            </>}
                        </div>
                        <div className={"text-gray-500 text-xs grid grid-cols-6 lg:grid-cols-7 gap-3"}>
                            <div className={"col-span-3 lg:col-span-2"}>
                                <div className={"my-3"}>About:</div>
                                <div className={"flex flex-col gap-1"}>
                                    <div className={"flex flex-row gap-1"}>
                                        <HiLocationMarker className={"w-5 h-5"}/>
                                        <div className={"text-sm"}>{sellerData.storeLocation}</div>
                                    </div>
                                    <div className={"flex flex-row gap-1"}>
                                        <HiClock className={"w-5 h-5"}/>
                                        <div className={"text-sm"}>Last seen 1 hour ago</div>
                                    </div>
                                    <div className={"flex flex-row gap-1"}>
                                        <RssIcon className={"w-5 h-5"}/>
                                        <div className={"text-sm"}><Link href={"#"}><a
                                            className={"text-susty hover:underline"}>{0}</a></Link> followers, <Link
                                            href={"#"}><a
                                            className={"text-susty hover:underline"}>{0}</a></Link> following
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={"col-span-3 lg:col-span-5"}>
                                <div className={"my-3"}>Verified info:</div>
                                <div className={"flex flex-row gap-1"}>
                                    <HiCheckCircle className={"w-5 h-5"}/>
                                    <div className={"text-sm"}>Email</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-full px-2 py-16 sm:px-0">
                    <Tab.Group>
                        <Tab.List className="flex space-x-1 max-w-[12rem] bg-white p-1">
                            {Object.keys(tabs).map((tab) => (
                                <Tab
                                    key={tab}
                                    className={({selected}) =>
                                        classNames(
                                            'w-full py-2.5 text-sm font-medium leading-5 text-gray-900',
                                            'ring-white ring-opacity-60 focus:outline-none focus:ring-2',
                                            selected
                                                ? 'bg-white border-b border-susty'
                                                : 'text-gray-400 hover:bg-gray-50'
                                        )
                                    }
                                >
                                    {tab}
                                </Tab>
                            ))}
                        </Tab.List>
                        <Tab.Panels className="mt-2">
                            <Tab.Panel
                                className={classNames(
                                    'rounded-xl bg-white p-3',
                                    'ring-white ring-opacity-60 ring-offset-2 focus:outline-none'
                                )}
                            >
                                <ul>
                                    <ProfileCloset isSameUser={isSameUser} percentage={discountFromBundles}/>
                                </ul>
                            </Tab.Panel>
                            <Tab.Panel
                                className={classNames(
                                    'rounded-xl bg-white p-3',
                                    'ring-white ring-opacity-60 ring-offset-2 focus:outline-none'
                                )}
                            >
                                <ul>
                                    <ProfileReviews isSameUser={isSameUser} anyReviews={anyReviews}
                                                    seller={sellerData}/>
                                </ul>
                            </Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </div>
            <div className={"block md:hidden divide-y-2 divide-gray-200"}>
                <div className="max-w-full px-0 py-4">
                    <Tab.Group>
                        <Tab.List className="flex space-x-1 max-w-full bg-white p-1">
                            {Object.keys(tabs).map((tab) => (
                                <Tab
                                    key={tab}
                                    className={({selected}) =>
                                        classNames(
                                            'w-full py-2.5 text-sm font-medium leading-5 text-gray-900',
                                            'ring-white ring-opacity-60 focus:outline-none focus:ring-2',
                                            selected
                                                ? 'bg-white border-b border-susty'
                                                : 'text-gray-400 hover:bg-gray-50'
                                        )
                                    }
                                >
                                    {tab}
                                </Tab>
                            ))}
                        </Tab.List>
                        <Tab.Panels className="mt-1">
                            <Tab.Panel
                                className={classNames(
                                    'rounded-xl bg-white p-3',
                                    'ring-white ring-opacity-60 ring-offset-2 focus:outline-none'
                                )}
                            >
                                <ul>
                                    <div className={"flex flex-col gap-5 items-center py-2 my-2"}>
                                        <div className={"flex flex-row gap-3 items-center"}>
                                            <img src={sellerData.profileImg}
                                                 alt={sellerData.profileAlt}
                                                 width={50}
                                                 height={50} className={"w-16 h-16 object-cover rounded-full items-center"}/>
                                            <div className={"flex flex-col gap-1 font-medium pr-5"}>
                                                <div className={"text-2xl font-medium"}>{sellerData.username}</div>
                                                <div className={"text-gray-500"}>No reviews yet</div>
                                            </div>
                                        </div>
                                        <div className={"col-span-1 mx-auto"}>
                                            {isSameUser === true ? <>
                                                <motion.button
                                                    whileHover={{scale: 1.02}}
                                                    whileTap={{scale: 0.98}}
                                                    className={`inline-flex items-center px-4 py-1.5 mr-2 border border-red-300 shadow-sm text-sm font-medium rounded-md text-susty bg-red-100 hover:bg-susty hover:text-white hover:border-susty focus:text-red-400 focus:border-susty focus:bg-red-50`}>
                                                    <HiPencil className={`h-5 w-5 mr-2`}/>
                                                    Edit profile
                                                </motion.button>
                                            </> : <>
                                                <div className={'flex flex-row justify-center items-center gap-2'}>
                                                    <motion.button
                                                        whileHover={{scale: 1.02}}
                                                        whileTap={{scale: 0.98}}
                                                        className={`inline-flex items-center px-4 py-1.5 border border-red-300 shadow-sm text-sm font-medium rounded-md text-susty bg-red-100 hover:bg-susty hover:text-white hover:border-susty focus:text-red-400 focus:border-susty focus:bg-red-50`}>
                                                        <HiChatAlt className={`h-5 w-5 mr-2`}/>
                                                        Message
                                                    </motion.button>
                                                    {isFollow === true ? <>
                                                        <motion.button
                                                            onClick={() => {
                                                                setIsFollow(false)
                                                            }}
                                                            whileHover={{scale: 1.02}}
                                                            whileTap={{scale: 0.98}}
                                                            className={`inline-flex items-center px-4 py-1.5 border border-red-300 shadow-sm text-sm font-medium rounded-md text-white hover:text-susty bg-susty hover:bg-red-100 hover:border-susty focus:text-red-400 focus:border-susty focus:bg-red-50`}>
                                                            Following
                                                        </motion.button>
                                                    </> : <>
                                                        <motion.button
                                                            onClick={() => {
                                                                setIsFollow(true)
                                                            }}
                                                            whileHover={{scale: 1.02}}
                                                            whileTap={{scale: 0.98}}
                                                            className={`inline-flex items-center px-4 py-1.5 border border-red-300 shadow-sm text-sm font-medium rounded-md text-white hover:text-susty bg-susty hover:bg-red-100 hover:border-susty focus:text-red-400 focus:border-susty focus:bg-red-50`}>
                                                            Follow
                                                        </motion.button>
                                                    </>}
                                                    <div className={'px-1.5 py-1 hover:bg-gray-50'}>
                                                        <Popover>
                                                            {({open}) => (
                                                                <>
                                                                    <Popover.Button
                                                                        className={`${open ? '' : 'text-opacity-90'}
                                                                    group inline-flex items-center rounded-md px-3 py-1 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                                                                    >
                                                                        <BsThreeDots className={'text-gray-600'}/>
                                                                    </Popover.Button>
                                                                    <Transition
                                                                        as={Fragment}
                                                                        enter="transition ease-out duration-200"
                                                                        enterFrom="opacity-0 translate-y-1"
                                                                        enterTo="opacity-100 translate-y-0"
                                                                        leave="transition ease-in duration-150"
                                                                        leaveFrom="opacity-100 translate-y-0"
                                                                        leaveTo="opacity-0 translate-y-1"
                                                                    >
                                                                        <Popover.Panel
                                                                            className="absolute left-3/5 z-10 mt-3 max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-lg">
                                                                            <div
                                                                                className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                                                                <div
                                                                                    className="relative flex flex-col gap-2 bg-white px-3 py-2">
                                                                                    {solutions.map((item) => (
                                                                                        <a
                                                                                            key={item.name}
                                                                                            href={item.href}
                                                                                            className="inline-flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                                                                        >
                                                                                            <div className="mx-2">
                                                                                                <p className="text-sm font-medium text-gray-900">
                                                                                                    {item.name}
                                                                                                </p>
                                                                                            </div>
                                                                                        </a>
                                                                                    ))}
                                                                                </div>
                                                                            </div>
                                                                        </Popover.Panel>
                                                                    </Transition>
                                                                </>
                                                            )}
                                                        </Popover>
                                                    </div>
                                                </div>
                                            </>}
                                        </div>
                                    </div>
                                    <div className={"flex flex-col gap-0.5 text-gray-500 py-4"}>
                                        <div className={"flex flex-row gap-1"}>
                                            <HiCheckCircle className={"w-5 h-5"}/>
                                            <div className={"text-sm"}>Email</div>
                                        </div>
                                        <div className={"flex flex-row gap-1"}>
                                            <HiLocationMarker className={"w-5 h-5"}/>
                                            <div className={"text-sm"}>{sellerData.storeLocation}</div>
                                        </div>
                                        <div className={"flex flex-row gap-1"}>
                                            <HiRss className={"w-5 h-5"}/>
                                            <div className={"text-sm"}><Link href={"#"}><a
                                                className={"text-susty hover:underline"}>{0}</a></Link> followers, <Link
                                                href={"#"}><a
                                                className={"text-susty hover:underline"}>{0}</a></Link> following
                                            </div>
                                        </div>
                                    </div>
                                    <ProfileCloset isSameUser={isSameUser} percentage={discountFromBundles}/>
                                </ul>
                            </Tab.Panel>
                            <Tab.Panel
                                className={classNames(
                                    'rounded-xl bg-white p-1',
                                    'ring-white ring-opacity-60 ring-offset-2 focus:outline-none'
                                )}
                            >
                                <ul>
                                    <ProfileReviews isSameUser={isSameUser} anyReviews={anyReviews}
                                                    seller={sellerData}/>
                                </ul>
                            </Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </div>
        </>
    );
};

export default ProfileBio;
