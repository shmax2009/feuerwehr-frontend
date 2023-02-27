import {useFormikContext} from "formik";
import {useEffect} from "react";


interface FormObserverProps<T> {
    onChange: (a: T) => void

}

export const FormObserver = <T, >(props: FormObserverProps<T>) => {
    const {values} = useFormikContext<T>();
    const {onChange} = props;
    useEffect(() => {
        onChange(values);
        console.log("FormObserver::values", values);
    }, [onChange, values]);

    return null;
};
