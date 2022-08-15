import React, { useEffect, useState } from 'react';
import { HiInformationCircle } from 'react-icons/hi';
import Link from 'next/link';
import axios from 'axios';

const NewsFeedItemCard = ({ src, alt, price, size, brand, userId }) => {
    const [isFavourite, setIsFavourite] = useState(false);
    const [userDetails, setUserDetails] = useState({});
    let favCount = 2;

    useEffect(() => {
        axios
            .get('/api/user/fetch-user-details', { params: { userId } })
            .then((result) => {
                setUserDetails(result.data.user);
            });
    }, []);

    return (
        <>
            <div
                className={
                    'box-content min-h-max w-[10.5rem] sm:w-[18rem] md:w-[13.5rem] lg:w-[14.5rem]'
                }
            >
                <div className={'flex flex-col gap-2'}>
                    <Link href={'/profile'}>
                        <div
                            className={'flex flex-row items-center gap-2 pl-4'}
                        >
                            {userDetails.image && (
                                <>
                                    <img
                                        src={userDetails.image.url}
                                        alt={userDetails.image.name}
                                        className={
                                            'h-[1.75rem] w-[1.75rem] rounded-full object-cover'
                                        }
                                    />
                                </>
                            )}

                            <p className={'text-xs font-medium text-gray-500'}>
                                {userDetails.name}
                            </p>
                        </div>
                    </Link>
                    <img
                        className={
                            'h-[16.5rem] w-[10.5rem] object-cover sm:h-[18rem] sm:w-[18rem] md:h-[22rem] md:w-[13.5rem] lg:h-[22rem] lg:w-[14.5rem]'
                        }
                        src={src}
                        alt={alt}
                        width={'full'}
                        height={'full'}
                    />
                </div>
                <div className={'grid grid-cols-3 p-3'}>
                    <div className={'col-start-1 col-end-3'}>
                        <div className={'flex flex-col gap-0.5'}>
                            <div className={'flex flex-row gap-1'}>
                                <div className={'text-sm font-semibold'}>
                                    ${price}
                                </div>
                                <HiInformationCircle
                                    className={
                                        'h-[1.25rem] w-[1.25rem] text-sm text-gray-500'
                                    }
                                />
                            </div>
                            <div className={'text-xs text-gray-500'}>
                                {size}
                            </div>
                            <div className={'text-xs text-gray-500'}>
                                {brand}
                            </div>
                        </div>
                    </div>
                    <div className={'col-start-3 col-end-4'}>
                        <div
                            className={
                                'flex flex-row items-center justify-end gap-0.5 text-gray-400'
                            }
                        >
                            {isFavourite === true ? (
                                <>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-red-900"
                                        viewBox="0 0 20 20"
                                        onClick={() => {
                                            setIsFavourite(false);
                                        }}
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </>
                            ) : (
                                <>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        onClick={() => {
                                            setIsFavourite(true);
                                        }}
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                        />
                                    </svg>
                                </>
                            )}
                            {isFavourite === true ? (
                                <>
                                    <span
                                        className={
                                            'text-sm font-medium text-gray-500'
                                        }
                                    >
                                        {favCount + 1}
                                    </span>
                                </>
                            ) : (
                                <>
                                    <span
                                        className={
                                            'text-sm font-medium text-gray-500'
                                        }
                                    >
                                        {favCount}
                                    </span>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewsFeedItemCard;
