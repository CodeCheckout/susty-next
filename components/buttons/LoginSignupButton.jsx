import React, { useEffect, useState } from 'react'
import AuthModal from '../auth/AuthModal'
import { useLocalStorage, useDidUpdate } from '@mantine/hooks'
import { toast } from 'react-toastify'

const LoginSignupButton = () => {
    const [openModal, setOpenModal] = useState(false)

    const [sustyAuth, setSustyAuth] = useLocalStorage({
        key: 'susty',
        defaultValue: {},
    })
    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
        if (Object.keys(sustyAuth).length > 0) {
            setLoggedIn(true)
        } else {
            setLoggedIn(false)
        }
    }, [sustyAuth])

    const logoutHandler = () => {
        toast.info('Logging out...')
        setSustyAuth(() => {
            return {}
        })
    }

    return (
        <>
            {loggedIn ? (
                <>
                    <button
                        onClick={logoutHandler}
                        type="button"
                        className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-susty"
                    >
                        Logout
                    </button>
                </>
            ) : (
                <>
                    <button
                        onClick={() => setOpenModal(true)}
                        type="button"
                        className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-susty"
                    >
                        Login &nbsp;|&nbsp; Signup
                    </button>
                </>
            )}

            <AuthModal openState={openModal} setOpenModal={setOpenModal} />
        </>
    )
}

export default LoginSignupButton
