import React from 'react'
import CTA from '../components/home/CTA'
import BasicPageWrapper from '../components/layouts/BasicPageWrapper'
import PopularItems from '../components/Lists/Products/PopularItems'

const Index = () => {
    return (
        <BasicPageWrapper>
            <CTA />
            <PopularItems />
        </BasicPageWrapper>
    )
}

export default Index
