import React, {Fragment, useState} from 'react';
import { Popover, Transition } from "@headlessui/react";
import Dropdown from "./dropdown";

import {categoryObj} from "../../services/categoryObj";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const CatDropDown = () => {
    const [mainCatArray, setMainCatArray] = useState([]);

    return (
        <div className={'md:px-2 lg:px-10'}>
            <div className="hidden md:block z-10 bg-white">
                <div className="flex flex-row gap-2 md:w-3/4 lg:w-1/4">
                    {categoryObj.map((singleMainCategory) => (
                        <Popover className="relative" key={singleMainCategory.id}>
                            {({ open }) => (
                                <>
                                    <div>
                                        <div className=" z-10 bg-white">
                                            <div className={classNames(  open ? "border-susty": "border-white" , "group outline-none ring-0 ring-offset-0 border-b-2 md:px-4 md:py-3 lg:py-2 lg:px-4 text-center")}>
                                                <Popover.Button
                                                    className={classNames(
                                                        open ? "border-susty" : "border-white",
                                                        "group bg-white text-gray-900 rounded-md inline-flex items-center text-sm font-susty outline-none"
                                                    )}
                                                >
                        <span

                            onClick={() => {
                                setMainCatArray(singleMainCategory.subCategory);
                            }}
                        >
                          <span>{singleMainCategory.name}</span>
                        </span>
                                                </Popover.Button>
                                            </div>
                                        </div>
                                    </div>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 -translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 -translate-y-1"
                                    >
                                        <Popover.Panel className="absolute z-20 md:inset-x-5px lg:inset-x-0 transform shadow-xl w-max">
                                            <div>
                                                <Dropdown subCategory={mainCatArray} />
                                            </div>
                                        </Popover.Panel>
                                    </Transition>
                                </>
                            )}
                        </Popover>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CatDropDown;