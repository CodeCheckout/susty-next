import React, { Fragment, useState } from 'react';
import { Popover, Transition, Tab } from '@headlessui/react';
import { motion } from 'framer-motion';
import {
    HiCheckCircle,
    HiClock,
    HiLocationMarker,
    HiPencil,
    HiRss,
    HiChatAlt,
} from 'react-icons/hi';

import Link from 'next/link';
import ProfileCloset from './ProfileCloset';
import ProfileReviews from './ProfileReviews';
import { BsThreeDots } from 'react-icons/bs';
import { useEffect } from 'react';
import axios from 'axios';

const solutions = [
    { id: 1, name: 'Report', href: '#' },
    { id: 2, name: 'Block', href: '#' },
];

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
    ],
};

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

const ProfileBio = () => {
    const [tabs, setTabs] = useState(tabsStaticData);
    const [isSameUser, setIsSameUser] = useState(false);
    const [isFollow, setIsFollow] = useState(false);
    const [anyReviews, setAnyReviews] = useState(false);
    const [userId, setUserId] = useState(''); // get user id
    const [userDetails, setUserDetails] = useState();
    const [discountFromBundles, setDiscountFromBundles] = useState('25%');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const user = JSON.parse(localStorage.getItem('susty'));
            setUserId(user._id);
            console.log('user is = ', user);
        }
    }, []);

    // get user details
    useEffect(() => {
        if (userId.length > 0) {
            async function getUserDetails() {
                await axios
                    .get('/api/user/fetch-user-details', { params: { userId } })
                    .then((result) => {
                        setUserDetails(result.data.user);
                    });
            }
            getUserDetails();
        }
    }, [userId]);

    return (
        <>
            <div className={'hidden md:block'}>
                <div
                    className={
                        'my-5 grid grid-cols-10 items-center gap-1 lg:grid-cols-11 lg:gap-8'
                    }
                >
                    <div className={'col-span-3 lg:col-span-2'}>
                        {userDetails && (
                            <>
                                {userDetails.image && (
                                    <>
                                        <img
                                            src={userDetails.image.url}
                                            alt={userDetails.image.name}
                                            width={196}
                                            height={196}
                                            className={
                                                'mx-3 h-52 w-52 rounded-full object-cover'
                                            }
                                        />
                                    </>
                                )}
                            </>
                        )}
                    </div>
                    <div className={'col-span-7 lg:col-span-9'}>
                        <div
                            className={
                                'grid grid-rows-2 items-center pb-5 lg:flex lg:justify-between'
                            }
                        >
                            <div className={'flex flex-col gap-1'}>
                                {userDetails && (
                                    <div className={'text-2xl font-medium'}>
                                        {userDetails.name}
                                    </div>
                                )}

                                <div className={'text-sm text-gray-500'}>
                                    No reviews yet
                                </div>
                            </div>
                            {isSameUser === true ? (
                                <>
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`mr-16 inline-flex max-w-fit items-center rounded-md border border-red-300 bg-red-100 px-4 py-1.5 text-sm font-medium text-susty shadow-sm hover:border-susty hover:bg-susty hover:text-white focus:border-susty focus:bg-red-50 focus:text-red-400`}
                                    >
                                        <HiPencil className={`mr-2 h-5 w-5`} />
                                        Edit profile
                                    </motion.button>
                                </>
                            ) : (
                                <>
                                    <div
                                        className={
                                            'flex flex-row items-center gap-2 lg:justify-end'
                                        }
                                    >
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className={`inline-flex items-center rounded-md border border-red-300 bg-red-100 px-4 py-1.5 text-sm font-medium text-susty shadow-sm hover:border-susty hover:bg-susty hover:text-white focus:border-susty focus:bg-red-50 focus:text-red-400`}
                                        >
                                            <HiChatAlt
                                                className={`mr-2 h-5 w-5`}
                                            />
                                            Message
                                        </motion.button>
                                        {isFollow === true ? (
                                            <>
                                                <motion.button
                                                    onClick={() => {
                                                        setIsFollow(false);
                                                    }}
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    className={`inline-flex items-center rounded-md border border-red-300 bg-susty px-4 py-1.5 text-sm font-medium text-white shadow-sm hover:border-susty hover:bg-red-100 hover:text-susty focus:border-susty focus:bg-red-50 focus:text-red-400`}
                                                >
                                                    Following
                                                </motion.button>
                                            </>
                                        ) : (
                                            <>
                                                <motion.button
                                                    onClick={() => {
                                                        setIsFollow(true);
                                                    }}
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    className={`inline-flex items-center rounded-md border border-red-300 bg-susty px-4 py-1.5 text-sm font-medium text-white shadow-sm hover:border-susty hover:bg-red-100 hover:text-susty focus:border-susty focus:bg-red-50 focus:text-red-400`}
                                                >
                                                    Follow
                                                </motion.button>
                                            </>
                                        )}
                                        <div
                                            className={
                                                'px-1.5 py-1 hover:bg-gray-50'
                                            }
                                        >
                                            <Popover>
                                                {({ open }) => (
                                                    <>
                                                        <Popover.Button
                                                            className={`${
                                                                open
                                                                    ? ''
                                                                    : 'text-opacity-90'
                                                            }
                                                                    group inline-flex items-center rounded-md px-3 py-1 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                                                        >
                                                            <BsThreeDots
                                                                className={
                                                                    'text-gray-600'
                                                                }
                                                            />
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
                                                            <Popover.Panel className="left-3/5 absolute z-10 mt-3 max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-lg">
                                                                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                                                    <div className="relative flex flex-col gap-2 bg-white px-3 py-2">
                                                                        {solutions.map(
                                                                            (
                                                                                item
                                                                            ) => (
                                                                                <a
                                                                                    key={
                                                                                        item.name
                                                                                    }
                                                                                    href={
                                                                                        item.href
                                                                                    }
                                                                                    className="inline-flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                                                                >
                                                                                    <div className="mx-2">
                                                                                        <p className="text-sm font-medium text-gray-900">
                                                                                            {
                                                                                                item.name
                                                                                            }
                                                                                        </p>
                                                                                    </div>
                                                                                </a>
                                                                            )
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </Popover.Panel>
                                                        </Transition>
                                                    </>
                                                )}
                                            </Popover>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                        <div
                            className={
                                'grid grid-cols-6 gap-3 text-xs text-gray-500 lg:grid-cols-7'
                            }
                        >
                            <div className={'col-span-3 lg:col-span-2'}>
                                <div className={'my-3'}>About:</div>
                                <div className={'flex flex-col gap-1'}>
                                    {userDetails && (
                                        <div className={'flex flex-row gap-1'}>
                                            <HiLocationMarker
                                                className={'h-5 w-5'}
                                            />
                                            <div className={'text-sm'}>
                                                {userDetails.address}
                                            </div>
                                        </div>
                                    )}

                                    <div className={'flex flex-row gap-1'}>
                                        <HiClock className={'h-5 w-5'} />
                                        <div className={'text-sm'}>
                                            {/* TODO */}
                                            Last seen 1 hour ago
                                        </div>
                                    </div>
                                    <div className={'flex flex-row gap-1'}>
                                        <HiRss className={'h-5 w-5'} />
                                        <div className={'text-sm'}>
                                            <Link href={'#'}>
                                                <a
                                                    className={
                                                        'text-susty hover:underline'
                                                    }
                                                >
                                                    {userDetails && (
                                                        <>
                                                            {
                                                                userDetails
                                                                    .followers
                                                                    .length
                                                            }
                                                        </>
                                                    )}
                                                </a>
                                            </Link>{' '}
                                            followers,{' '}
                                            <Link href={'#'}>
                                                <a
                                                    className={
                                                        'text-susty hover:underline'
                                                    }
                                                >
                                                    {userDetails && (
                                                        <>
                                                            {
                                                                userDetails
                                                                    .following
                                                                    .length
                                                            }
                                                        </>
                                                    )}
                                                </a>
                                            </Link>{' '}
                                            following
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={'col-span-3 lg:col-span-5'}>
                                <div className={'my-3'}>Verified info:</div>
                                <div className={'flex flex-row gap-1'}>
                                    {userDetails && (
                                        <>
                                            {userDetails.emailVerified ==
                                            true ? (
                                                <>
                                                    <HiCheckCircle
                                                        className={'h-5 w-5'}
                                                    />
                                                    <div className={'text-sm'}>
                                                        Email
                                                    </div>
                                                </>
                                            ) : (
                                                <div className="text-red-600">
                                                    Nothing
                                                </div>
                                            )}
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-full px-2 py-16 sm:px-0">
                    <Tab.Group>
                        <Tab.List className="flex max-w-[12rem] space-x-1 bg-white p-1">
                            {Object.keys(tabs).map((tab) => (
                                <Tab
                                    key={tab}
                                    className={({ selected }) =>
                                        classNames(
                                            'w-full py-2.5 text-sm font-medium leading-5 text-gray-900',
                                            'ring-white ring-opacity-60 focus:outline-none focus:ring-2',
                                            selected
                                                ? 'border-b border-susty bg-white'
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
                                    <ProfileCloset
                                        userId={userId}
                                        isSameUser={isSameUser}
                                        percentage={discountFromBundles}
                                    />
                                </ul>
                            </Tab.Panel>
                            <Tab.Panel
                                className={classNames(
                                    'rounded-xl bg-white p-3',
                                    'ring-white ring-opacity-60 ring-offset-2 focus:outline-none'
                                )}
                            >
                                <ul>
                                    <ProfileReviews
                                        isSameUser={isSameUser}
                                        anyReviews={anyReviews}
                                        seller={userDetails}
                                        setAnyReviews={setAnyReviews}
                                    />
                                </ul>
                            </Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </div>
            <div className={'block divide-y-2 divide-gray-200 md:hidden'}>
                <div className="max-w-full px-0 py-4">
                    <Tab.Group>
                        <Tab.List className="flex max-w-full space-x-1 bg-white p-1">
                            {Object.keys(tabs).map((tab) => (
                                <Tab
                                    key={tab}
                                    className={({ selected }) =>
                                        classNames(
                                            'w-full py-2.5 text-sm font-medium leading-5 text-gray-900',
                                            'ring-white ring-opacity-60 focus:outline-none focus:ring-2',
                                            selected
                                                ? 'border-b border-susty bg-white'
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
                                    <div
                                        className={
                                            'my-2 flex flex-col items-center gap-5 py-2'
                                        }
                                    >
                                        <div
                                            className={
                                                'flex flex-row items-center gap-3'
                                            }
                                        >
                                            {userDetails && (
                                                <>
                                                    {userDetails.image && (
                                                        <img
                                                            src={
                                                                userDetails
                                                                    .image.url
                                                            }
                                                            alt={
                                                                userDetails
                                                                    .image.name
                                                            }
                                                            width={50}
                                                            height={50}
                                                            className={
                                                                'h-16 w-16 items-center rounded-full object-cover'
                                                            }
                                                        />
                                                    )}
                                                </>
                                            )}

                                            <div
                                                className={
                                                    'flex flex-col gap-1 pr-5 font-medium'
                                                }
                                            >
                                                {userDetails && (
                                                    <div
                                                        className={
                                                            'text-2xl font-medium'
                                                        }
                                                    >
                                                        {userDetails.name}
                                                    </div>
                                                )}

                                                <div
                                                    className={'text-gray-500'}
                                                >
                                                    No reviews yet
                                                </div>
                                            </div>
                                        </div>
                                        <div className={'col-span-1 mx-auto'}>
                                            {isSameUser === true ? (
                                                <>
                                                    <motion.button
                                                        whileHover={{
                                                            scale: 1.02,
                                                        }}
                                                        whileTap={{
                                                            scale: 0.98,
                                                        }}
                                                        className={`mr-2 inline-flex items-center rounded-md border border-red-300 bg-red-100 px-4 py-1.5 text-sm font-medium text-susty shadow-sm hover:border-susty hover:bg-susty hover:text-white focus:border-susty focus:bg-red-50 focus:text-red-400`}
                                                    >
                                                        <HiPencil
                                                            className={`mr-2 h-5 w-5`}
                                                        />
                                                        Edit profile
                                                    </motion.button>
                                                </>
                                            ) : (
                                                <>
                                                    <div
                                                        className={
                                                            'flex flex-row items-center justify-center gap-2'
                                                        }
                                                    >
                                                        <motion.button
                                                            whileHover={{
                                                                scale: 1.02,
                                                            }}
                                                            whileTap={{
                                                                scale: 0.98,
                                                            }}
                                                            className={`inline-flex items-center rounded-md border border-red-300 bg-red-100 px-4 py-1.5 text-sm font-medium text-susty shadow-sm hover:border-susty hover:bg-susty hover:text-white focus:border-susty focus:bg-red-50 focus:text-red-400`}
                                                        >
                                                            <HiChatAlt
                                                                className={`mr-2 h-5 w-5`}
                                                            />
                                                            Message
                                                        </motion.button>
                                                        {isFollow === true ? (
                                                            <>
                                                                <motion.button
                                                                    onClick={() => {
                                                                        setIsFollow(
                                                                            false
                                                                        );
                                                                    }}
                                                                    whileHover={{
                                                                        scale: 1.02,
                                                                    }}
                                                                    whileTap={{
                                                                        scale: 0.98,
                                                                    }}
                                                                    className={`inline-flex items-center rounded-md border border-red-300 bg-susty px-4 py-1.5 text-sm font-medium text-white shadow-sm hover:border-susty hover:bg-red-100 hover:text-susty focus:border-susty focus:bg-red-50 focus:text-red-400`}
                                                                >
                                                                    Following
                                                                </motion.button>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <motion.button
                                                                    onClick={() => {
                                                                        setIsFollow(
                                                                            true
                                                                        );
                                                                    }}
                                                                    whileHover={{
                                                                        scale: 1.02,
                                                                    }}
                                                                    whileTap={{
                                                                        scale: 0.98,
                                                                    }}
                                                                    className={`inline-flex items-center rounded-md border border-red-300 bg-susty px-4 py-1.5 text-sm font-medium text-white shadow-sm hover:border-susty hover:bg-red-100 hover:text-susty focus:border-susty focus:bg-red-50 focus:text-red-400`}
                                                                >
                                                                    Follow
                                                                </motion.button>
                                                            </>
                                                        )}
                                                        <div
                                                            className={
                                                                'px-1.5 py-1 hover:bg-gray-50'
                                                            }
                                                        >
                                                            <Popover>
                                                                {({ open }) => (
                                                                    <>
                                                                        <Popover.Button
                                                                            className={`${
                                                                                open
                                                                                    ? ''
                                                                                    : 'text-opacity-90'
                                                                            }
                                                                    group inline-flex items-center rounded-md px-3 py-1 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                                                                        >
                                                                            <BsThreeDots
                                                                                className={
                                                                                    'text-gray-600'
                                                                                }
                                                                            />
                                                                        </Popover.Button>
                                                                        <Transition
                                                                            as={
                                                                                Fragment
                                                                            }
                                                                            enter="transition ease-out duration-200"
                                                                            enterFrom="opacity-0 translate-y-1"
                                                                            enterTo="opacity-100 translate-y-0"
                                                                            leave="transition ease-in duration-150"
                                                                            leaveFrom="opacity-100 translate-y-0"
                                                                            leaveTo="opacity-0 translate-y-1"
                                                                        >
                                                                            <Popover.Panel className="left-3/5 absolute z-10 mt-3 max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-lg">
                                                                                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                                                                    <div className="relative flex flex-col gap-2 bg-white px-3 py-2">
                                                                                        {solutions.map(
                                                                                            (
                                                                                                item
                                                                                            ) => (
                                                                                                <a
                                                                                                    key={
                                                                                                        item.name
                                                                                                    }
                                                                                                    href={
                                                                                                        item.href
                                                                                                    }
                                                                                                    className="inline-flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                                                                                >
                                                                                                    <div className="mx-2">
                                                                                                        <p className="text-sm font-medium text-gray-900">
                                                                                                            {
                                                                                                                item.name
                                                                                                            }
                                                                                                        </p>
                                                                                                    </div>
                                                                                                </a>
                                                                                            )
                                                                                        )}
                                                                                    </div>
                                                                                </div>
                                                                            </Popover.Panel>
                                                                        </Transition>
                                                                    </>
                                                                )}
                                                            </Popover>
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                    <div
                                        className={
                                            'flex flex-col gap-0.5 py-4 text-gray-500'
                                        }
                                    >
                                        <div className={'flex flex-row gap-1'}>
                                            <HiCheckCircle
                                                className={'h-5 w-5'}
                                            />
                                            <div className={'text-sm'}>
                                                Email
                                            </div>
                                        </div>
                                        {userDetails && (
                                            <div
                                                className={
                                                    'flex flex-row gap-1'
                                                }
                                            >
                                                <HiLocationMarker
                                                    className={'h-5 w-5'}
                                                />
                                                <div className={'text-sm'}>
                                                    {userDetails.address}
                                                </div>
                                            </div>
                                        )}

                                        <div className={'flex flex-row gap-1'}>
                                            <HiRss className={'h-5 w-5'} />
                                            <div className={'text-sm'}>
                                                <Link href={'#'}>
                                                    <a
                                                        className={
                                                            'text-susty hover:underline'
                                                        }
                                                    >
                                                        {userDetails && (
                                                            <>
                                                                {
                                                                    userDetails
                                                                        .followers
                                                                        .length
                                                                }
                                                            </>
                                                        )}
                                                    </a>
                                                </Link>{' '}
                                                followers,{' '}
                                                <Link href={'#'}>
                                                    <a
                                                        className={
                                                            'text-susty hover:underline'
                                                        }
                                                    >
                                                        {userDetails && (
                                                            <>
                                                                {
                                                                    userDetails
                                                                        .following
                                                                        .length
                                                                }
                                                            </>
                                                        )}
                                                    </a>
                                                </Link>{' '}
                                                following
                                            </div>
                                        </div>
                                    </div>
                                    <ProfileCloset
                                        userId={userId}
                                        isSameUser={isSameUser}
                                        percentage={discountFromBundles}
                                    />
                                </ul>
                            </Tab.Panel>
                            <Tab.Panel
                                className={classNames(
                                    'rounded-xl bg-white p-1',
                                    'ring-white ring-opacity-60 ring-offset-2 focus:outline-none'
                                )}
                            >
                                <ul>
                                    <ProfileReviews
                                        isSameUser={isSameUser}
                                        anyReviews={anyReviews}
                                        seller={userDetails}
                                        setAnyReviews={setAnyReviews}
                                    />
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
