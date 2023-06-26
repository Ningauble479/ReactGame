import { useContext, useEffect } from 'react'
import StartGif from '../pictures/Scenes/Start.gif'
import { TextContext } from '../context/Text'
import { ActionButton } from '../components/ActionButton'
import { InventoryContext } from '../context/Inventory'
import { WoodenSword } from '../Items/Weapons/Weapons'
import { NPCContext } from '../context/NPC'
import { GameStateContext } from '../context/GameState'

const startingNPC = {
    name: 'Dummy NPC',
    health: 100,
    mana: 100,
    stamina: 100,
    horny: 100,
    dead: false,
    selected: false,
    id: 1
}

const startingNPC2 = {
    name: 'Dummy NPC',
    health: 100,
    mana: 100,
    stamina: 100,
    horny: 100,
    dead: false,
    selected: false,
    id: 2
}



export const StartActions = () => {
    const {textArray, setTextArray, addToTextArray} = useContext(TextContext)
    const {nPCArray, setNPCArray} = useContext(NPCContext)
    const {active, setActive, inventory, setInventory, addItem} = useContext(InventoryContext)
    const {scene, setScene} = useContext(GameStateContext)
    const findAnExit = () => {
        addToTextArray("You find an exit.")
        addItem(WoodenSword())
        setTextArray(textArray.concat("You look around and find your pack with a few items. You put it on and place the items in your bag.", "1 Wooden Sword added to your inventory.", "1 health potion added to your inventory", "1 hemp boots added to your inventory", "1 hemp shirt added to your inventory", "1 hemp hat added to your inventory", "1 bow added to your inventory", "10 arrows added to your inventory", "You find an exit"))
        setActive(true)
        setScene({exitFound: true})
        area.exitFound = true
    }

    const area = {
        enteringText: "You awake in a cave with a lit campfire feeling very refreshed. Your ready for your first big adventure! The dungeon outside awaits the newly refresh you. Collect your things and head out. ",
        lookAround: findAnExit,
        exitFound: false
    }
    useEffect(()=>{
        setTextArray(textArray.concat(area.enteringText))
        setNPCArray(nPCArray.concat(startingNPC, startingNPC2))
        setScene(area)
    },[])

    const specialAction2 = () => {
        addItem(WoodenSword())
    }

    return (
        <div>
            <ActionButton action={findAnExit} name={"Look Around"} conditions={[!active]}/>
            <ActionButton action={specialAction2} name={"Leave Cave"} conditions={[scene.exitFound]}/>
        </div>
    )
}