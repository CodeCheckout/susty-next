import React from 'react'
import CTA from '../components/home/CTA'
import BasicPageWrapper from '../components/layouts/BasicPageWrapper'
import PopularItems from '../components/Lists/Products/PopularItems'
import ShopByBrand from '../components/home/ShopByBrand'
import SuggestedSearches from "../components/home/SuggestedSearches";

const Index = () => {
    return (
        <BasicPageWrapper>
            <CTA />
            <PopularItems />
            <ShopByBrand />
            <SuggestedSearches/>
        </BasicPageWrapper>
    )
}

export default Index
