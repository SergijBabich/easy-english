import React from 'react';
import { Field, reduxForm } from 'redux-form';
import desc from './description_style/description.module.css';
import {Textarea} from '../../Utils/formControl.js';
import { Redirect } from 'react-router-dom';
import PreLoader from '../../Utils/Preloader/Preloader.js';
import loader from '../img/spin.gif';
import {reset} from 'redux-form';
import {required , maxLengthCreator, minLengthCreator} from '../../Utils/validator.js';

class  DescribePicture extends  React.Component {
  constructor(props) {
    super(props)
  }
  state = {
      rand :Math.floor(Math.random() * this.props.decsriptionPicture.length),
      showModal: false,
      setRedirect: false
  }
  setDescriptionPicture= (value) => {
    let date = (new Date()).toUTCString();
     this.props.putUserLevel(this.props.decsriptionPicture[this.state.rand].src, value.descValue,date, this.props.level+1, this.props.id );
     this.setState({showModal: !this.state.showModal});
        (()=> {value.descValue=''})();
   }

  changeTask = () => {
    this.setState({
      rand: Math.floor(Math.random() * this.props.decsriptionPicture.length)
    });
  }
  toCompleteTheTask = () => {
      this.props.history.push(`/profile/${this.props.id}`);
  }
  toContinueTheTask = () => {
    this.setState({showModal: !this.state.showModal});
    this.setState({
      rand: Math.floor(Math.random() * this.props.decsriptionPicture.length)
    });
  }

  // two func about hide and redireco ot profile, and 2 is hide modal window and
  render() {
    if (!this.props.id) {
          return <Redirect to ={`/login`} />
     }
      return (
        <div className={desc.description__main}>
        {this.state.showModal && <ModalWindow toCompleteTheTask = {this.toCompleteTheTask}
      toContinueTheTask = {this.toContinueTheTask} />}
              <span className={desc.description__help}>Try to describe this picture as extensively as possible, you can use auxiliary words</span>
             <div className={desc.description__task}>
               <div className={desc.description__img}>
                  <img src={this.props.decsriptionPicture[ this.state.rand].src ||loader}/>
               </div>
               <div class={desc.task_helper}>
                 <li>{this.props.decsriptionPicture[ this.state.rand].someWords[0]}</li>
                 <li>{this.props.decsriptionPicture[ this.state.rand].someWords[1]}</li>
                 <li>{this.props.decsriptionPicture[ this.state.rand].someWords[2]}</li>
                 <li>{this.props.decsriptionPicture[ this.state.rand].someWords[3]}</li>
                 <li>{this.props.decsriptionPicture[ this.state.rand].someWords[4]}</li>
              </div>
             </div>
             <div className={desc.description__answer}>
               <DescribeFormRedux onSubmit={this.setDescriptionPicture}/>
            <div className={desc.change_button}>
               <button onClick={this.changeTask} className={desc.button}>Change</button>
            </div>
             </div>
           </div>
      )
 }
}

const DescribeForm = (props) => {
  return (
    <div>
      <form  onSubmit = {props.handleSubmit}>
        <div className={desc.answer__input}>
          <Field component={Textarea} className={desc.textarea_style}  rows="5" cols="80" validate={[required]}  name={'descValue'}  placeholder='Describe what you see' />
        </div>
        <div className={desc.answer_button}>
          <button className={desc.button}>Done</button>
        </div>
      </form>
    </div>
  )
}
const ModalWindow = (props) => {
  let twoClass = desc.button + ' ' + desc.active;
  return (
    <div className={desc.modal}>
     <div className={desc.modal__window}>
       <div className={desc.window__title}>
         <h2>Congratulation!</h2>
       </div>
       <div className={desc.window__button}>
         <div className={desc.window__button_action}>
           <button type="button" className={twoClass} name="button"  onClick={props.toContinueTheTask}>Continue</button>
         </div>
         <div class={desc.window__button_action}>
           <button type="button" className={desc.button}   onClick ={props.toCompleteTheTask} name="button"> Exit</button>
         </div>
       </div>
     </div>
   </div>
  )
}

const DescribeFormRedux = reduxForm({
  form:'descriptionPicture',
  enableReinitialize : true
})(DescribeForm)

export default DescribePicture;
