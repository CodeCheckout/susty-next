import React, {useState} from 'react'
import ReceivedOrdersMobile from './ReceivedOrdersMobile'

const orderStaticData = [
    {
        orderId: '0e6eab6c-91c7-4f01-adef-2de1cb161c15',
        order_desc:
            'TEST 01TEST 01TEST 01TEST 01TEST 01TEST 01TEST 01TEST 01TEST 01',
        product: 'TEST 01',
        order_price: '1000',
        amount: 1,
        paymentStatus: 'UnPaid',
        orderStatus: 'Cancelled by Customer',
        sellerId: 'd11efd04-650d-4679-9458-6ce8e0f72d35',
        buyerId: 'd11efd04-650d-4679-9458-6ce8e0f72d35',
        purchaseDate: '2022-04-28T13:57:29.000Z',
        createdAt: '2022-04-28T13:57:29.000Z',
        updatedAt: '2022-04-28T13:57:29.000Z',
        isChecked: false,
    },
    {
        orderId: '2d2a0d55-a42f-4028-9e10-c72ffd668f70',
        order_desc: 'a black t shirt that  is black ',
        product: 'Black T shirt',
        order_price: '5.12',
        amount: 1,
        paymentStatus: 'Paid',
        orderStatus: 'Pending',
        sellerId: 'd11efd04-650d-4679-9458-6ce8e0f72d35',
        buyerId: '63c9d7e4-5575-4d7e-bba8-edd84e7d7b2b',
        purchaseDate: '2022-04-18T08:43:40.000Z',
        createdAt: '2022-04-18T08:43:40.000Z',
        updatedAt: '2022-04-18T08:43:40.000Z',
        isChecked: false,
    },
    {
        orderId: '368f8a49-dd0b-4d43-adfc-0a075808499e',
        order_desc: 'black t shirt',
        product: 'Black T shirt',
        order_price: '211',
        amount: 1,
        paymentStatus: 'UnPaid',
        orderStatus: 'Cancelled by Customer',
        sellerId: 'd11efd04-650d-4679-9458-6ce8e0f72d35',
        buyerId: '63c9d7e4-5575-4d7e-bba8-edd84e7d7b2b',
        purchaseDate: '2022-04-26T11:02:11.000Z',
        createdAt: '2022-04-26T11:02:11.000Z',
        updatedAt: '2022-04-26T11:02:11.000Z',
        isChecked: false,
    },
    {
        orderId: '4d450ae1-4305-4624-bf9e-932ff14bc202',
        order_desc: 'a black t shirt that  is black ',
        product: 'Black T shirt',
        order_price: '5.12',
        amount: 1,
        paymentStatus: 'UnPaid',
        orderStatus: 'Cancelled by Customer',
        sellerId: 'd11efd04-650d-4679-9458-6ce8e0f72d35',
        buyerId: '63c9d7e4-5575-4d7e-bba8-edd84e7d7b2b',
        purchaseDate: '2022-04-18T08:32:44.000Z',
        createdAt: '2022-04-18T08:32:44.000Z',
        updatedAt: '2022-04-18T08:32:44.000Z',
        isChecked: false,
    },
    {
        orderId: '8463fde9-a21b-4718-9eff-095ee0ce5739',
        order_desc: 'a black t shirt that  is black ',
        product: 'Black T shirt',
        order_price: '5.12',
        amount: 1,
        paymentStatus: 'UnPaid',
        orderStatus: 'Cancelled by Customer',
        sellerId: 'd11efd04-650d-4679-9458-6ce8e0f72d35',
        buyerId: '63c9d7e4-5575-4d7e-bba8-edd84e7d7b2b',
        purchaseDate: '2022-04-18T08:50:41.000Z',
        createdAt: '2022-04-18T08:50:41.000Z',
        updatedAt: '2022-04-18T08:50:41.000Z',
        isChecked: false,
    },
    {
        orderId: 'eb38dda6-c9aa-4a46-92a0-062950994553',
        order_desc: 'black t shirt',
        product: 'Black T shirt',
        order_price: '211',
        amount: 1,
        paymentStatus: 'UnPaid',
        orderStatus: 'Cancelled by Customer',
        sellerId: 'd11efd04-650d-4679-9458-6ce8e0f72d35',
        buyerId: 'd11efd04-650d-4679-9458-6ce8e0f72d35',
        purchaseDate: '2022-04-28T13:43:44.000Z',
        createdAt: '2022-04-28T13:43:44.000Z',
        updatedAt: '2022-04-28T13:43:44.000Z',
        isChecked: false,
    },
]

