import React from 'react';
import LoginSignupButton from "../buttons/LoginSignupButton";

const Header = () => {
    return (
        <div className={`bg-red-100 py-6 px-4`}>
            <LoginSignupButton/>
        </div>
    );
};

export default Header;
