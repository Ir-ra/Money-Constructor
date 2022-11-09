//Цей Хук лише для використання Real Time Data, 
//тобто щоб данні одразу відображались на сторінці

import { projectFirestore } from "../firebase/config";
import { useEffect, useState } from "react";

const useCollection = (collectioN) => {
    
    const [error, setError] = useState(null)
    const [documents, setDocuments] = useState(null)
    
    //як тільки зміниться конкретна коллекція, то тут перезапишуться данні
    useEffect(() => {

      let ref =  projectFirestore.collection(collectioN)

      const unsubscribe = ref.onSnapshot( snapshot => {
        
        let results = []
        snapshot.docs.forEach(doc => {
            results.push({...doc.data(), id: doc.id}) //({name, amount, uid}) типу це і є doc
        })

        //update state
        setDocuments(results)
        setError(null)
      },

      //другий аргумент ф-ї unsubscribe
      (error) => {
        setError('Could not fetch the data')
      })

      //unsubscribe on unmount
      return () => unsubscribe()

    }, [collectioN])

    return {documents, error}
}

export default useCollection;