import React from 'react';
import BasicPageWrapper from "../../layouts/BasicPageWrapper";
import {AiOutlineLock} from 'react-icons/ai'
import {FaRegFlag} from 'react-icons/fa'
import Link from "next/link";

const descriptionDetails = [
    {
        id: 1,
        icon: <AiOutlineLock className={`text-susty w-8 h-8`}/>,
        title: 'Shop with peace of mind',
        content: 'As a buyer, you pay a Buyer Protection fee on each transaction when using the "Buy now" button. This helps safeguard your money, adding an extra layer of protection to your purchases and keeping your information secure. The cost is 3–8% of the item price (before postage) plus £0.30–0.80.'
    },
    {
        id: 2,
        icon: <FaRegFlag className={`text-susty w-8 h-8`}/>,
        title: 'Reliable refund policy',
        content: 'Your order is protected when you pay through Susty. You’ll get a refund if your item doesn’t arrive, was damaged in transit, or is significantly not as described. Let us know within 2 days of delivery if something isn’t right. Unless otherwise agreed, the buyer covers the return cost.\n'
    },
];

const YouAreSafeWithUsSection = () => {
    return (
        <BasicPageWrapper>
            <div className={`py-10 text-gray-900 text-3xl sm:text-4xl font-semibold`}>You’re safe with us</div>
            <div className={`flex flex-col lg:flex-row gap-3 items-start`}>
                {descriptionDetails.map((detail) => {
                    return (
                        <div className={`flex flex-col lg:flex-row gap-8 items-start`}>
                            <div className={`p-4 bg-red-50 rounded-full border border-susty`}>{detail.icon}</div>
                            <div className={`flex flex-col gap-3`}>
                                <h3 className={`text-2xl font-semibold`}>{detail.title}</h3>
                                <p className={`text-gray-600 leading-relaxed`}>{detail.content}</p>
                                <div className={`pb-5`}>
                                    <Link href={`/helpcenter`}><a className={`text-susty hover:underline`}>Learn more</a></Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </BasicPageWrapper>
    );
};

export default YouAreSafeWithUsSection;