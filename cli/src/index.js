import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import UI from './pages/UI/UI';
import ErrorPage from './pages/errors/404';
import reportWebVitals from './scripts/reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { CharacterArea } from './context/Character';
import { GameStateArea } from './context/GameState';
import { StoryArea } from './context/Story';
import { TextArea } from './context/Text';
import { InventoryArea } from './context/Inventory';
import { MenuArea } from './context/menuContext';
import { NPCArea } from './context/NPC';
import { CurrentBattleArea } from './context/CurrentBattle';
import { MapArea } from './context/Map';

//This is our main route
//!Move this at some point
const router = createBrowserRouter([
  {
    path: "/",
    element: <UI/>,
    errorElement: <ErrorPage/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //React Strict Mode only refreshes once per update rather than twice.
  <React.StrictMode>
    {/* This will provide our routes */}
    <TextArea>
    <MapArea>
    <InventoryArea>
    <CharacterArea>
    <GameStateArea>
    <StoryArea>
    <MenuArea>
    <NPCArea>
    <CurrentBattleArea>
      <RouterProvider router={router} />
    </CurrentBattleArea>
    </NPCArea>
    </MenuArea>
    </StoryArea>
    </GameStateArea>
    </CharacterArea>
    </InventoryArea>
    </MapArea>
    </TextArea>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
