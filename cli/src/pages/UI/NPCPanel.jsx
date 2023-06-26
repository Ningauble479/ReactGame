import { useContext, useEffect } from 'react'
import '../../styles/UI/NPCPanel.css'
import { NPCContext } from '../../context/NPC'






//The text panel will hold all of our text. We will be mainly telling our story through here.
export const NPCPanel = () => {
    const {nPCArray, selectNPC, selectedNPC, setSelectedNPC} = useContext(NPCContext)
    const NPCBox = ({npc}) => {
        return (
            <div className={npc.id === selectedNPC ? 'selected NPCPanel-NPCBox' : 'NPCPanel-NPCBox'} onClick={()=>{
                setSelectedNPC(npc.id)
                }}>
                <div className='image'>
                    {npc.name}
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
    
    if(!nPCArray || nPCArray.length === 0){
        return (
            <div className='NPCPanel-Container'>
                No NPCS in your scene!
            </div>
        )
    }

    return (
        <div className='NPCPanel-Container'>
            {nPCArray.map((npc)=>{return <NPCBox npc={npc} />})}
        </div>
    )
}