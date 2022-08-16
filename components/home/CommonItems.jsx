import React from 'react';
import CommonItemCard from '../Cards/Item/CommonItemCard';

const CommonItems = ({ items }) => {
    return (
        <div
            className={
                'grid grid-cols-2 justify-items-center gap-3 py-5 sm:grid-cols-3 sm:grid-rows-3 md:grid-cols-3 md:grid-rows-3 lg:grid-cols-5 lg:grid-rows-2'
            }
        >
            {items.map((item) => (
                <div key={item._id}>
                    <CommonItemCard
                        userId={item.owner}
                        src={item.images[0].url}
                        alt={item.images[0].name}
                        price={item.price}
                        size={item.size}
                        brand={item.brand}
                    />
                </div>
            ))}
        </div>
    );
};

export default CommonItems;
