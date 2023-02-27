import React from 'react';
import styled from "styled-components";
import {ErrorMessage} from "formik";


interface ErrorMessageProps {
    name: string;

    className: string;
}

const StyledErrorMessage = styled.div`
  color: red;
`


const StyledErrorMessageComponent = (props: any) => {
    return <StyledErrorMessage className={props.className}>{props.children}</StyledErrorMessage>
}

const CustomErrorMessage = (props: ErrorMessageProps) => {
    const {name, className} = props;
    return (
        <ErrorMessage name={name} className={className} component={StyledErrorMessageComponent}/>
    );
};

export default CustomErrorMessage;