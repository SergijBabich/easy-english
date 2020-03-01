import {NavLink} from 'react-router-dom';
import React from 'react';
import options from './test_style/test.module.css';
import {Route} from  'react-router-dom';
import img from '../img/desctiption.png';
import { Redirect } from 'react-router-dom';

const Test = (props) => {
  if (!props.id) {
        return <Redirect to ={`/login`} />
   }
   return (
          <div className={options.test_options}>
              <div className={options.test_img}>
                <img className={options.test_img} src={img} alt="" />
              </div>
              <span className={options.test_description}> We need in those test description picture in english and use key words </span>
              <NavLink to='/describeThePicture' tesks ={props.decsriptionPicture} >   <button type="button" className={options.button} name="button">Get Start!</button> </NavLink>
          </div>
   )
}

export default Test;
