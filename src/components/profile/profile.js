import React, {useRef} from 'react';
import  {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import p from './profile_style/profile.module.css';
import  ProfileFormRedux from './profile_form.js';
import { Redirect } from 'react-router-dom';
import PreLoader from '../../Utils/Preloader/Preloader.js'
import firstIcon from '../img/boy.png';
const Profile = (props) => {
// get data of client from props
 let profileData = {
   name: props.name,
   status: props.status,
   position: props.position,
   level: props.level,
   surname: props.surname,
   country: props.country,
   placeOfWork: props.placeOfWork,
 }
   // create hoock for upload avatar
  const inputEl = useRef(null);
// hoock check,user wants contiune or to log out test
  let [editMode, setEditMode] = useState(false);
  const saveChange = (values) =>{
    props.getUserInformation(values.name ,values.status, values.position, values.surname, values.country, values.placeOfWork, values.level, props.id);
    setEditMode(false)
  }
  // if user leave
  if (!props.id) {
       return <Redirect to ={`/login`} />
  }
  // hoock for upload avatar
  const uploadFile =(e) => {
     e.preventDefault();
     props.getUserPhoto(inputEl.current.files[0], props._id);
  }
   return (
   <div class={p.profile__wrapper}>
    <div className={p.profile__container}>
     <div className={p.profile__images}>
      <input  type='file' ref={inputEl} onChange={uploadFile} className={p.images_button}></input>
       <img  src={props.avatar || firstIcon} className={p.icon} alt="альтернативный текст"></img>
       <div className={p.history_link} >
       <NavLink to='/history' > <span className={p.history_redirect}> History </span> </NavLink>
       </div>
     </div>
      { editMode ? <ProfileFormRedux  initialValues ={profileData} onSubmit={saveChange} />
                : <ProfileData getProfileData={profileData}  goToEditMode={() => {setEditMode(true)}}  />}
     </div>
    </div>
   )
}
 const ProfileData = ({goToEditMode,getProfileData }) => {
  return (
    <div className={p.container__info} >
          <div className={p.container__description}>
            <span className={p.name}>{getProfileData.name} {getProfileData.surname}</span>
            <span className={p.work}> <span className={p.helper}>Works as </span>  {getProfileData.placeOfWork}</span>
            <span className={p.contry}><span className={p.helper}>Coгntry</span>  {getProfileData.country}</span>
            <span className={p.line}></span>
            <span className={p.status}>Status- {getProfileData.status}</span>
            <span className={p.lvl}> <span className={p.helper}>LVL</span> - {getProfileData.level}</span>
          </div>
        <div className={p.container__bottom}>
          <div className={p.container__bottom_inf}>
            <span className={p.position}><span className={p.helper}>Posotion</span> - {getProfileData.position}</span>
         </div>
        </div>
        <div className={p.container__bottom_edit}>
         <button  className={p.button}  onClick={goToEditMode} type="button" name="button">Edit</button>
        </div>
    </div>

  )
}

export default Profile;
