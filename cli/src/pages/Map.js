import { useContext, useEffect, useState, useRef } from "react"
import { useMapContext } from "../context/Map"
import '../styles/Map/Main.css'
import { TextContext } from "../context/Text"
import { ActionButton } from "../components/ActionButton"
import { Action } from "@remix-run/router"
import { CharacterContext } from "../context/Character"
import { GameStateContext } from "../context/GameState"
import { StartActions, Hallway, CaveRoom, Exit, TreasureRoom } from "../scenes/Dungeons/StartingDungeon"

const openChest = () => {
    console.log("test")

}



const Room = ({room}) => {
    const ref = useRef(null);
    const { location, setScene, setCurrentAction, setCurrentRoom } = useContext(GameStateContext)
    const { textArray, setTextArray, addToTextArray } = useContext(TextContext)

    useEffect(()=>{
        if(room.location.x === location.x && room.location.y === location.y){
            setScene(room.scene)
            setCurrentAction(room.scene)
            setCurrentRoom(room)
            ref.current?.scrollIntoView({behavior: "smooth", block:"center", inline: "center"})
            addToTextArray(room.enteringText)
        }
    },[location])

    return(
    <div className={`${room.name === "Blank" ? "RoomBlank" : "RoomSmall"} ${location.x === room.location.x && location.y === room.location.y ? "currentRoom" : null}`} ref={ref}>
        <h3>{room.name === "Blank" ? null : room.name}</h3>
        <p className="Blank">{room.name === "Blank" ? null : room.location.x}</p>
        <p className="Blank">{room.name === "Blank" ? null : room.location.y}</p>
    </div>
    )
}


export const MapPanel = () => {
    const {mapOpen, setMapOpen} = useMapContext()
    const [mapRows, setMapRows] = useState([])
    const [mapRooms, setMapRooms] = useState([])
    const [chestsOpened, setChestsOpened] = useState([])
    const {textArray, addToTextArray} = useContext(TextContext)

    const {maxStats} = useContext(CharacterContext)

    const exit = () => {
        addToTextArray("You leave the cave")
    }

    const RoomObj = (edit) => {
        const defaultSearch = () => {
            addToTextArray("You looked around but didn't find anything")
        }
    
        let room = {
            name: "A room",
            entrance: false,
            visited: false,
            enemies: false,
            theme: "default",
            enteringText: "You have entered a new room",
            specialActions: <ActionButton action={defaultSearch} name={"Search"}/>,
            roomDesc: "A room with no special attributes",
            id: !mapRooms.isArray ? 1 : mapRooms.length,
            location: edit.location
        }
        room = {
            ...room,
            ...edit
        }
        return room
    }


    const Campfire = () => {
        maxStats(["Health", "Mana", "Stamina"])
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
            exitSouth: "Hall",
            visited: true,
            enemies: false,
            theme: "Cave",
            enteringText: "You have entered the cave in the mountain. Your adventure begins here.",
            specialActions: <ActionButton action={()=>Campfire()} name="Rest at campfire"/>,
            roomDesc: "The entrance to the cave. You can hear a storm raging outside.",
            location: {
                x: 8,
                y: 1
            },
            scene: <StartActions/>
        },
        {
            name: "Hallway",
            exitEast: "Hall",
            exitWest: "Hall",
            exitNorth: "Hall",
            visited: false,
            enemies: false,
            theme: "Cave",
            enteringText: "You enter a long cavern. To the west is the entrance to a room. You can see a small glint within the room. To your right is another larger room.",
            roomDesc: "A hallway",
            location: {
                x: 8,
                y: 2
            },
            scene: <Hallway/>
        },
        {
            name: "Room 1",
            exitWest: "Hall",
            exitSouth: "Door",
            visited: false,
            enemies: true,
            theme: "Cave",
            enteringText: "You enter a large room. In the center there is a fire with a group of ragged men holding weapons. To the west is the entrance to a hallway that you were in. To the south is a door to a dark room.",
            roomDesc: "A room",
            location: {
                x: 9,
                y: 2
            },
            scene: <CaveRoom/>
        },
        {
            name: "Exit",
            exitNorth: "Door",
            visited: false,
            enemies: false,
            theme: "Cave",
            enteringText: "There is a ladder leading up into a shaft of light. You believe this may take you out of the cave.",
            specialActions: <ActionButton action={()=>exit()} name="Exit Cave"/>,
            roomDesc: "Exit",
            location: {
                x: 9,
                y: 3
            },
            scene: <Exit/>
        },
        {
            name: "Treasure Room",
            exitEast: "Door",
            visited: false,
            enemies: true,
            theme: "Cave",
            chestOpened: false,
            enteringText: "There is a small treasure chest in the room. It looks to be openable.",
            specialActions: <ActionButton action={()=>openChest({size: 'small', level: "1", id: 1})} name="Open Chest" conditions={checkChest(1)}/>,
            roomDesc: "This is a treasure room",
            location: {
                x: 7,
                y: 2
            },
            scene: <TreasureRoom/>
        }
    
    ]


    useEffect(()=>{
        CreateSmallMap(startingCave)
    },[])


    const  CreateSmallMap = (currentMap) => {
        let tempMap = []
        for(let i=0; i<225; i++){
            var room = {
                name: "Blank"
            }
            let location = {
                x: (i+15)%15 === 0 ? 1 : (i+15)%15+1,
                y: i%15 === 0 ? Math.ceil(i/15) + 1 : Math.ceil(i/15)
            }
            room.location = location
            const specialRoom = currentMap.find((specialRoom)=>{
                if(specialRoom.location.x === room.location.x && specialRoom.location.y === room.location.y) {return specialRoom}
            })
            var change = null
            if(specialRoom !== undefined){
                change = specialRoom
                room = change
                console.log(room)
            }
            tempMap.push(RoomObj(room))
            
        }
        setMapRooms(tempMap)
    }

    return (
    <div className={mapOpen ? "MapContainer-Full" : "MapContainer-Mini"} onClick={()=>{mapOpen ? setMapOpen(false) : setMapOpen(true)}}>
        <div className="FullMap">
        {
            mapRooms.map((room)=>{
                    return(
                        <Room room={room}/>
                    )
                })}
        </div>
    </div>
    )
}