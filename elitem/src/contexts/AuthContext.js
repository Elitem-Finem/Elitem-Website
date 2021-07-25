import React, { useContext, useState, useEffect } from 'react';
import { auth, db } from '../firebase';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
};

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    function signup(email, password) {
       return auth.createUserWithEmailAndPassword(email, password)
    };

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    };

    function logout() {
        return auth.signOut()
    };

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    };

    function updateEmail(email) {
        return currentUser.updateEmail(email)
    }

    function createAdmin(name) {
        return db.collection('users').doc(auth.currentUser.uid).set({
            admin:false,
            name:name
        }).catch((error) => {
            console.log('database error');
        })
    }

    function checkAdmin() { 
        return db.collection('users').doc(auth.currentUser.uid).get().then((doc) => {
            if(doc.exists) {
                return doc.data().admin;
            }
        })
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe
    }, [])

    const value = {
        currentUser,
        login,
        signup,
        logout, 
        resetPassword,
        updateEmail,
        checkAdmin,
        createAdmin
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
};