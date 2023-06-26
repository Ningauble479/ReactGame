import { createContext, useContext, useState} from 'react'

//This creates our context. React requires this to function and its also what we will be calling from other functions
export const MapContext = createContext("")

export const useMapContext = ( ) => {
    return useContext(MapContext)
}

//Use this as a react component. Whatever you wrap with this will have access to all of the values within.
export const MapArea = ({children}) => {
    //These are our context states. This is our actual Map 
    const [mapOpen, setMapOpen] = useState(false);


    const state = {
        mapOpen,
        setMapOpen,
    }
    //Normally you wrap whatever your trying to pass your context to with this. Doing it this way stops us from rewriting all the values multiple times.
    return (
        <MapContext.Provider value={state}>
            {children}
        </MapContext.Provider>
    )
}