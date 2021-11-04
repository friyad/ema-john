import initializeAuthentication from "../firebase/firebase.initialize";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {

            }
        })
    }, [])

    const hanldeGoogleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch(error => {
                setError(error.message)
            })
    }


    return { user, error, hanldeGoogleSignIn, handleSignOut }
};

export default useFirebase;