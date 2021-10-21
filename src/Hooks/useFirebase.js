import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";


import { useEffect, useState } from "react";
import initialAuthentication from "../Components/Login/Firebase/Firebase.init"

initialAuthentication();
const googleProvider = new GoogleAuthProvider();


const useFirebase = () => {
    const [user, setUser] = useState('');
    const [isLoading, setIsLoading] = useState(true);


    const auth = getAuth();


    const signInUsingGoogle = () => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        isLoading,
        logOut,
        signInUsingGoogle

    }
}

export default useFirebase