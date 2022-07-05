import React from 'react';

const people = [
    {
        name: "Lindsay Walton",
        title: "Front-end Developer",
        email: "lindsay.walton@example.com",
        role: "Member",
    },
    {
        name: "Lindsay Walton",
        title: "Front-end Developer",
        email: "lindsay.walton@example.com",
        role: "Member",
    },  {
        name: "Lindsay Walton",
        title: "Front-end Developer",
        email: "lindsay.walton@example.com",
        role: "Member",
    },
    {
        name: "Lindsay Walton",
        title: "Front-end Developer",
        email: "lindsay.walton@example.com",
        role: "Member",
    },
];

const CookiePolicy = () => {
    return (
        <div className={'bg-gray-100 px-2 sm:px-6 md:px-10 lg:px-52'}>
            <div className="py-12">
                <div className="bg-white max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-6">
                    <div className="lg:text-left">
                        <p className="mt-2 text-2xl leading-8 font-semibold text-gray-900 sm:text-4xl">
                            Cookie Policy
                        </p>
                        <p className="leading-normal text-sm text-gray-500 mt-2 ">
                            Date last updated: 10-11-2021
                        </p>
                        <p className="leading-normal text-gray-600 mt-5">
                            When you use Vinted Website or App (jointly “Platform”), we and
                            our partners may automatically store and/or access information on
                            your device via cookies or similar technologies to process
                            personal data for the operation of the Platform, manage behavioral
                            advertising sent to you on the Platform and third-party sites, and
                            analyze your use of the Platform. This Cookie Policy explains what
                            cookies are, how they are used on our Platform, and how you can
                            manage them.
                            <br />
                            For general information on Vinted’s data practices, please read
                            our Privacy Policy. The capitalized terms used in this Cookie
                            Policy have the same meaning as in the Privacy Policy.
                        </p>
                        <div className="leading-loose mt-5 ml-4">
                            <ol className="list-decimal">
                                <li className="no-underline hover:underline text-susty font-medium">
                                    What are cookies?
                                </li>
                                <li className="no-underline hover:underline text-susty font-medium">
                                    Why do you use cookies?
                                </li>
                                <li className="no-underline hover:underline text-susty font-medium">
                                    What information do cookies facilitate collecting?
                                </li>
                                <li className="no-underline hover:underline text-susty font-medium">
                                    How can I manage cookies?
                                </li>
                                <li className="no-underline hover:underline text-susty font-medium">
                                    What cookies do you use?
                                </li>
                                <li className="no-underline hover:underline text-susty font-medium">
                                    Do you use partners to place ads on the Platform?
                                </li>
                                <li className="no-underline hover:underline text-susty font-medium">
                                    Google Remarketing: what is this and why do you use it?
                                </li>
                                <li className="no-underline hover:underline text-susty font-medium">
                                    Google Analytics: what is this and why do you use it?
                                </li>
                                <li className="no-underline hover:underline text-susty font-medium">
                                    Google Adsense: what is this and why do you use it?
                                </li>
                            </ol>
                        </div>
                        <div>
                            <p className="leading-loose my-5 text-3xl font-semibold">
                                1. What are cookies?
                            </p>
                        </div>
                        <div className={"flex flex-col gap-3 text-gray-700"}>
                            <p className={"leading-relaxed text-md"}>
                                Cookies are small text files that are stored by your browser on
                                your device (e.g., computer, mobile phone, tablet) when you
                                browse websites. Other technologies, including any means for
                                storing data on your web browser or device, identifiers
                                associated with your device, and other software, are used for
                                similar purposes. They are widely used to make websites work or
                                function in a better, more efficient way. In this Cookie Policy,
                                we refer to all of these technologies as “cookies”.
                            </p>
                            <p className={"leading-relaxed text-md"}>
                                Unless stated otherwise, the cookies we use are necessary for
                                the functionality and performance of the Platform. This includes
                                cookies that enable you to register for the protected areas of
                                our Platform, to buy an item or to use the electronic payment
                                system. Some cookies are deleted from your device after the end
                                of your browser session (session cookies). The information saved
                                in the necessary cookies will be used by us solely to provide
                                the services and functions requested.
                            </p>
                        </div>
                        <div>
                            <p className="leading-loose my-5 text-3xl font-semibold">
                                2. Why do you use cookies?
                            </p>
                        </div>
                        <div className={"flex flex-col gap-3 text-gray-700"}>
                            <p className={"leading-relaxed text-md"}>We use cookies to:</p>

                            <ul className="list-disc leading-relaxed text-md ml-5">
                                <li>Make our Platform work as you would expect.</li>
                                <li>Improve the speed/security of the Platform.</li>
                                <li>
                                    Recognize you when you revisit our Platform. This helps us to
                                    personalize our content for you and note your preferences (
                                    “functional cookies”).
                                </li>
                                <li>
                                    Recognize how many visitors visit our Platform and how they
                                    behave when they are here. This helps us improve the
                                    functionality of our Platform, e.g., by ensuring that users
                                    can find what they are looking for (“analytical/performance
                                    cookies”).
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="leading-loose my-5 text-3xl font-semibold">
                                3. What information do cookies facilitate collecting?
                            </p>
                        </div>
                        <div className={"flex flex-col gap-3 text-gray-700"}>
                            <p className={"leading-relaxed text-md"}>
                                The information we may collect through cookies includes
                                information such as unique identification tokens to enable
                                features or information about your current browsing session
                                (e.g., IP addresses, browser type, internet service provider,
                                referring/exit pages, operating system, website usage, date/time
                                stamp and/or clickstream data).
                            </p>
                        </div>

                        <div>
                            <p className="leading-loose my-5 text-3xl font-semibold">
                                4. How can I manage cookies?
                            </p>
                        </div>
                        <div className={"flex flex-col gap-3 text-gray-700"}>
                            <div className="px-4 sm:px-6 lg:px-8">
                                <div className="mt-8 flex flex-col">
                                    <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                            <table className="min-w-full divide-y divide-gray-300">
                                                <thead>
                                                <tr >
                                                    <th
                                                        scope="col"
                                                        className=" bg-gray-200 py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0"
                                                    >
                                                        Name
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="bg-gray-200 py-3.5 px-3 text-center text-sm font-semibold text-gray-900"
                                                    >
                                                        Title
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="bg-gray-200 py-3.5 px-3 text-center text-sm font-semibold text-gray-900"
                                                    >
                                                        Email
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="bg-gray-200  py-3.5 px-3 text-center text-sm font-semibold text-gray-900"
                                                    >
                                                        Role
                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200">
                                                {people.map((person) => (
                                                    <tr key={person.email}>
                                                        <td className="text-center whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0">
                                                            {person.name}
                                                        </td>
                                                        <td className="text-center whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                                                            {person.title}
                                                        </td>
                                                        <td className="text-center whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                                                            {person.email}
                                                        </td>
                                                        <td className="text-center whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                                                            {person.role}
                                                        </td>
                                                    </tr>
                                                ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CookiePolicy;