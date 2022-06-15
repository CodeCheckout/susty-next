import React from 'react'
import {HiInformationCircle} from 'react-icons/hi'
import {FiRefreshCw} from 'react-icons/fi'
import {motion} from 'framer-motion'

const SellerItemCard = ({src, alt, price, views, favorites}) => {
    return (
        <>
            <div
                className={
                    'box-content w-[10.5rem] sm:w-[16rem] md:w-[13.5rem] lg:w-[17rem] min-h-max'
                }
            >
                <div className={'flex flex-col gap-2'}>
                    <img
                        className={
                            'h-[16.5rem] sm:h-[20rem] md:h-[22rem] lg:h-[26rem] w-[9.5rem] sm:w-[18rem] md:w-[13.5rem] lg:w-[17rem] object-cover'
                        }
                        src={src}
                        alt={alt}
                        width={'full'}
                        height={'full'}
                    />
                </div>
                <div className={'p-3 grid grid-cols-3'}>
                    <div className={'col-start-1 col-end-3'}>
                        <div className={'flex flex-col gap-0.5'}>
                            <div className={'flex flex-row gap-1 items-center'}>
                                <div className={'font-semibold text-md'}>
                                    ${price}
                                </div>
                                <HiInformationCircle
                                    className={
                                        'w-[1.25rem] h-[1.25rem] text-gray-500 text-sm'
                                    }
                                />
                                <FiRefreshCw className={'ml-3 w-3 h-3'} />
                            </div>
                            <div className={'text-gray-500 text-xs'}>
                                {views} views
                            </div>
                            <div className={'text-gray-500 text-xs'}>
                                {favorites} favorites
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4 px-1 max-w-max">
                    <motion.button
                        whileHover={{scale: 1.02}}
                        whileTap={{scale: 0.98}}
                        className={`inline-flex items-center px-14 sm:px-28 py-1.5 min-w-max border hover:border-gray-300 shadow-sm text-base font-medium rounded-md bg-white hover:bg-susty text-susty hover:text-white border-susty focus:text-red-400 focus:border-susty focus:bg-red-50`}
                    >
                        Bump
                    </motion.button>
                </div>
            </div>
        </>
    )
}

export default SellerItemCard
