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
                extraInformation: '',
                carTypeInput: '',
            };

        case 'SET_NAME':
            return {
                ...state,
                nameInput: action.payload,
            };

        case 'SET_SURNAME':
            return {
                ...state,
                surnameInput: action.payload,
            };

        case 'SET_PHONE_NUMBER':
            return {
                ...state,
                phoneNumberInput: action.payload,
            };

        case 'SET_EMAIL':
            return {
                ...state,
                emailInput: action.payload,
            };

        case 'SET_NUMBER_OF_PEOPLE':
            return {
                ...state,
                numberOfPeopleInput: action.payload,
            };

        case 'SET_ADDRESS':
            return {
                ...state,
                addressInput: action.payload,
            };

        case 'SET_EXTRA_INFORMATION':
            return {
                ...state,
                extraInformation: action.payload,
            };

        case 'SET_CAR_TYPE':
            return {
                ...state,
                carTypeInput: action.payload,
            };

        default:
            return state;
    }
};

export default formReducer;