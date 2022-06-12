import React from 'react'
import CTA from '../components/home/CTA'
import BasicPageWrapper from '../components/layouts/BasicPageWrapper'
import PopularItems from '../components/Lists/Products/PopularItems'
import ShopByBrand from "../components/home/ShopByBrand";

const Index = () => {
    return (
        <BasicPageWrapper>
            <CTA/>
            <PopularItems/>
            <ShopByBrand/>
        </BasicPageWrapper>
    )
}

export default Index
