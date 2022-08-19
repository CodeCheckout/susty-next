import React from 'react';
import { RiHistoryFill } from 'react-icons/ri';

const PaymentHistorySection = () => {
    return (
        <div className={'m-3 bg-white p-4'}>
            <div className=" bg-white text-left ">
                <h1 className="mt-0 mb-4 text-3xl font-bold">
                    Payment history
                </h1>
                <div className='grid justify-center mb-4 mt-8'>
                    <div className='grid justify-center'>
                        <RiHistoryFill size={80} />
                    </div>
                    
                    <p className='text-sm'>You don't have payments yet!</p>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistorySection;
