import React from 'react';
import {Field} from 'formik';
import "./TextInput.scss"

interface TextInputProps {
    id: string;
    name: string;
    placeholder: string;
    className: string;
}

class TextField extends React.Component<{ field: any, form: any }> {
    render() {
        let {field, form, ...props} = this.props;
        return <input {...field} {...props} />;
    }
}


const TextInput = (props: TextInputProps) => {
    const {id, name, placeholder, className} = props;

    return <Field component={TextField} className={className} id={id} name={name} placeholder={placeholder}/>;
};

export default TextInput;