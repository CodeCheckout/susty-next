import React from 'react';
import {Disclosure} from "@headlessui/react";
import {HiChevronRight} from "react-icons/hi";

const ListingAnItem = () => {
    return (
        <div className={'p-4 bg-white'}>
            <div className=" bg-white text-left">
                <h1 className="text-3xl font-bold mt-0 mb-4">Listing an item</h1>
                <div className="text-xs text-gray-500">Pick a topic</div>
            </div>
        </div>
    );
};

export default ListingAnItem;