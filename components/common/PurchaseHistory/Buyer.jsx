import React, {useState} from 'react';
import PurchaseHistoryMobile from "./PurchaseHistoryMobile";

const historyItems = [
    {
        id: "e5b78957-150e-48f6-bcb2-e2cc38e90253",
        user: "Lindsay Walton",
        product: "A trouser",
        price: 12.99,
        date: "2022/05/04",
    },
    {
        id: "a716b9f1-8682-459a-b293-53a73e2e6911",
        user: "John Wilson",
        product: "Nike shoe",
        price: 52.99,
        date: "2022/05/17",
    },
    {
        id: "c20e1699-03c8-47fc-8456-cbdc61f451ad",
        user: "Lisa",
        product: "Hat with bow",
        price: 20,
        date: "2022/07/04",
    },
    {
        id: "42771acc-6da8-4a5c-8173-e7177046b11d",
        user: "Ann",
        product: "Top",
        price: 17.5,
        date: "2022/02/02",
    },
    {
        id: "b1038e62-d777-4e09-ba60-49cce1c39a12",
        user: "Peterson",
        product: "Game controller",
        price: 50.2,
        date: "2022/01/24",
    },
];

const Buyer = () => {
    const [sampleData, setSampleData] = useState(historyItems)

    return (
        <div className="mt-6 bg-gray-50 p-2">

            {/* mobile view */}
            <div className="block sm:hidden ">
                <PurchaseHistoryMobile title = {"buyer"} description = {"A list of all purchasements of your account"} data = {sampleData}/>
            </div>

            {/* desktop view - start */}
            <div className="px-4 sm:px-6 lg:px-8  sm:visible invisible">
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-xl font-semibold text-gray-900">As a buyer</h1>
                        <p className="mt-2 text-sm text-gray-700">
                            A list of all purchasements of your account
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
                                            Seller
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
                                            className={itemIdx % 2 === 0 ? undefined : "bg-gray-50"}
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
    );
};

export default Buyer;