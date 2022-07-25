import React from 'react'
import EmailAndPhoneNumber from '../../components/common/Settings/account/EmailAndPhoneNumber'
import NameGenderAndBirthday from '../../components/common/Settings/account/NameGenderAndBirthday'

const Account = () => {
    return (
        <div className="grid gap-y-6 p-4">
            <EmailAndPhoneNumber />
            <NameGenderAndBirthday />
        </div>
    )
}

export default Account
