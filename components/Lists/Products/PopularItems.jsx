import React, {useEffect, useState} from 'react'
import PopularItemWrapper from "../../layouts/ItemRows/PopularItemWrapper";
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
        <PopularItemWrapper>
            {items.length > 0 && (
                <>
                    {items.slice(0, 5).map((item) => (
                        <div key={item._id}>
                            <PopularItemCard
                                id={item._id}
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
        </PopularItemWrapper>
    )
}

export default PopularItems
