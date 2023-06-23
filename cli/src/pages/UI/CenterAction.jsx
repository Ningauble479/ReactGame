import { useContext } from 'react'
import '../../styles/UI/CenterAction.css'
import { GameStateContext } from '../../context/GameState'
import { StoryContext } from '../../context/Story'
import { TextContext } from '../../context/Text'

//This will be our center panel. It will show you where you are and whats going on around you to a very basic degree as well as giving you actions.
//?The combat screen will either be thrown in here or will be its own component entirely.


export const CenterAction = () => {
    const {leftStart} = useContext(StoryContext)
    const {doing, location, currentAction, currentPage} = useContext(GameStateContext)
    const {textArray} = useContext(TextContext)
    return (
    <div className="CenterAction-Container">
        <div className='CenterAction-SceneContainer'>
            {textArray.map((text)=>{return<div>{text}</div>})}
        </div>
        <div className='CenterAction-ActionsContainer'>
            {currentAction}
        </div>
    </div>
    )
}