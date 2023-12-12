import { useEffect, useState } from "react";
import { projectAuth } from '../firebase/config';
import { useAuth } from "./useAuth";

export const useLogout = () => {
    const [isCancelled, setIsCancelled] = useState(false)

    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
    const { dispatch } = useAuth()

    const logOut = async () => {
        setError(null)
        setIsPending(true)

        try {
            await projectAuth.signOut()

            dispatch({ type: 'LOGOUT' })

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

    return { logOut, error, isPending }
}
