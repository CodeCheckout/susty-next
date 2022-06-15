import React from 'react'

const ProfilePageWrapper = ({children}) => {
    return (
        <div
            className={
                'px-2 sm:px-3 lg:px-0 py-2 mt-5 border-t border-gray-200'
            }
        >
            {children}
        </div>
    )
}

export default ProfilePageWrapper
