import { createContext, useState } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
    // TODO: Switch to the reducer!

    // Personal Information Form Input States
    const [nameInputValue, setNameInputValue] = useState('');
    const [surnameInputValue, setSurnameInputValue] = useState('');
    const [phoneNumberInputValue, setPhoneNumberInputValue] = useState('');
    const [emailInputValue, setEmailInputValue] = useState('');

    // General Input States
    const [numberOfPeopleInputValue, setNumberOfPeopleInputValue] = useState('');
    const [addressInputValue, setAddressInputValue] = useState('');
    const [extraInformation, setExtraInformation] = useState('');
    const [carTypeInputValue, setCarTypeInputValue] = useState('');


    return (
        <FormContext.Provider value={{
            nameInputValue,
            setNameInputValue,
            surnameInputValue,
            setSurnameInputValue,
            phoneNumberInputValue,
            setPhoneNumberInputValue,
            emailInputValue,
            setEmailInputValue,
            numberOfPeopleInputValue,
            setNumberOfPeopleInputValue,
            addressInputValue,
            setAddressInputValue,
            extraInformation,
            setExtraInformation,
            carTypeInputValue,
            setCarTypeInputValue,
        }}>
            {children}
        </FormContext.Provider>
    );
};

export default FormContext;