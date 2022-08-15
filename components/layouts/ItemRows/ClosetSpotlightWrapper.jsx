import React, { useRef, useState } from 'react';
import { HiChevronLeft, HiChevronRight, HiPlus } from 'react-icons/hi';
import Link from 'next/link';
import RatesInClosetSpotlight from '../../details/RatesInClosetSpotlight';

const personData = [
    {
        id: 1,
        username: 'NickyMontana',
        profileImg:
            'https://c1.wallpaperflare.com/preview/568/71/709/face-facial-hair-fine-looking-guy.jpg',
        profileAlt: 'profile image',
        rating: 2.1,
        noOfVotes: 50,
    },
];

const ClosetSpotlightWrapper = ({ children, seller }) => {
    const [person, setPerson] = useState([seller]);

    const ref = useRef(null);

    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
    };

    console.log(seller.products.length);

    return (
        <div className={'py-[2rem]'}>
            <div className={'flex flex-col gap-3'}>
                <div
                    className={
                        'flex flex-row items-center justify-between py-5'
                    }
                >
                    <p className={'text-2xl font-medium capitalize'}>
                        Closet Spotlight
                    </p>
                    <div
                        className={
                            'mr-10 px-2.5 py-1 text-sm text-susty hover:bg-red-50'
                        }
                    >
                        <Link href="#">
                            <a>See more</a>
                        </Link>
                    </div>
                </div>
                <div
                    className={
                        'mr-4 flex flex-row items-center justify-between py-5'
                    }
                >
                    {person.map((personD) => (
                        <div
                            key={personD._id}
                            className={'flex flex-row gap-2'}
                        >
                            <Link href={'/profile'}>
                                {personD.image && (
                                    <img
                                        src={personD.image.url}
                                        alt={personD.image.name}
                                        className={
                                            'h-[3rem] w-[3rem] rounded-full'
                                        }
                                    />
                                )}
                            </Link>
                            <Link href={'/profile'}>
                                <div className={'flex flex-col'}>
                                    <div className={'font-medium'}>
                                        {personD.name}
                                    </div>
                                    <RatesInClosetSpotlight
                                        id={personD._id}
                                        personD={personD}
                                        person={person}
                                    />
                                </div>
                            </Link>
                        </div>
                    ))}

                    <Link href={'/profile'}>
                        <button
                            className={
                                'inline-flex items-center gap-1 rounded-md bg-susty px-2.5 py-1.5 text-xs font-semibold text-white'
                            }
                        >
                            <HiPlus className={'h-4 w-4'} />
                            Follow
                        </button>
                    </Link>
                </div>
            </div>
            <div
                className={
                    'flex max-w-[36rem] flex-row gap-3 overflow-x-hidden overflow-y-hidden scroll-smooth sm:max-w-[42rem] lg:max-w-[80rem]  '
                }
                ref={ref}
            >
                <div
                    className={`absolute -left-[0.5rem] lg:left-[1rem] lg:hidden`}
                >
                    <div
                        onClick={() => {
                            scroll(-100);
                        }}
                        className={
                            'absolute left-[1rem] top-[9rem] grid h-[2.5rem] w-[2.5rem] cursor-pointer place-items-center rounded-full bg-black bg-opacity-70'
                        }
                    >
                        <HiChevronLeft
                            className={'h-[2.5rem] w-[2.5rem] text-white'}
                        />
                    </div>
                </div>
                {children}
                <div
                    className={
                        'my-3 inline-flex h-[18rem] min-w-max place-content-center items-center bg-gray-200 px-8 lg:my-0 lg:w-[12.5rem]'
                    }
                >
                    {seller.products && (
                        <div className={'text-gray-500'}>
                            View all {seller.products.length} items
                        </div>
                    )}
                </div>
                <div
                    className={`absolute -right-[0.5rem] lg:right-[1rem] lg:hidden`}
                >
                    <div
                        onClick={() => {
                            scroll(100);
                        }}
                        className={
                            'absolute right-[1rem] top-[9rem] h-[2.5rem] w-[2.5rem] cursor-pointer place-items-center rounded-full bg-black bg-opacity-70'
                        }
                    >
                        <HiChevronRight
                            className={'h-[2.5rem] w-[2.5rem] text-white'}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClosetSpotlightWrapper;
