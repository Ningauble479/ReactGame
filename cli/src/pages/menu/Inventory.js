import { useEffect } from "react"
import { useInventoryContext } from "../../context/Inventory"
import '../../styles/Menus/Inventory.css'
import { WoodenSword } from "../../Items/Weapons/Weapons"



export const Inventory = () => {
    const {inventory, addItem} = useInventoryContext()

    const itemTypes = ['Head', 'Body', 'Hands', 'Feet', 'Weapons', 'Protective', 'Special']
    const ItemType = ({name}) => {
        return (
            <div className="ItemTypeBox">
                {name}
            </div>
        )
    }
    useEffect(()=>{
        console.log("what")
    },[inventory])
    const ItemRow = ({item}) => {
        return (
            <div className="ItemRow">
                <div className="StatBox">{item.name}</div>
                <div className="ItemBox">{item.type}</div>
                <div className="ItemBox">{item.damage}</div>
                <div className="ItemBox">{item.element}</div>
                <div className="ItemBox">Card</div>
                <div className="ItemBox">{item.amount}</div>
                <div className="ItemBox">{item.value} GP</div>
                <div className="ItemBox">{item.value * item.amount} GP</div>
            </div>
        )
    }
    console.log(inventory)

    return (
        <div className="InventoryContainer">
            <div className="Items">
                <div className="ItemType">
                    {itemTypes.map((itemType)=>{return <ItemType name={itemType}/>})}
                </div>
                <div className="Stats">
                    <div className="StatBox"/>
                    <div className="StatBox">Type</div>
                    <div className="StatBox">Damage</div>
                    <div className="StatBox">Element</div>
                    <div className="StatBox">Actions</div>
                    <div className="StatBox">Amount</div>
                    <div className="StatBox">Value</div>
                    <div className="StatBox">Value Total</div>
                </div>
                <div>
                    <button onClick={()=>addItem(WoodenSword())}></button>
                </div>
                <div className="ItemView">
                    {inventory.map((item)=>{return <ItemRow item={item}/>})}
                </div>
                <div className="ItemCard">Item Card</div>
            </div>
            <div className="Equipped">
                
            </div>
        </div>
    )
}