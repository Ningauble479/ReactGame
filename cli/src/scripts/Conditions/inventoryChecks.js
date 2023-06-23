import { useContext } from "react"
import { InventoryContext } from "../../context/Inventory"





export const inventoryActive = () => {
    const {active} = useContext(InventoryContext)
}