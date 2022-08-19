import React from 'react'

const WalletSubSection = () => {
    return (
        <div className={'m-3 bg-white p-4'}>
            <div className=" bg-white text-left">
                <h1 className="mt-0 mb-4 text-base font-semibold">
                    August 2022
                </h1>

                <div className="flex w-full justify-between pl-2">
                    <div>Pending balance </div>
                    <div>$0.00</div>
                </div>
                <hr className="my-3" />
                <div className="flex w-full justify-between pl-2">
                    <div>
                        <div className="text-2xl font-semibold">$0.00</div>
                        <div>Available balance</div>
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            className={
                                'flex items-center gap-1 rounded-md bg-susty px-2.5 py-1.5 text-xs font-semibold text-white'
                            }
                            onClick={() => {}}
                        >
                            Activate Wallet
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WalletSubSection
