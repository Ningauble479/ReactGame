import { createContext, useState} from 'react'

//This creates our context. React requires this to function and its also what we will be calling from other functions
export const NPCContext = createContext("")

//Use this as a react component. Whatever you wrap with this will have access to all of the values within.
export const NPCArea = ({children}) => {
    //These are our context states. This is all the info needed for our character
    const [nPCArray, setNPCArray] = useState([]);
    const [selectedNPC, setSelectedNPC] = useState(0)

    const state = {
        nPCArray,
        setNPCArray,
        selectedNPC,
        setSelectedNPC
    }

    //Normally you wrap whatever your trying to pass your context to with this. Doing it this way stops us from rewriting all the values multiple times.
    return (
        <NPCContext.Provider value={state}>
            {children}
        </NPCContext.Provider>
    )
}