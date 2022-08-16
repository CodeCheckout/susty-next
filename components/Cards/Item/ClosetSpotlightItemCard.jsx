import axios from 'axios'
import React, {useState} from 'react'
import {useEffect} from 'react'
import {HiInformationCircle} from 'react-icons/hi'

const ClosetSpotlightItemCard = ({item}) => {
    const [isFavourite, setIsFavourite] = useState(false)
    const [product, setProduct] = useState()
    let favCount = 2

    useEffect(() => {
        async function getDetails() {
            await axios
                .get('/api/product/fetch-single-product', {
                    params: {productId: item},
                })
                .then((result) => {
                    setProduct(result.data.product)
                })
        }
        getDetails()
    }, [])

    return (
        <>
            <div className={'box-content hidden min-h-max w-[12rem] lg:block'}>
                <div>
                    {product && (
                        <img
                            className={'h-[16rem] w-[12rem] object-cover'}
                            src={product.images[0].url}
                            alt={product.images[0].name}
                            width={'full'}
                            height={'full'}
                        />
                    )}
                </div>
                <div className={'grid grid-cols-3 p-3'}>
                    {product && (
                        <div className={'col-start-1 col-end-3'}>
                            <div className={'flex flex-col gap-0.5'}>
                                <div className={'flex flex-row gap-1'}>
                                    <div className={'text-sm font-semibold'}>
                                        ${product.price}
                                    </div>
                                    <HiInformationCircle
                                        className={
                                            'h-[1.25rem] w-[1.25rem] text-sm text-gray-500'
                                        }
                                    />
                                </div>
                                <div className={'text-xs text-gray-500'}>
                                    {product.size}
                                </div>
                                <div className={'text-xs text-gray-500'}>
                                    {product.brand}
                                </div>
                            </div>
                        </div>
                    )}

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
                                            setIsFavourite(false)
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
                                            setIsFavourite(true)
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
            <div className={'box-content block min-h-max w-56 lg:hidden'}>
                <div>
                    <div className={'flex w-[13.5rem] flex-col py-3'}>
                        {product && (
                            <>
                                <img
                                    className={'object-fit h-64 lg:h-72'}
                                    src={product.images[0].url}
                                    alt={product.images[0].name}
                                    width={'full'}
                                    height={'full'}
                                />

                                <div
                                    className={'flex flex-col gap-1 px-1 py-2'}
                                >
                                    <div
                                        className={
                                            'flex flex-row justify-between'
                                        }
                                    >
                                        <div className={'flex flex-row gap-1'}>
                                            <div
                                                className={
                                                    'text-sm font-semibold'
                                                }
                                            >
                                                ${product.price}
                                            </div>
                                            <HiInformationCircle
                                                className={
                                                    'h-6 w-6 text-sm text-gray-500'
                                                }
                                            />
                                        </div>
                                        <div>
                                            <div
                                                className={
                                                    'flex flex-row items-center justify-end gap-0.5 text-gray-400'
                                                }
                                            >
                                                {isFavourite === true ? (
                                                    <>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-6 w-6 text-red-900"
                                                            viewBox="0 0 20 20"
                                                            onClick={() => {
                                                                setIsFavourite(
                                                                    false
                                                                )
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
                                                            className="h-6 w-6"
                                                            fill="none"
                                                            onClick={() => {
                                                                setIsFavourite(
                                                                    true
                                                                )
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
                                    <div className={'text-xs text-gray-500'}>
                                        {product.size}
                                    </div>
                                    <div className={'text-xs text-gray-500'}>
                                        {product.brand}
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ClosetSpotlightItemCard
