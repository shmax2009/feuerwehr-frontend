import React from 'react';
import {Form, Formik, FormikHelpers} from "formik";
import "./styles/form-styles.scss"
import TextInput from "../../components/Formik/TextInput";

interface Values {
    username: string;
    password: string;
}

const LoginForm = () => {
    return (
        <Formik initialValues={
            {
                username: '',
                password: ''
            }
        } onSubmit={(
            values: Values,
            {setSubmitting}: FormikHelpers<Values>
        ) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
            }, 500);
        }}>

            <Form className="form">
                <h3>Willkommen in der Kleiderkammer</h3>
                <h4>Anmelden</h4>
                <TextInput id="username" name="username" placeholder="Username" className="field-shape"/>
                <TextInput id="password" name="password" placeholder="Password" className="field-shape"/>
                <button type="submit" className="submit">Einloggen</button>
            </Form>

        </Formik>
    );
};

export default LoginForm;