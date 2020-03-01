import React from 'react';
import { Field ,reduxForm } from 'redux-form';
import {Input} from '../../Utils/formControl.js';
import p from './profile_style/profile.module.css';
import {requiredFieldMaxValue} from '../../Utils/validator.js';
const ProfileForm = (props) => {
  return (
    <div>
       <form  onSubmit = {props.handleSubmit}>
          <label>Name</label>
          <div>
             <Field component={Input} validate={[requiredFieldMaxValue]} value ={'value'} name={'name'} />
          </div>
          <label>Surname</label>
          <div>
             <Field component={Input} validate={[requiredFieldMaxValue]} value ={'value'} name={'surname'} />
          </div>
          <label>Country</label>
          <div>
             <Field component={Input} validate={[requiredFieldMaxValue]}   name={'country'} />
          </div>
          <label>Place of work</label>
          <div>
             <Field component={Input} validate={[requiredFieldMaxValue]}   name={'placeOfWork'} />
          </div>
          <label>Status</label>
          <div>
             <Field component={Input} validate={[requiredFieldMaxValue]}   name={'status'} />
          </div>
          <label>Position</label>
          <div>
             <Field component={Input}  validate={[requiredFieldMaxValue]}  name={'position'} />
          </div>
          <div  className={p.container__bottom_edit}>
             <button className={p.button}  >Done</button>
          </div>
       </form>
    </div>
  )
}

 const ProfileFormRedux  = reduxForm({
 form: 'profile'
})(ProfileForm)
export default ProfileFormRedux;
