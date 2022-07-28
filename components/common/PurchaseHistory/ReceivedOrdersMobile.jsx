import React, {useState} from 'react';
import {HiChevronRight} from "react-icons/hi";
import ReceivedOrdersModal from "./ReceivedOrdersModal";

const ReceivedOrdersMobile = ({data}) => {
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
                        Received Orders
                    </h1>
                    <p className="mt-2 text-sm text-gray-700"> A list of all Received Orders. Make sure to send the order!</p>
                </div>
            </div>
            <div className="mt-8">
                <div className="my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg min-w-sm">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:pl-2 "
                                    >
                                        Product Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 "
                                    >
                                        Order Status
                                    </th>

                                    <th scope="col" className="relative px-6 py-3">
                                        <span className="sr-only">Action</span>
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
                                        <td className=" px-3 py-4 text-sm text-gray-500 text-center">
                                            <div className="text-sm text-gray-900">
                                                {item.orderStatus === "Pending" && <span
                                                    className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">Pending</span>}
                                                {item.orderStatus === "On Process" && <span
                                                    className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">On Process</span>}
                                                {item.orderStatus === "On Delivery" && <span
                                                    className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">On Delivery</span>}
                                                {item.orderStatus === "Delivered" && <span
                                                    className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Delivered</span>}
                                                {item.orderStatus === "Cancelled by Seller" && <span
                                                    className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Cancelled by Seller</span>}
                                                {item.orderStatus === "Cancelled by Customer" && <span
                                                    className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Cancelled by Customer</span>}
                                            </div>
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
                                            <ReceivedOrdersModal
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
    );
};

export default ReceivedOrdersMobile;