import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authorizedOfficer, setAuthorizedOfficer] = useState(false);
    const [officerData, setOfficerData] = useState({});

    const [authorizedManager, setAuthorizedManager] = useState(false);
    const [managerData, setManagerData] = useState({
        email: 'admin',
        name: 'Admin',
        surname: 'Admin',
        phoneNumber: '444',
        dataOfBirth: '-',
        comeFromCity: '-',
        responsibleFromCity: '-',
    });

    const saveLoginDataToLocalStorage = (loginData) => {
        for (const key of Object.keys(loginData)) {
            localStorage.setItem(key, loginData[key]);
        }
    };

    return <AuthContext.Provider value={{
        authorizedOfficer,
        setAuthorizedOfficer,
        officerData,
        setOfficerData,

        authorizedManager,
        setAuthorizedManager,
        managerData,
        setManagerData,
        saveLoginDataToLocalStorage,
    }}>
        {children}
    </AuthContext.Provider>
};

export default AuthContext;