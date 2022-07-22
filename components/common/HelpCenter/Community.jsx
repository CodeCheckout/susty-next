import React from 'react'
import {Disclosure} from '@headlessui/react'
import {HiChevronRight} from 'react-icons/hi'

const Community = () => {
    return (
        <div className={'p-4 bg-white'}>
            <div className="bg-white text-left">
                <h1 className="text-3xl font-bold mt-0 mb-4">Community</h1>
                <div className="text-xs text-gray-500 mb-4">Pick a topic</div>

                <Disclosure>
                    {({open}) => (
                        <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg  px-4 py-4 text-left text-sm md:text-base font-medium hover:bg-gray-100 focus:bg-gray-50 focus:outline-none focus-visible:ring">
                                <div className="pr-6">
                                    <div>
                                        <p className={'font-semibold'}>Forum</p>
                                    </div>
                                </div>
                                <HiChevronRight
                                    className={`${
                                        open ? 'rotate-90 transform' : ''
                                    } h-5 w-5 text-black`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="max-w-3xl p-4">
                                <h1 className="text-3xl font-bold mt-0 mb-2">
                                    Forum rules and guidelines
                                </h1>
                                <p className="pt-4">
                                    The Susty forum is a place for discussion,
                                    sharing selling and buying experiences and
                                    tips among members. When using the forum, we
                                    ask members to follow the forum rules.{' '}
                                </p>

                                <h1 className="text-xl font-semibold mt-6 mb-2">
                                    To ensure that we keep the forum safe for
                                    everyone, these things are strictly
                                    forbidden:{' '}
                                </h1>
                                <ul className="pl-4 p-2 list-disc">
                                    <li className="pt-1">
                                        Violent, hateful, racist, extremist,
                                        sexist, discriminating, pornographic or
                                        sexual posts and messages that encourage
                                        immoral, inhumane, and illegal acts or
                                        contain links to pages with the type of
                                        content mentioned above.
                                    </li>
                                    <li className="pt-1">
                                        Accusations, insults of any kind,
                                        bullying, spamming, trolling,
                                        harassment, or any encouragement to
                                        violate our Forum rules.
                                    </li>
                                </ul>

                                <h1 className="text-xl font-semibold mt-6 mb-2">
                                    Things to remember:
                                </h1>
                                <ul className="pl-4 p-2 list-disc">
                                    <li className="pt-1">
                                        You are legally responsible for the
                                        content you post on the forum.{' '}
                                    </li>
                                    <li className="pt-1">
                                        Medical or legal opinions posted in the
                                        forum aren't verified. We always
                                        recommend contacting a professional.
                                        Also, please be aware that giving legal
                                        and medical advice that professionals
                                        would normally give isn’t allowed on the
                                        forum.
                                    </li>
                                    <li className="pt-1">
                                        Commercial advertising isn’t allowed.
                                    </li>
                                    <li className="pt-1">
                                        If you happen to ignore the Forum rules
                                        repeatedly, this may lead to a ban from
                                        the forum or having your account
                                        blocked.
                                    </li>
                                </ul>

                                <h1 className="text-xl font-semibold mt-6 mb-2">
                                    We advise you to:
                                </h1>
                                <ul className="pl-4 p-2 list-disc">
                                    <li className="pt-1">
                                        Always choose the correct Forum category
                                        and create a clear title for the post.
                                        For more tips, please take a look at the
                                        general guidelines on posting.
                                    </li>
                                    <li className="pt-1">
                                        Never disclose any private info (e.g.,
                                        phone numbers, postal addresses, bank
                                        details, usernames of members that
                                        you're having trouble with, and similar
                                        details).
                                    </li>
                                </ul>

                                <p className="pt-4">
                                    Please check the complete list of the Forum
                                    rules. If you notice some inappropriate
                                    content or behavior that violates the rules,
                                    please report it to us.{' '}
                                </p>
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
                                            Members
                                        </p>
                                    </div>
                                </div>
                                <HiChevronRight
                                    className={`${
                                        open ? 'rotate-90 transform' : ''
                                    } h-5 w-5 text-black`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="max-w-3xl p-4">
                                <h1 className="text-3xl font-bold mt-0 mb-2">
                                    Community standards
                                </h1>
                                <p className="pt-4">
                                    These community standards will help keep
                                    Susty open to all and create a community
                                    where members feel safe:
                                </p>

                                <div className="pt-3">
                                    <Disclosure>
                                        {({open}) => (
                                            <>
                                                <Disclosure.Button className="flex w-full justify-between rounded-lg  px-4 py-4 text-left text-sm md:text-base font-medium hover:bg-gray-100 focus:bg-gray-50 focus:outline-none focus-visible:ring">
                                                    <div className="pr-6">
                                                        <div>
                                                            <p
                                                                className={
                                                                    'font-semibold'
                                                                }
                                                            >
                                                                Safety
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <HiChevronRight
                                                        className={`${
                                                            open
                                                                ? 'rotate-90 transform'
                                                                : ''
                                                        } h-5 w-5 text-black`}
                                                    />
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="max-w-3xl p-4">
                                                    <p className="pt-4">
                                                        We focus on maintaining
                                                        a high standard of
                                                        personal and platform
                                                        security for all
                                                        members, as stated in
                                                        our Trust and Safety
                                                        policies.{' '}
                                                    </p>

                                                    <p className="pt-4">
                                                        For extra safety, we
                                                        advise you not to:
                                                    </p>
                                                    <ul className="pl-4 p-2 list-disc">
                                                        <li className="pt-1">
                                                            Disclose any private
                                                            information like
                                                            full names,
                                                            addresses, telephone
                                                            numbers, or bank
                                                            details on your
                                                            conversations with
                                                            other members, on
                                                            the forums, or in
                                                            feedback messages —
                                                            if you decide to
                                                            make a order
                                                            directly with the
                                                            seller (outside our
                                                            integrated payment
                                                            system), it is at
                                                            your own risk.
                                                        </li>
                                                        <li className="pt-1">
                                                            Reply to any spam or
                                                            spoof mail
                                                            containing phishing
                                                            messages regarding
                                                            your activity or
                                                            account on Susty
                                                        </li>
                                                        <li className="pt-1">
                                                            Disclose any
                                                            pictures of yourself
                                                            or anyone wearing an
                                                            item you’re selling,
                                                            where a face is
                                                            visible
                                                        </li>
                                                        <li className="pt-1">
                                                            Have any
                                                            conversation outside
                                                            of Susty — always
                                                            use our secure
                                                            conversation screen
                                                        </li>
                                                    </ul>
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                </div>
                                <Disclosure>
                                    {({open}) => (
                                        <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg  px-4 py-4 text-left text-sm md:text-base font-medium hover:bg-gray-100 focus:bg-gray-50 focus:outline-none focus-visible:ring">
                                                <div className="pr-6">
                                                    <div>
                                                        <p
                                                            className={
                                                                'font-semibold'
                                                            }
                                                        >
                                                            Hate speech &
                                                            Discrimination
                                                        </p>
                                                    </div>
                                                </div>
                                                <HiChevronRight
                                                    className={`${
                                                        open
                                                            ? 'rotate-90 transform'
                                                            : ''
                                                    } h-5 w-5 text-black`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="max-w-3xl p-4">
                                                <p className="pt-4">
                                                    Ensuring you’re protected
                                                    while connecting to the
                                                    community is one of our top
                                                    commitments. Susty is a
                                                    place where we welcome
                                                    people of all backgrounds to
                                                    interact while buying,
                                                    selling, and exchanging
                                                    their goods.{' '}
                                                </p>
                                                <p className="pt-4">
                                                    We have no room for any
                                                    content or action of
                                                    discrimination or hate
                                                    speech directed toward other
                                                    people, including but not
                                                    limited to race, ethnicity,
                                                    nationality, disability,
                                                    religious affiliation,
                                                    caste, sexual orientation,
                                                    sex, gender identity, and
                                                    health.
                                                </p>
                                                <p className="pt-4">
                                                    Any hate speech directed to
                                                    a person or group of people
                                                    will be stopped by Team
                                                    Susty. If a member violates
                                                    our community standards, we
                                                    may block their account
                                                    either temporarily or
                                                    permanently.{' '}
                                                </p>
                                                <p className="pt-4">
                                                    Please report when you spot
                                                    members engaging in
                                                    inappropriate activities,
                                                    such as posting insulting
                                                    comments, harassing other
                                                    members, or acting phishy.
                                                    We’ll investigate and take
                                                    action to resolve the issue.
                                                </p>
                                                <p className="pt-4">
                                                    We also aim to prevent
                                                    potential offline harm and
                                                    don’t allow support,
                                                    encouragement, or praise of
                                                    terrorism. Any content
                                                    related to terrorist
                                                    activities, organized
                                                    violence, or hate groups
                                                    will be removed by Susty. If
                                                    you think a criminal act is
                                                    being organized on Susty,
                                                    please make sure to report
                                                    it.{' '}
                                                </p>
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
                                                        <p
                                                            className={
                                                                'font-semibold'
                                                            }
                                                        >
                                                            Sexual exploitation
                                                            & Nudity
                                                        </p>
                                                    </div>
                                                </div>
                                                <HiChevronRight
                                                    className={`${
                                                        open
                                                            ? 'rotate-90 transform'
                                                            : ''
                                                    } h-5 w-5 text-black`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="max-w-3xl p-4">
                                                <p className="pt-4">
                                                    We ask our members not to
                                                    post anything vulgar,
                                                    pornographic, or obscene. We
                                                    have zero tolerance when it
                                                    comes to communicating in a
                                                    sexually explicit manner
                                                    toward anyone on Susty.
                                                    Child pornography, other
                                                    pornography, sexually
                                                    explicit content or
                                                    language, or any other type
                                                    of content that displays or
                                                    advocates sexual acts will
                                                    be removed by Susty. If
                                                    someone attempts to abuse
                                                    you or displays nudity or
                                                    sexual imagery in a private
                                                    message or forum, make sure
                                                    to report them.
                                                </p>
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
                                                        <p
                                                            className={
                                                                'font-semibold'
                                                            }
                                                        >
                                                            Forum & Private
                                                            messages
                                                        </p>
                                                    </div>
                                                </div>
                                                <HiChevronRight
                                                    className={`${
                                                        open
                                                            ? 'rotate-90 transform'
                                                            : ''
                                                    } h-5 w-5 text-black`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="max-w-3xl p-4">
                                                <p className="pt-4">
                                                    The forum is a place only
                                                    for discussion,
                                                    encouragement, and help
                                                    lifting each others'
                                                    spirits. Therefore, we ask
                                                    our members to follow our
                                                    forum rules.
                                                </p>
                                                <p className="pt-4">
                                                    Similarly, the exchange of
                                                    private messages between
                                                    members mainly aims at
                                                    exchanging information
                                                    regarding the items on the
                                                    platform.
                                                </p>
                                                <p className="pt-4">
                                                    Violent, hateful, racist,
                                                    extremist, shocking, sexist,
                                                    discriminating,
                                                    pornographic, or sexual
                                                    posts are strictly
                                                    prohibited, as well as
                                                    messages containing
                                                    descriptions of illegal,
                                                    immoral, or inhumane acts,
                                                    messages that encourage
                                                    illegal acts or drug use, or
                                                    links to pages with the type
                                                    of content mentioned above.
                                                </p>
                                                <p className="pt-4">
                                                    Private messages or any
                                                    comments on the forum should
                                                    always show respect to
                                                    everyone involved. Anything
                                                    that is indecent, hateful,
                                                    or illegal will be removed
                                                    by Susty, as per our Terms
                                                    and Conditions.
                                                </p>
                                                <p className="pt-4">
                                                    If a forum topic or a
                                                    private message seems
                                                    inappropriate, is spam,
                                                    violates our Forum rules and
                                                    community standards, or
                                                    seems to be a threat to the
                                                    whole Susty community,
                                                    please help us spot it by
                                                    reporting it to Team Susty.
                                                </p>
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
                                                        <p
                                                            className={
                                                                'font-semibold'
                                                            }
                                                        >
                                                            Prohibited items
                                                        </p>
                                                    </div>
                                                </div>
                                                <HiChevronRight
                                                    className={`${
                                                        open
                                                            ? 'rotate-90 transform'
                                                            : ''
                                                    } h-5 w-5 text-black`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="max-w-3xl p-4">
                                                <p className="pt-4">
                                                    We seek to ensure member
                                                    safety when selling and
                                                    buying, while encouraging
                                                    members to:{' '}
                                                </p>

                                                <ul className="pl-4 p-2 list-disc">
                                                    <li className="pt-1">
                                                        Get familiar with
                                                        prohibited items in our
                                                        Catalog Rules and make
                                                        sure their listings and
                                                        items comply with it
                                                    </li>
                                                    <li className="pt-1">
                                                        Report sellers who list
                                                        prohibited items
                                                    </li>
                                                </ul>

                                                <p className="pt-4">
                                                    If we discover that certain
                                                    items violate our terms or
                                                    pose any risk to our
                                                    members, we may have to
                                                    remove those items even if
                                                    they’re not included in our
                                                    catalog rules list.
                                                </p>
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
                                                        <p
                                                            className={
                                                                'font-semibold'
                                                            }
                                                        >
                                                            Authenticity
                                                        </p>
                                                    </div>
                                                </div>
                                                <HiChevronRight
                                                    className={`${
                                                        open
                                                            ? 'rotate-90 transform'
                                                            : ''
                                                    } h-5 w-5 text-black`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="max-w-3xl p-4">
                                                <p className="pt-4">
                                                    Susty has a zero-tolerance
                                                    policy when it comes to
                                                    replicas. All luxury items
                                                    must have proof listed;
                                                    otherwise, they’ll end up
                                                    hidden or deleted.{' '}
                                                </p>
                                                <p className="pt-4">
                                                    We don’t allow counterfeit
                                                    items, imitations, replicas
                                                    and fake branded products,
                                                    i.e. the manufacturing,
                                                    import, and sale of products
                                                    that falsely carry the
                                                    trademark of a genuine brand
                                                    or give impressions of being
                                                    genuine branded products,
                                                    therefore infringing
                                                    intellectual property
                                                    rights.{' '}
                                                </p>
                                                <p className="pt-4">
                                                    Listing items that are
                                                    counterfeit or imitate
                                                    authentic products is
                                                    against the law, third-party
                                                    rights, and Susty policies.
                                                    Make sure to take a few
                                                    minutes to read our Privacy
                                                    Policy.
                                                </p>
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>

                                <p className="pt-4">
                                    These standards intend to make everyone's
                                    environment on Susty safe, so if you ever
                                    feel otherwise or spot anything that
                                    shouldn't be on Susty — please report it to
                                    our team. Let’s be kind and respect each
                                    other to make
                                </p>
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
                                            Send us your feedback
                                        </p>
                                    </div>
                                </div>
                                <HiChevronRight
                                    className={`${
                                        open ? 'rotate-90 transform' : ''
                                    } h-5 w-5 text-black`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="max-w-3xl p-4">
                                <h1 className="text-3xl font-bold mt-0 mb-2">
                                    Send us your feedback
                                </h1>
                                <p className="pt-4">
                                    We’re always eager to hear what you think
                                    about Susty. Do you love a particular
                                    feature, or have you got an idea of how we
                                    can make your experience better?
                                </p>
                                <p className="pt-4">
                                    Your insight can help us bring to life the
                                    improvements that you need the most, so
                                    don’t hesitate and share your thoughts. We
                                    value every opinion we get!
                                </p>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </div>
    )
}

export default Community
