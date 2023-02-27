export enum DeviceType {
    Mobile,
    Desktop
}

export class Device {
    private static getWindowDimensions() {
        const {innerWidth: width, innerHeight: height} = window;
        return {
            width,
            height
        };
    }

    static getDeviceType(): DeviceType {
        const dimensions = this.getWindowDimensions();
        if (dimensions.height > dimensions.width)
            return DeviceType.Mobile;
        else
            return DeviceType.Desktop;
    }

}