import React, {useState} from 'react';
import {HiPaperClip} from 'react-icons/hi'


const SingleProductDetails = ({productDetails}) => {
    return (
        <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-3xl leading-6 font-medium text-gray-900">{productDetails.currency} {parseFloat(productDetails.price).toFixed(2)}</h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">{productDetails.title}</p>
                </div>
                <div className="border-t border-gray-200">
                    <dl>
                        <div className="bg-red-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Brand</dt>
                            <dd className="mt-2 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{productDetails.brand}</dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Condition</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{productDetails.condition}</dd>
                        </div>
                        <div className="bg-red-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Size</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{productDetails.size}</dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">About</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {productDetails.description}
                            </dd>
                        </div>
                        <div className="bg-red-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Uploaded</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {new Date(new Date(Date.now()) - new Date(productDetails.createdAt)).getDate().toString()} Days ago

                            </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Attachments</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <ul role="list" className="border border-gray-200 rounded-md divide-y divide-gray-200">
                                    <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                        <div className="w-0 flex-1 flex items-center">
                                            <HiPaperClip className="flex-shrink-0 h-5 w-5 text-gray-400"
                                                         aria-hidden="true"/>
                                            <span
                                                className="ml-2 flex-1 w-0 truncate">resume_back_end_developer.pdf</span>
                                        </div>
                                        <div className="ml-4 flex-shrink-0">
                                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                Download
                                            </a>
                                        </div>
                                    </li>
                                    <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                        <div className="w-0 flex-1 flex items-center">
                                            <HiPaperClip className="flex-shrink-0 h-5 w-5 text-gray-400"
                                                         aria-hidden="true"/>
                                            <span
                                                className="ml-2 flex-1 w-0 truncate">coverletter_back_end_developer.pdf</span>
                                        </div>
                                        <div className="ml-4 flex-shrink-0">
                                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                Download
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default SingleProductDetails;
