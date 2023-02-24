import React from 'react';
import {Device, DeviceType} from "../../utils/device";
import LoginPageMobile from "./mobile/login-page-mobile";
import LoginPageDesktop from "./desktop/login-page-desktop";

const LoginPage = () => {
    if (Device.getDeviceType() === DeviceType.Smartphone)
        return <LoginPageMobile/>;
    else if (Device.getDeviceType() === DeviceType.Desktop)
        return <LoginPageDesktop/>;

    return <></>
};

export default LoginPage;