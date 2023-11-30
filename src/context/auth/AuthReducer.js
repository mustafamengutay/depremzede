const authReducer = (state, action) => {
    switch (action.type) {
        case 'RESET_INPUT':
            return {
                emailInput: '',
                passwordInput: '',
            };

        case 'SET_INPUT':
            return {
                ...state,
                [action.name]: action.payload,
            };
    }
};

export default authReducer;