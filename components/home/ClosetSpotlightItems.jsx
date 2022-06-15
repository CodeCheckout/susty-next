import React, {useState} from 'react'
import ClosetSpotlightWrapper from '../layouts/ItemRows/ClosetSpotlightWrapper'
import ClosetSpotlightItemCard from '../Cards/Item/ClosetSpotlightItemCard'

const itemsStaticData = [
    {
        id: 1,
        src: 'https://cdn.shopify.com/s/files/1/0059/5879/5337/products/handknitted-butterfly-jacket-by-hanne-falkenberg-design-andet-hanne-falkenberg-kit-6-m-992013_620x.jpg?v=1631370781',
        alt: 'frock picture',
        price: '5.00',
        size: '12/L',
        brand: 'Shein',
    },
    {
        id: 2,
        src: 'https://images.pexels.com/photos/19090/pexels-photo.jpg?cs=srgb&dl=pexels-web-donut-19090.jpg&fm=jpg',
        alt: 'frock picture',
        price: '5.00',
        size: '24/3X',
        brand: 'Torrid',
    },
    {
        id: 3,
        src: 'https://ae01.alicdn.com/kf/Haab8396bd3694516ac70e692c73f29762/Summer-Dress-For-Girls-Lemon-Print-Sleeveless-Strap-Princess-Dresses-Outfits-Baby-Girl-Clothes-Casual-Vocation.jpg',
        alt: 'frock picture',
        price: '5.00',
        size: '24/L',
        brand: 'Shein',
    },
    {
        id: 4,
        src: 'https://www.beverlystreet.lk/media/catalog/product/cache/1/small_image/320x/040ec09b1e35df139433887a97daa66f/4/7/4767.jpg',
        alt: 'frock picture',
        price: '5.00',
        size: '12/L',
        brand: 'Shein',
    },
    {
        id: 5,
        src: 'https://images.herzindagi.info/image/2021/Mar/Are-slippers-good-for-your-feet_g.jpg',
        alt: 'frock picture',
        price: '5.00',
        size: '2/XS',
        brand: 'Shein',
    },
]

const ClosetSpotlightItems = () => {
    const [items, setItems] = useState(itemsStaticData)

    return (
        <ClosetSpotlightWrapper>
            {items.map((item) => (
                <div key={item.id}>
                    <ClosetSpotlightItemCard
                        src={item.src}
                        alt={item.alt}
                        price={item.price}
                        size={item.size}
                        brand={item.brand}
                    />
                </div>
            ))}
        </ClosetSpotlightWrapper>
    )
}

export default ClosetSpotlightItems
