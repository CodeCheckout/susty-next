import React from 'react'
import {Disclosure} from '@headlessui/react'
import {HiChevronRight} from 'react-icons/hi'

const Covid = () => {
    return (
        <div className={'p-4 bg-white'}>
            <div className={'bg-white text-left'}>
                <h1 className="text-3xl font-bold mt-0 mb-4">Covid-19</h1>
                <div className="text-xs text-gray-500 mb-4">
                    Privacy settings
                </div>

                <Disclosure>
                    {({open}) => (
                        <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg  px-4 py-4 text-left text-sm md:text-base font-medium hover:bg-gray-100 focus:bg-gray-50 focus:outline-none focus-visible:ring">
                                <div className="pr-6">
                                    <div>
                                        <p className={'font-semibold'}>
                                            Safety on Susty during COVID-19
                                        </p>
                                    </div>
                                </div>
                                <HiChevronRight
                                    className={`${
                                        open ? 'rotate-90 transform' : ''
                                    } h-5 w-5 text-black`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="max-w-3xl">
                                <div className="">
                                    <div className="mx-5 p-10 bg-white text-left">
                                        <div>
                                            <h1 className="text-3xl font-bold mt-0 mb-4">
                                                Safety on Susty during COVID-19
                                            </h1>
                                            <p className="pt-5">
                                                Your safety has always been our
                                                priority, and right now, it’s
                                                more important than ever. Thus,
                                                we encourage you to learn more
                                                about the coronavirus and how to
                                                stay safe from COVID-19 while
                                                trading on Susty.
                                            </p>
                                            <p className="pt-4">
                                                Press on a topic you’re
                                                interested in, or scroll down
                                                for more information.
                                            </p>
                                            <ul className="p-3 list-decimal">
                                                <li className="pt-1">
                                                    General safety advice
                                                </li>
                                                <li className="pt-1">
                                                    Buying and selling safely
                                                </li>
                                                <li className="pt-1">
                                                    Information security advice
                                                </li>
                                            </ul>
                                            <div>
                                                <h1 className="text-3xl font-normal mt-0 mb-2 pt-8">
                                                    General safety advice
                                                </h1>
                                                <p className="pt-2 ">
                                                    Check your local government
                                                    guidelines regularly to stay
                                                    up to date with movement
                                                    restrictions and other
                                                    safety measures. Be aware
                                                    that fines or other
                                                    penalties may apply to
                                                    people who don’t follow
                                                    these guidelines.
                                                </p>
                                                <p className="pt-2">
                                                    Practice these safety
                                                    precautions, as suggested by
                                                    the WHO:
                                                </p>
                                                <ul className="pl-4 p-2 list-disc">
                                                    <li className="pt-1">
                                                        Wash your hands
                                                        regularly and thoroughly
                                                        for at least 20 seconds.
                                                        This kills viruses that
                                                        may be on your hands.
                                                    </li>
                                                    <li className="pt-1">
                                                        Avoid touching your
                                                        face. This reduces the
                                                        chances for a virus to
                                                        be transferred from your
                                                        hands to your body via
                                                        your eyes, nose, or
                                                        mouth.
                                                    </li>
                                                    <li className="pt-1">
                                                        Wear a protective face
                                                        mask when in public.
                                                    </li>
                                                    <li className="pt-1">
                                                        Cover your mouth and
                                                        nose with a tissue when
                                                        coughing or sneezing,
                                                        then throw it away and
                                                        wash your hands
                                                        immediately.
                                                        Alternatively, use your
                                                        upper sleeve or the
                                                        inside of your elbow
                                                        (not your hands). This
                                                        helps prevent the spread
                                                        of the virus.
                                                    </li>
                                                    <li className="pt-1">
                                                        Stay at least 3.3 feet
                                                        away from other people,
                                                        especially anyone who is
                                                        coughing or sneezing.
                                                        This will reduce the
                                                        chances of getting the
                                                        virus. Take extra care
                                                        if you live with someone
                                                        in a high-risk group.
                                                    </li>
                                                    <li className="pt-1">
                                                        If you feel at all
                                                        unwell, stay at home.
                                                    </li>
                                                    <li className="pt-1">
                                                        If you develop a fever
                                                        and a cough, or have
                                                        difficulty breathing,
                                                        seek medical help.
                                                    </li>
                                                </ul>
                                                <p className="pt-2">
                                                    Prioritize your health and
                                                    the health of your community
                                                    by following local
                                                    government guidelines and
                                                    international
                                                    recommendations. You can
                                                    also find advice and Q&A
                                                    from the WHO.
                                                </p>
                                            </div>
                                            <div>
                                                <h1 className="text-3xl font-normal mt-0 mb-2 pt-8">
                                                    Buying and selling safely
                                                </h1>
                                                <p className="pt-3">
                                                    If you cancel an order and
                                                    select a COVID-19-related
                                                    reason for cancelation, you
                                                    will not receive
                                                    auto-negative feedback.
                                                </p>
                                                <p className="pt-3">
                                                    Please find further advice
                                                    on how to stay safe and
                                                    protect others while buying
                                                    or selling on Susty:
                                                </p>
                                                <p className="pt-3">
                                                    The content above is based
                                                    on information publicly
                                                    posted by the WHO and the
                                                    CDC. While these are trusted
                                                    sources, we can’t guarantee
                                                    their accuracy or
                                                    reliability.
                                                </p>
                                            </div>

                                            <div>
                                                <h1 className="text-3xl font-normal mt-0 mb-1 pt-8">
                                                    Information security advice
                                                </h1>

                                                <p className="pt-3">
                                                    Phishing and malware scams
                                                    related to COVID-19 are
                                                    currently at a heightened
                                                    level across various
                                                    sectors. They are trying to
                                                    take advantage of the fears
                                                    surrounding the coronavirus.
                                                </p>
                                                <p className="pt-3">
                                                    As always, we are taking
                                                    extra care to detect scams
                                                    on Susty, and to maximize
                                                    your protection. Regardless,
                                                    please be aware of such
                                                    malicious activity and stay
                                                    cautious both on Susty and
                                                    everywhere else.
                                                </p>
                                                <p className="pt-4 font-bold">
                                                    Recognize virus-related
                                                    scams
                                                </p>
                                                <p className="pt-3">
                                                    These scams may come as
                                                    emails or personal messages
                                                    asking you to enter
                                                    credentials, open an
                                                    attachment to learn more
                                                    (potentially installing
                                                    malicious code on your
                                                    machine), or visit a
                                                    malicious clone of a website
                                                    (where your device may be
                                                    infected with malware).
                                                </p>
                                                <p className="pt-4 font-bold">
                                                    Please take the following
                                                    precautions around emails or
                                                    messages related to the
                                                    coronavirus:
                                                </p>

                                                <ol className="pl-3 p-2 list-disc">
                                                    <li className="pt-1">
                                                        Stay vigilant and always
                                                        use common sense.
                                                    </li>
                                                    <li className="pt-1">
                                                        Be skeptical of emails
                                                        claiming to be from the
                                                        Centers for Disease
                                                        Control (CDC), the World
                                                        Health Organization
                                                        (WHO), or experts saying
                                                        they have information
                                                        about the virus. Find
                                                        the authoritative
                                                        websites for those
                                                        entities rather than
                                                        clicking on links in the
                                                        email.Select{' '}
                                                        <b>Payments</b>
                                                    </li>
                                                    <li className="pt-1">
                                                        Don not enter any
                                                        personal data or
                                                        passwords on suspicious
                                                        websites, especially if
                                                        they are mentioned in
                                                        unsolicited emails.
                                                    </li>
                                                    <li className="pt-1">
                                                        Verify the source of all
                                                        requests before engaging
                                                        in a conversation.
                                                    </li>
                                                    <li className="pt-1">
                                                        Don not open any
                                                        unexpected attachments
                                                        or click suspicious
                                                        links.
                                                    </li>
                                                    <li className="pt-1">
                                                        Be aware of the
                                                        information being
                                                        requested, ignore
                                                        unsolicited requests for
                                                        information or actions.
                                                    </li>
                                                    <li className="pt-1">
                                                        Use only official Susty
                                                        communication channels
                                                        and payment services. Do
                                                        not leave the Susty app
                                                        for any kind of
                                                        activities that are not
                                                        directly related to the
                                                        service.
                                                    </li>
                                                    <li className="pt-1">
                                                        Report any suspicious
                                                        activities on Susty.
                                                    </li>
                                                </ol>
                                                <p className="pt-3">
                                                    We’re all in this together,
                                                    so let’s protect each other
                                                    and stay healthy.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>

                <Disclosure>
                    {({open}) => (
                        <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg  px-4 py-4 text-left text-sm md:text-base font-medium hover:bg-gray-100 focus:bg-gray-50 focus:outline-none focus-visible:ring">
                                <div className="pr-6">
                                    <div>
                                        <p className={'font-semibold'}>
                                            Your affected orders during COVID-19
                                        </p>
                                    </div>
                                </div>
                                <HiChevronRight
                                    className={`${
                                        open ? 'rotate-90 transform' : ''
                                    } h-5 w-5 text-black`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel>
                                <div className="max-w-3xl mt-6">
                                    <div className="mx-5 bg-white">
                                        <h1 className="text-3xl font-bold mt-0 mb-4">
                                            Your affected orders during COVID-19
                                        </h1>

                                        <p className="pt-3">
                                            In light of the present
                                            circumstances, we’re doing our best
                                            to ensure your safety and to keep
                                            Susty as convenient as possible.
                                        </p>
                                        <p className="pt-3">
                                            If you experience any issues with
                                            your current orders and their
                                            delivery, just follow our guidance
                                            below. This way, all items and
                                            payments should reach their intended
                                            recipients safely and at the
                                            earliest possible time.{' '}
                                        </p>

                                        <h1 className="text-3xl font-normal mt-0 mb-2 pt-8">
                                            Your payments are secured
                                        </h1>
                                        <p className="pt-3">
                                            If you’re a buyer, and your order is
                                            on hold due to shipping disruptions,
                                            your payment is kept safely by our
                                            payment service provider.
                                        </p>
                                        <p className="pt-3">
                                            If you’re a seller, your buyer’s
                                            payment will be held under the
                                            pending balance in your Susty
                                            Wallet. Upon order completion, the
                                            money will be released to you.
                                        </p>

                                        <h1 className="text-3xl font-normal mt-0 mb-2 pt-8">
                                            Not sure if you want to trade now?
                                        </h1>
                                        <p className="pt-3">
                                            The choice whether to be selling
                                            and/or buying is of course entirely
                                            up to you. Here are the options you
                                            are free to choose from:
                                        </p>
                                        <p className="pt-3">
                                            If you’re a seller, your buyer’s
                                            payment will be held under the
                                            pending balance in your Susty
                                            Wallet. Upon order completion, the
                                            money will be released to you.
                                        </p>
                                        <ul className="pl-3 p-2 list-disc">
                                            <li className="pt-1">
                                                Use vacation mode to hide your
                                                listings for up to 90 days.
                                            </li>
                                            <li className="pt-1">
                                                Reserve items for up to 5 days.
                                            </li>
                                        </ul>

                                        <h1 className="text-3xl font-normal mt-0 mb-2 pt-8">
                                            We’ll keep you updated
                                        </h1>
                                        <p className="pt-3">
                                            We’re keeping our finger on the
                                            pulse of the entire situation and we
                                            constantly look for ways to bring
                                            you the safest and most convenient
                                            Susty experience during this hectic
                                            time.
                                        </p>
                                        <p className="pt-3">
                                            Please check this page and our
                                            Infoboard regularly to stay up to
                                            date. Stay safe!
                                        </p>
                                    </div>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </div>
    )
}

export default Covid
