import React, {useState} from 'react';
import {FiStar} from 'react-icons/fi';
import ReviewFromOneCustomer from "./ReviewFromOneCustomer";

const ReviewsStaticData = [{
    id: "a5af69c9-175a-4294-a69c-ae5f20e36e08",
    name: "nicholealecia",
    src: "https://akamai.vgc.no/v2/images/8657e235-ca02-4a19-ae49-2ee7bb27cb2e?fit=crop&format=auto&h=922&w=1265&s=597e46e250a968f5c1970e912197b9a695ddc9da",
    alt: "Reviewer Profile Image",
    feedback: "Perfect condition! Thank you so much! 🤗",
    rate: "3"
}, {
    id: "49a34614-aef5-4aaa-b5bf-0f452d581d5c",
    name: "thewilddayzee",
    src: "https://s3.amazonaws.com/arc-authors/washpost/384dc9f7-aed0-4e22-abfa-43d577e93642.png",
    alt: "Reviewer Profile Image",
    feedback: "Great",
    rate: "4"
}, {
    id: "f0257d65-f94d-4a99-85a7-a0a1d0e2697b",
    name: "alexandrabeeb",
    src: "https://img.jagranjosh.com/images/2022/February/922022/Richest-person-in-Asia.jpg",
    alt: "Reviewer Profile Image",
    feedback: "Amazing seller and fast shipping 11/10 love my sweater!",
    rate: "5"
},{
    id: "e583de6a-aab2-4349-a0b6-280e77639aa5",
    name: "kfloyd5150",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD0Padc1HShFJzPtIjZslgmB3GdUO_3AyfQg&usqp=CAU",
    alt: "Reviewer Profile Image",
    feedback: "Fast Shipping!",
    rate: "4"
},];

const ProfileReviews = ({isSameUser, anyReviews, seller}) => {
    const [reviews, setReviews] = useState(ReviewsStaticData);
    return (
        <>
            {isSameUser === true ? <>
                <div>
                    {anyReviews === true ? <>
                        {reviews.map((review) => (
                            <div key={review.id}>
                                <ReviewFromOneCustomer isSameUser={isSameUser} customer={review} name={review.name} src={review.src} alt={review.alt} feedback={review.feedback} rate={review.rate}/>
                            </div>
                        ))}
                    </> : <>
                        <div className={'flex flex-col items-center gap-5 min-h-screen my-10'}>
                            <FiStar className={'w-24 h-24 text-gray-400'}/>
                            <div className={'font-medium text-2xl'}>No reviews yet</div>
                            <div className={'text-gray-500'}>Collecting reviews takes time, so check back soon</div>
                        </div>
                    </>}
                </div>
            </> : <>
                {anyReviews === true ? <>
                    {reviews.map((review) => (
                        <div key={review.id}>
                            <ReviewFromOneCustomer isSameUser={isSameUser} customer={review} name={review.name} src={review.src} alt={review.alt} feedback={review.feedback} rate={review.rate}/>
                        </div>
                    ))}
                </> : <>
                    <div className={'flex flex-col items-center gap-5 min-h-screen my-10'}>
                        <FiStar className={'w-24 h-24 text-gray-400'}/>
                        <div className={'font-medium text-2xl'}>No reviews yet</div>
                        <div className={'text-gray-500'}>Collecting reviews takes time, so check back soon</div>
                    </div>
                </>}
            </>}
        </>
    );
};

export default ProfileReviews;
