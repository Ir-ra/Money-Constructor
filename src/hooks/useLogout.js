import { useEffect, useState } from "react"
import { projectAuth } from '../firebase/config'
import { useAuth } from "./useAuth"

export const useLogout = () => {

    //for clean up function
    const [isCancelled, setIsCancelled] = useState(false)

    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
    const { dispatch } = useAuth()

    const logOut = async () => {
        setError(null)
        setIsPending(true)

        //sign OUT
        try {
            await projectAuth.signOut()

            //dispatch logout action
            dispatch({ type: 'LOGOUT' })

            //update state 
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

    //CLEAN up function
    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])

    return { logOut, error, isPending }
}