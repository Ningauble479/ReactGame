import { createContext, useState} from 'react'
//This creates our context. React requires this to function and its also what we will be calling from other functions
export const CurrentBattleContext = createContext("")

//Use this as a react component. Whatever you wrap with this will have access to all of the values within.
export const CurrentBattleArea = ({children}) => {
    //These are our context states. This is all the info needed for our character
    const [currentEnemies, setCurrentEnemies] = useState([]);
    const [selectedEnemy, setSelectedEnemy] = useState()
    //Normally you wrap whatever your trying to pass your context to with this. Doing it this way stops us from rewriting all the values multiple times.
    return (
        <CurrentBattleContext.Provider value={{currentEnemies, setCurrentEnemies, selectedEnemy, setSelectedEnemy}}>
            {children}
        </CurrentBattleContext.Provider>
    )
}