import { useContext, useEffect, useState } from 'react'
import '../../styles/UI/InfoPanel.css'
import { CharacterContext } from '../../context/Character'
import characterPortrait from '../../pictures/Character/Placeholder.jpg'
import { MenuContext } from '../../context/menuContext'
import { Inventory } from '../menu/Inventory'
import { CharacterSheet } from '../menu/CharacterSheet'

//Main Info Panel Component. This will house things like our character card/Health and buttons to take you to different in game menus.
export const InfoPanel = () => {
    //This grabs all of our values from context
    const { health, mana, stamina, horny, name} = useContext(CharacterContext)
    const { menuClosed, setMenuClosed, currentMenu, setCurrentMenu } = useContext(MenuContext)

    const openMenu = (menu) => {
        setMenuClosed(false)
        setCurrentMenu(menu)
    }

    const closeMenu = (menu) => {
        if(currentMenu === menu){
        setMenuClosed(true)
        }
        setCurrentMenu(menu)
    }

    //Menu Button Component
    const MenuButton = ({buttonName}) => {
        return (
            <div className='MenuButton' draggable={false} onClick={()=>menuClosed ? openMenu(buttonName) : closeMenu(buttonName)}>{buttonName}</div>
        )
    }

    // Our list of buttons
    const MenuButtons = [
        {
            name: "Inventory",
            action: openMenu
        },
        {
            name: "Character Sheet",
            action: openMenu
        }
    ]

    return (
        <div className={menuClosed ? 'InfoPanel-Container-Closed' : 'InfoPanel-Container-Open'}>
            <div className='SidebarContainer'>
                {/* Our Character Info Panel */}
                <div className='CharacterInfo-Container'>
                    <img src={characterPortrait}/>
                    <h2>{name}</h2>
                    <div className='statusBarContainer'>
                    {/* These are our status bars */}
                    <div className='statusBar'>
                        <div className={"bar"}style={{background: 'red', width: `${health}%`}}>
                            {health}/100
                        </div>
                    </div>
                    <div className='statusBar'>
                        <div className={"bar"}style={{background: 'blue', width: `${mana}%`}}>
                            {mana}/100
                        </div>
                    </div>
                    <div className='statusBar'>
                        <div className={"bar"}style={{background: 'green', width: `${stamina}%`}}>
                            {stamina}/100
                        </div>
                    </div>
                    <div className='statusBar'>
                        <div className={"bar"}style={{background: 'rgb(143, 48, 135)', width: `${horny}%`}}>
                            {horny}/100
                        </div>
                    </div>
                    </div>
                </div>

                {/* Our Menu Buttons to open in game menus */}
                <div className='MenuButtons-Container'>
                    {
                        // This will generate a list of buttons each button will have a name and an associated menu attached
                        // Buttons will be objects with 2 values. A name key and a menu key. Clicking on said button will open the corresponding menu
                        MenuButtons.map((button) => {
                            return <MenuButton buttonName={button.name}/>})
                    }
                </div>
                <div className='miniMap'>
                    Map

                </div>
            </div>
            <div className='menu'>
                    {
                        currentMenu === "Inventory" ?
                        <Inventory/> : currentMenu === "Character Sheet" ?
                        <CharacterSheet/> : null
                    }
            </div>
        </div>
    )
}