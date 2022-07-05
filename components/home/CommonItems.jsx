import React, {useState} from 'react'
import CommonItemCard from '../Cards/Item/CommonItemCard'

const itemsStaticData = [
    {
        id: 1,
        username: 'NickyMontana',
        profileImg:
            'https://c1.wallpaperflare.com/preview/568/71/709/face-facial-hair-fine-looking-guy.jpg',
        profileAlt: 'profile image',
        src: 'https://cdn.shopify.com/s/files/1/0059/5879/5337/products/handknitted-butterfly-jacket-by-hanne-falkenberg-design-andet-hanne-falkenberg-kit-6-m-992013_620x.jpg?v=1631370781',
        alt: 'frock picture',
        price: '5.00',
        size: '12/L',
        brand: 'Shein',
    },
    {
        id: 2,
        username: 'Pedro123',
        profileImg:
            'https://c1.wallpaperflare.com/preview/568/71/709/face-facial-hair-fine-looking-guy.jpg',
        profileAlt: 'profile image',
        src: 'https://images.pexels.com/photos/19090/pexels-photo.jpg?cs=srgb&dl=pexels-web-donut-19090.jpg&fm=jpg',
        alt: 'frock picture',
        price: '5.00',
        size: '24/3X',
        brand: 'Torrid',
    },
    {
        id: 3,
        username: 'LeonZucchini',
        profileImg:
            'https://c1.wallpaperflare.com/preview/568/71/709/face-facial-hair-fine-looking-guy.jpg',
        profileAlt: 'profile image',
        src: 'https://ae01.alicdn.com/kf/Haab8396bd3694516ac70e692c73f29762/Summer-Dress-For-Girls-Lemon-Print-Sleeveless-Strap-Princess-Dresses-Outfits-Baby-Girl-Clothes-Casual-Vocation.jpg',
        alt: 'frock picture',
        price: '5.00',
        size: '24/L',
        brand: 'Shein',
    },
    {
        id: 4,
        username: 'IrynaSuprun',
        profileImg:
            'https://c1.wallpaperflare.com/preview/568/71/709/face-facial-hair-fine-looking-guy.jpg',
        profileAlt: 'profile image',
        src: 'https://www.beverlystreet.lk/media/catalog/product/cache/1/small_image/320x/040ec09b1e35df139433887a97daa66f/4/7/4767.jpg',
        alt: 'frock picture',
        price: '5.00',
        size: '12/L',
        brand: 'Shein',
    },
    {
        id: 5,
        username: 'Lauren32',
        profileImg:
            'https://c1.wallpaperflare.com/preview/568/71/709/face-facial-hair-fine-looking-guy.jpg',
        profileAlt: 'profile image',
        src: 'https://images.herzindagi.info/image/2021/Mar/Are-slippers-good-for-your-feet_g.jpg',
        alt: 'frock picture',
        price: '5.00',
        size: '2/XS',
        brand: 'Shein',
    },
    {
        id: 6,
        username: 'AlexMathers',
        profileImg:
            'https://c1.wallpaperflare.com/preview/568/71/709/face-facial-hair-fine-looking-guy.jpg',
        profileAlt: 'profile image',
        src: 'https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        alt: 'frock picture',
        price: '5.00',
        size: '2/XS',
        brand: 'Shein',
    },
    {
        id: 7,
        username: 'LisaBeth',
        profileImg:
            'https://c1.wallpaperflare.com/preview/568/71/709/face-facial-hair-fine-looking-guy.jpg',
        profileAlt: 'profile image',
        src: 'https://i.pinimg.com/474x/3d/5f/71/3d5f71a8799595b1478b7436395f0701.jpg',
        alt: 'frock picture',
        price: '5.00',
        size: '2/XS',
        brand: 'Shein',
    },
    {
        id: 8,
        username: 'MichałChmielarz',
        profileImg:
            'https://c1.wallpaperflare.com/preview/568/71/709/face-facial-hair-fine-looking-guy.jpg',
        profileAlt: 'profile image',
        src: 'https://4.imimg.com/data4/BK/IJ/ANDROID-62026821/product-500x500.jpeg',
        alt: 'frock picture',
        price: '5.00',
        size: '2/XS',
        brand: 'Shein',
    },
    {
        id: 9,
        username: 'MaciejBaron',
        profileImg:
            'https://c1.wallpaperflare.com/preview/568/71/709/face-facial-hair-fine-looking-guy.jpg',
        profileAlt: 'profile image',
        src: 'https://cdn.outfitbook.fr/24022-thickbox_default/tailored-straight-leg-trousers-taupe.jpg',
        alt: 'frock picture',
        price: '5.00',
        size: '2/XS',
        brand: 'Shein',
    },
    {
        id: 10,
        username: 'AntoineCraske',
        profileImg:
            'https://c1.wallpaperflare.com/preview/568/71/709/face-facial-hair-fine-looking-guy.jpg',
        profileAlt: 'profile image',
        src: 'https://i.pinimg.com/474x/cb/05/31/cb0531059d60bc406f2f6c6878093374.jpg',
        alt: 'frock picture',
        price: '5.00',
        size: '2/XS',
        brand: 'Shein',
    },
]

const CommonItems = () => {
    const [items, setItems] = useState(itemsStaticData)

    return (
        <div
            className={
                'grid grid-cols-2 sm:grid-cols-3 sm:grid-rows-3 md:grid-cols-3 md:grid-rows-3 lg:grid-cols-5 lg:grid-rows-2 gap-3 justify-items-center py-5'
            }
        >
            {items.map((item) => (
                <div key={item.id}>
                    <CommonItemCard
                        username={item.username}
                        profileImg={item.profileImg}
                        profileAlt={item.profileAlt}
                        src={item.src}
                        alt={item.alt}
                        price={item.price}
                        size={item.size}
                        brand={item.brand}
                    />
                </div>
            ))}
        </div>
    )
}

export default CommonItems
