import React, {useEffect, useRef, useState} from 'react'
import axios from 'axios'
import {useRouter} from 'next/router'
import PayPalButton from '../../../components/SellNow/PaypalButton'

const singleProductPage = () => {
    const [product, setProduct] = useState({
        _id: '',
        brand: '',
        condition: '',
        colour: '',
        location: '',
        paymentOption: '',
        views: '',
        uploaded: '',
        images: [],
        description: 'product description',
        long_description: 'long description',
    })

    const router = useRouter()
    const {single} = router.query

    const maxScrollWidth = useRef(0)
    const [currentIndex, setCurrentIndex] = useState(0)
    const carousel = useRef(null)

    const movePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevState) => prevState - 1)
        }
    }

    const moveNext = () => {
        if (
            carousel.current !== null &&
            carousel.current.offsetWidth * currentIndex <=
                maxScrollWidth.current
        ) {
            setCurrentIndex((prevState) => prevState + 1)
        }
    }

    const isDisabled = (direction) => {
        if (direction === 'prev') {
            return currentIndex <= 0
        }

        if (direction === 'next' && carousel.current !== null) {
            return (
                carousel.current.offsetWidth * currentIndex >=
                maxScrollWidth.current
            )
        }

        return false
    }

    useEffect(() => {
        if (carousel !== null && carousel.current !== null) {
            carousel.current.scrollLeft =
                carousel.current.offsetWidth * currentIndex
        }
    }, [currentIndex])

    useEffect(() => {
        maxScrollWidth.current = carousel.current
            ? carousel.current.scrollWidth - carousel.current.offsetWidth
            : 0
    }, [])

    useEffect(() => {
        const fetchProducts = async () => {
            axios
                .get(`/api/product/fetch-single-product/`, {
                    params: {
                        productId: single,
                    },
                })
                .then((res) => {
                    // setProduct(res.data.product)

                    setProduct(res.data.product)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        if (router.query.single) {
            fetchProducts()
        }
    }, [router.query])

    return (
        <div className={'px-60'}>
            {product._id !== '' && (
                <>
                    <>
                        <div className="grid grid-cols-5 gap-4">
                            {/* left side details */}
                            <div className="col-span-4 border">
                                {/* Product Image set */}

                                <section className="overflow-hidden text-gray-700">
                                    <div className="container px-5 py-2 mx-auto">
                                        {/** {product.images.map((image, index) => (*/}

                                        <div className="carousel mx-auto">
                                            <div className="relative overflow-hidden">
                                                <div className="flex justify-between absolute top left w-full h-full">
                                                    <button
                                                        onClick={movePrev}
                                                        className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                                                        disabled={isDisabled(
                                                            'prev'
                                                        )}
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-12 w-20 -ml-5"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                            strokeWidth={2}
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M15 19l-7-7 7-7"
                                                            />
                                                        </svg>
                                                        <span className="sr-only">
                                                            Prev
                                                        </span>
                                                    </button>
                                                    <button
                                                        onClick={moveNext}
                                                        className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                                                        disabled={isDisabled(
                                                            'next'
                                                        )}
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-12 w-20 -ml-5"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                            strokeWidth={2}
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M9 5l7 7-7 7"
                                                            />
                                                        </svg>
                                                        <span className="sr-only">
                                                            Next
                                                        </span>
                                                    </button>
                                                </div>
                                                <div
                                                    ref={carousel}
                                                    className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
                                                >
                                                    {product.images.map(
                                                        (resource, index) => {
                                                            return (
                                                                <div
                                                                    key={index}
                                                                    className="carousel-item text-center relative w-96 h-96 snap-start"
                                                                >
                                                                    <a
                                                                        // href={resource.link}
                                                                        className="h-full w-96 aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                                                                        style={{
                                                                            backgroundImage: `url(${
                                                                                resource.url ||
                                                                                ''
                                                                            })`,
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                resource.url ||
                                                                                ''
                                                                            }
                                                                            className="w-full aspect-square hidden"
                                                                            alt={
                                                                                resource.name
                                                                            }
                                                                        />
                                                                    </a>
                                                                    <a
                                                                        // href={resource.link}
                                                                        className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-blue-800/75 z-10"
                                                                    ></a>
                                                                </div>
                                                            )
                                                        }
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        {/**))} */}
                                    </div>
                                </section>

                                {/* End Product Image set */}
                                {/* Navigation and report  */}
                                <div className="">
                                    <p className="py-5 pl-2 font-xs">
                                        Home / Women / Clothes / Jumpers &
                                        sweaters / Hoodies & sweatshirts / Bebe
                                        Hoodies & sweatshirts
                                    </p>
                                </div>
                                {/* End Navigation and report  */}
                                {/* Members Product  */}
                                <div className="">
                                    <div className="grid grid-cols-1 divide-y divide-gray-900 flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row w-full">
                                        <div>
                                            <a
                                                href="#"
                                                className="flex flex-col items-center bg-white   shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 bg-white"
                                            >
                                                <div className="flex flex-col justify-between p-4 leading-normal">
                                                    <h5 className="mb-2 mt-1 text-xl font-bold tracking-tight text-gray-900 ">
                                                        Member's items (8)
                                                    </h5>
                                                </div>
                                            </a>
                                        </div>
                                        <div>
                                            <a
                                                href="#"
                                                className="flex flex-col items-center bg-white   shadow-md md:flex-row  hover:bg-gray-100 dark:border-gray-700 bg-white"
                                            >
                                                <div className="flex flex-col justify-between p-4 leading-normal">
                                                    <button
                                                        type="button"
                                                        className="relative inline-flex items-center w-full px-1 py-1 text-sm   border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                                                    >
                                                        <div className="ml-1">
                                                            Shop bundles
                                                        </div>
                                                    </button>

                                                    <button
                                                        type="button"
                                                        className="relative inline-flex items-center w-full px-1 py-1 text-sm   border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                                                    >
                                                        <div className="ml-1">
                                                            Save on shipping
                                                        </div>
                                                    </button>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {/* End Members Product  */}
                            </div>
                            {/* right side details */}
                            <div className="border ">
                                {/* Side profile details */}
                                <div className="p-4  bg-white shadow-md bg-white">
                                    <div className="space-y-2 " action="#">
                                        <h5 className="text-3xl font-medium text-gray-900">
                                            ${product.price}
                                        </h5>
                                        <div className="grid grid-cols-5">
                                            <div className="pt-10">
                                                <div className="bg-green-300 rounded-full h-8 w-8 pl-1.5 pt-1.5">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-5 w-5 text-green-600"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="col-span-4">
                                                <p className="text-sm">
                                                    Our Buyer Protection is
                                                    added for a fee to every
                                                    purchase made using the “Buy
                                                    now” button. Buyer
                                                    Protection includes our
                                                    Refund Policy.
                                                </p>
                                            </div>
                                        </div>
                                        <hr className="border-b-1 border-gray-400 my-1 mx-full" />
                                        <p className="text-sm">
                                            Buyer Protection fee $0.70 + 5% of
                                            the item’s price
                                        </p>
                                        <hr className="border-b-1 border-gray-400 my-1 mx-full" />
                                        <div className="text-xs">
                                            <div className="grid grid-cols-2 gap-2">
                                                <div className="...">Brand</div>
                                                <div className="">
                                                    {product.brand}
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-2 gap-2">
                                                <div className="...">SIZE</div>
                                                <div className="">
                                                    {product.size}
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-2 gap-2">
                                                <div className="...">
                                                    CONDITION
                                                </div>
                                                <div className="...">
                                                    {product.condition}
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-2 gap-2">
                                                <div className="...">
                                                    COLOUR
                                                </div>
                                                <div className="...">
                                                    {product.colour}
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-2 gap-2">
                                                <div className="...">
                                                    PAYMENT OPTIONS
                                                </div>
                                                <div className="...">
                                                    {product.paymentOption}
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-2 gap-2">
                                                <div className="...">
                                                    LOCATION
                                                </div>
                                                <div className="...">
                                                    {product.location}
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-2 gap-2">
                                                <div className="...">VIEWS</div>
                                                <div className="...">
                                                    {product.views}
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-2 gap-2">
                                                <div className="...">
                                                    UPLOADED
                                                </div>
                                                <div className="">
                                                    {product.uploaded}
                                                </div>
                                            </div>
                                        </div>

                                        <hr className="border-b-1 border-gray-400 my-1 mx-full" />

                                        <h3 className="text-base font-medium text-gray-900 dark:text-gray-700">
                                            {product.description}
                                        </h3>
                                        <p className="text-sm font-medium text-gray-900 text-gray-500">
                                            {product.long_description}
                                        </p>
                                        <div className="flex flex-col space-y-2">
                                            <button
                                                type="submit"
                                                className="w-full bg-transparent  text-susty font-semibold hover:text-white py-2 px-4 border border-susty hover:border-transparent rounded"
                                            >
                                                Message seller
                                            </button>
                                            <PayPalButton
                                                price={product.price}
                                            />
                                            <button
                                                type="submit"
                                                className="w-full bg-transparent  text-susty font-semibold hover:text-white py-2 px-4 border border-susty hover:border-transparent rounded"
                                            >
                                                Remove from favorites
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* Side profile details */}

                                {/*Profile card */}

                                <div className="mt-8 grid grid-cols-1 divide-y divide-gray-900 flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row ">
                                    <div>
                                        <a
                                            href="#"
                                            className="flex flex-col items-center bg-white   shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 bg-white"
                                        >
                                            <img
                                                className="mb-3 ml-3 mt-1 w-14 h-14 rounded-full shadow-lg"
                                                src="https://picsum.photos/200"
                                                alt="Bonnie image"
                                            />
                                            <div className="flex flex-col justify-between p-4 leading-normal">
                                                <h5 className="mb-2 mt-1 text-xl font-bold tracking-tight text-gray-900 ">
                                                    User Name
                                                </h5>
                                                <p className="mb-3 font-normal text-gray-700 text-gray-400">
                                                    No views yet.
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                    <div>
                                        <a
                                            href="#"
                                            className="flex flex-col items-center bg-white   shadow-md md:flex-row  hover:bg-gray-100 dark:border-gray-700 bg-white"
                                        >
                                            <div className="flex flex-col justify-between p-4 leading-normal">
                                                <button
                                                    type="button"
                                                    className="relative inline-flex items-center w-full px-1 py-1 text-sm   border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-6 w-6"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                        />
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                        />
                                                    </svg>
                                                    <div className="ml-1">
                                                        NEW YORK, NY, United
                                                        Ststes.
                                                    </div>
                                                </button>

                                                <button
                                                    type="button"
                                                    className="relative inline-flex items-center w-full px-1 py-1 text-sm   border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-6 w-6"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                        />
                                                    </svg>
                                                    <div className="ml-1">
                                                        Last seen 6 minutes ago.
                                                    </div>
                                                </button>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                {/* Profile card */}
                            </div>
                        </div>
                    </>
                </>
            )}
        </div>
    )
}

export default singleProductPage
