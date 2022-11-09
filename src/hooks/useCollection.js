//Цей Хук лише для використання Real Time Data, 
//тобто щоб данні одразу відображались на сторінці
//апдейтить documents коли є зміни і тепер documents будуть співпадати в реальному цасі 
//щоб не було в коллекції 

import { projectFirestore } from "../firebase/config";
import { useEffect, useRef, useState } from "react";

export const useCollection = (collectioN, _query) => {
    
    const [error, setError] = useState(null)
    const [documents, setDocuments] = useState(null)

    //якщо не використати ref --> буде infinite loop in useEff
    //_query це арр і він є "іншим" арреєм на кожному виклику useEff
    const query = useRef(_query).current
    
    //як тільки зміниться конкретна коллекція, то тут перезапишуться данні
    useEffect(() => {

      let ref =  projectFirestore.collection(collectioN)
      //Перевірка, щоб усі записи конкретного юзера відображались тільки під його логіном
      if(query) {
        ref = ref.where(...query)
      }

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

    }, [collectioN, query])

    return {documents, error}
}

