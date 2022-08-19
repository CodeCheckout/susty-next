import React, { useState } from 'react';

const earningsData = [
    { id: '946c9426-076d-48d0-b665-4171d7c54830', month: 'July' },
    { id: '48967cdc-89e2-45d9-898b-a80fd02224e5', month: 'June' },
    { id: '7e61ccc2-1db4-4d5d-82ee-87a06aeb836d', month: 'May' },
    { id: '618d485d-48f5-49b6-8b80-96a9e34c5893', month: 'April' },
    { id: 'd00a5df7-1d75-4bcf-8759-249548e037de', month: 'March' },
];

const IncomeSection = () => {
    const [earnings, setEarnings] = useState(earningsData);

    return (
        <div className={'m-3 bg-white p-4'}>
            <div className=" bg-white text-left">
                <div className="mb-4 text-xs text-gray-500">Earnings</div>

                {earnings.map((item, idx) => (
                    <>
                        <div className="flex w-full justify-between pl-2">
                            <div>{item.month} 2022 Income Report </div>
                            <button
                                className={
                                    'flex items-center gap-1 rounded-md border border-susty bg-white px-2.5 py-1.5 text-xs font-semibold text-susty'
                                }
                                onClick={() => {}}
                            >
                                Download
                            </button>
                        </div>
                        <hr className="my-3" />
                    </>
                ))}
            </div>
        </div>
    );
};

export default IncomeSection;
