import React, {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import {HiChevronLeft, HiChevronRight} from 'react-icons/hi'
import ProductCategoryFilterWrapper from '../layouts/SideBarMenus/ProductCategoryFilterWrapper'
import ClosetSpotlightItems from '../home/ClosetSpotlightItems'
import CommonItemCard from '../Cards/Item/CommonItemCard'
import axios from 'axios'

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

const ProductItemsFilterSection = () => {
    const router = useRouter()

    const [sectionCount, setSectionCount] = useState(0)
    const [sectionName, setSectionName] = useState('')
    const [pagePathSet, setPagePathSet] = useState([])
    const [items, setItems] = useState(itemsStaticData)
    const [productResult, setProductResult] = useState([])
    const [sellers, setSellers] = useState([])

    useEffect(() => {
        setSectionCount(Object.keys(router.query).length)
    }, [router.query])

    useEffect(() => {
        if (sectionCount === 0) {
            return
        }
        if (sectionCount === 1) {
            const {mainsectionpage} = router.query
            const title = mainsectionpage
                .split('-')
                .join(' ')
                .trim()
                .toLowerCase()
            setSectionName(
                title[0].toUpperCase() + title.substring(1, title.length)
            )

            setPagePathSet([
                {
                    id: '32bdfd12-d3d5-40ab-9440-e160bb4e413b',
                    name: [mainsectionpage],
                    href: '#',
                },
            ])
        }
        if (sectionCount === 2) {
            const {mainsectionpage, sectionpage} = router.query
            const title = sectionpage.split('-').join(' ').trim().toLowerCase()
            setSectionName(
                title[0].toUpperCase() + title.substring(1, title.length)
            )

            setPagePathSet([
                {
                    id: 'a3138b2e-5447-4d29-b0e5-5bc4e08abad7',
                    name: [mainsectionpage],
                    href: '#',
                },
                {
                    id: '542118b3-5107-44e6-9ab8-a6fd4e121ba1',
                    name: [sectionpage],
                    href: '#',
                },
            ])
        }
        if (sectionCount === 3) {
            const {mainsectionpage, sectionpage, subsectionpage} = router.query
            const title = subsectionpage
                .split('-')
                .join(' ')
                .trim()
                .toLowerCase()
            setSectionName(
                title[0].toUpperCase() + title.substring(1, title.length)
            )

            setPagePathSet([
                {
                    id: '282ab9ba-8680-4770-bbce-c189b835e97f',
                    name: [mainsectionpage],
                    href: '#',
                },
                {
                    id: '2d2e6c89-e944-4e61-bc6d-22e507cbc1ea',
                    name: [sectionpage],
                    href: '#',
                },
                {
                    id: 'a00b865c-a598-48e8-90ec-f26453e6ca42',
                    name: [subsectionpage],
                    href: '#',
                },
            ])
        }
    }, [sectionCount])

    useEffect(() => {
        async function getSellers() {
            await axios
                .get('/api/user/fetch-sellers')
                .then((result) => setSellers(result.data.sellers))
        }
        getSellers()
    }, [])

    return (
        <>
            <ProductCategoryFilterWrapper
                topic={sectionName}
                noOfItems={items.length}
                pagePath={pagePathSet}
                productResult={productResult}
                setProductResult={setProductResult}
            >
                <div className={'px-3 sm:px-5 lg:px-2'}>
                    <div
                        className={
                            'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-3 sm:gap-2 lg:gap-1 justify-items-center py-5'
                        }
                    >
                        {productResult.map((item) => (
                            <div key={item._id}>
                                <CommonItemCard
                                    userId={item.owner}
                                    profileAlt={'user'}
                                    src={item.images}
                                    alt={item.alt}
                                    price={item.price}
                                    size={item.size}
                                    brand={item.brand}
                                    item={item}
                                />
                            </div>
                        ))}
                    </div>
                    {sellers.length > 0 && (
                        <>
                            <ClosetSpotlightItems seller={sellers[0]} />
                        </>
                    )}
                </div>
            </ProductCategoryFilterWrapper>
            {/*TODO NAVIGATION DYNAMIC */}
            <div className="bg-white px-4 pt-3 pb-10 flex items-center justify-between border-t border-gray-200 sm:px-6">
                <div className="flex-1 flex justify-between sm:hidden">
                    <a
                        href="#"
                        className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                        Previous
                    </a>
                    <a
                        href="#"
                        className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                        Next
                    </a>
                </div>
                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm text-gray-700">
                            Showing <span className="font-medium">1</span> to{' '}
                            <span className="font-medium">10</span> of{' '}
                            <span className="font-medium">97</span> results
                        </p>
                    </div>
                    <div>
                        <nav
                            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                            aria-label="Pagination"
                        >
                            <a
                                href="#"
                                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                            >
                                <span className="sr-only">Previous</span>
                                <HiChevronLeft
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                />
                            </a>
                            {/* Current: "z-10 bg-red-50 border-red-500 text-red-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
                            <a
                                href="#"
                                aria-current="page"
                                className="z-10 bg-red-50 border-red-400 text-red-500 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                            >
                                1
                            </a>
                            <a
                                href="#"
                                className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                            >
                                2
                            </a>
                            <a
                                href="#"
                                className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
                            >
                                3
                            </a>
                            <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                                ...
                            </span>
                            <a
                                href="#"
                                className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
                            >
                                8
                            </a>
                            <a
                                href="#"
                                className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                            >
                                9
                            </a>
                            <a
                                href="#"
                                className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                            >
                                10
                            </a>
                            <a
                                href="#"
                                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                            >
                                <span className="sr-only">Next</span>
                                <HiChevronRight
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                />
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductItemsFilterSection
