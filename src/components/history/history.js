import React from 'react';
import his from './history_style/history.module.css';

const History = (props) => {
  let showAllHistory =
      props.descriptionPicture.map(el => {
        return <HistoryItems src ={el.src} value = {el.value} date = {el.date} />
      });

  return (
   <div>
          {showAllHistory}
    </div>
  )
}

const HistoryItems = (props) => {
  return (
   <div className={his.history__container}>
     <div className={his.history__wrapper}>
         <div className={his.history__answer}>
           <div className={his.img}>
           <img className={his.img} src={props.src} />
           </div>
           <div className={his.history__text}>
             <p>{props.value}</p>
           </div>
         </div>
         <div className={his.history__date}>
           <p>{props.date}</p>
         </div>
     </div>
   </div>

  )
}
export default History;
