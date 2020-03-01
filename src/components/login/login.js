import React, {useState } from 'react';
import authReducer from '../../Redux/Auth_Reducer.js';
import { Field, reduxForm } from 'redux-form';
import {connect} from   'react-redux';
import {NavLink} from 'react-router-dom';
import a from './login_style/login.module.css';
import { Redirect } from 'react-router-dom';
import PreLoader from '../../Utils/Preloader/Preloader.js'
import {Input} from '../../Utils/formControl.js';
import {required , maxLengthCreator, minLengthCreator} from '../../Utils/validator.js';

const Login = (props) => {
    const [isAuth, setAuth] = useState(null);

    let pushFormData = (values) => {
        props.login(values.login , values.password);
        setAuth(isAuth+1);
    }
   if(props.id) {
       return(
          <Redirect to ={`/profile/${props.id}`} />
        )
    }

   return (
     <div className={a.wrapper}>
        <LoginFormRedux isAuth={isAuth} message = {props.message}  onSubmit={pushFormData} />
     </div>
   )
}
 const maxLength20 = maxLengthCreator(20);
 const minLength8 = minLengthCreator(8);
 const AuthorizeForm = (props) => {
 const pass =   a.active2 + ' ' + a.password;
  return  (
 <>
 <form className={a.login} onSubmit = {props.handleSubmit}>
    <h2>Authorize</h2>
    <label for="user" class={a.icon_user}>Login:</label>
    <Field className={a.user} component={Input}  validate={[required, maxLength20]}  name={'login'}  placeholder='Enter your mail' />
    <label for="password" class={a.icon_lock}>Password:</label>
    <div className={a.password__container}>
       <Field component={Input} name={'password'}  className={pass}     id="password"  validate={[required, minLength8]}placeholder='Enter your pass' type={'password'} />
       <button type="submit" value="Войти">Сome in </button>
    </div>
    <div className={a.extra}>
       <NavLink to='/register'>  <a href="#" className={a.register}>Sing up</a> </NavLink>
    </div>
    {props.message && props.isAuth &&
    <div className={a.error}> {props.message} </div>
    }
 </form>
</>
  )
}

const LoginFormRedux = reduxForm({
  form:'authorize'
})(AuthorizeForm);


export default Login;
