import React from 'react'
import BasicPageWrapper from '../components/layouts/BasicPageWrapper'
import ProfilePageWrapper from '../components/layouts/ProfilePageWrapper'
import FooterSection from '../components/common/FooterSection'
import ProfileBio from '../components/details/Profile/ProfileBio'

const Profile = () => {
    return (
        <BasicPageWrapper>
            <ProfilePageWrapper>
                <ProfileBio />
                <FooterSection />
            </ProfilePageWrapper>
        </BasicPageWrapper>
    )
}

export default Profile
