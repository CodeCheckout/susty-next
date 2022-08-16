import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {HiPlus} from 'react-icons/hi'
import ClosetSpotlightItems from './ClosetSpotlightItems'
import CommonItems from './CommonItems'

const CompactSection = () => {
    const [sellers, setSellers] = useState([])
    const [items, setItems] = useState([])

    // get all the sellers
    useEffect(() => {
        axios.get('/api/user/fetch-sellers').then((result) => {
            setSellers(result.data.sellers)
        })

        onSeeMoreClick(0)
    }, [])

    const onSeeMoreClick = (number) => {
        axios
            .get('/api/product/fetch-continuos-products', {
                params: {productsFrom: number},
            })
            .then((result) => {
                setItems(result.data.products)
            })
    }

    return (
        <>
            {sellers.map((seller, index) => (
                <div key={seller._id}>
                    <ClosetSpotlightItems seller={seller} />
                    <CommonItems items={items} />
                    {(index + 1) % 3 == 0 && (
                        <div className="flex items-center justify-center">
                            <button
                                className={
                                    'flex items-center gap-1 rounded-md bg-susty px-2.5 py-1.5 text-xs font-semibold text-white'
                                }
                                onClick={() => {
                                    onSeeMoreClick(index + 1)
                                }}
                            >
                                <HiPlus className={'h-4 w-4'} />
                                See more
                            </button>
                        </div>
                    )}
                </div>
            ))}
        </>
    )
}

export default CompactSection
