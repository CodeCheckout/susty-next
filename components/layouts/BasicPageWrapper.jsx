import React from 'react';

const BasicPageWrapper = ({children}) => {
    return (
        <div className={`px-40`}>
            {children}
        </div>
    );
};

export default BasicPageWrapper;
