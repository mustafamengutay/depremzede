const formReducer = (state, action) => {
    switch (action.type) {
        case 'RESET_INPUTS':
            return {
                ...state,
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
            };

        case 'SET_INPUT':
            return {
                ...state,
                [action.name]: action.payload,
            };

        default:
            return state;
    }
};

export default formReducer;