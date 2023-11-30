import authReducer from "./AuthReducer";

const { createContext, useState, useReducer } = require("react");

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const initialState = {
        emailInput: '',
        passwordInput: '',
    };

    const [state, dispatch] = useReducer(authReducer, initialState);

    return <AuthContext.Provider value={{
        ...state,
        dispatch,
    }}>
        {children}
    </AuthContext.Provider>
};

export default AuthContext;