import React, {useState} from 'react';
import ResponsivePage from "../../components/others/responsive-page";
import LoginPageMobile from "./mobile/login-page-mobile";
import LoginPageDesktop from "./desktop/login-page-desktop";
import {LoginContext, Values} from "./login-props";


const LoginPage = () => {

    const [values, setValues] = useState<Values>({
        username: '',
        password: '',
    })


    return <LoginContext.Provider value={{
        values: values,
        onChange: setValues
    }}>
        <ResponsivePage mobilePage={<LoginPageMobile/>}
                        desktopPage={<LoginPageDesktop/>}/>
    </LoginContext.Provider>;
};

export default LoginPage;