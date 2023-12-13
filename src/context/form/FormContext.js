import { createContext, useState } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [searchBarValue, setSearchBarValue] = useState('');

    /**
     * 
     * @param {object} post An object that stores information.
     * @summary It is used to send information to the database.
     */
    const sendPost = async (post, url) => {
        const response = await fetch(url, {
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
            searchBarValue,
            setSearchBarValue,
            sendPost,
            getList,
        }}>
            {children}
        </FormContext.Provider>
    );
};

export default FormContext;