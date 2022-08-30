import axios from 'axios'
import React, {useEffect, useState} from 'react'
import NewsFeedItemCard from '../Cards/Item/NewsFeedItemCard'

const NewsFeedItems = () => {
    const [products, setProducts] = useState([])
    const [productLimit, setProductLimit] = useState(10)

    useEffect(() => {
        async function getProducts() {
            // added to ensure that private route is working or not
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem(
                        'authToken'
                    )}`,
                },
            }

            // just for private router testing only
            await axios
                .get('/api/privateRoute', config)
                .then((result) => console.log(result))
            // end of ensuring

            await axios
                .get('/api/product/fetch-products', {
                    params: {productLimit},
                })
                .then((result) => setProducts(result.data.products))
        }
        getProducts()
    }, [])

    return (
        <div>
            <div className={'pt-12 pb-5 text-2xl'}>Newsfeed</div>
            <div
                className={
                    'grid grid-cols-2 grid-rows-5 justify-items-center gap-3 py-5 sm:grid-cols-3 sm:grid-rows-3 md:grid-cols-3 md:grid-rows-3 lg:grid-cols-5 lg:grid-rows-2'
                }
            >
                {products.map((item) => (
                    <div key={item._id}>
                        <NewsFeedItemCard
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
        </div>
    )
}

export default NewsFeedItems
