import React from 'react'
import {Disclosure} from '@headlessui/react'
import {HiChevronRight} from 'react-icons/hi'

const NotLoggedIn = () => {
    return (
        <div className={'p-4 bg-white'}>
            <div className=" bg-white text-left">
                <h1 className="text-3xl font-bold mt-0 mb-4">Not Logged In</h1>
                <div className="text-xs text-gray-500 mb-4">Pick a topic</div>
                <Disclosure>
                    {({open}) => (
                        <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg  px-4 py-4 text-left text-sm md:text-base font-medium hover:bg-gray-100 focus:bg-gray-50 focus:outline-none focus-visible:ring">
                                <div className="pr-6">
                                    <div>
                                        <p className={'font-semibold'}>
                                            I registered using a wrong email
                                            address
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
                                <div>
                                    <h1 className="text-3xl font-bold mt-0 mb-2">
                                        I registered using a wrong email address
                                    </h1>
                                    <p className="pt-4">
                                        If you mistyped your email address while
                                        creating your Susty account, reach out
                                        to us by pressing Contact us below, and
                                        we’ll help you resolve the issue.
                                    </p>
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
                                            I don’t have an account, but I
                                            receive Susty emails
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
                                <div>
                                    <h1 className="text-3xl font-bold mt-0 mb-2">
                                        I don’t have an account, but I receive
                                        Susty emails
                                    </h1>
                                    <p className="pt-4">
                                        Received an email message from Susty
                                        though you never registered? Probably
                                        some other member mistyped their email
                                        address and it happened to be yours.
                                        Drop us a note, and we’ll resolve the
                                        issue.
                                    </p>
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
                                            Signing up on Susty
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
                                <div>
                                    <h1 className="text-3xl font-bold mt-0 mb-2">
                                        Signing up on Susty
                                    </h1>
                                    <p className="pt-4">
                                        There are 4 ways to sign up on Susty:
                                    </p>
                                    <ul className="pl-4 p-2 list-disc">
                                        <li className="pt-1">Via Facebook</li>
                                        <li className="pt-1">Via Email</li>
                                        <li className="pt-1">
                                            Via Google account
                                        </li>
                                        <li className="pt-1">Via Apple ID</li>
                                    </ul>
                                    <p>
                                        If you experience any problems signing
                                        up via one method, try the other methods
                                        too.
                                    </p>

                                    <div className="py-4">
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
                                                                    How Apple
                                                                    sign-up
                                                                    works
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
                                                        <div>
                                                            <p className="pt-4">
                                                                By using sign-up
                                                                via Apple ID,
                                                                you’ll be able
                                                                to quickly sign
                                                                in with your
                                                                Face ID, Touch
                                                                ID, or your
                                                                device’s
                                                                passcode
                                                                (depending on
                                                                the device).
                                                            </p>
                                                            <p className="pt-4">
                                                                To sign up,
                                                                you’ll have to
                                                                use your email
                                                                address.
                                                                However, you may
                                                                choose to hide
                                                                it.
                                                            </p>
                                                        </div>
                                                        <p
                                                            className={
                                                                'font-semibold'
                                                            }
                                                        >
                                                            Hidden email address
                                                        </p>
                                                        <div>
                                                            <p className="pt-4">
                                                                Instead of
                                                                openly showing
                                                                your email
                                                                address, you can
                                                                use an email
                                                                auto-generated
                                                                by Apple. All
                                                                our email
                                                                messages will be
                                                                automatically
                                                                forwarded from
                                                                there to your
                                                                real inbox.
                                                            </p>
                                                            <p className="pt-4">
                                                                This way,
                                                                neither us, nor
                                                                our third-party
                                                                service
                                                                providers will
                                                                receive your
                                                                real inbox
                                                                information.
                                                            </p>
                                                            <p className="pt-4">
                                                                The randomly
                                                                generated email
                                                                address will be
                                                                unique and
                                                                follow this
                                                                format:
                                                                unique-alphanumeric-string@privaterelay.appleid.com.
                                                            </p>
                                                        </div>
                                                        <p
                                                            className={
                                                                'font-semibold'
                                                            }
                                                        >
                                                            Apple sign-up &
                                                            Android devices
                                                        </p>
                                                        <div>
                                                            <p className="pt-4">
                                                                Our mobile app
                                                                only supports
                                                                authentication
                                                                via Apple on iOS
                                                                devices.
                                                                However, you can
                                                                sign up and log
                                                                in via Apple on
                                                                an Android
                                                                device if you
                                                                use your browser
                                                                instead.
                                                            </p>
                                                        </div>
                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                    </div>
                                    <p className={'font-semibold'}>
                                        Still can’t sign up?
                                    </p>
                                    <p className="pt-4">Follow these tips:</p>
                                    <ul className="pl-4 p-2 list-decimal">
                                        <li className="pt-1">
                                            Make sure that you don’t already
                                            have a Susty account under the same
                                            email or Facebook profile.
                                        </li>
                                        <li className="pt-1">
                                            Check your email address for typos.
                                        </li>
                                        <li className="pt-1">
                                            Make sure you’ve ticked the Terms &
                                            Conditions and Privacy Policy
                                            checkbox.
                                        </li>
                                        <li className="pt-1">
                                            Create a password that has 7 or more
                                            characters (they should include at
                                            least 1 numeral). Also, the password
                                            can't match your username.
                                        </li>
                                        <li className="pt-1">
                                            Choose another username if you see
                                            the message ‘Login name is already
                                            taken’.
                                        </li>
                                    </ul>
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
                                            Why can't I log in to my account?
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
                                <div>
                                    <h1 className="text-3xl font-bold mt-0 mb-2">
                                        Why can't I log in to my account?
                                    </h1>
                                    <p className="pt-4">
                                        If you can't access your account:
                                    </p>
                                    <ul className="pl-4 p-2 list-disc">
                                        <li className="pt-1">
                                            Try logging in with your email
                                            address instead of your username
                                            (use the email address you used to
                                            register on Susty) or with your
                                            Facebook account (if that's how you
                                            signed up for Susty).
                                        </li>
                                        <li className="pt-1">
                                            Make sure you’re trying to log in to
                                            www.Susty.com or Susty.com app.
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="pt-4">
                                        If you forgot your password:
                                    </p>
                                    <ol className="pl-4 p-2 list-decimal">
                                        <li className="pt-1">Press 'Log in'</li>
                                        <li className="pt-1">
                                            Select 'Forgot your password?'
                                        </li>
                                        <li className="pt-1">
                                            Enter your email address and then
                                            press 'Submit'
                                        </li>
                                        <li className="pt-1">
                                            Press the button 'Change password'
                                            in the mail sent by our team
                                        </li>
                                        <li className="pt-1">
                                            You’ll then be able to create a new
                                            password and regain access to your
                                            account.
                                        </li>
                                    </ol>
                                </div>
                                <div>
                                    <p className="pt-4">
                                        If you still can’t log in, your account
                                        might be on hold:
                                    </p>
                                    <ul className="pl-4 p-2 list-disc">
                                        <li className="pt-1">
                                            You might need to provide an ID
                                            proof.
                                        </li>
                                        <li className="pt-1">
                                            We might need to verify your account
                                            with a phone verification.
                                        </li>
                                        <li className="pt-1">
                                            Your account might be blocked.
                                            Contact our team to know more.
                                        </li>
                                    </ul>
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
                                            Why was my account blocked?
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
                                <div>
                                    <h1 className="text-3xl font-bold mt-0 mb-2">
                                        Why was my account blocked?
                                    </h1>
                                    <p className="pt-4">
                                        This happens when members ignore our
                                        Terms and Conditions, Catalog Rules, or
                                        Forum Rules.
                                    </p>
                                    <div>
                                        <h1 className="text-3xl font-bold mt-0 mb-2">
                                            You may be temporarily blocked
                                        </h1>
                                        <p className="pt-4">
                                            Your account will be unblocked
                                            automatically after 7-14 days. We
                                            cannot unblock it earlier, except if
                                            you prove we’ve blocked it by
                                            mistake. You'll see the block end
                                            date on the screen when you log in
                                            to Susty.
                                        </p>
                                        <p className="pt-4">
                                            We temporarily block for:
                                        </p>
                                        <ul className="pl-4 p-2 list-disc">
                                            <li className="pt-1">
                                                Offensive behavior toward
                                                members or our team or spamming
                                                on our forums
                                            </li>
                                            <li className="pt-1">
                                                Selling counterfeit items, i.e.
                                                fakes and/or unauthorized
                                                replicas of original products
                                            </li>
                                            <li className="pt-1">
                                                Promoting sell outside the Susty
                                                payment system
                                            </li>
                                            <li className="pt-1">
                                                Selling items for commercial
                                                purposes.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <h1 className="text-3xl font-bold mt-0 mb-2">
                                        You may be permanently blocked
                                    </h1>
                                    <p className="pt-4">
                                        If you're blocked permanently, you can
                                        still log in to inform your buyers about
                                        their packages, contact your sellers
                                        about receiving their items, contact us
                                        to find out when/whether your account
                                        will be unblocked or pay out your
                                        earnings. To pay out:
                                    </p>
                                    <ol className="pl-4 p-2 list-decimal">
                                        <li className="pt-1">
                                            Log in to your Susty account; you’ll
                                            be directed to your inbox
                                        </li>
                                        <li className="pt-1">
                                            Go to your Susty Wallet under your
                                            profile and make a payout
                                        </li>
                                    </ol>
                                </div>
                                <div>
                                    <p className="pt-4">
                                        We permanently block members who:
                                    </p>
                                    <ul className="pl-4 p-2 list-disc">
                                        <li className="pt-1">
                                            Commit fraud or scamming other
                                            members
                                        </li>
                                        <li className="pt-1">
                                            Having multiple accounts
                                        </li>
                                        <li className="pt-1">
                                            Repeatedly behave in a way that
                                            would otherwise cause you to be
                                            blocked temporarily
                                        </li>
                                        <li className="pt-1">
                                            Repeatedly sell counterfeit items,
                                            i.e. fakes and unauthorized replicas
                                            of original products
                                        </li>
                                        <li className="pt-1">
                                            Don't respond to our team’s messages
                                            about resolving an issue with an
                                            order
                                        </li>
                                        <li className="pt-1">
                                            Sell items that are intended to be
                                            sold for commercial purposes
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="pt-4">Good to know:</p>
                                    <ul className="pl-4 p-2 list-disc">
                                        <li className="pt-1">
                                            We always seek friendly solutions
                                            and warn members beforehand before
                                            blocking their accounts.
                                        </li>
                                    </ul>
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
                                            Why is my IP address blocked?
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
                                <div>
                                    <h1 className="text-3xl font-bold mt-0 mb-2">
                                        Why is my IP address blocked?
                                    </h1>
                                    <div>
                                        <p className="pt-4">
                                            If you see a message saying:
                                        </p>
                                        <ul className="pl-4 p-2 list-disc">
                                            <li className="pt-1">
                                                “Access to this site is blocked
                                                for this computer”; or
                                            </li>
                                            <li className="pt-1">
                                                “Access to Susty has been
                                                revoked for your IP”
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <p className="pt-4">
                                        It means one of the following:
                                    </p>
                                    <ul className="pl-4 p-2 list-disc">
                                        <li className="pt-1">
                                            You may share the same IP address
                                            with someone whose IP has been
                                            blocked
                                        </li>
                                        <li className="pt-1">
                                            You’re in a country in which Susty
                                            isn't available (e.g. India, China)
                                        </li>
                                        <li className="pt-1">
                                            Your IP has been blocked due to
                                            illegal, fraudulent, or offensive
                                            activity on Susty
                                        </li>
                                        <li className="pt-1">
                                            Your IP is blocked on Forum Spam
                                            List.
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="pt-4">
                                        Please note that a blocked Susty
                                        account, a blocked IP address, and a
                                        blocked member are all different things.
                                        You can find more info about this in the
                                        related FAQs below.
                                    </p>
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
                                            How do I change my password?
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
                                <div>
                                    <h1 className="text-3xl font-bold mt-0 mb-2">
                                        How do I change my password?
                                    </h1>
                                    <div>
                                        <p className="pt-4">
                                            Changing your Susty password is
                                            easy:
                                        </p>
                                        <ol className="pl-4 p-2 list-decimal">
                                            <li className="pt-1">
                                                Click on your profile icon at
                                                the top right
                                            </li>
                                            <li className="pt-1">
                                                Go to “Settings” and then
                                                “Account settings”
                                            </li>
                                            <li className="pt-1">
                                                Click on the “Change” button
                                                next to “Change password”
                                            </li>
                                            <li className="pt-1">
                                                Enter your current password and
                                                create a new password. Re-enter
                                                it to ensure you typed it
                                                correctly
                                            </li>
                                            <li className="pt-1">
                                                Click the “Change password”
                                                button to save your new password
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                                <div>
                                    <p className="pt-4">
                                        Done! You’ll get a confirmation sent to
                                        the email address you’re registered with
                                        on Susty.
                                    </p>
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
                                            Trying to register on Susty, but my
                                            email is taken
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
                                <div>
                                    <h1 className="text-3xl font-bold mt-0 mb-2">
                                        Trying to register on Susty, but my
                                        email is taken
                                    </h1>
                                    <div>
                                        <p className="pt-4">
                                            It’s possible that you have created
                                            a Susty account some time ago and
                                            forgot about it. To check if that’s
                                            the case, press Forgot your
                                            password? on the login screen and
                                            enter your email address.
                                        </p>
                                        <p className="pt-4">
                                            Within a few minutes, you will
                                            receive a password reset link to
                                            your email. Press on the link to
                                            create a new password and log in to
                                            Susty.
                                        </p>
                                        <p className="pt-4">
                                            If you don’t receive the password
                                            reset link, or you’re sure that
                                            you’ve never created a Susty account
                                            before, press the Contact us button
                                            below.
                                        </p>
                                        <p className="pt-4">
                                            In your message, explain the
                                            situation. If you’ve created an
                                            account before, include your
                                            username and the email address you
                                            used to register on Susty. We’ll
                                            look into it and offer guidance to
                                            you shortly.
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

export default NotLoggedIn
