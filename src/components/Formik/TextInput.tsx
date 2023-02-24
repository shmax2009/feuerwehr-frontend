import React from 'react';
import {Field} from 'formik';
// @ts-ignore
import styled from "styled-components";

interface TextInputProps {
    id: string;
    name: string;
    placeholder: string;
    className: string;
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

const TextInput = (props: TextInputProps) => {
    const {id, name, placeholder, className, type} = props;

    return <Field component={StyledInput} type={type} className={className} id={id} name={name}
                  placeholder={placeholder}/>;
};

export default TextInput;