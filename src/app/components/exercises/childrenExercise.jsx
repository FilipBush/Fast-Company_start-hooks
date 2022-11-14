import React from "react";
import PropTypes from "prop-types";
import CollapseWrapper from "../common/collapse";

const Component = () => {
    return <div>Компонент списка</div>;
};

const ComponentList = ({ children }) => {
    return React.Children.map(children, (child) => {
        return (
            <>
                {children.indexOf(child) + 1} {React.cloneElement(child)}
            </>
        );
    });
};

ComponentList.propTypes = {
    children: PropTypes.oneOfType(
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    )
};

const ChildrenExercise = () => {
    return (
        <>
            <CollapseWrapper title="Упражнение">
                <p className="mt-3">
                    У вас есть компоненты Списка. Вам необходимо к каждому из
                    них добавить порядковый номер, относительно того, как они
                    располагаются на странице. Вы можете использовать как{" "}
                    <code>React.Children.map</code> так и{" "}
                    <code>React.Children.toArray</code>
                </p>

                <Component />
                <Component />
                <Component />
            </CollapseWrapper>
            <ComponentList>
                <Component />
                <Component />
                <Component />
            </ComponentList>
        </>
    );
};

export default ChildrenExercise;
