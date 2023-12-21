import { createContext, useState } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [searchBarValue, setSearchBarValue] = useState('');

    /**
     * 
     * @param {object} post An object that stores information.
     * @returns An object includes the response data and a successful status.
     * @summary It is used to send information to a database.
     */
    const sendPost = async (post, url) => {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(post),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();

            return {
                success: true,
                data,
            };

        } catch (error) {
            console.error('Error during POST request:', error);

            return {
                success: false,
                error: error.message,
            };
        }
    };

    /**
     * 
     * @param {string} url An API path where a list is fetched for listing operation.
     * @param {function} setState A state function to update a state that stores the incoming list.
     */
    const getList = (url) => {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch(url);
                const list = await response.json();
                resolve(list);
            } catch (error) {
                reject(error);
            }
        });
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