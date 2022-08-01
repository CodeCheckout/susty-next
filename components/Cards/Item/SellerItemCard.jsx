import React, { useEffect, useState } from 'react';
import { HiInformationCircle } from 'react-icons/hi';
import { FiRefreshCw } from 'react-icons/fi';
import { motion } from 'framer-motion';
import axios from 'axios';

const SellerItemCard = ({ views, productId }) => {
    const [itemDetails, setItemDetails] = useState();

    useEffect(() => {
        async function getDetails() {
            await axios
                .get('/api/product/fetch-single-product', {
                    params: { productId: productId },
                })
                .then((result) => {
                    setItemDetails(result.data.product);
                });
        }
        getDetails();
    }, []);

    return (
        <>
            <div
                className={
                    'box-content min-h-max w-[10.5rem] sm:w-[16rem] md:w-[13.5rem] lg:w-[17rem]'
                }
            >
                {itemDetails && (
                    <>
                        <div className={'flex flex-col gap-2'}>
                            {itemDetails.images && (
                                <img
                                    className={
                                        'h-[16.5rem] w-[9.5rem] object-cover sm:h-[20rem] sm:w-[18rem] md:h-[22rem] md:w-[13.5rem] lg:h-[26rem] lg:w-[17rem]'
                                    }
                                    src={itemDetails.images[0].url}
                                    alt={itemDetails.images[0].name}
                                    width={'full'}
                                    height={'full'}
                                />
                            )}
                        </div>
                        <div className={'grid grid-cols-3 p-3'}>
                            <div className={'col-start-1 col-end-3'}>
                                <div className={'flex flex-col gap-0.5'}>
                                    <div
                                        className={
                                            'flex flex-row items-center gap-1'
                                        }
                                    >
                                        <div
                                            className={'text-md font-semibold'}
                                        >
                                            ${itemDetails.price}
                                        </div>
                                        <HiInformationCircle
                                            className={
                                                'h-[1.25rem] w-[1.25rem] text-sm text-gray-500'
                                            }
                                        />
                                        <FiRefreshCw
                                            className={'ml-3 h-3 w-3'}
                                        />
                                    </div>
                                    <div className={'text-xs text-gray-500'}>
                                        {views} views
                                    </div>
                                    <div className={'text-xs text-gray-500'}>
                                        {itemDetails.favouriteCount} favorites
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                <div className="mt-4 max-w-max px-1">
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`inline-flex min-w-max items-center rounded-md border border-susty bg-white px-14 py-1.5 text-base font-medium text-susty shadow-sm hover:border-gray-300 hover:bg-susty hover:text-white focus:border-susty focus:bg-red-50 focus:text-red-400 sm:px-28`}
                    >
                        Bump
                    </motion.button>
                </div>
            </div>
        </>
    );
};

export default SellerItemCard;
