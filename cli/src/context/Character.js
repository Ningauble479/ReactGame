import { createContext, useState} from 'react'

//This creates our context. React requires this to function and its also what we will be calling from other functions
export const CharacterContext = createContext("")

//Use this as a react component. Whatever you wrap with this will have access to all of the values within.
export const CharacterArea = ({children}) => {
    //These are our context states. This is all the info needed for our character
    const [health, setHealth] = useState(100);
    const [stamina, setStamina] = useState(100);
    const [mana, setMana] = useState(100);
    const [horny, setHorny] = useState(100);
    const [name, setName] = useState("Devon");


    //Normally you wrap whatever your trying to pass your context to with this. Doing it this way stops us from rewriting all the values multiple times.
    return (
        <CharacterContext.Provider value={{health, setHealth, stamina, setStamina, mana, setMana, horny, setHorny, name, setName}}>
            {children}
        </CharacterContext.Provider>
    )
}