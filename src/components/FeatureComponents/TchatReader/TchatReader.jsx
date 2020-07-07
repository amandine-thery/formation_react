import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './TchatReader.module.scss';
import * as moment from 'moment';

const TchatReader = (props) => { // paramètres autour de props pas obligatoires, ça le devient si plusieurs paramètres
  let [messages, setMessages] = useState([
    {id:0, userId:"alex", message:"Demat breizh"}, 
    {id:1, userId:"jean-raoul", message:"Hello Great Britain"}
  ]);// pour le changement d'etat

  let [lastReload, setLastReload] = useState(moment('2020-07-07').format('YYYYMMDDHHmmss'));

  // Similaire à componentDidMount et componentDidUpdate :  
  useEffect(() => {   
    getRestMessages();
    setInterval(getRestMessages, 2000);
  }, []);// [] pour ne faire componentDidMount une seule fois

  const Moment=moment; //alias pour les fonctions
  const getRestMessages = () => {
    fetch('http://localhost:4456/messages?_sort=heure&_order=desc&_expand=user&heure_gte='+lastReload).then(r=>r.json()).then(r=>{
      setMessages([...messages, ...r]);//spread operator ...messages
      let lastRevievedMessageDate = lastReload;
      const l = r.find(e=>{ 
        if (e.heure >lastRevievedMessageDate) {
          lastRevievedMessageDate = e.heure;
        }
      });
      setLastReload(lastRevievedMessageDate);
    });
  }

  return (
    <>
      <br />last reload : {moment(lastReload.substring(0,8)+'T'+lastReload.substring(8)).format('DD-MM-YYYY HH:mm:ss')}
      <div className={styles.TchatReader}>
        {
          // key : nécessaire pour react avec les boucles
          messages.map((e,i)=>{
            return <TchatMessage message={e} nickname={props.nickname} key={`message-${i}`}/>
          })
        }
      </div>
    </>
  )
};

TchatReader.propTypes = {
  nickname: PropTypes.string,
};

/**
 * 
 * @param {*} props 
 */
export const TchatMessage = (props) => { //pour le rendre disponible à l'export via import TchatReacher, {TchatMessage}
  const isMine = props.nickname === props.message.userId;
  return (
    <div style={{ textAlign: (isMine ? 'right' : 'left') }}>
      <div className={styles.TchatMessage + (isMine?" "+styles.mine:"")}>
        {props.message.message}
        <div style={{ color: 'black', fontSize: '12pt', textAlign: 'right', fontStyle:'italic' }}>Emis par : {props.message.userId}</div>
        </div>
    </div>
    );
}; 

TchatMessage.propTypes = {
  message: PropTypes.object, // on ne peut pas définir en jsx la structure de l'objet contrairement à tsx
  nickname: PropTypes.string, // pas une obligation
};

export default TchatReader; // correspond à l'import dans un autre fichier
