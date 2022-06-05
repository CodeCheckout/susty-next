import React, {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import axios from 'axios'

const View = () => {
    const router = useRouter()
    const {itemId} = router.query

    const [productDetails, setProductDetails] = useState(null)

    useEffect(() => {
        const fetchProducts = async () => {
            axios
                .get(`/api/product/fetch-single-product/`, {
                    params: {
                        productId: itemId,
                    },
                })
                .then((res) => {
                    setProductDetails(res.data.product)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        fetchProducts()
    }, [router.query])

    return <div>{productDetails && <>{JSON.stringify(productDetails)}</>}</div>
}

export default View
