import { createContext, useState} from 'react'

//This creates our context. React requires this to function and its also what we will be calling from other functions
export const InventoryContext = createContext("")

//Use this as a react component. Whatever you wrap with this will have access to all of the values within.
export const InventoryArea = ({children}) => {
    //These are our context states. This is all the info needed for our character
    const [inventory, setInventory] = useState([]);
    const [active, setActive] = useState(false)
    //Normally you wrap whatever your trying to pass your context to with this. Doing it this way stops us from rewriting all the values multiple times.
    return (
        <InventoryContext.Provider value={{inventory, setInventory, active, setActive}}>
            {children}
        </InventoryContext.Provider>
    )
}