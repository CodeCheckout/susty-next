import React, {useEffect, useState} from 'react'
import PopularItemLayout from '../../layouts/ItemRows/PopularItemLayout'
import axios from 'axios'
import PopularItemCard from '../../Cards/Item/PopularItemCard'
import Link from "next/link";

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
                    {items.slice(0,5).map((item) => (
                        <Link href={'/items/view'} key={item._id}>
                            <PopularItemCard
                                id={item._id}
                                src={item.images[0]?.url}
                                alt={item.images[0]?.name}
                                price={item.price}
                                size={item.size}
                                brand={item.brand}
                                favCount={item.favouriteCount}
                            />
                        </Link>
                    ))}
                </>
            )}
        </PopularItemLayout>
    )
}

export default PopularItems
