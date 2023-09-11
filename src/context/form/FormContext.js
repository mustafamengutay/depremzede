import { createContext, useReducer } from "react";
import formReducer from "./FormReducer";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const initialState = {
        nameInput: '',
        surnameInput: '',
        phoneNumberInput: '',
        emailInput: '',
        numberOfPeopleInput: '',
        addressInput: '',
        extraInformationInput: '',
        carTypeInput: '',
    };

    const [state, dispatch] = useReducer(formReducer, initialState);

    return (
        <FormContext.Provider value={{
            ...state,
            dispatch,
        }}>
            {children}
        </FormContext.Provider>
    );
};

export default FormContext;