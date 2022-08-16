import React from 'react'
import ClosetSpotlightWrapper from '../layouts/ItemRows/ClosetSpotlightWrapper'
import ClosetSpotlightItemCard from '../Cards/Item/ClosetSpotlightItemCard'

const ClosetSpotlightItems = ({seller}) => {
    return (
        <>
            <ClosetSpotlightWrapper seller={seller} key={seller._id}>
                {seller.products.map((item) => (
                    <div key={item}>
                        <ClosetSpotlightItemCard item={item} />
                    </div>
                ))}
            </ClosetSpotlightWrapper>
        </>
    )
}

export default ClosetSpotlightItems
