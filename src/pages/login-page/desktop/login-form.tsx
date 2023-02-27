import React, {useContext} from 'react';
import {Form, Formik, FormikHelpers} from "formik";
import "./styles/form-styles.scss"
import TextInput from "../../../components/formik/text-input";
import * as Yup from "yup";
import {FormObserver} from "../../../components/formik/form-observer";
import {LoginContext, Values} from "../login-props";


const LoginSchema = Yup.object().shape(
    {
        username: Yup.string()
            .min(4, 'Ihr Name muss mindestens 4 Zeichen lang sein')
            .max(15, 'Ihr Name muss maximal 15 Zeichen lang sein')
            .required('Dieses Feld ist erforderlich'),

        password: Yup.string()
            .min(3, 'Ihr Passwort muss mindestens 4 Zeichen lang sein')
            .max(25, 'Ihr Passwort muss maximal 15 Zeichen lang sein')
            .required('Dieses Feld ist erforderlich')
    }
)


const LoginForm = () => {

    const submit = (values: Values, actions: FormikHelpers<Values>) => {
        console.log(values)
        actions.setSubmitting(false);
    }

    const {values,onChange} = useContext(LoginContext);

    return (
        <Formik initialValues={values} onSubmit={submit} validationSchema={LoginSchema}>
            <Form className="form">

                <FormObserver onChange={onChange}/>
                <h3>Willkommen in der Kleiderkammer</h3>
                <h4>Anmelden</h4>
                <TextInput id="username" type="text" name="username" placeholder="Username" className="field-shape"
                           classNameForErrorMessage="error-message"/>
                <TextInput id="password" type="password" name="password" placeholder="Password"
                           className="field-shape" classNameForErrorMessage="error-message"/>
                <button type="submit" className="submit">Einloggen</button>
            </Form>

        </Formik>
    );
};

export default LoginForm;