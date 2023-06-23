import { createContext, useState} from 'react'

//This creates our context. React requires this to function and its also what we will be calling from other functions
export const TextContext = createContext("")

//Use this as a react component. Whatever you wrap with this will have access to all of the values within.
export const TextArea = ({children}) => {
    //These are our context states. This is all the info needed for our character
    const [textArray, setTextArray] = useState([]);
    
    const addToTextArray = (text) => {
        const startArray = textArray
        startArray.push(text)
        setTextArray(startArray)
    }

    //Normally you wrap whatever your trying to pass your context to with this. Doing it this way stops us from rewriting all the values multiple times.
    return (
        <TextContext.Provider value={{textArray, setTextArray, addToTextArray}}>
            {children}
        </TextContext.Provider>
    )
}