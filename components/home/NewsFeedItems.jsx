import axios from 'axios'
import React, {useEffect, useState} from 'react'
import NewsFeedItemCard from '../Cards/Item/NewsFeedItemCard'

const NewsFeedItems = () => {

    const [products, setProducts] = useState([])
    const [productLimit, setProductLimit] = useState(10)

    useEffect(() => {
        async function getProducts() {
            await axios.get('/api/product/fetch-products', {params: {productLimit}}).then((result) => 
            setProducts(result.data.products))
        }
        getProducts();
    }, [])

    return (
        <div>
            <div className={'text-2xl pt-12 pb-5'}>Newsfeed</div>
            <div
                className={
                    'grid grid-cols-2 grid-rows-5 sm:grid-cols-3 sm:grid-rows-3 md:grid-cols-3 md:grid-rows-3 lg:grid-cols-5 lg:grid-rows-2 gap-3 justify-items-center py-5'
                }
            >
                {products.map((item) => (
                      <>
                        <div key={item.id} 
                        >
                            <NewsFeedItemCard
                                userId = {item.owner}
                                src={item.images[0].url}
                                alt={item.images[0].name}
                                price={item.price}
                                size={item.size}
                                brand={item.brand}
                            />
                        </div>
                    </>
                ))}
            </div>
        </div>
    )
}

export default NewsFeedItems
