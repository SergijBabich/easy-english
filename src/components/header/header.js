import React from 'react';
import {NavLink} from 'react-router-dom';
import header from './header_style/header.module.css';
import { Redirect } from 'react-router-dom';
import firstIcon from '../img/boy.png';

const Header = (props) => {
  console.log(props);
   return (
     <div class={header.header__container}>
      <NavLink to ={'/login'} >
       <div class={header.header__logo}>
          <div class={header.header__logo_change}>
            <span class={header.logo_little}>Eng</span><p>&</p>
         </div>
         <span>Easy</span>
       </div>
    </NavLink>
       <div class={header.header__authorize}>
         <div class={header.button__wrapper}>
        <a class={header.button} onClick={()=> {localStorage.clear()}} href="../login">
              {props.id &&
                <div>
                  <img src={props.avatar || firstIcon} />
                  <div class={header.logout}>LOGOUT</div>
                 </div> }
           </a>
         </div>
       </div>
     </div>


   )
}

export default Header;
