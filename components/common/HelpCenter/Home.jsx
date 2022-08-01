import React from 'react'
import HelpCenterSearchBar from './home/HelpCenterSearchBar'
import GeneralTopics from './home/GeneralTopics'
import Feedback from './home/Feedback'

const Home = () => {
    return (
        <div className={'p-4 bg-white'}>
            <HelpCenterSearchBar />
            <GeneralTopics />
            <Feedback />
        </div>
    )
}

export default Home
