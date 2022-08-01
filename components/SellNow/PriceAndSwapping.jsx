import React from 'react'

const PriceAndSwapping = ({
    price,
    setPrice,
    setCurrency,
    currency,
    swapping,
    setSwapping,
}) => {
    return (
        <div className={`bg-white w-54 p-4 shadow rounded-sm`}>
            <div className={`grid grid-cols-5 pb-2`}>
                <p className={`font-medium text-sm sm:text-base`}>Price</p>

                <div className="mt-1 relative rounded-md shadow-sm col-start-3 col-span-3">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-sm">$</span>
                    </div>
                    <input
                        type="text"
                        name="price"
                        id="price"
                        className="focus:ring-susty focus:border-susty block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                        placeholder="0.00"
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center">
                        <label htmlFor="currency" className="sr-only">
                            Currency
                        </label>
                        <select
                            id="currency"
                            name="currency"
                            className="focus:ring-susty focus:border-susty h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
                            onChange={(e) => setCurrency(e.target.value)}
                        >
                            <option value={'USD'}>USD</option>
                            <option value={'AUD'}>AUD</option>
                            <option value={'NZD'}>NZD</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-5 pb-2">
                <div className="flex items-center col-span-3 col-start-3">
                    <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-susty focus:ring-red-400 border-gray-300 rounded"
                        onClick={() => setSwapping(!swapping)}
                    />
                    <label
                        htmlFor="remember-me"
                        className="ml-2 block text-sm text-gray-900"
                    >
                        I'm interested in swapping
                    </label>
                </div>
            </div>
        </div>
    )
}

export default PriceAndSwapping
