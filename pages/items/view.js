import React, {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import axios from 'axios'
import ProductCarousel from '../../components/Cards/Carousels/ProductCarousel'
import SingleProductDetails from '../../components/details/SingleProductDetails'
import Breadcrumb from '../../components/common/Breadcrumb'

const seller = {
    name: 'Leslie Alexander',
    rating: 3.5,
    imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    location: 'New York, NY',
}

const View = () => {
    const router = useRouter()
    const {itemId} = router.query

    const [productDetails, setProductDetails] = useState(null)
    const [sellerDetails, setSellerDetails] = useState(seller)

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
                                    sellerDetails={sellerDetails}
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
