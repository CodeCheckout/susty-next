import React from 'react'
import {BsShieldFillCheck} from 'react-icons/bs'
import {AiOutlineHeart} from 'react-icons/ai'
import {FaStar} from 'react-icons/fa'
import {HiChevronRight, HiLocationMarker} from 'react-icons/hi'
import {useRouter} from 'next/router'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const SingleProductDetails = ({productDetails, sellerDetails}) => {
    const router = useRouter()

    return (
        <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <div className="bg-white border border-1 shadow-lg overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-3xl leading-6 font-medium text-gray-900">
                        {productDetails.currency}{' '}
                        {parseFloat(productDetails.price).toFixed(2)}
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                        {productDetails.title}
                    </p>
                </div>
                <div className={`flex p-4 pt-2 text-sm`}>
                    <div
                        className={`flex-1 bg-green-200  rounded-full  p-2 h-8 w-8  flex`}
                    >
                        <BsShieldFillCheck
                            className={`text-green-500 h-5 w-5 justify-center relative bottom-0.5`}
                        />
                    </div>
                    <div className={`flex-grow-0 ml-2`}>
                        Our Buyer Protection is added for a fee to every
                        purchase made with the “Buy now” button. Buyer
                        Protection includes our Refund Policy.
                    </div>
                </div>
                <div className="border-t border-gray-200">
                    <dl>
                        <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Brand
                            </dt>
                            <dd className="mt-2 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {productDetails.brand}
                            </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Condition
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {productDetails.condition}
                            </dd>
                        </div>
                        <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Size
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {productDetails.size}
                            </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                About
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {productDetails.description}
                            </dd>
                        </div>
                        <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Color
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                Not Mentioned
                            </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Views
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                23
                            </dd>
                        </div>
                        <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Uploaded
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {new Date(
                                    new Date(Date.now()) -
                                    new Date(productDetails.createdAt)
                                )
                                    .getDate()
                                    .toString()}{' '}
                                Days ago
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
            <div className={`mt-8 grid  gap-2`}>
                <button
                    type="submit"
                    className=" w-full bg-white border border-susty rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-susty hover:text-white hover:bg-susty focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-300"
                >
                    Add to Favourites
                    <AiOutlineHeart className={'h-5 w-5 ml-5'}/>
                </button>
                <button
                    onClick={async () => {
                        await router.push({
                            pathname: '/items/buy',
                            query: {
                                id: productDetails._id,
                            },
                        })
                    }}
                    type="submit"
                    className=" w-full bg-susty border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-300"
                >
                    Buy Now
                </button>
            </div>
            <div className="bg-white border border-1 shadow-lg overflow-hidden sm:rounded-lg mt-5">
                <div className=" p-6 rounded shadow bg-white ">
                    <div className={`flex justify-between`}>
                        <div className="flex px-5 ">
                            <div className="mr-4 flex-shrink-0 self-center">
                                <img
                                    className="w-16 h-16 rounded-full lg:w-20 lg:h-20"
                                    src={sellerDetails.imageUrl}
                                    alt=""
                                />
                            </div>
                            <div className={'self-center'}>
                                <h4 className="text-lg font-bold">
                                    {sellerDetails.name}
                                </h4>
                                <div className="flex items-center xl:col-span-1">
                                    <div className="flex items-center">
                                        {[0, 1, 2, 3, 4].map((rating) => (
                                            <FaStar
                                                key={rating}
                                                className={classNames(
                                                    sellerDetails.rating >
                                                    rating
                                                        ? 'text-yellow-400'
                                                        : 'text-gray-200',
                                                    'h-5 w-5 flex-shrink-0'
                                                )}
                                                aria-hidden="true"
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className={'grid place-items-center cursor-pointer'}
                        >
                            <HiChevronRight
                                className={`h-10 w-10 text-gray-400`}
                            />
                        </div>
                    </div>
                    <div className={`grid place-items-center`}>
                        <div className="mt-2 flex items-center">
                            <HiLocationMarker
                                className={'h-4 w-4 text-gray-300'}
                            />
                            <p className="ml-2 text-sm leading-4 text-gray-500 dark:text-gray-400 sm:ml-5">
                                {sellerDetails.location}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between mt-6">
                        <button
                            className="flex items-center sm:px-9 px-4 py-3 hover:bg-red-400 bg-susty rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-300">
                            <p className="text-sm font-semibold leading-4 text-center text-white">
                                Message
                            </p>
                        </button>
                        <button
                            className="flex items-center sm:px-10 px-6 py-3 bg-red-50 hover:bg-red-200 rounded ml-6 sm:ml-14 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-300">
                            <p className="text-sm font-semibold leading-4 text-center text-red-400 ">
                                Follow
                            </p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProductDetails
