import React from "react";
import CardWrapper from "../../common/Card";

const WithFunctions = (SimpleComponent) => (props) => {
    const isAuth = () => {
        return localStorage.getItem("auth");
    };
    const onLogin = () => {
        localStorage.setItem("auth", "token");
    };
    const onLogOut = () => {
        delete localStorage.auth;
    };

    return (
        <CardWrapper>
            <SimpleComponent
                isAuth={isAuth}
                onLogin={onLogin}
                onLogOut={onLogOut}
            />
        </CardWrapper>
    );
};

export default WithFunctions;
