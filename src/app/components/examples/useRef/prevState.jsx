import React, { useRef, useEffect, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const PrevStateExample = () => {
    const prevState = useRef("");
    const [otherState, setOtherState] = useState("false");
    const toggleOtherState = () => {
        setOtherState((prevState) =>
            prevState === "false" ? "true" : "false"
        );
    };
    useEffect(() => {
        prevState.current = otherState;
    }, [otherState]);
    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>

            <p>Prev State: {prevState.current}</p>
            <p>Current State: {otherState}</p>
            <button onClick={toggleOtherState}>toggleOtherState</button>
        </CardWrapper>
    );
};

export default PrevStateExample;
