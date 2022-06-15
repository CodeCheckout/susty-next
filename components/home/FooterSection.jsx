import React from 'react'
import Link from 'next/link'

const FooterSection = () => {
    return (
        <div className={'border-t border-gray-200'}>
            <div className={'flex flex-row gap-2 sm:gap-4 mx-0.5 my-2'}>
                <Link href={'/footer/policy'}>
                    <a
                        className={
                            'text-xs md:text-sm text-gray-500 font-semibold hover:underline'
                        }
                    >
                        Privacy Policy
                    </a>
                </Link>
                <Link href={'/footer/cookiepolicy'}>
                    <a
                        className={
                            'text-xs md:text-sm text-gray-500 font-semibold hover:underline'
                        }
                    >
                        Cookie Policy
                    </a>
                </Link>
                <Link href={'/footer/privacy'}>
                    <a
                        className={
                            'text-xs md:text-sm text-gray-500 font-semibold hover:underline'
                        }
                    >
                        Cookie Settings
                    </a>
                </Link>
                <Link href={'/footer/termsandconditions'}>
                    <a
                        className={
                            'text-xs md:text-sm text-gray-500 font-semibold hover:underline'
                        }
                    >
                        Terms & Conditions
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default FooterSection
