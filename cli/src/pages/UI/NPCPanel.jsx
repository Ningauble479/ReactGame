import { useContext } from 'react'
import '../../styles/UI/NPCPanel.css'
import { NPCContext } from '../../context/NPC'



const NPCBox = ({npc}) => {

    const { selectNPC } = useContext(NPCContext)
    console.log(npc.selected)
    return (
        <div className={`NPCPanel-NPCBox ${npc.selected ? 'selected' : null}`} onClick={()=>{selectNPC(npc.id)}}>
            <div className='image'>
                Picture Here
            </div>
            <div className='info'>
                <div>{npc.name}</div>
                <div className={"bar"}style={{background: 'red', width: `${npc.health}%`}}>
                        {npc.health}/100
                </div>

                <div className={"bar"}style={{background: 'blue', width: `${npc.mana}%`}}>
                        {npc.mana}/100
                </div>

                <div className={"bar"}style={{background: 'green', width: `${npc.stamina}%`}}>
                        {npc.stamina}/100
                </div>

                <div className={"bar"}style={{background: 'purple', width: `${npc.horny}%`}}>
                        {npc.horny}/100
                </div>
                
            </div>
        
        </div>
    )
}


//The text panel will hold all of our text. We will be mainly telling our story through here.
export const NPCPanel = () => {
    const {NPCArray} = useContext(NPCContext)
    if(!NPCArray || NPCArray.length === 0){
        return (
            <div className='NPCPanel-Container'>
                No NPCS in your scene!
            </div>
        )
    }

    return (
        <div className='NPCPanel-Container'>
            {NPCArray.map((npc, key)=>{return <NPCBox npc={npc}/>})}
        </div>
    )
}