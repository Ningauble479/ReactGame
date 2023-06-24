import { createContext, useState} from 'react'

//This creates our context. React requires this to function and its also what we will be calling from other functions
export const NPCContext = createContext("")

//Use this as a react component. Whatever you wrap with this will have access to all of the values within.
export const NPCArea = ({children}) => {
    //These are our context states. This is all the info needed for our character
    const [NPCArray, setNPCArray] = useState([
        {
            name: 'Dummy NPC',
            health: 100,
            mana: 100,
            stamina: 100,
            horny: 100,
            dead: false,
            selected: false,
            id: 1
        }
    ]);

    const selectNPC = (npcID) => {
        
        let npcArray = NPCArray;
        
        let npcFound = npcArray.find((npc, i)=>{

            if(npc.id === npcID){
                console.log("FOUND IT")
                npcArray[i].selected = true

                setNPCArray(npcArray)

                return true
            }
        })
    }

    //Normally you wrap whatever your trying to pass your context to with this. Doing it this way stops us from rewriting all the values multiple times.
    return (
        <NPCContext.Provider value={{NPCArray, setNPCArray, selectNPC}}>
            {children}
        </NPCContext.Provider>
    )
}