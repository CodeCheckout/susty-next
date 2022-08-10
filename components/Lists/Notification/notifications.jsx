import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Notifications = () => {
    const [notifications, setNotifications] = useState([])

    //TODO check how to get the current user id - localstorage.getitem()
    useEffect(() => {
        const fetchNotifications = async () => {
            await axios
                .get('/api/notification/getNotification', {
                    params: {userId: 'Nuwan Chamikara'},
                })
                .then((result) => {
                    setTimeout(
                        () => setNotifications(result.data.notification),
                        1000
                    )
                })
                .then((result) => {
                    if (!result.data.notification) {
                        return null
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        }

        fetchNotifications()
    }, [])

    return (
        <>
            <div className={'bg-gray-100'}>
                <div className="xl:pt-750 flex justify-center">
                    <div className="mb-10 mt-10 h-fit max-w-2xl bg-white text-gray-900 text-gray-700">
                        <div className="pt-2 pb-2 text-center text-xl font-medium">
                            {' '}
                            Notifications
                        </div>

                        <div className="md:h-[410px] xl:h-[630px] w-full overflow-auto bg-white shadow">
                            <div className="h-full w-full">
                                {notifications.map((item) => (
                                    <div key={item} id={item}>
                                        <button
                                            type="button"
                                            className=" relative inline-flex w-2xl items-center border-b px-4 py-2 text-sm font-medium"
                                        >
                                            <div className="items-left  m-1 ">
                                                <div className="m-1">
                                                    <img
                                                        src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
                                                        className="h-20 w-20 rounded-full"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>

                                            <div className=" w-[450px] bg-white text-sm font-medium text-gray-700 text-left pl-1 ">
                                                <a
                                                    href="#"
                                                    className="block w-full px-1 py-2 "
                                                >
                                                    <span className="text-susty">
                                                        {item.partnerId}
                                                    </span>{' '}
                                                    <span>{item.message}</span>
                                                </a>
                                                <a
                                                    href="#"
                                                    className="block w-full px-1 py-2 text-left"
                                                >
                                                    {item.createdAt}
                                                </a>
                                            </div>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Notifications
