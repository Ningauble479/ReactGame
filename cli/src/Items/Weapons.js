import { useContext } from "react"
import { CurrentBattleContext } from "../context/CurrentBattle"


const SplinteringSwing = () => {
    const { currentEnemies, setCurrentEnemies } = useContext(CurrentBattleContext)
    const { selectedEnemy } = useContext(CurrentBattleContext)

    let currentEnemiesArr = currentEnemies
    const currentEnemiesFound = currentEnemiesArr.find((enemy, i)=>{
        if(selectedEnemy.id === enemy.id){
            if(currentEnemiesArr[i].hp < 4){
                currentEnemiesArr[i].dead = true
                setCurrentEnemies(currentEnemiesArr)

            } else {
                currentEnemiesArr[i].hp = currentEnemiesArr[i].hp - 4
                setCurrentEnemies(currentEnemiesArr)
            }
        }
    })

    

}

export const WoodenSword = () => {
    return {
        name: "Wooden Sword",
        itemType: 'weapon',
        type: "1 HD",
        element: "null",
        range: "Melee",
        damageCards: [SplinteringSwing],
        amount: 1,
        value: 1,
        id: 1

    }
}