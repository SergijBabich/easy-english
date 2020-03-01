import React from 'react';
import set from './settings_style/settings.module.css';
import {NavLink} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
const Settings = (props) => {
  const setLogOut = () => {
    props.removeCardUser(props.id);
    let id = props.id;
    id =null;
    props.logOut(id);
    localStorage.clear();
  }
  if (!props.id) {
        return <Redirect to ={`/login`} />
   }
   return (
     <div class={set.settings__wrapper}>
       <div class={set.settings__container}>
         <div class={set.settings__name}>
           <h2>Settings</h2>
         </div>
         <div class={set.settings}>
           <div class={set.settings_items}>
             <span>Language (in developing)</span>

             <select>
                   <option value='en'>EN</option>
                   <option value='ru'>RU</option>
                   <option value='uk'>UK</option>
             </select>
           </div>
           <div class={set.settings_items}>
             <span>Mode (in developing)</span>
             <div class={set.theme__switch__wrapper}>
                 <label class={set.theme__switch} for="checkbox">
                      <input type="checkbox" id="checkbox" />
                      <div class={set.slider +' '+ set.round}></div>
                 </label>
             </div>
           </div>
           <div class={set.settings_items}>
             <span>Delete account</span>
             <NavLink to ='login'>
                <div><button onClick={setLogOut} type="button" class={set.button} name="button">Delete </button> </div>
             </NavLink >
          </div>
         </div>
       </div>
     </div>
   )
}

export default Settings;
