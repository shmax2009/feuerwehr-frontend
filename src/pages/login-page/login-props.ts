import {createContext} from "react";


export interface Values {
    username: string;
    password: string;
}

export interface ValuesContext {
    values: Values;
    onChange: (v: Values) => void;

}

export const LoginContext = createContext<ValuesContext>({

    values: {
        username: '',
        password: '',
    },
    onChange: () => {
    }
});