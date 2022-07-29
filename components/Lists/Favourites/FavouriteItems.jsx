import React, {useEffect, useState} from 'react'
import FavouriteItemCard from '../../Cards/Item/FavouriteItemCard'
import axios from 'axios'

const FavouriteItems = () => {
    const [items, setItems] = useState([])

    //TODO check how to get the current user id - localstorage.getitem()
    useEffect(() => {
        const fetchFavProducts = async () => {
            await axios
                .get('/api/favourites/fetch-favourites-product-list', {
                    params: {userId: '6295a5df23a7b8fc7496408c'},
                })
                .then((result) => {
                    setTimeout(() => setItems(result.data.favourites), 1000)
                })
                .then((result) => {
                    if (!result.data.favourites) {
                        return null
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        }

        fetchFavProducts()
    }, [])

    return (
        <div className="max-w-7xl m-auto">
            <div className={'text-2xl pt-16 pb-5 pl-3'}>Favourited Items</div>
            <div
                className={
                    'grid grid-cols-2 grid-rows-5 sm:grid-cols-3 sm:grid-rows-3 md:grid-cols-3 md:grid-rows-3 lg:grid-cols-5 lg:grid-rows-2 gap-3 justify-items-center py-5'
                }
            >
                {items.map((item) => (
                    <div key={item}>
                        <FavouriteItemCard id={item} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FavouriteItems
