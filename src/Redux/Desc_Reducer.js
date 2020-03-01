import {profileAPI} from "../api/api.js";
import {setUserLevel} from './Profile_Reducer.js';
import pic1 from '../components/img/describePicture/1.jpg';
import pic2 from '../components/img/describePicture/2.jpg';
import pic3 from '../components/img/describePicture/3.jpg';
import pic4 from '../components/img/describePicture/4.jpg';
import pic6 from '../components/img/describePicture/6.jpg';
import pic7 from '../components/img/describePicture/7.jpg';
import pic9 from '../components/img/describePicture/9.jpeg';
import pic10 from '../components/img/describePicture/10.jpg';
import pic11 from '../components/img/describePicture/11.jpeg';
import pic12 from '../components/img/describePicture/12.jpg';
import pic16 from '../components/img/describePicture/16.jpg';
import pic17 from '../components/img/describePicture/17.jpg';
import pic18 from '../components/img/describePicture/18.jpg';
import pic19 from '../components/img/describePicture/19.jpg';
import pic21 from '../components/img/describePicture/21.jpg';
import pic22 from '../components/img/describePicture/22.jpeg';
import pic23 from '../components/img/describePicture/23.jpg';
import pic24 from '../components/img/describePicture/24.jpg';
import pic25 from '../components/img/describePicture/25.jpg';
import pic26 from '../components/img/describePicture/26.jpg';
import pic27 from '../components/img/describePicture/27.jpg';
import pic28 from '../components/img/describePicture/28.jpg';
import pic29 from '../components/img/describePicture/29.jpg';
import pic30 from '../components/img/describePicture/30.jpg';
import pic31 from '../components/img/describePicture/31.jpg';

const SET_ANSWER_USER = 'SET-ANSWER-USER';
const SET_LEVEL_USER = 'SET-LEVEL-USER'
let initialState =
{
 myAnswer: [{src:null, value:null, date:null},],
 tasks: [
  {src: pic1,
  someWords: ['children', 'weather',  'animal',  'joy', 'friends'],
  answer: ''},
  {src: pic2,
  someWords: ['family', 'day off',  'rest',  'picnic', 'happiness'],
  answer: ''},
  {src: pic3,
  someWords: ['furniture', 'room',  'bit',  'in front', 'interior'],
  answer: ''},
  {src: pic4,
  someWords: ['rest', 'resort',  'expensive',  'beach', 'sea'],
  answer: ''},
  {src: pic6,
  someWords: ['hair', 'faces',  'emotions',  'eyes', 'mood'],
  answer: ''},
  {src: pic7,
  someWords: ['friends', 'game',  'passion',  'indifference', 'phone '],
  answer: ''},
  {src: pic9,
  someWords: ['technology', 'baggage',  'airport',  'people', 'fly'],
  answer: ''},
  {src: pic10,
  someWords: ['comfort', 'help',  'cook',  'day of the week', 'restaurant'],
  answer: ''},
  {src: pic11,
  someWords: ['operation', 'doctors',  'life',  'threat', 'anesthesia'],
  answer: ''},
  {src: pic12,
  someWords: ['sunset', 'nature',  'country',  'mountains', 'flowers'],
  answer: ''},
  {src: pic16,
  someWords: ['office', 'routine',  'multitasking',  'imagination', 'untruth'],
  answer: ''},
  {src: pic17,
  someWords: ['China', 'the wall',  'tourists',  'defense', 'space'],
  answer: ''},
  {src: pic18,
  someWords: ['ancient rome', 'games',  'run',  'caesar', 'start'],
  answer: ''},
  {src: pic19,
  someWords: ['games', 'fgdfg',  'rtwettru',  'rteyth', 'gtewreqweqw'],
  answer: ''},
  {src: pic21,
  someWords: ['school', 'children',  'teacher',  'lesson', 'drawing']
  },
  {src: pic22,
  someWords: ['meeting', 'business',  'marketing',  'discussion', 'boss']
  },
  {src: pic23,
  someWords: ['work', 'dream',  'developers',  'atmosphere', 'space']
  },
  {src: pic24,
  someWords: ['children', 'kindergarten',  'games',  'cubes', 'nannies']
  },
  {src: pic25,
  someWords: ['jump', 'dangerous',  'emotions',  'parachute', 'plane']
  },
  {src: pic26,
  someWords: ['jump', 'name',  'some',  'each', 'difinition']
  },
  {src: pic27,
  someWords: ['athlete', 'tournament',  'some',  'result', 'judge']
  },
  {src: pic28,
  someWords: ['athletes', 'obstacles',  'london',  'start', 'anxiety']
  },
  {src: pic29,
  someWords: ['biathlon', 'snow',  'weapons',  'glasses', 'athletes']
  },
  {src: pic30,
  someWords: ['vacation ', 'beach',  'young',  'maldives', 'resort']
  },
  {src: pic31,
  someWords: ['travel', 'sphinx',  'egypt',  'pyramid', 'heat']
  },
 ]
}

const descReducer  = ( state = initialState, action) => {
 switch (action.type) {
   case SET_ANSWER_USER:
   let history = {
     src: action.src,
     value: action.value,
     date:action.date
   }
    return {
      ...state,
      myAnswer: [...state.myAnswer, history],
      level:action.level
    }
   default:
   return state;
 }
}


 export let setUserAnswer = (src,value, date, level ) => {
  return {
    type: SET_ANSWER_USER,
    src,
    value,
    date,
    level,
  }
}


export const putUserLevel = (src, value, date, level, id) => {
    return  async(dispatch) => {
    let data = await profileAPI.setUserLevel(level, id );
      dispatch(setUserAnswer(src, value, date));
      dispatch(setUserLevel(+data.value.level))
  }
}


export default descReducer;
