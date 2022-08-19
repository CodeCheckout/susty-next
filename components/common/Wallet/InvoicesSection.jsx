import React from 'react';
import { RiHistoryFill } from 'react-icons/ri';

const InvoicesSection = () => {
    return (
        <div className={'m-3 bg-white p-4'}>
            <div className=" bg-white text-left">
                <h1 className="mt-0 mb-4 text-3xl font-bold">Invoices</h1>

                <div className="mb-4 mt-8 grid justify-center">
                    <div className="grid justify-center">
                        <RiHistoryFill size={80} />
                    </div>

                    <p className="text-sm">You don't have invoices yet!</p>
                </div>
            </div>
        </div>
    );
};

export default InvoicesSection;
