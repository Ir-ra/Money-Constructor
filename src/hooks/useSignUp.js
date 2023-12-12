import { useState, useEffect } from "react";
import { projectAuth } from '../firebase/config';
import { useAuth } from "./useAuth";

export const useSignUp = () => {
    const [isCancelled, setIsCancelled] = useState(false)

    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
    const { dispatch } = useAuth()

    const signUp = async (email, password, displayName) => {
        setError(null)
        setIsPending(true)

        try {
            const response = await projectAuth.createUserWithEmailAndPassword(email, password)
            console.log('recently created user:', response.user)
       
            if(!response){
                throw new Error('Could not complete signup')
            }

            await response.user.updateProfile({ displayName: displayName })

            dispatch({ type: 'LOGIN', payload: response.user })

            if (!isCancelled) {
                setIsPending(false)
                setError(null)
            }

        } catch (error) {
            if (!isCancelled) {
                console.log(error.message)
                setError(error.message)
                setIsPending(false)
            }
        }
    }

    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])

    return { error, isPending, signUp }
}
