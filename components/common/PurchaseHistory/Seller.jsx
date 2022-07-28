import React, {useState} from 'react'
import PurchaseHistoryMobile from './PurchaseHistoryMobile'

const historyItems = [
    {
        id: 'e90405f4-79e6-4b6d-9877-abd9df8a1504',
        user: 'Lindsay Walton',
        product: 'A trouser with top',
        price: 12.99,
        date: '2022/05/04',
    },
    {
        id: 'f3315887-6fb5-4e9f-af31-2493dd19d270',
        user: 'John Wilson',
        product: 'Nike shoe',
        price: 52.99,
        date: '2022/05/17',
    },
    {
        id: '70f666b2-accf-4975-9747-7ee41aa4a6c7',
        user: 'Lisa',
        product: 'Hat with bow',
        price: 20,
        date: '2022/07/04',
    },
    {
        id: '96bbcb7a-2346-41f6-b70c-0756ec16de41',
        user: 'Ann',
        product: 'Top',
        price: 17.5,
        date: '2022/02/02',
    },
    {
        id: 'da2d00f3-622f-4526-97de-17c9b3dbcd90',
        user: 'Peterson',
        product: 'Game controller',
        price: 50.2,
        date: '2022/01/24',
    },
]

const Seller = () => {
    const [sampleData, setSampleData] = useState(historyItems)

    return (
        <div className="mt-6 bg-gray-50 p-2">
            {/* mobile view */}
            <div className="block sm:hidden ">
                <PurchaseHistoryMobile
                    title={'seller'}
                    description={
                        'A list of all purchasements of other buyers shown below'
                    }
                    data={sampleData}
                />
            </div>
            {/* desktop view - start */}
            <div className="px-4 sm:px-6 lg:px-8  sm:visible invisible">
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-xl font-semibold text-gray-900">
                            As a seller
                        </h1>
                        <p className="mt-2 text-sm text-gray-700">
                            A list of all purchasements of other buyers shown
                            below
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
                                                Product
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                            >
                                                Price
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                            >
                                                Buyer name
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                            >
                                                Purchase date
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
                                                    {item.product}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                    {item.price}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                    {item.user}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                    {item.date}
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

export default Seller
