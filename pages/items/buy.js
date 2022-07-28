import React from 'react'
import {Disclosure} from '@headlessui/react'
import {useRouter} from 'next/router'
import PaypalButton from '../../components/SellNow/PaypalButton'

const subtotal = '$108.00'
const discount = {code: 'CHEAPSKATE', amount: '$16.00'}
const taxes = '$9.92'
const shipping = '$8.00'
const total = '$141.92'
const products = [
    {
        id: 1,
        name: 'Mountain Mist Artwork Tee',
        href: '#',
        price: '$36.00',
        color: 'Birch',
        size: 'L',
        imageSrc:
            'https://tailwindui.com/img/ecommerce-images/checkout-form-04-product-01.jpg',
        imageAlt:
            'Off-white t-shirt with circular dot illustration on the front of mountain ridges that fade.',
    },
    // More products...
]

const Buy = () => {
    const router = useRouter()

    return (
        <>
            <div className={`h-full w-full`}>
                <div className={`h-full w-full`}>
                    <main className="lg:min-w-full lg:min-h-[80vh] lg:overflow-hidden">
                        <h1 className="sr-only">Checkout</h1>

                        {/* Mobile order summary */}
                        <section
                            aria-labelledby="order-heading"
                            className="bg-gray-50 px-4 py-6 sm:px-6 lg:hidden"
                        >
                            <Disclosure as="div" className="max-w-lg mx-auto">
                                {({open}) => (
                                    <>
                                        <div className="flex items-center justify-between">
                                            <h2
                                                id="order-heading"
                                                className="text-lg font-medium text-gray-900"
                                            >
                                                Your Order
                                            </h2>
                                            <Disclosure.Button className="font-medium text-red-600 hover:text-red-500">
                                                {open ? (
                                                    <span>
                                                        Hide full summary
                                                    </span>
                                                ) : (
                                                    <span>
                                                        Show full summary
                                                    </span>
                                                )}
                                            </Disclosure.Button>
                                        </div>

                                        <Disclosure.Panel>
                                            <ul
                                                role="list"
                                                className="divide-y divide-gray-200 border-b border-gray-200"
                                            >
                                                {products.map((product) => (
                                                    <li
                                                        key={product.id}
                                                        className="flex py-6 space-x-6"
                                                    >
                                                        <img
                                                            src={
                                                                product.imageSrc
                                                            }
                                                            alt={
                                                                product.imageAlt
                                                            }
                                                            className="flex-none w-40 h-40 object-center object-cover bg-gray-200 rounded-md"
                                                        />
                                                        <div className="flex flex-col justify-between space-y-4">
                                                            <div className="text-sm font-medium space-y-1">
                                                                <h3 className="text-gray-900">
                                                                    {
                                                                        product.name
                                                                    }
                                                                </h3>
                                                                <p className="text-gray-900">
                                                                    {
                                                                        product.price
                                                                    }
                                                                </p>
                                                                <p className="text-gray-500">
                                                                    {
                                                                        product.color
                                                                    }
                                                                </p>
                                                                <p className="text-gray-500">
                                                                    {
                                                                        product.size
                                                                    }
                                                                </p>
                                                            </div>
                                                            <div className="flex space-x-4">
                                                                <button
                                                                    type="button"
                                                                    className="text-sm font-medium text-susty hover:text-red-500"
                                                                >
                                                                    Edit
                                                                </button>
                                                                <div className="flex border-l border-gray-300 pl-4">
                                                                    <button
                                                                        type="button"
                                                                        className="text-sm font-medium text-susty hover:text-red-500"
                                                                    >
                                                                        Remove
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>

                                            <form className="mt-10">
                                                <label
                                                    htmlFor="discount-code-mobile"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Discount code
                                                </label>
                                                <div className="flex space-x-4 mt-1">
                                                    <input
                                                        type="text"
                                                        id="discount-code-mobile"
                                                        name="discount-code-mobile"
                                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                                    />
                                                    <button
                                                        type="submit"
                                                        className="bg-gray-200 text-sm font-medium text-gray-600 rounded-md px-4 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-red-500"
                                                    >
                                                        Apply
                                                    </button>
                                                </div>
                                            </form>

                                            <dl className="text-sm font-medium text-gray-500 mt-10 space-y-6">
                                                <div className="flex justify-between">
                                                    <dt>Subtotal</dt>
                                                    <dd className="text-gray-900">
                                                        {subtotal}
                                                    </dd>
                                                </div>
                                                <div className="flex justify-between">
                                                    <dt className="flex">
                                                        Discount
                                                        <span className="ml-2 rounded-full bg-gray-200 text-xs text-gray-600 py-0.5 px-2 tracking-wide">
                                                            {discount.code}
                                                        </span>
                                                    </dt>
                                                    <dd className="text-gray-900">
                                                        -{discount.amount}
                                                    </dd>
                                                </div>
                                                <div className="flex justify-between">
                                                    <dt>Taxes</dt>
                                                    <dd className="text-gray-900">
                                                        {taxes}
                                                    </dd>
                                                </div>
                                                <div className="flex justify-between">
                                                    <dt>Shipping</dt>
                                                    <dd className="text-gray-900">
                                                        {shipping}
                                                    </dd>
                                                </div>
                                            </dl>
                                        </Disclosure.Panel>

                                        <p className="flex items-center justify-between text-sm font-medium text-gray-900 border-t border-gray-200 pt-6 mt-6">
                                            <span className="text-base">
                                                Total
                                            </span>
                                            <span className="text-base">
                                                {total}
                                            </span>
                                        </p>
                                    </>
                                )}
                            </Disclosure>
                        </section>

                        <div className={'lg:grid lg:grid-cols-3 lg:gap-3'}>
                            {/* Checkout form */}
                            <section
                                aria-labelledby="payment-heading"
                                className="flex-auto lg:flex-none lg:col-start-1 lg:col-end-3 overflow-y-auto px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:px-20 lg:pt-0 lg:pb-24"
                            >
                                <h2 id="payment-heading" className="sr-only">
                                    Payment and shipping details
                                </h2>

                                <div className="max-w-lg mx-auto lg:pt-16 -z-50">
                                    <div>
                                        <PaypalButton price={2} />
                                    </div>
                                </div>
                            </section>
                            {/* Order summary */}
                            <div className={'lg:col-start-3 lg:col-end-4  '}>
                                <section
                                    aria-labelledby="summary-heading"
                                    className="hidden fixed bg-gray-50 w-full h-[93vh] max-w-md lg:flex-col lg:flex"
                                >
                                    <h2
                                        id="summary-heading"
                                        className="sr-only"
                                    >
                                        Order summary
                                    </h2>

                                    <ul
                                        role="list"
                                        className="flex-auto overflow-y-auto divide-y divide-gray-200 px-6"
                                    >
                                        {products.map((product) => (
                                            <li
                                                key={product.id}
                                                className="flex py-6 space-x-6"
                                            >
                                                <img
                                                    src={product.imageSrc}
                                                    alt={product.imageAlt}
                                                    className="flex-none w-40 h-40 object-center object-cover bg-gray-200 rounded-md"
                                                />
                                                <div className="flex flex-col justify-between space-y-4">
                                                    <div className="text-sm font-medium space-y-1">
                                                        <h3 className="text-gray-900">
                                                            {product.name}
                                                        </h3>
                                                        <p className="text-gray-900">
                                                            {product.price}
                                                        </p>
                                                        <p className="text-gray-500">
                                                            {product.color}
                                                        </p>
                                                        <p className="text-gray-500">
                                                            {product.size}
                                                        </p>
                                                    </div>
                                                    <div className="flex space-x-4">
                                                        <button
                                                            type="button"
                                                            className="text-sm font-medium text-susty hover:text-red-500"
                                                        >
                                                            Edit
                                                        </button>
                                                        <div className="flex border-l border-gray-300 pl-4">
                                                            <button
                                                                type="button"
                                                                className="text-sm font-medium text-susty hover:text-red-500"
                                                            >
                                                                Remove
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="relative top-0 flex-none bg-gray-50 border-t border-gray-200 p-6">
                                        <form>
                                            <label
                                                htmlFor="discount-code"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Discount code
                                            </label>
                                            <div className="flex space-x-4 mt-1">
                                                <input
                                                    type="text"
                                                    id="discount-code"
                                                    name="discount-code"
                                                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                                />
                                                <button
                                                    type="submit"
                                                    className="bg-gray-200 text-sm font-medium text-gray-600 rounded-md px-4 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-red-500"
                                                >
                                                    Apply
                                                </button>
                                            </div>
                                        </form>

                                        <dl className="text-sm font-medium text-gray-500 mt-10 space-y-6">
                                            <div className="flex justify-between">
                                                <dt>Subtotal</dt>
                                                <dd className="text-gray-900">
                                                    {subtotal}
                                                </dd>
                                            </div>
                                            <div className="flex justify-between">
                                                <dt className="flex">
                                                    Discount
                                                    <span className="ml-2 rounded-full bg-gray-200 text-xs text-gray-600 py-0.5 px-2 tracking-wide">
                                                        {discount.code}
                                                    </span>
                                                </dt>
                                                <dd className="text-gray-900">
                                                    -{discount.amount}
                                                </dd>
                                            </div>
                                            <div className="flex justify-between">
                                                <dt>Taxes</dt>
                                                <dd className="text-gray-900">
                                                    {taxes}
                                                </dd>
                                            </div>
                                            <div className="flex justify-between">
                                                <dt>Shipping</dt>
                                                <dd className="text-gray-900">
                                                    {shipping}
                                                </dd>
                                            </div>
                                            <div className="flex items-center justify-between border-t border-gray-200 text-gray-900 pt-6">
                                                <dt>Total</dt>
                                                <dd className="text-base">
                                                    {total}
                                                </dd>
                                            </div>
                                        </dl>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

export default Buy
