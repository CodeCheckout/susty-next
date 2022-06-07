import React from 'react'
import {Tab} from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const ProductCarousel = ({productImageArray}) => {
    return (
        <Tab.Group as="div" className="flex flex-col-reverse">
            {/* Image selector */}
            <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
                <Tab.List className="grid grid-cols-4 gap-6">
                    {productImageArray.map((image) => (
                        <Tab
                            key={image._id}
                            className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-red-200"
                        >
                            {({selected}) => (
                                <>
                                    <span className="sr-only">
                                        {image.name}
                                    </span>
                                    <span className="absolute inset-0 rounded-md overflow-hidden">
                                        <img
                                            src={image.url}
                                            alt=""
                                            className="w-full h-full object-center object-cover"
                                        />
                                    </span>
                                    <span
                                        className={classNames(
                                            selected
                                                ? 'ring-susty'
                                                : 'ring-transparent',
                                            'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none focus:ring-susty'
                                        )}
                                    />
                                    aria-hidden="true" />
                                </>
                            )}
                        </Tab>
                    ))}
                </Tab.List>
            </div>

            <Tab.Panels className="w-full aspect-w-1 aspect-h-1">
                {productImageArray.map((image) => (
                    <Tab.Panel key={image._id}>
                        <img
                            src={image.url}
                            alt={image.alt}
                            className="w-full h-full object-center object-cover sm:rounded-lg"
                        />
                    </Tab.Panel>
                ))}
            </Tab.Panels>
        </Tab.Group>
    )
}

export default ProductCarousel
