import React from 'react'
import {TbArrowBigUpLine} from 'react-icons/tb'
import {BiChevronRight} from 'react-icons/bi'
import SellerItems from '../../Lists/Seller/SellerItems'

const ProfileCloset = ({isSameUser, percentage}) => {
    return (
        <>
            <div className={'border border-gray-100 hover:bg-gray-50'}>
                {isSameUser === true ? (
                    <>
                        <div
                            className={
                                'flex flex-row justify-between items-center p-3'
                            }
                        >
                            <div className={'flex flex-row gap-5 items-center'}>
                                <div
                                    className={
                                        'px-3 py-3 bg-green-200 rounded-full'
                                    }
                                >
                                    <TbArrowBigUpLine
                                        className={'w-8 h-8 text-green-900'}
                                    />
                                </div>
                                <div className={'flex flex-col'}>
                                    <p className={'font-medium'}>
                                        Bump your items
                                    </p>
                                    <div
                                        className={'font-medium text-gray-500'}
                                    >
                                        Increase sales now
                                    </div>
                                </div>
                            </div>
                            <BiChevronRight
                                className={'w-8 h-8 text-gray-400'}
                            />
                        </div>
                    </>
                ) : (
                    <>
                        <div
                            className={
                                'flex flex-row justify-between items-center p-3'
                            }
                        >
                            <div className={'flex flex-col'}>
                                <p className={'font-medium'}>Shop Bundles</p>
                                <div className={'font-medium text-gray-500'}>
                                    Get up to {percentage} off
                                </div>
                            </div>
                            <BiChevronRight
                                className={'w-8 h-8 text-gray-400'}
                            />
                        </div>
                    </>
                )}
            </div>
            <div className={'px-2 md:px-0 pt-8 pb-6'}>
                <SellerItems isSameUser={isSameUser} />
            </div>
        </>
    )
}

export default ProfileCloset
