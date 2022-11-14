import React, { useEffect, useState, useMemo } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const factorial = (n) => {
    return n ? n * factorial(n - 1) : 1;
};

const runFactorial = (n) => {
    console.log("run factorial");
    factorial(n);
};

const ComplexCalculateExample = () => {
    const [value, setValue] = useState(100);
    const [otherState, setOtherState] = useState(false);

    const buttonColor = otherState ? "primary" : "secondary";

    const handleIncrement = () => {
        setValue((prevState) => prevState + 1000);
    };
    const handleDecrement = () => {
        setValue((prevState) => prevState - 1000);
    };

    useEffect(() => {
        console.log("renderButtonColor");
    }, [buttonColor]);

    const handleChangeColor = () => {
        setOtherState((prevState) => !prevState);
    };

    const fact = useMemo(() => runFactorial(value), [value]);
    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <p>Value: {value}</p>
                <p>Result fact: {fact}</p>
                <button
                    className="btn btn-priamry mx-2"
                    onClick={handleIncrement}
                >
                    Increment
                </button>
                <button
                    className="btn btn-priamry mx-2"
                    onClick={handleDecrement}
                >
                    Decrement
                </button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <button
                    className={"btn ms-md-2 btn-" + buttonColor}
                    onClick={handleChangeColor}
                >
                    Change color
                </button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
