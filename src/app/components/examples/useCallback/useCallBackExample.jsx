import React, { useState, useEffect, useRef, useCallback } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const withooutCallback = useRef(0);
    const withCallback = useRef(0);

    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };
    const validateWiithoutCallback = (data) => {
        console.log(data);
    };
    const validateWithCallback = useCallback((data) => {
        console.log(data);
    }, []);

    useEffect(() => {
        validateWiithoutCallback(data);
        validateWithCallback(data);
    }, [data]);

    useEffect(() => {
        withooutCallback.current++;
    }, [validateWiithoutCallback]);

    useEffect(() => {
        withCallback.current++;
    }, [validateWithCallback]);
    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>Render withoutCallback{withooutCallback.current}</p>
            <p>Render withCallback{withCallback.current}</p>
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                name="email"
                type="email"
                className="form-control"
                id="email"
                value={data.email || ""}
                onChange={handleChange}
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
