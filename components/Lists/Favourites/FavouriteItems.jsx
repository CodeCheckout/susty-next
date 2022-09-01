import React, {useEffect, useState} from 'react'
import FavouriteItemCard from '../../Cards/Item/FavouriteItemCard'
import axios from 'axios'
import {FiHeart} from 'react-icons/fi'

const FavouriteItems = () => {
    const [items, setItems] = useState([])
    const [userId, setUserId] = useState('')

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const user = JSON.parse(localStorage.getItem('susty'))
            setUserId(user._id)
        }
    }, [])

    useEffect(() => {
        const fetchFavProducts = async () => {
            await axios
                .get('/api/favourites/fetch-favourites-product-list', {
                    params: {userId: userId},
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
        <div className="m-auto max-w-7xl">
            <div className={'pt-16 pb-5 ml-16 text-2xl'}>Favourited Items</div>

            {items.length > 0 ? (
                <div
                    className={
                        'grid grid-cols-2 grid-rows-5 justify-items-center gap-3 py-5 sm:grid-cols-3 sm:grid-rows-3 md:grid-cols-3 md:grid-rows-3 lg:grid-cols-5 lg:grid-rows-2'
                    }
                >
                    {items.map((item) => (
                        <div key={item}>
                            <FavouriteItemCard id={item} />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="h-screen">
                    <div className={'my-10 flex flex-col items-center gap-5'}>
                        <FiHeart className={'h-24 w-24 text-gray-400'} />
                        <div className={'text-2xl font-medium'}>
                            No favourite items yet
                        </div>
                        <div className={'text-gray-500'}>
                            Add favourite items to view
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default FavouriteItems
