import React, {useRef, useState} from 'react'
import {HiChevronLeft, HiChevronRight} from 'react-icons/hi'

const searchesStaticData = [
    {
        id: 1,
        pos: 1,
        name: "Victoria's Secret",
        views: '17.5K views',
        active: true,
    },
    {id: 2, pos: 2, name: 'Michael Kors', views: '10.7K views', active: true},
    {id: 3, pos: 3, name: 'Vans', views: '6.78K views', active: true},
    {id: 4, pos: 4, name: 'adidas', views: '10.9K views', active: true},
    {id: 5, pos: 5, name: 'Shein', views: '32.1K views', active: true},
    {id: 6, pos: 6, name: 'Ray-Ban', views: '1.45K views', active: true},
    {id: 7, pos: 7, name: 'Converse Shoes', views: '3.64K views', active: true},
    {id: 8, pos: 8, name: "Levi's Cloths", views: '6.52K views', active: true},
    {id: 9, pos: 9, name: 'Nike', views: '33.8K views', active: false},
    {id: 10, pos: 10, name: 'Zara', views: '19.4K views', active: false},
    {id: 11, pos: 11, name: 'Gymshark', views: '3.22K views', active: false},
    {
        id: 12,
        pos: 12,
        name: 'Brandy Melville',
        views: '17.5K views',
        active: false,
    },
    {
        id: 13,
        pos: 13,
        name: 'Ralph Lauren',
        views: '17.5K views',
        active: false,
    },
    {
        id: 14,
        pos: 14,
        name: 'Under Armour',
        views: '17.5K views',
        active: false,
    },
    {
        id: 15,
        pos: 15,
        name: 'Urban Outfitters',
        views: '21.5K views',
        active: false,
    },
    {
        id: 16,
        pos: 16,
        name: 'American Apparel',
        views: '11.3K views',
        active: false,
    },
    {id: 17, pos: 17, name: 'Vintage', views: '65.2K views', active: false},
    {
        id: 18,
        pos: 18,
        name: 'The North Face',
        views: '7.5K views',
        active: false,
    },
    {
        id: 19,
        pos: 19,
        name: 'Laura Ashley',
        views: '12.5K views',
        active: false,
    },
    {
        id: 20,
        pos: 19,
        name: 'Laura Ashley',
        views: '12.5K views',
        active: false,
    },
    {
        id: 21,
        pos: 19,
        name: 'Laura Ashley',
        views: '12.5K views',
        active: false,
    },
    {
        id: 22,
        pos: 20,
        name: 'Louis Vuitton',
        views: '3.46K views',
        active: false,
    },
]

const SuggestedSearches = () => {
    const [searches, setSearches] = useState(searchesStaticData)

    const ref = useRef(null)

    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset
    }

    return (
        <>
            <div className={'flex flex-col gap-1'}>
                <div className={'text-2xl px-1 pt-12 pb-5'}>
                    Suggested searches
                </div>
                <div
                    className={
                        'overflow-x-hidden overflow-y-hidden scroll-smooth flex flex-row gap-3 scrollbar-hide '
                    }
                    ref={ref}
                >
                    <div className={`absolute -left-[0.5rem] lg:left-[1rem]`}>
                        <div
                            onClick={() => {
                                scroll(-100)
                            }}
                            className={
                                'absolute h-8 w-8 grid place-items-center left-[1.75rem] top-[0.5rem] bg-black bg-opacity-70 rounded-full cursor-pointer'
                            }
                        >
                            <HiChevronLeft className={'text-white w-8 h-8'} />
                        </div>
                    </div>

                    {searches.map((search) => (
                        <div
                            key={search.id}
                            className={
                                'px-3 py-1.5 bg-white hover:bg-gray-50 border border-gray-200 shadow-inner-sm rounded-sm cursor-pointer'
                            }
                        >
                            <div
                                className={
                                    'flex flex-col shrink min-w-max gap-1'
                                }
                            >
                                <div className={'text-sm font-medium'}>
                                    {search.name}
                                </div>
                                <div
                                    className={
                                        'text-xs text-gray-600 font-medium'
                                    }
                                >
                                    {search.views}
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className={`absolute -right-[0.5rem] lg:right-[1rem]`}>
                        <div
                            onClick={() => {
                                scroll(100)
                            }}
                            className={
                                'absolute h-8 w-8 place-items-center right-[1.75rem] top-[0.5rem] bg-black bg-opacity-70 rounded-full cursor-pointer'
                            }
                        >
                            <HiChevronRight className={'text-white w-8 h-8'} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SuggestedSearches
