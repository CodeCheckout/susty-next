import React, {useEffect, useState} from 'react'
import {HiInformationCircle} from 'react-icons/hi'
import axios from 'axios'
import {useRouter} from 'next/router'

const FavouriteItemCard = ({id}) => {
    //TODO Is single product receive an array or object
    const [singleProduct, setSingleProduct] = useState({})
    const [isFavourite, setIsFavourite] = useState(false)

    const router = useRouter()

    useEffect(() => {
        const fetchSingleFavProduct = async () => {
            await axios
                .get('/api/product/fetch-single-product', {
                    params: {productId: id},
                })
                .then((results) => {
                    setSingleProduct(results.data.product)
                })
                .catch((err) => {
                    console.log(err)
                })
        }

        fetchSingleFavProduct()
    }, [])

    return (
        <>
            {singleProduct && (
                <div
                    onClick={async () => {
                        await router.push({
                            pathname: '/items/view/',
                            query: {
                                itemId: id,
                            },
                        })
                    }}
                    className={
                        'box-content w-[10.5rem] sm:w-[18rem] md:w-[13.5rem] lg:w-[14.5rem] min-h-max'
                    }
                >
                    {singleProduct.images && (
                        <div>
                            <img
                                className={
                                    'h-[16.5rem] sm:h-[18rem] md:h-[22rem] lg:h-[22rem] w-[10.5rem] sm:w-[18rem] md:w-[13.5rem] lg:w-[14.5rem] object-cover'
                                }
                                src={singleProduct.images[0].url}
                                alt={singleProduct.images[0].name}
                                width={'full'}
                                height={'full'}
                            />
                        </div>
                    )}
                    <div className={'p-3 grid grid-cols-3'}>
                        <div className={'col-start-1 col-end-3'}>
                            <div className={'flex flex-col gap-0.5'}>
                                <div className={'flex flex-row gap-1'}>
                                    <div className={'font-semibold text-sm'}>
                                        ${singleProduct.price}
                                    </div>
                                    <HiInformationCircle
                                        className={
                                            'w-[1.25rem] h-[1.25rem] text-gray-500 text-sm'
                                        }
                                    />
                                </div>
                                <div className={'text-gray-500 text-xs'}>
                                    {singleProduct.size}
                                </div>
                                <div className={'text-gray-500 text-xs'}>
                                    {singleProduct.brand}
                                </div>
                            </div>
                        </div>
                        <div className={'col-start-3 col-end-4'}>
                            <div
                                className={
                                    'flex flex-row justify-end items-center gap-0.5 text-gray-400'
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
                                                'text-gray-500 font-medium text-sm'
                                            }
                                        >
                                            {singleProduct.favouriteCount + 1}
                                        </span>
                                    </>
                                ) : (
                                    <>
                                        <span
                                            className={
                                                'text-gray-500 font-medium text-sm'
                                            }
                                        >
                                            {singleProduct.favouriteCount}
                                        </span>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default FavouriteItemCard
