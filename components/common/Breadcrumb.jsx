import React from 'react';
import {HiHome , HiChevronRight} from "react-icons/hi";

const pages = [
    {name: 'Projects', href: '#', current: false},
    {name: 'Project Nero', href: '#', current: true},
]

const Breadcrumb = ({pagePathArray}) => {
    return (
        <nav className="flex py-4 px-5" aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-4">
                <li>
                    <div>
                        <a href="#" className="text-gray-400 hover:text-gray-500">
                            <HiHome className="flex-shrink-0 h-5 w-5" aria-hidden="true"/>
                            <span className="sr-only">Home</span>
                        </a>
                    </div>
                </li>
                {pagePathArray.map((page) => (
                    <li key={page}>
                        <div className="flex items-center">
                            <HiChevronRight className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true"/>
                            <a
                                href={page.split(' ').join('-').trim().toLowerCase()}
                                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                                aria-current={page.current ? 'page' : undefined}
                            >
                                {page}
                            </a>
                        </div>
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