const ReceivedOrders = () => {
    const [sampleData, setSampleData] = useState(orderStaticData)

    return (
        <div className="mt-6 bg-gray-50 p-2">
            {/* mobile view */}
            <div className="block sm:hidden ">
                <ReceivedOrdersMobile data={sampleData} />
            </div>

            {/* desktop view - start */}
            <div className="px-4 sm:px-6 lg:px-8 hidden sm:block">
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-xl font-semibold text-gray-900">
                            Received Orders
                        </h1>
                        <p className="mt-2 text-sm text-gray-700">
                            A list of all Received Orders. Make sure to send the
                            order!
                        </p>
                    </div>
                </div>
                <div className="mt-8 flex flex-col">
                    <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-300">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                                            >
                                                Order ID / Buyer ID
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                            >
                                                Order Date
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                            >
                                                Product Name / Order Amount
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                            >
                                                Payment Status
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                            >
                                                Order Status
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white">
                                        {sampleData.map((item, itemIdx) => (
                                            <tr
                                                key={item.id}
                                                className={
                                                    itemIdx % 2 === 0
                                                        ? undefined
                                                        : 'bg-gray-50'
                                                }
                                            >
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                    <div className="flex items-center">
                                                        <div className="ml-4">
                                                            <div className="text-sm font-medium text-gray-900">
                                                                {item.orderId
                                                                    .length > 20
                                                                    ? item.orderId.slice(
                                                                          0,
                                                                          20
                                                                      ) + '...'
                                                                    : item.orderId}
                                                            </div>
                                                            <div className="text-xs text-gray-500">
                                                                {item.buyerId
                                                                    .length > 20
                                                                    ? item.buyerId.slice(
                                                                          0,
                                                                          20
                                                                      ) + '...'
                                                                    : item.buyerId}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                    {item.createdAt.slice(
                                                        0,
                                                        10
                                                    )}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                    <div className="flex items-center">
                                                        <div className="ml-4">
                                                            <div className="inline-flex mr-3 text-sm font-medium text-gray-900">
                                                                {item.product}
                                                            </div>
                                                            <div className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-200 text-gray-500">
                                                                {item.amount}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                    {item.paymentStatus ===
                                                    'Paid' ? (
                                                        <>
                                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                                Paid
                                                            </span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                                                Unpaid
                                                            </span>
                                                        </>
                                                    )}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                    <div className="text-sm text-gray-900">
                                                        {item.orderStatus ===
                                                            'Pending' && (
                                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                                                Pending
                                                            </span>
                                                        )}
                                                        {item.orderStatus ===
                                                            'On Process' && (
                                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                                                On Process
                                                            </span>
                                                        )}
                                                        {item.orderStatus ===
                                                            'On Delivery' && (
                                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                                                                On Delivery
                                                            </span>
                                                        )}
                                                        {item.orderStatus ===
                                                            'Delivered' && (
                                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                                Delivered
                                                            </span>
                                                        )}
                                                        {item.orderStatus ===
                                                            'Cancelled by Seller' && (
                                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                                                Cancelled by
                                                                Seller
                                                            </span>
                                                        )}
                                                        {item.orderStatus ===
                                                            'Cancelled by Customer' && (
                                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                                                Cancelled by
                                                                Customer
                                                            </span>
                                                        )}
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* desktop view - end */}
        </div>
    )
}

export default ReceivedOrders
