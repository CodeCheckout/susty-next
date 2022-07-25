import React from 'react'
import Name from '../../components/common/Settings/profile/Name'
import Location from '../../components/common/Settings/profile/Location'
import Language from '../../components/common/Settings/profile/Language'

const Profile = () => {
    return (
        <div className="grid gap-y-4 p-4">
            <Name />
            <Location />
            <Language />
        </div>
    )
}

export default Profile
