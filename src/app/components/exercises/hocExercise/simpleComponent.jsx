import React, { useState } from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    const [authStatus, setAuthStatus] = useState(isAuth);

    const handleLogin = () => {
        onLogin();
        setAuthStatus((prevState) => !prevState);
    };

    const handleLogout = () => {
        onLogOut();
        setAuthStatus((prevState) => !prevState);
    };

    return (
        <div>
            <h1>SimpleComponent</h1>
            {authStatus ? (
                <button onClick={handleLogout}>Выйти из системы</button>
            ) : (
                <button onClick={handleLogin}>Войти</button>
            )}
        </div>
    );
};

SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.func
};

export default SimpleComponent;
