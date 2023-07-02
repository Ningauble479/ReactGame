import { useContext, useEffect } from 'react'
import { TextContext } from '../../context/Text'
import { ActionButton } from '../../components/ActionButton'
import { InventoryContext } from '../../context/Inventory'
import { WoodenSword } from '../../Items/Weapons/Weapons'
import { NPCContext } from '../../context/NPC'
import { GameStateContext } from '../../context/GameState'

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
    const {setNPCArray} = useContext(NPCContext)
    useEffect(()=>{
        setNPCArray([startingNPC, startingNPC2])
    },[])

    return (
        <div>
            Entrance
        </div>
    )
}

export const Hallway = () => {
    return (
        <div>
            Hallway
        </div>
    )
}

export const TreasureRoom = () => {
    return (
        <div>
            TreasureRoom
        </div>
    )
}

export const CaveRoom = () => {
    return (
        <div>
            Room
        </div>
    )
}

export const Exit = () => {
    return (
        <div>
            Exit
        </div>
    )
}