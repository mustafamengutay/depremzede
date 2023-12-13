import { createContext, useReducer } from "react";
import formReducer from '../form/FormReducer';

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
        officerBirthdayInput: '',
        officerComesFromInput: '',
        officerLocationInput: '',
        searchBarValue: '',
    };

    const [state, dispatch] = useReducer(formReducer, initialState);

    /**
     * 
     * @param {object} post An object that stores a victim information.
     * @summary It is used to send a victim information to the database.
     */
    const sendUnderDebrisPost = async (post) => {
        const response = await fetch('/users/enkaz-altinda', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(post),
        });
    };

    /**
     * 
     * @param {string} url An API path where a list is fetched for listing operation.
     * @param {function} setState A state function to update a state that stores the incoming list.
     */
    const getList = async (url, setState) => {
        const response = await fetch(url);
        const list = await response.json();
        setState(list);
    };

    return (
        <FormContext.Provider value={{
            ...state,
            dispatch,
            sendUnderDebrisPost,
            getList,
        }}>
            {children}
        </FormContext.Provider>
    );
};

export default FormContext;