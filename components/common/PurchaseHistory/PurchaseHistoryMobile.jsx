import React, {useState} from 'react'
import {HiChevronRight} from 'react-icons/hi'
import PurchaseHistoryModal from './PurchaseHistoryModal'

const historyItems = [
    {
        sellerName: 'Lindsay Walton',
        productTitle: 'A throuser',
        productPrice: 12.99,
        date: '2022/05/04',
    },
    {
        sellerName: 'John Wilston',
        productTitle: 'Nike shoe',
        productPrice: 52.99,
        date: '2022/05/17',
    },
    {
        sellerName: 'Lisa',
        productTitle: 'Hat with bow',
        productPrice: 20,
        date: '2022/07/04',
    },
    {
        sellerName: 'Ann',
        productTitle: 'Top',
        productPrice: 17.5,
        date: '2022/02/02',
    },
    {
        sellerName: 'Peterson',
        productTitle: 'Game controller',
        productPrice: 50.2,
        date: '2022/01/24',
    },
]

const PurchaseHistoryMobile = ({title, description, data}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [modalData, setModalData] = useState({})

    const closeModalHandler = (modalState) => {
        setIsOpen(modalState)
    }

    return (
        <div className="px-4 sm:px-6 lg:px-8 ">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">
                        As a {title}
                    </h1>
                    <p className="mt-2 text-sm text-gray-700">{description}</p>
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
                                            className="px-3 py-3.5  text-left text-sm font-semibold text-gray-900 sm:pl-2 "
                                        >
                                            Product
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 "
                                        >
                                            Price
                                        </th>

                                        <th
                                            scope="col"
                                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 "
                                        >
                                            &nbsp;
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white">
                                    {data.map((item, itemIdx) => (
                                        <tr
                                            key={item.id}
                                            className={
                                                itemIdx % 2 === 0
                                                    ? undefined
                                                    : 'bg-gray-50'
                                            }
                                        >
                                            <td className=" px-3 py-4 text-sm text-gray-500 ">
                                                {item.product}
                                            </td>
                                            <td className=" px-3 py-4 text-sm text-gray-500">
                                                {item.price}
                                            </td>
                                            <td className=" px-3 py-4 text-sm text-gray-500">
                                                <HiChevronRight
                                                    className={
                                                        'w-5 h-5 cursor-pointer'
                                                    }
                                                    onClick={() => {
                                                        setModalData(item)
                                                        setIsOpen(true)
                                                    }}
                                                />
                                                <PurchaseHistoryModal
                                                    isOpen={isOpen}
                                                    setIsOpen={
                                                        closeModalHandler
                                                    }
                                                    item={modalData}
                                                />
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
    )
}

export default PurchaseHistoryMobile
