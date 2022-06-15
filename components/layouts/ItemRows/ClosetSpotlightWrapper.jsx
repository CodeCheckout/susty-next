import React, {useRef, useState} from 'react'
import {
    ChevronLeftIcon,
    ChevronRightIcon,
    PlusIcon,
} from '@heroicons/react/solid'
import Link from 'next/link'
import RatesInClosetSpotlight from '../rates/RatesInClosetSpotlight'

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
]

const ClosetSpotlightWrapper = ({children}) => {
    const [person, setPerson] = useState(personData)

    const ref = useRef(null)

    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset
    }

    return (
        <div className={'py-[2rem]'}>
            <div className={'flex flex-col gap-3'}>
                <div
                    className={
                        'flex flex-row justify-between items-center py-5'
                    }
                >
                    <p className={'text-2xl font-medium capitalize'}>
                        Closet Spotlight
                    </p>
                    <div
                        className={
                            'px-2.5 py-1 mr-10 text-sm text-susty hover:bg-red-50'
                        }
                    >
                        <Link href="#">
                            <a>See more</a>
                        </Link>
                    </div>
                </div>
                <div
                    className={
                        'flex flex-row justify-between items-center py-5 mr-4'
                    }
                >
                    <div>
                        {person.map((personD) => (
                            <div
                                key={personD.id}
                                className={'flex flex-row gap-2'}
                            >
                                <img
                                    src={personD.profileImg}
                                    alt={personD.profileAlt}
                                    className={'w-[3rem] h-[3rem] rounded-full'}
                                />
                                <div className={'flex flex-col'}>
                                    <div className={'font-medium'}>
                                        {personD.username}
                                    </div>
                                    <RatesInClosetSpotlight
                                        id={personD.id}
                                        personD={personD}
                                        person={person}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    <button
                        className={
                            'inline-flex gap-1 items-center px-2.5 py-1.5 rounded-md text-white text-xs font-semibold bg-susty'
                        }
                    >
                        <PlusIcon className={'w-4 h-4'} />
                        Follow
                    </button>
                </div>
            </div>
            <div
                className={
                    'overflow-x-hidden overflow-y-hidden scroll-smooth max-w-[36rem] sm:max-w-[42rem] lg:max-w-[80rem] flex flex-row gap-3  '
                }
                ref={ref}
            >
                <div
                    className={`lg:hidden absolute -left-[0.5rem] lg:left-[1rem]`}
                >
                    <div
                        onClick={() => {
                            scroll(-100)
                        }}
                        className={
                            'absolute h-[2.5rem] w-[2.5rem] grid place-items-center left-[1rem] top-[9rem] bg-black bg-opacity-70 rounded-full cursor-pointer'
                        }
                    >
                        <ChevronLeftIcon
                            className={'text-white w-[2.5rem] h-[2.5rem]'}
                        />
                    </div>
                </div>
                {children}
                <div
                    className={
                        'min-w-max lg:w-[12.5rem] h-[18rem] px-8 my-3 lg:my-0 bg-gray-200 inline-flex items-center place-content-center'
                    }
                >
                    <div className={'text-gray-500'}>View all {309} items</div>
                </div>
                <div
                    className={`lg:hidden absolute -right-[0.5rem] lg:right-[1rem]`}
                >
                    <div
                        onClick={() => {
                            scroll(100)
                        }}
                        className={
                            'absolute h-[2.5rem] w-[2.5rem] place-items-center right-[1rem] top-[9rem] bg-black bg-opacity-70 rounded-full cursor-pointer'
                        }
                    >
                        <ChevronRightIcon
                            className={'text-white w-[2.5rem] h-[2.5rem]'}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClosetSpotlightWrapper
