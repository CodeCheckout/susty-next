import React, {useState} from 'react'
import Home from '../../common/HelpCenter/Home'
import HelpCenterSideBar from './HelpCenterSideBar'

const HelpCenterPageWrapper = () => {
    const [sidebarClickedItem, setSidebarClickedItem] = useState(<Home />)
    const [subItemSidebar, setSubItemSidebar] = useState()

    return (
        <div className={'px-4 sm:px-8 md:px-16 md:min-w-max py-8'}>
            <div className="flex flex-row w-full min-h-max">
                <div className="hidden md:block min-w-fit">
                    <HelpCenterSideBar
                        sidebarClickedItem={sidebarClickedItem}
                        setSidebarClickedItem={setSidebarClickedItem}
                        subItemSidebar={subItemSidebar}
                    />
                </div>

                <div className="w-full">{sidebarClickedItem}</div>
            </div>
        </div>
    )
}

export default HelpCenterPageWrapper
