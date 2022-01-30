import React, {useEffect, useContext, useState} from 'react';
import {useAuth0} from '@auth0/auth0-react';

const UserContext = React.createContext(); 

const UserProvider = ({children}) => {
    const {loginWithRedirect, logout, user, isLoading, error} = useAuth0(); 
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        setCurrentUser(user)
        console.log(user);
    }, [user])

    return (
        <UserContext.Provider value = {{loginWithRedirect,logout, currentUser, isLoading, error }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => {
    return useContext(UserContext);
}

export {UserContext, UserProvider}
