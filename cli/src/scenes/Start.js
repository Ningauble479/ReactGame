import { useContext, useEffect } from 'react'
import StartGif from '../pictures/Scenes/Start.gif'
import { TextContext } from '../context/Text'
import { ActionButton } from '../components/ActionButton'
import { InventoryContext } from '../context/Inventory'
import { WoodenSword } from '../Items/Weapons'


export const StartScene = () => {
    const {setTextArray} = useContext(TextContext)
    const area = {
        enteringText: "You awake in a cave with a lit campfire. You cant remember how you got here."
    }
    useEffect(()=>{

        setTextArray([area.enteringText])
    },[])


    return (
        <div>
            <img src={StartGif}/>
        </div>
    )
}

export const StartActions = () => {
    const {textArray, setTextArray} = useContext(TextContext)
    const {active, setActive, inventory, setInventory} = useContext(InventoryContext)

    const specialAction = () => {
        setTextArray(textArray.concat("You look around and find your pack with a few items. You put it on and place the items in your bag."))
        setActive(true)
        setInventory(inventory.concat([WoodenSword()]))

    }

    return (
        <div>
            <ActionButton action={specialAction} name={"Look Around"} conditions={[!active]}/>
        </div>
    )
}