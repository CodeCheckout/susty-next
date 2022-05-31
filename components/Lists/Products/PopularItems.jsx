import React, {useEffect, useState} from 'react'
import PopularItemLayout from '../../layouts/ItemRows/PopularItemLayout'
import axios from 'axios'
import PopularItemCard from '../../Cards/Item/PopularItemCard'

const PopularItems = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        axios
            .get('/api/product/fetch-products', {
                params: {
                    productLimit: 10,
                },
            })
            .then((res) => {
                setItems(res.data.products)
            })
    }, [])

    return (
        <PopularItemLayout>
            {items.length > 0 && (
                <>
                    {items.map((item) => (
                        <div key={item.id}>
                            <PopularItemCard
                                src={item.images[0]?.url}
                                alt={item.images[0]?.name}
                                price={item.price}
                                size={item.size}
                                brand={item.brand}
                                favCount={item.favouriteCount}
                            />
                        </div>
                    ))}
                </>
            )}
        </PopularItemLayout>
    )
}

export default PopularItems
