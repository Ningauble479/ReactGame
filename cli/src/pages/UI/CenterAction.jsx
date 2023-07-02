import { useContext } from 'react'
import '../../styles/UI/CenterAction.css'
import { GameStateContext } from '../../context/GameState'
import { TextContext } from '../../context/Text'
import { ActionButton } from '../../components/ActionButton'
import '../../styles/Reusables/FlexBox.css'
//This will be our center panel. It will show you where you are and whats going on around you to a very basic degree as well as giving you actions.
//?The combat screen will either be thrown in here or will be its own component entirely.


export const CenterAction = () => {
    const {location, setLocation, currentAction, currentRoom} = useContext(GameStateContext)
    const {textArray} = useContext(TextContext)

    const MoveRoom = (direction) => {
        switch(direction) {
            case "south":
                if(currentRoom.exitSouth)setLocation({...location, y: location.y+1})
                break;
            case "west":
                if(currentRoom.exitWest)setLocation({...location, x: location.x-1})
                break;
            case "north":
                if(currentRoom.exitNorth)setLocation({...location, y: location.y-1})
                break;
            case "east":
                if(currentRoom.exitEast)setLocation({...location, x: location.x+1})
                break;
            default:
                console.log("Please give a direction to MoveRoom()")
                break;
        }
    }

    const middleButtonJSX = {
        display: "flex",
        justifyContent: "space-between",
        width: "30vw"
    }

    return (
        <div className="CenterAction-Container">
            <div className='CenterAction-SceneContainer'>
                location: X: {location.x} Y: {location.y} 
                {textArray.map((text)=>{return<div>{text}</div>})}
                
            </div>
            <div className='CenterAction-ActionsContainer'>
                {currentRoom?.specialActions}
                <div className='flex-col'>
                    <ActionButton action={()=>MoveRoom("north")} name={"Move North"}/>
                    <div style={middleButtonJSX}><ActionButton action={()=>MoveRoom("west")} name={"Move West"}/>
                    <ActionButton action={()=>MoveRoom("east")} name={"Move East"}/></div>
                    <ActionButton action={()=>MoveRoom("south")} name={"Move South"}/>
                </div>
            </div>
        </div>
    )
}