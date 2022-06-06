import React, {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import axios from 'axios'
import ProductCarousel from '../../components/Cards/Carousels/ProductCarousel'
import SingleProductDetails from '../../components/details/SingleProductDetails'
import Breadcrumb from '../../components/common/Breadcrumb'

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

    return (
        <div>
            {productDetails && (
                <>
                    <div className="bg-white">
                        <div className="max-w-2xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
                            <Breadcrumb
                                pagePathArray={[
                                    productDetails.mainCategory,
                                    productDetails.subCategory1,
                                    productDetails.subCategory2,
                                ]}
                            />
                            <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
                                <ProductCarousel
                                    productImageArray={productDetails.images}
                                />
                                <SingleProductDetails
                                    productDetails={productDetails}
                                />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default View
