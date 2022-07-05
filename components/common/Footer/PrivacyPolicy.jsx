import React from 'react';
import {Disclosure} from "@headlessui/react";
import {FiChevronUp} from 'react-icons/fi'
import Link from "next/link";

const PrivacyPolicy = () => {
    return (
        <div className={'bg-gray-100 px-2 sm:px-6 md:px-10 lg:px-52'}>
            <div className="py-12">
                <div className="bg-white max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-6">
                    <div className="lg:text-left">
                        <p className="mt-2 text-2xl leading-8 font-semibold text-gray-900 sm:text-4xl">
                            Susty Privacy Policy
                        </p>
                        <p className="leading-normal text-sm text-gray-500 mt-2 ">Date last updated: 06-10-2022 </p>
                        <p className="leading-normal text-gray-600 mt-5">
                            When it comes to your personal data, safety and transparency take
                            top priority here at Susty. To help you understand what
                            information we collect about you, how we use it and what rights
                            you have, we’ve prepared this detailed Privacy Policy.
                        </p>
                        <div className="leading-loose mt-5 ml-4">
                            <ol className="list-decimal">
                                <li className="no-underline hover:underline text-susty font-medium">
                                    General
                                </li>
                                <li className="no-underline hover:underline text-susty font-medium">
                                    Why and how do we collect and use your personal data?
                                </li>
                                <li className="no-underline hover:underline text-susty font-medium">
                                    Personal data recipients
                                </li>
                                <li className="no-underline hover:underline text-susty font-medium">
                                    Use of cookies
                                </li>
                                <li className="no-underline hover:underline text-susty font-medium">
                                    Right of amendment
                                </li>
                                <li className="no-underline hover:underline text-susty font-medium">
                                    Your statutory rights regarding your personal data
                                </li>
                                <li className="no-underline hover:underline text-susty font-medium">
                                    Our contact details
                                </li>
                            </ol>
                        </div>
                        <div>
                            <p className="leading-relaxed my-5 text-2xl sm:text-3xl font-semibold">1. General</p>
                        </div>
                        <div className={'flex flex-col gap-3 text-gray-700'}>
                            <p className={'leading-relaxed text-md'}>
                                This Privacy Policy applies to the online platform Susty
                                (“Website”) and to the associated app (“App”) (the Website and the
                                App are jointly referred to as the “Platform”) intended for New
                                Zealand and Australia users.
                            </p>
                            <p className={'leading-relaxed text-md'}>
                                The Platform is operated by Susty Inc., a company
                                registered in Delaware, with business location at C/o AG
                                Accounting 735 Geary St. #303 San Francisco, CA 94109. The
                                operator is further referred to as “We”, “Us” or “Susty”. More
                                details about how to get in contact with us can be found at the
                                end of this Privacy Policy under No. 7.
                            </p>
                            <p className={'leading-relaxed text-md'}>
                                We take your privacy extremely seriously. All personal data will be collected, stored
                                and used by us in accordance with the European Union General Data
                                Protection Regulation No. 2016/679 (“GDPR”) and/or other
                                applicable statutory regulations.
                            </p>
                            <p className={'leading-relaxed text-md'}>
                                If you are a New Zealand resident, please see our <Link href="/footer/AboutYourPrivacy"><a
                                className={'text-susty hover:underline'}>New Zealand Privacy Policy.</a></Link>
                            </p>
                            <p className={'leading-relaxed text-md'}>
                                The services offered by us via the Website and/or App can function only if we
                                collect, store, transfer, delete and/or otherwise use (“collect
                                and use”) specific data relating to you (“personal data” or
                                “data”). Personal data means all information relating to an
                                identified or identifiable natural person such as your name, date
                                of birth, address, or email address.
                            </p>
                            <p className={'leading-relaxed text-md'}>
                                This Privacy Policy describes what type of data we collect from you and for what
                                purposes we
                                collect and use it when you use the services offered by Us on the
                                Platform. This Privacy Policy also contains important information
                                on the protection of your data, especially the statutory rights
                                you have in connection with it.
                            </p>
                            <p className={'leading-relaxed text-md'}>
                                Certain services on our Platform
                                are offered by third-party suppliers. When you use these services,
                                the data protection regulations that govern third-party suppliers
                                will then apply in addition to this data protection statement.
                                Prior to your use of such services, the third-party suppliers may
                                require you to provide permission under the data protection law.
                            </p>
                            <p className={'leading-relaxed text-md'}>
                                Under applicable data protection laws, Susty is obligated to
                                inform you about data processing and Susty fulfills this
                                obligation within this Privacy Policy. This Privacy Policy and any
                                parts of it are not meant as contractual clauses and do not form
                                part of the <Link href="/footer/AboutYourPrivacy"><a
                                className={'text-susty hover:underline'}>general terms and conditions</a></Link> (“GTC”)
                                as a contract
                                that is concluded with registered users. Under applicable data
                                protection laws, Susty can process data that is necessary for the
                                fulfillment of a contract with you or necessary for taking steps
                                at your request prior to entering into a contract (Art. 6 (1) (b)
                                GDPR). References to the GTC should always be understood as
                                information on data processing (Art. 13 and 14 GDPR) and never as
                                clauses that form part of the GTC. By using the Platform and our
                                services, you enter into a legally binding contract between you
                                and Susty, the conditions of which are described in the GTC.
                            </p>
                        </div>
                        <div>
                            <p className="leading-relaxed my-5 text-2xl sm:text-3xl font-semibold">
                                2. Why and how do we collect and use your personal data?
                            </p>
                        </div>
                        <div>
                            <p className="leading-normal font-medium mb-5 text-lg sm:text-2xl">
                                2.1 To enable you to use the Platform, allow us to provide our services and perform our
                                GTC
                            </p>
                        </div>
                        <div className={'flex flex-col gap-3 text-gray-700'}>
                            <p className={'leading-relaxed text-md'}>
                                We collect and use your personal data to allow you to use our Platform, to provide our
                                services and to fulfill a contract (GTC) with you and above all, to carry out commercial
                                transactions via the Platform, to use the electronic payment system or to leave reviews
                                and
                                communicate with other members. To use these services, you need a Susty account. For
                                this
                                purpose, you must register as a member on the Website or App.
                            </p>
                            <p className={'leading-relaxed text-md'}>
                                Most of your personal data is required to fulfill a contract (GTC) with you. If you do
                                not provide us with this personal data, we will not be able to enter into and fulfill a
                                contract (GTC) with you. A portion of your data is required to fulfill our legal
                                obligations when you become a member of our Platform. If you do not provide us with this
                                personal data, we will not be able to comply with legal requirements or provide our
                                services.
                            </p>
                            <p className={'leading-relaxed text-md'}>
                                This data is also used for improvement of the Platform in order to enhance user
                                experience for our members (see 2.2.12).
                            </p>
                            <p className={'leading-relaxed text-md'}>
                                We collect and use your personal data for these purposes until your Susty account is
                                deactivated or inactive for five (5) years.
                            </p>
                        </div>
                        <div className="w-full px-2 sm:px-4 pt-8">
                            <div className="mx-auto w-full w-auto rounded-2xl bg-white p-2">
                                <Disclosure>
                                    {({open}) => (
                                        <>
                                            <Disclosure.Button
                                                className="flex flex-row w-full justify-between px-2 sm:px-4 py-2 text-left text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-75">
                        <span>
                          2.1.1. To enable registration on the Platform
                        </span>
                                                <FiChevronUp
                                                    className={`${
                                                        open ? "rotate-180 transform" : ""
                                                    } h-5 w-5 text-susty`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                                <div className={'flex flex-col gap-3'}>
                                                    <p>
                                                        When you register as a member on the Platform, you must provide
                                                        the following data in order to complete the registration
                                                        procedure and access your Susty account:
                                                    </p>
                                                    <div className="leading-loose my-2 ml-4">
                                                        <ul className={'list-disc'}>
                                                            <li>Username (necessary when you register without a Facebook
                                                                or Google account);
                                                            </li>
                                                            <li>Full name;</li>
                                                            <li>Email address;</li>
                                                            <li>ZIP code;</li>
                                                            <li>Confirmation that you are aged over 18;</li>
                                                            <li>Password (necessary when you register without a Facebook
                                                                or Google account).
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <p>
                                                        Legal basis for the collection and use of data is the
                                                        fulfillment of a contract (GTC) to which you are party or in
                                                        order to take steps at your request prior to entering into a
                                                        contract (GTC) (Art. 6 (1) (b) of the GDPR).
                                                    </p>
                                                    <p>
                                                        We also determine your location (country) based on your IP
                                                        address at the time of registration, which is to be shown on
                                                        your profile. You can choose to change your location (country,
                                                        city or region) at any time and make your city or region
                                                        invisible to other members by going to "My settings" in your
                                                        Susty account.
                                                    </p>
                                                    <p>
                                                        We collect and use your personal data for this purpose until
                                                        your Susty account is deactivated or inactive for five (5)
                                                        years.
                                                    </p>
                                                </div>
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                                <Disclosure as="div" className="mt-2">
                                    {({open}) => (
                                        <>
                                            <Disclosure.Button
                                                className="flex flex-row w-full justify-between px-2 sm:px-4 py-2 text-left text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-75">
                                                <span>2.1.2. To authenticate your identity via Google, Facebook or using an Apple ID</span>
                                                <FiChevronUp
                                                    className={`${
                                                        open ? "rotate-180 transform" : ""
                                                    } h-5 w-5 text-susty`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                                <div className={'flex flex-col gap-3'}>
                                                    <p>
                                                        If you register using your Google Ireland Ltd. (Ireland), Google
                                                        LLC (USA) (“Google”) or Meta Platforms Ireland Ltd. (Ireland),
                                                        Meta Platforms, Inc. (USA) (“Facebook”), or Apple Inc. (USA)
                                                        (“Apple”) account or later on decide to link your Google,
                                                        Facebook or Apple account to your Susty account, you will be
                                                        transferred from our Platform to the Google, Facebook or Apple
                                                        website and asked to enter the log-in information for your
                                                        Google, Facebook or Apple ID account.
                                                    </p>
                                                    <p>
                                                        If you enter your Google log-in information, Google will share
                                                        the following data with Susty from your Google account (you may
                                                        choose not to provide some data):
                                                    </p>
                                                    <div className="leading-loose my-2 ml-4">
                                                        <ul className={'list-disc'}>
                                                            <li>Profile photo;</li>
                                                            <li>Full name;</li>
                                                            <li>Google account ID;</li>
                                                            <li>Email address.</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;