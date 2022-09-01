import React, {useEffect, useState} from 'react'
import {Dialog} from '@headlessui/react'
import {AnimatePresence, motion} from 'framer-motion'
import Link from 'next/link'
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import {firebaseApp} from '../../services/firebase'
import axios from 'axios'
import {useLocalStorage} from '@mantine/hooks'

const AuthModal = ({openState, setOpenModal}) => {
    const closeModalHandler = () => {
        setOpenModal(false)
        setIsRegisterStatus(true)
        setIsRegisterAnd3Button(true)
        setIsLoginRouteAnd3Button(true)
        setIsLoginEmailPassword(true)
        setIsResetPassword(false)
        setIsForgotPassword(false)
        setEmail('')
        setNewPassword('')
        setEmailNotification('')
        setErrorMessage('')
    }

    const [sustyAuth, setSustyAuth] = useLocalStorage({
        key: 'susty',
        defaultValue: {},
    })
    const [fullName, setFullName] = useState('')
    const [username, setUsername] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [userId, setUserId] = useState('')
    const [emailNotification, setEmailNotification] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    //1st check
    const [isRegisterStatus, setIsRegisterStatus] = useState(true)

    // in register route
    const [isRegisterAnd3Button, setIsRegisterAnd3Button] = useState(true)

    // in login route
    const [isLoginRouteAnd3Button, setIsLoginRouteAnd3Button] = useState(true)
    const [isLoginEmailPassword, setIsLoginEmailPassword] = useState(true)

    // forgot password check
    const [isForgotPassword, setIsForgotPassword] = useState(false)
    const [verificationCode, setVerificationCode] = useState('')

    //  reset password
    const [isResetPassword, setIsResetPassword] = useState(false)
    const [resetPasswordEnter, setResetPasswordEnter] = useState('')

    //Firebase auth object
    const auth = getAuth(firebaseApp)

    //Firebase Auth for Google login
    const provider = new GoogleAuthProvider()
    const signInWithGoogleHandler = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential =
                    GoogleAuthProvider.credentialFromResult(result)
                const token = credential.accessToken
                // The signed-in user info.
                const user = result.user
                // ...
                return result.user
            })
            .then(async (userDetails) => {
                await axios
                    .post('/api/user/auth', {
                        uid: userDetails.uid,
                        displayName: userDetails.displayName,
                        photoURL: userDetails.photoURL,
                        email: userDetails.email,
                        // address: "My Address"
                    })
                    .then((res) => {
                        setSustyAuth(res.data.user)
                    })
            })
            .then(() => {
                closeModalHandler()
            })
            .catch((error) => {
                console.log(error)
                // Handle Errors here.
                const errorCode = error.code
                const errorMessage = error.message
                // The email of the user's account used.
                const email = error.customData.email
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error)
                // ...
            })
    }

    const onContinueClick = async () => {
        await axios
            .post('/api/user/adduser', {
                name: fullName,
                email,
                address,
                fullName,
                password,
            })
            .then((result) => {
                console.log('User registered successfully!', result)
            })
    }

    const onForgotPasswordContinue = async () => {
        console.log('Called forgot password continue 1')
        try {
            const {data} = await axios
                .post('/api/user/forgotPassword', {email})
                .then((result) => {
                    console.log(`Email sent ${email}`)
                    if (result.data.success == true) {
                        setIsForgotPassword(true)
                        setEmailNotification('Email sent')
                    } else {
                        setIsForgotPassword(false)
                        setErrorMessage('Email is not registered')
                        console.log('Called forgot password continue')
                    }
                })
        } catch (err) {
            console.log(err)
            setIsForgotPassword(false)
            setErrorMessage('Email is not registered')
        }
    }

    const onVerificationEnter = async () => {
        await axios
            .post('/api/user/verifyPasswordToken', {
                resetToken: verificationCode,
            })
            .then((result) => {
                if (result.data.success === true) {
                    console.log('Verification success')
                    setIsResetPassword(true)
                    setUserId(result.data.userId)
                } else {
                    setIsResetPassword(false)
                    console.log('Verification unsuccess')
                }
            })
    }

    const onResetPasswordEnter = async () => {
        console.log(newPassword)

        // save new password in db
        await axios
            .put('/api/user/resetPassword', {
                userId: userId,
                password: newPassword,
            })
            .then((result) => {
                if (result.data.success === true) {
                    console.log('Password reset successfully!')
                    setIsLoginEmailPassword(false)
                    closeModalHandler()
                } else {
                    console.log('Password reset Unsuccessfully!')
                    setIsLoginEmailPassword(false)
                    closeModalHandler()
                }
            })
    }

    const onEmailLogIn = async () => {
        try {
            const {data} = await axios
                .post('/api/user/emailSignIn', {email, password})
                .then((result) => {
                    if (result.data.success == true) {
                        localStorage.setItem('authToken', result.data.token)
                        setSustyAuth(result.data.user)
                        closeModalHandler()
                    }
                })
        } catch (err) {
            console.log(err)
        }
    }

    // add timeout function to set the time to display a message
    useEffect(() => {
        const timer = setTimeout(() => {
            setEmailNotification('')
        }, 4000)
        return () => clearTimeout(timer)
    }, [emailNotification])

    // add timeout to forgot email message
    useEffect(() => {
        const timer = setTimeout(() => {
            setErrorMessage('')
        }, 4000)
        return () => clearTimeout(timer)
    }, [errorMessage])

    console.log(sustyAuth)

    return (
        <AnimatePresence>
            {openState && (
                <Dialog
                    static
                    as={motion.div}
                    open={openState}
                    className="relative z-10"
                    onClose={closeModalHandler}
                    animate={{
                        opacity: 1,
                    }}
                    exit={{
                        opacity: 0,
                        transition: {
                            duration: 0.2,
                        },
                    }}
                >
                    <div className={'font-susty fixed inset-0 overflow-y-auto'}>
                        <div className="flex  min-h-full items-center justify-center overflow-y-auto bg-gray-700 bg-opacity-80 p-4 text-center">
                            <motion.div
                                key={`modal-for-email`}
                                initial={{scale: 0, opacity: 0, y: -500}}
                                animate={{
                                    y: 0,
                                    scale: 1,
                                    opacity: 1,
                                    transition: {
                                        duration: 0.2,
                                    },
                                }}
                                exit={{
                                    scale: 0,
                                    opacity: 0,
                                    y: 600,
                                }}
                                className="mt-20 w-fit max-w-lg transform overflow-y-auto rounded-2xl bg-white p-5 text-left align-middle shadow-xl transition-all"
                            >
                                <Dialog.Title as="h3" className={`mb-2`}>
                                    <span
                                        className="mr-2 flex cursor-pointer justify-end text-base font-medium leading-5 text-susty"
                                        onClick={closeModalHandler}
                                    >
                                        Close
                                    </span>
                                    {/*TODO*/}
                                    {isRegisterStatus === true ? (
                                        <>
                                            {isRegisterAnd3Button === true ? (
                                                <>
                                                    <p
                                                        className={
                                                            'mt-5 flex flex-col gap-3 pt-2 text-2xl font-medium'
                                                        }
                                                    >
                                                        <span
                                                            className={
                                                                'mx-auto'
                                                            }
                                                        >
                                                            Join and sell
                                                            pre-loved
                                                        </span>
                                                        <span
                                                            className={
                                                                'mx-auto'
                                                            }
                                                        >
                                                            clothes with no fees
                                                        </span>
                                                    </p>
                                                </>
                                            ) : (
                                                <>
                                                    <p
                                                        className={
                                                            'mt-5 flex justify-center pt-2 text-xl font-medium'
                                                        }
                                                    >
                                                        Register with email
                                                    </p>
                                                </>
                                            )}
                                        </>
                                    ) : (
                                        <>
                                            {isLoginRouteAnd3Button === true ? (
                                                <>
                                                    <p
                                                        className={
                                                            'mt-5 flex justify-center pt-2 text-xl font-medium'
                                                        }
                                                    >
                                                        Welcome back!
                                                    </p>
                                                </>
                                            ) : (
                                                <>
                                                    {isLoginEmailPassword ===
                                                    true ? (
                                                        <>
                                                            <p
                                                                className={
                                                                    'mt-5 flex justify-center pt-2 text-2xl font-medium'
                                                                }
                                                                onClick={
                                                                    onEmailLogIn
                                                                }
                                                            >
                                                                Log in
                                                            </p>
                                                        </>
                                                    ) : (
                                                        <>
                                                            {isForgotPassword ? (
                                                                <>
                                                                    {isResetPassword ? (
                                                                        <>
                                                                            <p
                                                                                className={
                                                                                    'mt-5 flex justify-center pt-2 text-xl font-medium'
                                                                                }
                                                                            >
                                                                                Enter
                                                                                Your
                                                                                New
                                                                                Password
                                                                            </p>
                                                                        </>
                                                                    ) : (
                                                                        <>
                                                                            <p
                                                                                className={
                                                                                    'mt-5 flex justify-center pt-2 text-xl font-medium'
                                                                                }
                                                                            >
                                                                                Enter
                                                                                Verification
                                                                                code
                                                                            </p>
                                                                            <p className="flex justify-center text-sm font-normal">
                                                                                A
                                                                                verification
                                                                                code
                                                                                has
                                                                                sent
                                                                                to
                                                                                your
                                                                                email
                                                                                address
                                                                            </p>
                                                                        </>
                                                                    )}
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <p
                                                                        className={
                                                                            'mt-5 flex justify-center pt-2 text-xl font-medium'
                                                                        }
                                                                    >
                                                                        Forgot
                                                                        your
                                                                        password
                                                                    </p>
                                                                </>
                                                            )}
                                                        </>
                                                    )}
                                                </>
                                            )}
                                        </>
                                    )}
                                </Dialog.Title>
                                <div
                                    className={
                                        'grid-rows-10 my-4 grid grid-cols-1 gap-y-3'
                                    }
                                >
                                    {/*TODO*/}
                                    {isRegisterStatus === true ? (
                                        <>
                                            {isRegisterAnd3Button === true ? (
                                                <>
                                                    <div className="w-full rounded bg-white p-2">
                                                        <button
                                                            aria-label="Continue with facebook"
                                                            role="button"
                                                            className="mt-4 flex w-full items-center rounded-lg border border-gray-900 py-3 px-4 blur-sm focus:bg-gray-200 focus:outline-none"
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill={'none'}
                                                                width={38}
                                                                height={38}
                                                                viewBox="0 0 48 48"
                                                            >
                                                                <path
                                                                    fill="#3f51b5"
                                                                    d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"
                                                                ></path>
                                                                <path
                                                                    fill="#fff"
                                                                    d="M29.368,24H26v12h-5V24h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H30v4h-2.287 C26.104,16,26,16.6,26,17.723V20h4L29.368,24z"
                                                                ></path>
                                                            </svg>
                                                            <p className="ml-4 text-base font-medium text-gray-700">
                                                                Continue with
                                                                Facebook
                                                            </p>
                                                        </button>
                                                        <button
                                                            onClick={
                                                                signInWithGoogleHandler
                                                            }
                                                            aria-label="Continue with google"
                                                            role="button"
                                                            className="mt-4 flex w-full items-center rounded-lg border border-gray-900 py-3 px-4 focus:bg-gray-200 focus:outline-none"
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill={'none'}
                                                                width={38}
                                                                height={38}
                                                                viewBox="0 0 48 48"
                                                            >
                                                                <path
                                                                    fill="#FFC107"
                                                                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                                                                ></path>
                                                                <path
                                                                    fill="#FF3D00"
                                                                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                                                                ></path>
                                                                <path
                                                                    fill="#4CAF50"
                                                                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                                                                ></path>
                                                                <path
                                                                    fill="#1976D2"
                                                                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                                                                ></path>
                                                            </svg>
                                                            <p className="ml-4 text-base font-medium text-gray-700">
                                                                Continue with
                                                                Google
                                                            </p>
                                                        </button>
                                                        <button
                                                            aria-label="Continue with apple"
                                                            role="button"
                                                            className="mt-4 flex w-full items-center rounded-lg border border-gray-900 py-3 px-4 blur-sm focus:bg-gray-200 focus:outline-none"
                                                        >
                                                            <img
                                                                src="https://img.icons8.com/fluency-systems-filled/48/000000/mac-client.png"
                                                                width={'38'}
                                                                height={'38'}
                                                            />
                                                            <p className="ml-4 text-base font-medium text-gray-700">
                                                                Continue with
                                                                Apple
                                                            </p>
                                                        </button>
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    <div
                                                        className={
                                                            'flex flex-col gap-6'
                                                        }
                                                    >
                                                        <div
                                                            className={
                                                                'flex flex-col gap-1'
                                                            }
                                                        >
                                                            <input
                                                                type={'text'}
                                                                className={
                                                                    'min-w-full rounded-md border border-gray-300 px-8 py-1.5 shadow-sm focus:border-susty focus:ring-susty focus:ring-offset-susty'
                                                                }
                                                                placeholder={
                                                                    'Full name'
                                                                }
                                                                onChange={(
                                                                    e
                                                                ) => {
                                                                    setFullName(
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }}
                                                            />
                                                            <span
                                                                className={
                                                                    'pl-1 text-xs text-gray-500'
                                                                }
                                                            >
                                                                Your full name
                                                                will not be
                                                                publicly visible
                                                            </span>
                                                        </div>
                                                        <div
                                                            className={
                                                                'flex flex-col gap-1'
                                                            }
                                                        >
                                                            <input
                                                                type={'text'}
                                                                className={
                                                                    'min-w-full rounded-md border border-gray-300 px-8 py-1.5 shadow-sm focus:border-susty focus:ring-susty focus:ring-offset-susty'
                                                                }
                                                                placeholder={
                                                                    'Username'
                                                                }
                                                                onChange={(
                                                                    e
                                                                ) => {
                                                                    setUsername(
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }}
                                                            />
                                                            <span
                                                                className={
                                                                    'pl-1 text-xs text-gray-500'
                                                                }
                                                            >
                                                                Please use only
                                                                letters and
                                                                numbers. Pick
                                                                something you
                                                                like — usernames
                                                                can’t be changed
                                                                later.
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <input
                                                                type={'text'}
                                                                className={
                                                                    'min-w-full rounded-md border border-gray-300 px-8 py-1.5 shadow-sm focus:border-susty focus:ring-susty focus:ring-offset-susty'
                                                                }
                                                                placeholder={
                                                                    'Address'
                                                                }
                                                                onChange={(
                                                                    e
                                                                ) => {
                                                                    setAddress(
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }}
                                                            />
                                                        </div>
                                                        <div>
                                                            <input
                                                                type={'email'}
                                                                className={
                                                                    'min-w-full rounded-md border border-gray-300 px-8 py-1.5 shadow-sm focus:border-susty focus:ring-susty focus:ring-offset-susty'
                                                                }
                                                                placeholder={
                                                                    'Email'
                                                                }
                                                                onChange={(
                                                                    e
                                                                ) => {
                                                                    setEmail(
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }}
                                                            />
                                                        </div>
                                                        <div
                                                            className={
                                                                'flex flex-col gap-1'
                                                            }
                                                        >
                                                            <input
                                                                type={
                                                                    'password'
                                                                }
                                                                className={
                                                                    'min-w-full rounded-md border border-gray-300 px-8 py-1.5 shadow-sm focus:border-susty focus:ring-susty focus:ring-offset-susty'
                                                                }
                                                                placeholder={
                                                                    'Password'
                                                                }
                                                                onChange={(
                                                                    e
                                                                ) => {
                                                                    setPassword(
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }}
                                                            />
                                                            <span
                                                                className={
                                                                    'pl-1 text-xs text-gray-500'
                                                                }
                                                            >
                                                                Please use at
                                                                least 7
                                                                characters.
                                                                Include letters
                                                                and at least 1
                                                                number.
                                                            </span>
                                                        </div>
                                                        <div
                                                            className={
                                                                'flex flex-row gap-2'
                                                            }
                                                        >
                                                            <input
                                                                id="checkbox"
                                                                name="checkbox"
                                                                type="checkbox"
                                                                className="h-5 w-5 rounded border-gray-300 text-susty focus:ring-red-400"
                                                            />
                                                            <span
                                                                className={
                                                                    'pl-1 text-base text-gray-500'
                                                                }
                                                            >
                                                                Subscribe to
                                                                your newsletter
                                                            </span>
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                        </>
                                    ) : (
                                        <>
                                            {isLoginRouteAnd3Button === true ? (
                                                <>
                                                    <div className="w-full rounded bg-white p-2">
                                                        <button
                                                            aria-label="Continue with facebook"
                                                            role="button"
                                                            className="mt-4 flex w-full items-center rounded-lg border border-gray-900 py-3 px-4 blur-sm focus:bg-gray-200 focus:outline-none"
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill={'none'}
                                                                width={38}
                                                                height={38}
                                                                viewBox="0 0 48 48"
                                                            >
                                                                <path
                                                                    fill="#3f51b5"
                                                                    d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"
                                                                ></path>
                                                                <path
                                                                    fill="#fff"
                                                                    d="M29.368,24H26v12h-5V24h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H30v4h-2.287 C26.104,16,26,16.6,26,17.723V20h4L29.368,24z"
                                                                ></path>
                                                            </svg>
                                                            <p className="ml-4 text-base font-medium text-gray-700">
                                                                Continue with
                                                                Facebook
                                                            </p>
                                                        </button>
                                                        <button
                                                            onClick={
                                                                signInWithGoogleHandler
                                                            }
                                                            aria-label="Continue with google"
                                                            role="button"
                                                            className="mt-4 flex w-full items-center rounded-lg border border-gray-900 py-3 px-4 focus:bg-gray-200 focus:outline-none"
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill={'none'}
                                                                width={38}
                                                                height={38}
                                                                viewBox="0 0 48 48"
                                                            >
                                                                <path
                                                                    fill="#FFC107"
                                                                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                                                                ></path>
                                                                <path
                                                                    fill="#FF3D00"
                                                                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                                                                ></path>
                                                                <path
                                                                    fill="#4CAF50"
                                                                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                                                                ></path>
                                                                <path
                                                                    fill="#1976D2"
                                                                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                                                                ></path>
                                                            </svg>
                                                            <p className="ml-4 text-base font-medium text-gray-700">
                                                                Continue with
                                                                Google
                                                            </p>
                                                        </button>
                                                        <button
                                                            aria-label="Continue with apple"
                                                            role="button"
                                                            className="mt-4 flex w-full items-center rounded-lg border border-gray-900 py-3 px-4 blur-sm focus:bg-gray-200 focus:outline-none"
                                                        >
                                                            <img
                                                                src="https://img.icons8.com/fluency-systems-filled/48/000000/mac-client.png"
                                                                width={'38'}
                                                                height={'38'}
                                                            />
                                                            <p className="ml-4 text-base font-medium text-gray-700">
                                                                Continue with
                                                                Apple
                                                            </p>
                                                        </button>
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    {isLoginEmailPassword ===
                                                    true ? (
                                                        <>
                                                            <div
                                                                className={
                                                                    'flex flex-col gap-4'
                                                                }
                                                            >
                                                                <input
                                                                    type={
                                                                        'text'
                                                                    }
                                                                    className={
                                                                        'min-w-full rounded-md border border-gray-300 px-8 py-1.5 shadow-sm focus:border-susty focus:ring-susty focus:ring-offset-susty'
                                                                    }
                                                                    placeholder={
                                                                        'Email or username'
                                                                    }
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        setEmail(
                                                                            e
                                                                                .target
                                                                                .value
                                                                        )
                                                                    }
                                                                />
                                                                <input
                                                                    type={
                                                                        'password'
                                                                    }
                                                                    className={
                                                                        'min-w-full rounded-md border border-gray-300 px-8 py-1.5 shadow-sm focus:border-susty focus:ring-susty focus:ring-offset-susty'
                                                                    }
                                                                    placeholder={
                                                                        'Password'
                                                                    }
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        setPassword(
                                                                            e
                                                                                .target
                                                                                .value
                                                                        )
                                                                    }
                                                                />
                                                            </div>
                                                        </>
                                                    ) : (
                                                        <>
                                                            {isForgotPassword ? (
                                                                <>
                                                                    {isResetPassword ? (
                                                                        <>
                                                                            <input
                                                                                type={
                                                                                    'password'
                                                                                }
                                                                                className={
                                                                                    'min-w-full rounded-md border border-gray-300 px-8 py-1.5 shadow-sm focus:border-susty focus:ring-susty focus:ring-offset-susty'
                                                                                }
                                                                                placeholder={
                                                                                    'Enter your new password'
                                                                                }
                                                                                value={
                                                                                    newPassword
                                                                                }
                                                                                onChange={(
                                                                                    e
                                                                                ) =>
                                                                                    setNewPassword(
                                                                                        e
                                                                                            .target
                                                                                            .value
                                                                                    )
                                                                                }
                                                                            />
                                                                        </>
                                                                    ) : (
                                                                        <>
                                                                            <input
                                                                                type={
                                                                                    'text'
                                                                                }
                                                                                className={
                                                                                    'min-w-full rounded-md border border-gray-300 px-8 py-1.5 shadow-sm focus:border-susty focus:ring-susty focus:ring-offset-susty'
                                                                                }
                                                                                placeholder={
                                                                                    'Enter Verification code here'
                                                                                }
                                                                                onChange={(
                                                                                    e
                                                                                ) =>
                                                                                    setVerificationCode(
                                                                                        e
                                                                                            .target
                                                                                            .value
                                                                                    )
                                                                                }
                                                                            />

                                                                            <div className="mt-4 flex justify-center text-susty">
                                                                                <p
                                                                                    className="cursor-pointer text-sm hover:text-red-600 hover:underline"
                                                                                    onClick={() =>
                                                                                        onForgotPasswordContinue()
                                                                                    }
                                                                                >
                                                                                    Resend
                                                                                    email
                                                                                </p>
                                                                            </div>
                                                                            {emailNotification.length >
                                                                                0 && (
                                                                                <div className="flex justify-center rounded-md bg-green-200 p-0.5 text-sm text-green-800">
                                                                                    {
                                                                                        emailNotification
                                                                                    }
                                                                                </div>
                                                                            )}
                                                                        </>
                                                                    )}
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <input
                                                                        type={
                                                                            'email'
                                                                        }
                                                                        className={
                                                                            'min-w-full rounded-md border border-gray-300 px-8 py-1.5 shadow-sm focus:border-susty focus:ring-susty focus:ring-offset-susty'
                                                                        }
                                                                        placeholder={
                                                                            'Enter your email address'
                                                                        }
                                                                        onChange={(
                                                                            e
                                                                        ) =>
                                                                            setEmail(
                                                                                e
                                                                                    .target
                                                                                    .value
                                                                            )
                                                                        }
                                                                    />
                                                                </>
                                                            )}
                                                        </>
                                                    )}
                                                </>
                                            )}
                                        </>
                                    )}

                                    {/*TODO*/}
                                    {isRegisterStatus === true ? (
                                        <>
                                            {isRegisterAnd3Button === true ? (
                                                <>
                                                    <div
                                                        className={
                                                            'flex flex-col gap-2'
                                                        }
                                                    >
                                                        <div
                                                            className={
                                                                'mx-auto text-base font-medium text-gray-500'
                                                            }
                                                        >
                                                            Or register with{' '}
                                                            <span
                                                                onClick={() => {
                                                                    setIsRegisterAnd3Button(
                                                                        false
                                                                    )
                                                                }}
                                                                className={
                                                                    'cursor-pointer text-susty hover:underline'
                                                                }
                                                            >
                                                                Email
                                                            </span>
                                                        </div>
                                                        <div
                                                            className={
                                                                'mx-auto cursor-pointer text-base font-medium text-gray-500'
                                                            }
                                                        >
                                                            Already have an
                                                            account?{' '}
                                                            <span
                                                                onClick={() => {
                                                                    setIsRegisterStatus(
                                                                        false
                                                                    )
                                                                }}
                                                                className={
                                                                    'text-susty hover:underline'
                                                                }
                                                            >
                                                                Log in
                                                            </span>
                                                        </div>
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    <div className="mt-6">
                                                        <motion.button
                                                            whileHover={{
                                                                scale: 1.02,
                                                            }}
                                                            whileTap={{
                                                                scale: 0.98,
                                                            }}
                                                            className={`flex min-w-full justify-center rounded-md border border-gray-300 bg-susty px-28 py-2 text-base font-medium text-white shadow-sm hover:border-susty hover:bg-white hover:text-susty focus:border-susty focus:bg-red-50 focus:text-red-400`}
                                                            onClick={() => {
                                                                onContinueClick()
                                                            }}
                                                        >
                                                            Continue
                                                        </motion.button>
                                                    </div>
                                                    <div
                                                        className={
                                                            'flex flex-col gap-2'
                                                        }
                                                    >
                                                        <div
                                                            className={
                                                                'text-sm font-medium text-gray-500'
                                                            }
                                                        >
                                                            By registering, I
                                                            confirm that I
                                                            accept Susty's{' '}
                                                            <Link href={'/'}>
                                                                <span
                                                                    className={
                                                                        'text-susty hover:underline'
                                                                    }
                                                                >
                                                                    Terms and
                                                                    Conditions ,
                                                                </span>
                                                            </Link>
                                                            have read the{' '}
                                                            <Link href={'/'}>
                                                                <a
                                                                    className={
                                                                        'text-susty hover:underline'
                                                                    }
                                                                >
                                                                    Privacy
                                                                    Policy,
                                                                </a>
                                                            </Link>{' '}
                                                            and am at least 18
                                                            years old.
                                                        </div>
                                                        <div
                                                            className={
                                                                'mx-auto text-base font-medium text-susty hover:underline'
                                                            }
                                                        >
                                                            Having trouble?
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                        </>
                                    ) : (
                                        <>
                                            {isLoginRouteAnd3Button === true ? (
                                                <>
                                                    <div
                                                        className={
                                                            'flex flex-col gap-2'
                                                        }
                                                    >
                                                        <div
                                                            className={
                                                                'mx-auto text-base font-medium text-gray-500'
                                                            }
                                                        >
                                                            Or log in with{' '}
                                                            <span
                                                                onClick={() => {
                                                                    setIsLoginRouteAnd3Button(
                                                                        false
                                                                    )
                                                                    setIsLoginEmailPassword(
                                                                        true
                                                                    )
                                                                }}
                                                                className={
                                                                    'cursor-pointer text-susty hover:underline'
                                                                }
                                                            >
                                                                Email
                                                            </span>
                                                        </div>
                                                        <div
                                                            className={
                                                                'mx-auto text-base font-medium text-gray-500'
                                                            }
                                                        >
                                                            Don't have an
                                                            account yet?{' '}
                                                            <span
                                                                onClick={() => {
                                                                    setIsRegisterStatus(
                                                                        true
                                                                    )
                                                                    setIsRegisterAnd3Button(
                                                                        true
                                                                    )
                                                                }}
                                                                className={
                                                                    'cursor-pointer text-susty hover:underline'
                                                                }
                                                            >
                                                                Sign up
                                                            </span>
                                                        </div>
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    {isLoginEmailPassword ===
                                                    true ? (
                                                        <>
                                                            <div className="mt-6">
                                                                <motion.button
                                                                    whileHover={{
                                                                        scale: 1.02,
                                                                    }}
                                                                    whileTap={{
                                                                        scale: 0.98,
                                                                    }}
                                                                    className={`flex min-w-full justify-center rounded-md border border-gray-300 bg-susty px-28 py-2 text-base font-medium text-white shadow-sm hover:border-susty hover:bg-white hover:text-susty focus:border-susty focus:bg-red-50 focus:text-red-400`}
                                                                    onClick={
                                                                        onEmailLogIn
                                                                    }
                                                                >
                                                                    Continue
                                                                </motion.button>
                                                            </div>
                                                            <div
                                                                className={
                                                                    'mt-3 flex flex-col gap-2'
                                                                }
                                                            >
                                                                <div
                                                                    onClick={() => {
                                                                        setIsLoginEmailPassword(
                                                                            false
                                                                        )
                                                                    }}
                                                                    className={
                                                                        'mx-auto cursor-pointer text-base font-medium text-susty hover:underline'
                                                                    }
                                                                >
                                                                    Forgotten
                                                                    your
                                                                    password?
                                                                </div>
                                                                <div
                                                                    className={
                                                                        'mx-auto cursor-pointer text-sm font-medium text-susty hover:underline'
                                                                    }
                                                                >
                                                                    Having
                                                                    trouble?
                                                                </div>
                                                            </div>
                                                        </>
                                                    ) : (
                                                        <>
                                                            {isForgotPassword ? (
                                                                <>
                                                                    {isResetPassword ? (
                                                                        <>
                                                                            <div className="mt-6">
                                                                                <motion.button
                                                                                    whileHover={{
                                                                                        scale: 1.02,
                                                                                    }}
                                                                                    whileTap={{
                                                                                        scale: 0.98,
                                                                                    }}
                                                                                    className={`flex min-w-full justify-center rounded-md border border-gray-300 bg-susty px-28 py-2 text-base font-medium text-white shadow-sm hover:border-susty hover:bg-white hover:text-susty focus:border-susty focus:bg-red-50 focus:text-red-400`}
                                                                                    onClick={() => {
                                                                                        onResetPasswordEnter()
                                                                                    }}
                                                                                >
                                                                                    Enter
                                                                                </motion.button>
                                                                            </div>
                                                                        </>
                                                                    ) : (
                                                                        <>
                                                                            <div className="">
                                                                                <motion.button
                                                                                    whileHover={{
                                                                                        scale: 1.02,
                                                                                    }}
                                                                                    whileTap={{
                                                                                        scale: 0.98,
                                                                                    }}
                                                                                    className={`flex min-w-full justify-center rounded-md border border-gray-300 bg-susty px-28 py-2 text-base font-medium text-white shadow-sm hover:border-susty hover:bg-white hover:text-susty focus:border-susty focus:bg-red-50 focus:text-red-400`}
                                                                                    onClick={() => {
                                                                                        onVerificationEnter()
                                                                                    }}
                                                                                >
                                                                                    Continue
                                                                                </motion.button>
                                                                            </div>
                                                                        </>
                                                                    )}
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <div className="mt-4">
                                                                        {errorMessage.length >
                                                                            0 && (
                                                                            <>
                                                                                <div className="flex justify-center rounded-md bg-red-100 p-0.5 text-sm text-red-700">
                                                                                    {
                                                                                        errorMessage
                                                                                    }
                                                                                </div>
                                                                            </>
                                                                        )}

                                                                        <div className="mt-2">
                                                                            <motion.button
                                                                                whileHover={{
                                                                                    scale: 1.02,
                                                                                }}
                                                                                whileTap={{
                                                                                    scale: 0.98,
                                                                                }}
                                                                                className={`flex min-w-full justify-center rounded-md border border-gray-300 bg-susty px-28 py-2 text-base font-medium text-white shadow-sm hover:border-susty hover:bg-white hover:text-susty focus:border-susty focus:bg-red-50 focus:text-red-400`}
                                                                                onClick={() => {
                                                                                    onForgotPasswordContinue()
                                                                                }}
                                                                            >
                                                                                Continue
                                                                            </motion.button>
                                                                        </div>
                                                                    </div>
                                                                </>
                                                            )}
                                                        </>
                                                    )}
                                                </>
                                            )}
                                        </>
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </Dialog>
            )}
        </AnimatePresence>
    )
}

export default AuthModal
