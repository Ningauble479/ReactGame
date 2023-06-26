import { createContext, useContext, useState} from 'react'
import { TextContext } from './Text'

//This creates our context. React requires this to function and its also what we will be calling from other functions
export const InventoryContext = createContext("")

export const useInventoryContext = ( ) => {
    return useContext(InventoryContext)
}

//Use this as a react component. Whatever you wrap with this will have access to all of the values within.
export const InventoryArea = ({children}) => {
    //These are our context states. This is our actual inventory 
    const [inventory, setInventory] = useState([]);
    const [active, setActive] = useState(false);
    const {textArray, setTextArray} = useContext(TextContext)
    const addItem = (item) => {
        //Copy our inventory array
        let inventoryArr = inventory;
        //Check Inventory to see if item exists
        let itemFound = inventoryArr.find((itemI, i)=>{
            //If it does. Instead of adding a new item to inventory. Just add 1 to the amount currently in inventory
            //Check to see if any items match our new item
            if(item.name === itemI.name && item.type === itemI.type){
                //Add to inventory (Remember thanks to state we dont want to mutate the original. So instead we create a new array, edit that one and then replace the original)
                inventoryArr[i].amount = inventoryArr[i].amount + 1;
                //Set the inventory array
                setInventory([...inventoryArr]);
                //Let the find function know we found our item
                return true;
            }
        })
        //If we dont find this item in our array add it
        if(!itemFound){
            //Add the item to the state array(We use concat so that we can return a new array instead of mutating the original)
            setInventory(inventory.concat(item))
        }
        console.log(textArray)
        setTextArray(textArray.concat(`You add 1 ${item.name} to your inventory`))
        
    }

    const state = {
        inventory,
        setInventory,
        active,
        setActive,
        addItem
    }
    //Normally you wrap whatever your trying to pass your context to with this. Doing it this way stops us from rewriting all the values multiple times.
    return (
        <InventoryContext.Provider value={state}>
            {children}
        </InventoryContext.Provider>
    )
}