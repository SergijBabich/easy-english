import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import HeaderContainer from  './components/header/header_container.js';
import ProfileContainer from  './components/profile/profile_container.js';
import NavContainer from  './components/nav/nav_container.js';
import TestContainer from  './components/test/test_container.js';
import UsersContainer from './components/Users/Users_container.js';
import SettingsContainer from  './components/settings/settings_container.js';
import DescriptionContainer from './components/description/description_container.js'
import RegisterContainer from  './components/login/register_container.js';
import LoginContainer from  './components/login/Login_container.js';
import HistoryContainer from './components/history/history_container.js';
import Footer from  './components/footer/footer.js';
import Start from  './components/startPage/startPage.js';
import {BrowserRouter, Route, withRouter} from  'react-router-dom';
import {Provider} from  'react-redux';
import {compose} from "redux";
import store from './Redux/redux_store.js';
const   App = () => {
  return (
        <div className='app__wrapper'>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
         <Provider store ={store}>
            <HeaderContainer />
            <Route exact path='/' render={() => <Redirect to='/start'/>}/>
        <div className="wrapper">
          <div className='content__main'>
            <Route path='/start'  component = { Start } />
            <Route path='/profile'  component = { ProfileContainer } />
            <Route path='/test' component = {TestContainer} />
            <Route path='/users'  component = {UsersContainer}/>
            <Route path='/settings'  component = {SettingsContainer}/>
            <Route path='/describeThePicture'  component = {DescriptionContainer}/>
            <Route path='/history'  component = {HistoryContainer}/>
            <Route path='/register'  render = { () => {
               return    <React.Suspense>
                   <RegisterContainer/>
                   </React.Suspense>
                 }} />
                 <Route path='/login'  render = { () => {
                    return    <React.Suspense>
                        <LoginContainer/>
                        </React.Suspense>
                      }} />
           </div>
           <div className="content__sidebar">
            <NavContainer />
           </div>
         </div>
          {/*<div className="footer-container">
                  <Footer />
          </div>*/}

         </Provider>
      </BrowserRouter>
        </div>
  );
}

export default App;
