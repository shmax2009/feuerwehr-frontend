export enum DeviceType {
    Smartphone,
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
        console.log(dimensions);
        if (dimensions.height > dimensions.width)
            return DeviceType.Smartphone;
        else
            return DeviceType.Desktop;
    }

}