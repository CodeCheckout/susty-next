import React from 'react'
import CTA from '../components/home/CTA'
import BasicPageWrapper from '../components/layouts/BasicPageWrapper'
import PopularItems from '../components/Lists/Products/PopularItems'
import Header from '../components/common/Header'

const Index = () => {
    return (
        <BasicPageWrapper>
            <Header />
            <CTA />
            <PopularItems />
        </BasicPageWrapper>
    )
}

export default Index
