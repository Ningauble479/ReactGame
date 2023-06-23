import '../../styles/UI/UI.css';
import { CenterAction } from './CenterAction';
import { InfoPanel } from './InfoPanel';
import { NPCPanel } from './NPCPanel';
//Our main UI page. This will hold the logic for switching between pages/Structure for all the pages.
//!May change at some point
function UI() {
  return (
    <div className="UI-Container">
      <InfoPanel/>
      <CenterAction/>
      <NPCPanel/>
    </div>
  );
}

export default UI;
