import React, {useEffect, useState} from 'react'
import {AnimatePresence} from 'framer-motion'
import {HiArrowUp, HiPlus, HiSupport} from 'react-icons/hi'
import {Dialog} from '@headlessui/react'
import {motion} from 'framer-motion'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const UploadPhotos = ({imageList, setImageList}) => {
    const [photosArray, setPhotosArray] = useState([])
    const [openTipsModal, setOpenTipsModal] = useState(false)
    const [inputList, setInputList] = useState([])
    const [removeItem, setRemoveItem] = useState([])

    const uploadFile = (e) => {
        if (imageList.length + e.target.files.length < 20) {
            setInputList([...e.target.files])
        } else if (imageList.length < 20) {
            const remainingCount = 20 - imageList.length
            setInputList([])

            for (let i = 0; i < remainingCount; i++) {
                setInputList((prev) => {
                    return [...prev, e.target.files[i]]
                })
            }
        } else {
            console.log('Maximum length exceeded')
        }
    }

    useEffect(() => {
        inputList.map((item) => {
            setImageList((prev) => {
                return [
                    ...prev,
                    {
                        name: item.name,
                        url: URL.createObjectURL(item),
                        file: item,
                    },
                ]
            })
        })
    }, [inputList])

    useEffect(() => {
        imageList.map((item, index) => {
            if (item.url === removeItem.url) {
                imageList.splice(index, 1)
                setImageList((prev) => {
                    return [...prev]
                })
            }
        })
    }, [removeItem])

    return (
        <>
            <div className={`bg-white w-full px-5 pb-2 shadow rounded-sm`}>
                <div className={`grid grid-cols-5 grid-rows-6 pb-2`}>
                    <div className={`flex col-span-5 row-span-1`}>
                        <p className={`self-center font-medium text-sm sm:text-base`}>
                            Add up to 20 photos.&nbsp;
                            <span
                                onClick={() => setOpenTipsModal(true)}
                                className={`text-susty cursor-pointer`}
                            >
                                See photo tips.
                            </span>
                        </p>
                    </div>

                    <div
                        className={classNames(
                            imageList.length < 20
                                ? `col-span-5 border border-4 border-dashed w-full h-full grid  row-span-5 grid grid-cols-5`
                                : 'col-span-5 border border-4 border-dashed border-red-600 w-full h-full grid  row-span-5 grid grid-cols-5'
                        )}
                    >
                        {!imageList.length > 0 ? (
                            <div className={`col-start-2 lg:col-start-3`}>
                                <label
                                    htmlFor="file-upload"
                                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none "
                                >
                                    <span className="col-start-2 col-span-2 md:col-span-1 inline-flex items-center w-max px-5 py-2 border border-gray-300 shadow-sm text-sm md:text-base font-medium rounded-md text-white bg-susty hover:bg-white hover:text-susty hover:border-susty focus:text-red-400 focus:border-susty focus:bg-red-50 my-32 transition-all ease-in-out">
                                        <HiPlus
                                            className={`h-4 w-4 `}
                                            aria-hidden={true}
                                        />
                                        &nbsp;Add Photos
                                    </span>

                                    <input
                                        id="file-upload"
                                        name="file-upload"
                                        type="file"
                                        accept="image/*"
                                        onChange={uploadFile}
                                        multiple
                                        className="sr-only"
                                    />
                                </label>
                            </div>
                        ) : (
                            <>
                                <ul className="flex col-span-5 overflow-x-auto ...">
                                    {imageList.map((image, idx) => {
                                        return (
                                            <div
                                                key={idx}
                                                className="flex-shrink-0"
                                            >
                                                <li className="p-2">
                                                    <div className="relative">
                                                        <img
                                                            src={image.url}
                                                            alt="Product"
                                                            className="rounded-sm h-48 w-48"
                                                        />
                                                        <div
                                                            className="cursor-pointer absolute top-0 right-0 drop-shadow-2xl hover:scale-110 hover:bg-none bg-white m-1 px-2 py-1 rounded-md"
                                                            onClick={() =>
                                                                setRemoveItem(
                                                                    image
                                                                )
                                                            }
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="w-6 h-6"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke="black"
                                                                strokeWidth="1.5"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    d="M6 18L18 6M6 6l12 12"
                                                                />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </li>
                                            </div>
                                        )
                                    })}

                                    {imageList.length < 20 ? (
                                        <li>
                                            <label
                                                htmlFor="file-upload"
                                                className="rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none "
                                            >
                                                <span className="m-2 h-48 w-48 inline-flex items-center px-8 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-md text-white bg-susty hover:bg-white hover:text-susty hover:border-susty focus:text-red-400 focus:border-susty focus:bg-red-50 transition-all ease-in-out">
                                                    <HiPlus
                                                        className={`h-4 w-6 `}
                                                        aria-hidden={true}
                                                    />
                                                    &nbsp;Add Photos
                                                </span>

                                                <input
                                                    id="file-upload"
                                                    name="file-upload"
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={uploadFile}
                                                    multiple
                                                    hidden
                                                />
                                            </label>
                                        </li>
                                    ) : null}
                                </ul>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <AnimatePresence>
                {openTipsModal && (
                    <Dialog
                        static
                        as={motion.div}
                        open={openTipsModal}
                        className="relative z-10"
                        onClose={() => setOpenTipsModal(false)}
                        animate={{
                            opacity: 1,
                        }}
                        exit={{
                            opacity: 0,
                            transition: {duration: 0.4},
                        }}
                    >
                        <div className="fixed inset-0 overflow-y-auto font-susty">
                            <div className="flex min-h-full items-center justify-center p-4 text-center bg-gray-700 bg-opacity-80">
                                <motion.div
                                    key={`modal-for-email`}
                                    initial={{scale: 0.8, opacity: 0}}
                                    animate={{
                                        scale: 1,
                                        opacity: 1,
                                        duration: 0.01,
                                    }}
                                    exit={{
                                        scale: 0,
                                        opacity: 0,
                                        duration: 0.2,
                                    }}
                                    className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
                                >
                                    <Dialog.Title as="h3" className={`mb-5`}>
                                        <p className="text-lg font-medium leading-5 text-gray-500 flex justify-between">
                                            <span>{/*Tips Modal*/}</span>
                                            <span
                                                onClick={() =>
                                                    setOpenTipsModal(false)
                                                }
                                                className={`mr-2 cursor-pointer text-susty`}
                                            >
                                                Close
                                            </span>
                                        </p>
                                    </Dialog.Title>
                                    <div className="mt-2">Nigga</div>

                                    <div className="mt-4 px-1 flex justify-between">
                                        <motion.button
                                            onClick={() =>
                                                setOpenTipsModal(false)
                                            }
                                            whileHover={{scale: 1.02}}
                                            whileTap={{scale: 0.98}}
                                            Send
                                            confirmation
                                            email
                                            className={`inline-flex items-center px-4 py-1.5 border border-gray-300 shadow-sm text-base font-medium rounded-md text-white bg-susty hover:bg-white hover:text-susty hover:border-susty focus:text-red-400 focus:border-susty focus:bg-red-50`}
                                        >
                                            <HiArrowUp className="w-4 h-4 mr-2" />
                                            Send confirmation email
                                        </motion.button>
                                        <motion.button
                                            onClick={(x) => {
                                                alert('Redirect to help page')
                                            }}
                                            whileHover={{scale: 1.02}}
                                            whileTap={{scale: 0.98}}
                                            className={`inline-flex items-center px-4 py-1.5 border border-red-300 shadow-sm text-base font-medium rounded-md text-susty bg-red-100 hover:bg-susty hover:text-white hover:border-susty focus:text-red-400 focus:border-susty focus:bg-red-50`}
                                        >
                                            <HiSupport
                                                className={`h-5 w-5 mr-2`}
                                            />
                                            Help
                                        </motion.button>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </Dialog>
                )}
            </AnimatePresence>
        </>
    )
}

export default UploadPhotos
