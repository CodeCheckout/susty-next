import React, {useEffect, useState} from 'react'
import {FiStar} from 'react-icons/fi'
import ReviewFromOneCustomer from './ReviewFromOneCustomer'

const ProfileReviews = ({isSameUser, anyReviews, setAnyReviews, seller}) => {
    const [reviewData, setReviewData] = useState(seller.reviews)

    useEffect(() => {
        if (reviewData.length > 0) {
            setAnyReviews(true)
        }
    }, [])

    return (
        <>
            {isSameUser === true ? (
                <>
                    <div>
                        {anyReviews === true ? (
                            <>
                                {reviewData.map((review) => (
                                    <div key={review._id}>
                                        <ReviewFromOneCustomer
                                            isSameUser={isSameUser}
                                            customer={review}
                                        />
                                    </div>
                                ))}
                            </>
                        ) : (
                            <>
                                <div
                                    className={
                                        'my-10 flex min-h-screen flex-col items-center gap-5'
                                    }
                                >
                                    <FiStar
                                        className={'h-24 w-24 text-gray-400'}
                                    />
                                    <div className={'text-2xl font-medium'}>
                                        No reviews yet
                                    </div>
                                    <div className={'text-gray-500'}>
                                        Collecting reviews takes time, so check
                                        back soon
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </>
            ) : (
                <>
                    {anyReviews === true ? (
                        <>
                            {reviewData.map((review) => (
                                <div key={review._id}>
                                    <ReviewFromOneCustomer
                                        isSameUser={isSameUser}
                                        customer={review}
                                    />
                                </div>
                            ))}
                        </>
                    ) : (
                        <>
                            <div
                                className={
                                    'my-10 flex min-h-screen flex-col items-center gap-5'
                                }
                            >
                                <FiStar className={'h-24 w-24 text-gray-400'} />
                                <div className={'text-2xl font-medium'}>
                                    No reviews yet
                                </div>
                                <div className={'text-gray-500'}>
                                    Collecting reviews takes time, so check back
                                    soon
                                </div>
                            </div>
                        </>
                    )}
                </>
            )}
        </>
    )
}

export default ProfileReviews
