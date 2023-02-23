import React from 'react';
import "./styles/page-styles.scss"
import {Form} from "formik";
import LoginForm from "./login-form";

const LoginPage = () => {
    return (
        <div className="page">
            <header className="first-header">
                <h2>UM EINEN NOTFALL ZU MELDEN, WÄHLEN SIE 1-1-2</h2>
            </header>
            <header className="second-header">
                <h1>Gilching Feuerwehr</h1>
            </header>
            <main>
                <LoginForm/>
            </main>
            <footer></footer>
        </div>
    );
};

export default LoginPage;