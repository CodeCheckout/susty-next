import React, {useState} from 'react'
import {HiHeart, HiInformationCircle, HiOutlineHeart} from 'react-icons/hi'
import {useRouter} from 'next/router'

const PopularItemCard = ({id, src, alt, price, size, brand, favCount}) => {
    const [isFavourite, setIsFavourite] = useState(false)
    const [favouriteCount, setFavouriteCount] = useState(favCount)

    const router = useRouter()

    return (
        <div>
            <div className={'hidden lg:block box-content w-[12rem] min-h-max'}>
                <div
                    onClick={async () => {
                        await router.push({
                            pathname: '/items/view/',
                            query: {
                                itemId: id,
                            },
                        })
                    }}
                    className={`relative w-full group bg-gray-800 duration-300 cursor-pointer`}
                >
                    <img
                        className={
                            'h-[20rem] w-[12rem] object-cover group-hover:opacity-80 transition-opacity'
                        }
                        src={src}
                        alt={alt}
                        width={'full'}
                        height={'full'}
                    />
                </div>
                <div className={'p-3 grid grid-cols-3'}>
                    <div className={'col-start-1 col-end-3'}>
                        <div className={'flex flex-col gap-0.5'}>
                            <div className={'flex flex-row gap-1'}>
                                <div className={'font-semibold text-sm'}>
                                    ${price}
                                </div>
                                <HiInformationCircle
                                    className={
                                        'w-[1.25rem] h-[1.25rem] text-gray-500 text-sm'
                                    }
                                />
                            </div>
                            <div className={'text-gray-500 text-xs'}>
                                {size}
                            </div>
                            <div className={'text-gray-500 text-xs'}>
                                {brand}
                            </div>
                        </div>
                    </div>
                    <div className={'col-start-3 col-end-4'}>
                        <div
                            onClick={() => {
                                isFavourite
                                    ? setFavouriteCount(favouriteCount - 1)
                                    : setFavouriteCount(favouriteCount + 1)
                                setIsFavourite(!isFavourite)
                            }}
                            className={
                                'flex flex-row justify-end items-center gap-0.5 text-gray-400 cursor-pointer'
                            }
                        >
                            {isFavourite === true ? (
                                <HiHeart className={`text-susty`}/>
                            ) : (
                                <HiOutlineHeart className={`text-susty`}/>
                            )}
                            <span
                                className={'text-gray-500 font-medium text-sm'}
                            >
                                {favouriteCount}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'block lg:hidden box-content w-56 min-h-max'}>
                <div
                    onClick={async () => {
                        await router.push({
                            pathname: '/items/view/',
                            query: {
                                itemId: id,
                            },
                        })
                    }}
                    className={'flex flex-col w-56 py-3 '}>
                    <img
                        className={'h-80 object-fit '}
                        src={src}
                        alt={alt}
                        width={'full'}
                        height={'full'}
                    />
                    <div className={'flex flex-col gap-1 px-1'}>
                        <div className={'flex flex-row justify-between'}>
                            <div className={'flex flex-row gap-1'}>
                                <div className={'font-semibold text-sm'}>
                                    ${price}
                                </div>
                                <HiInformationCircle
                                    className={
                                        'w-6 h-6 text-gray-500 text-sm'
                                    }
                                />
                            </div>
                            <div>
                                <div
                                    onClick={() => {
                                        isFavourite
                                            ? setFavouriteCount(
                                                favouriteCount - 1
                                            )
                                            : setFavouriteCount(
                                                favouriteCount + 1
                                            )
                                        setIsFavourite(!isFavourite)
                                    }}
                                    className={
                                        'flex flex-row justify-end items-center gap-0.5 text-gray-400 cursor-pointer'
                                    }
                                >
                                    {isFavourite === true ? (
                                        <HiHeart className={`text-susty`}/>
                                    ) : (
                                        <HiOutlineHeart
                                            className={`text-susty`}
                                        />
                                    )}
                                    <span
                                        className={
                                            'text-gray-500 font-medium text-sm'
                                        }
                                    >
                                            {favouriteCount}
                                        </span>
                                </div>
                            </div>
                        </div>
                        <div className={'text-gray-500 text-xs'}>
                            {size}
                        </div>
                        <div className={'text-gray-500 text-xs'}>
                            {brand}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopularItemCard
