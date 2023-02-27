import React, {Component} from 'react';
import {Device, DeviceType} from "../../utils/device";

interface Props {
    mobilePage: React.ReactNode;
    desktopPage: React.ReactNode;
}

class ResponsivePage extends Component<Props> {

    state = {}
    handleResize = () => this.setState({});

    render() {

        window.addEventListener('resize', this.handleResize);
        const mobilePage: React.ReactNode = this.props.mobilePage;
        const desktopPage: React.ReactNode = this.props.desktopPage;

        if (Device.getDeviceType() === DeviceType.Mobile)
            return mobilePage;
        else if (Device.getDeviceType() === DeviceType.Desktop)
            return desktopPage;

        return <></>;
    }
}

export default ResponsivePage;