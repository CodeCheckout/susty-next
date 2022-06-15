import React from 'react'
import {HiStar} from 'react-icons/all'

const RatesInClosetSpotlight = ({person, personD, id}) => {
    return (
        <div className={'flex flex-row items-center'} key={id}>
            {Array(Math.ceil(parseFloat(personD.rating)))
                .fill(0)
                .map((x, index) => {
                    return (
                        <HiStar
                            key={index}
                            className={'w-5 h-5 text-amber-400'}
                        />
                    )
                })}
            {Array(Math.floor(5 - parseFloat(personD.rating)))
                .fill(0)
                .map((x, index) => {
                    return (
                        <HiStar
                            key={index}
                            className={'w-5 h-5 text-gray-300'}
                        />
                    )
                })}
            <p className={'pl-2 pb-1 text-base text-gray-500'}>
                {person.length}
            </p>
        </div>
    )
}

export default RatesInClosetSpotlight
