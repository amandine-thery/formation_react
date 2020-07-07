import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Button from '../../UIComponents/Button/Button';
import styles from './TchatSender.module.scss';
import * as moment from 'moment';

const TchatSender = props => {

  let [messageOutbox, setMessage] = useState('');// hook d'état
  const submitMessage = (message) => {
    let myHeaders = new Headers();
    message.heure = moment().format('YYYYMMDDDHHmmss');
    myHeaders.append("Content-Type", "application/json");
    fetch('http://localhost:4456/messages', { 
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(message)
    }).then(e=>e.json).then(e=>{console.log(e);setMessage('')});
  }

  return (
    <div className={styles.TchatSender}>
      <form onSubmit={e=>{
          e.preventDefault();
          submitMessage({userId: props.nickname, message:messageOutbox});
      }}>
        <input type="text" name="messageOutbox" value={messageOutbox} onChange={e => {setMessage(e.currentTarget.value)}} placeholder="Saisissez votre message" />
        <Button onClick={e=>{submitMessage({userId: props.nickname, message:messageOutbox})}}>Env<img src="/img/logo.svg" alt=""/>yer</Button>
      </form>
    </div>
  );
}

TchatSender.propTypes = {
  nickname: PropTypes.string,
};

export default TchatSender;
