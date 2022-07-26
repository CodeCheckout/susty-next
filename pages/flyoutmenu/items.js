import React from 'react';

const Items = ({ sections }) => {
    return (
        <div className="mt-1 ml-1 grid md:gap-y-3 md:gap-x-0.5 lg:gap-3 md:grid-cols-2 lg:grid-cols-2 min-h-max pb-2 pr-1">
            {sections && sections.map((section) => (
                <div key={section.id}>
                    <div className="block px-4 py-1 text-sm truncate bg-white">
                        <a
                            href={section.href}
                            className="text-gray-900 font-medium hover:text-gray-600"
                        >
                            {section.name}
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Items;