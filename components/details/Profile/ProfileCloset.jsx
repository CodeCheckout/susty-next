import React from 'react'
import {TbArrowBigUpLine} from 'react-icons/tb'
import {BiChevronRight} from 'react-icons/bi'
import SellerItems from '../../Lists/Seller/SellerItems'

const ProfileCloset = ({userId, isSameUser, percentage}) => {
    return (
        <>
            <div className={'border border-gray-100 hover:bg-gray-50'}>
                {isSameUser === true ? (
                    <>
                        <div
                            className={
                                'flex flex-row items-center justify-between p-3'
                            }
                        >
                            <div className={'flex flex-row items-center gap-5'}>
                                <div
                                    className={
                                        'rounded-full bg-green-200 px-3 py-3'
                                    }
                                >
                                    <TbArrowBigUpLine
                                        className={'h-8 w-8 text-green-900'}
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
                                className={'h-8 w-8 text-gray-400'}
                            />
                        </div>
                    </>
                ) : (
                    <>
                        <div
                            className={
                                'flex flex-row items-center justify-between p-3'
                            }
                        >
                            <div className={'flex flex-col'}>
                                <p className={'font-medium'}>Shop Bundles</p>
                                <div className={'font-medium text-gray-500'}>
                                    Get up to {percentage} off
                                </div>
                            </div>
                            <BiChevronRight
                                className={'h-8 w-8 text-gray-400'}
                            />
                        </div>
                    </>
                )}
            </div>
            <div className={'px-2 pt-8 pb-6 md:px-0'}>
                <SellerItems userId={userId} isSameUser={isSameUser} />
            </div>
        </>
    )
}

export default ProfileCloset
