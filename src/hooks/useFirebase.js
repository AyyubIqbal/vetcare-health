import React, { useEffect, useState } from 'react';
import AuthenticationInitialization from '../Pages/Login/Firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

AuthenticationInitialization()
const useFirebase = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider()
    const [user, setUser] = useState({})
    const [error, setError] = useState('')

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
                console.log(result.user);
                setError("")
            })
            .catch(error => {
                setError(error.message)
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                const uid = user.uid;
            } else {

            }
        });
    }, []);

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch(error => {
                setError(error.message)
            })
    };

    const registerWithEmailPass = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
            })
            .catch(error => {
                setError(error.message)
            })
    };

    const loginWithEmailPass = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
            })
            .catch(error => {
                setError(error.message)
            })
    };
    return (
        {
            user,
            error,
            signInUsingGoogle,
            logOut,
            registerWithEmailPass,
            loginWithEmailPass

        }
    );
};

export default useFirebase;