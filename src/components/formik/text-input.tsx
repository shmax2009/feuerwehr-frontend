import React from 'react';
import {Field} from 'formik';
import styled from "styled-components";
import CustomErrorMessage from "./error-message";

interface TextInputProps {
    id: string;
    name: string;
    placeholder: string;
    className: string;
    classNameForErrorMessage: string;
    type: string;
}

const StyledInput = styled.input`
  outline: none;
  border: 1px solid #000000;
  border-radius: calc(0.25 * (1vh + 1vw));
  margin-left: auto;
  margin-right: auto;
  font-size: 1.6vh;
  text-indent: 1vh;
`;

class StyledInputComponent extends React.Component<{ field: any, form: any }> {
    render() {
        let {field, form, ...props} = this.props;
        return <StyledInput {...field} {...props} />;
    }
}


const TextInput = (props: TextInputProps) => {
    const {id, name, placeholder, className, classNameForErrorMessage, type} = props;
    return <>  <CustomErrorMessage className={classNameForErrorMessage} name={name}/>
        <Field id={id} name={name} component={StyledInputComponent} type={type} className={className}
               placeholder={placeholder}/>  </>;
};

export default TextInput;