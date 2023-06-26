import { useContext, useEffect, useState } from "react"
import { useMapContext } from "../context/Map"
import '../styles/Map/Main.css'
import { TextContext } from "../context/Text"
import { ActionButton } from "../components/ActionButton"
import { Action } from "@remix-run/router"
import { CharacterContext } from "../context/Character"

const openChest = () => {
    console.log("test")

}


export const MapPanel = () => {
    const {mapOpen, setMapOpen} = useMapContext()
    const [mapRows, setMapRows] = useState([])
    const [mapRooms, setMapRooms] = useState([])
    const [chestsOpened, setChestsOpened] = useState([])
    const {textArray, addToTextArray} = useContext(TextContext)


    const RoomObj = (edit) => {
        const defaultSpecial = () => {
            addToTextArray("What")
        }
    
        let room = {
            name: "A room",
            entrance: false,
            exitNorth: "none",
            exitWest: "none",
            exitSouth: "none",
            exitEast: "none",
            visited: false,
            enemies: false,
            theme: "default",
            enteringText: "You have entered a new room",
            specialActions: <ActionButton action={defaultSpecial} name={"Default"}/>,
            roomDesc: "A room with no special attributes",
            id: !mapRooms.isArray ? 1 : mapRooms.length 
    
        }
        room = {
            edit
        }
        return room
    }


    const Campfire = () => {
        const {maxStats} = useContext(CharacterContext)
        maxStats("Health", "Mana", "Stamina")
    }

    const checkChest = (id) => {
        if(chestsOpened?.includes(id)){return false}
        return true
    }

    const startingCave = [
        {
            name: "Cave Entrance",
            entrance: true,
            exitNorth: "Entrance",
            exitSouth: "Door",
            visited: true,
            enemies: false,
            theme: "Cave",
            enteringText: "You have entered the cave in the mountain. Your adventure begins here.",
            specialActions: <ActionButton action={Campfire()} name="Rest at campfire"/>,
            roomDesc: "The entrance to the cave. You can hear a storm raging outside."
        },
        {
            name: "Treasure Room",
            exitEast: "Door",
            visited: false,
            enemies: true,
            theme: "Cave",
            chestOpened: false,
            enteringText: "There is a small treasure chest in the room. It looks to be openable.",
            specialActions: <ActionButton action={openChest({size: 'small', level: "1", id: 1})} name="Rest at campfire" conditions={checkChest(1)}/>,
            roomDesc: "This is a treasure room"
        }
    
    ]

    
    const createMap = (Map) => {
        const roomArray = []
        startingCave.forEach(room => {
            roomArray.pop(RoomObj(room, roomArray))
            console.log(roomArray)
        });
        setMapRooms(roomArray)
    }

    useEffect(()=>{
        createMap(startingCave)
    },[])



    const Room = ({room}) => {
        return(
        <div className="RoomSmall">
            {
                room.name
            }
        </div>
        )
    }

    return (
    <div className={mapOpen ? "MapContainer-Full" : "MapContainer-Mini"} onClick={()=>{mapOpen ? setMapOpen(false) : setMapOpen(true)}}>
        
        {startingCave.map((room)=>{
                    return(
                        <Room room={room}/>
                    )
                })}
    </div>
    )
}