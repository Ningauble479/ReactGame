import { createContext, useContext, useEffect, useState} from 'react'
import { StoryContext } from './Story'
import { StartActions } from '../scenes/Start.js'
//This creates our context. React requires this to function and its also what we will be calling from other functions
export const GameStateContext = createContext("")

//Use this as a react component. Whatever you wrap with this will have access to all of the values within.
export const GameStateArea = ({children}) => {
    //These are our context states. This is all the info needed for our character
    const [doing, setDoing] = useState("Nothing");
    const [currentAction, setCurrentAction] = useState(<StartActions/>);
    const [location, setLocation] = useState("Start");
    const [currentPage, setCurrentPage] = useState();
    const [scene, setScene] = useState({})

    const state = {
        doing,
        setDoing,
        currentAction,
        setCurrentAction,
        location,
        setLocation,
        currentPage,
        setCurrentPage,
        scene,
        setScene
    }
    //Normally you wrap whatever your trying to pass your context to with this. Doing it this way stops us from rewriting all the values multiple times.
    return (
        <GameStateContext.Provider value={state}>
            {children}
        </GameStateContext.Provider>
    )
}