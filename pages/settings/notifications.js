import React from 'react'
import EnableEmailNotifications from '../../components/common/Settings/notifications/EnableEmailNotifications'
import EmailNotifications from '../../components/common/Settings/notifications/EmailNotifications'
import HighPriorityNotifications from '../../components/common/Settings/notifications/HighPriorityNotifications'
import OtherNotifications from '../../components/common/Settings/notifications/OtherNotifications'

const Notifications = () => {
    return (
        <div className="grid gap-y-4 p-4">
            <EnableEmailNotifications />
            <EmailNotifications />
            <HighPriorityNotifications />
            <OtherNotifications />
        </div>
    )
}

export default Notifications
