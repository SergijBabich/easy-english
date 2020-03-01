import React from 'react';
import {NavLink} from 'react-router-dom';
import start from './start.module.css';
import arrow from '../img/down_chevron.png';
const Start = () => {
  return (
   <div class={start.body}>
    <div class={start.body__container}>
      <div class={start.body__logo}>
        <div class={start.body__logo_color}>
          <span class={start.logo_active}>Eng</span><p>&</p>
        </div>
       <span>Easy</span>
      </div>
      <div class={start.body__name}>
        <h1>DEVELOP YOUR ENGLISH WITH US</h1>
        <h3>CREATIVE</h3>
        <h3 class={start.change_color}>WORK.</h3>
      </div>
      <div class={start.container__arrow}>
        <img src={arrow} alt="" />
      </div>
      <div >
      </div>
      <div class={start.container__button}>
        <h4>
            “You do not have to customize. Your dream pulls you forward”, <i>Steve Jobs.</i></h4>
      <NavLink to='/login'>  <button type="button" name="button" class={start.button}>START WHISH US</button> </NavLink>
       <span></span>
      </div>
    </div>
  </div>
  )
}
export  default Start;
