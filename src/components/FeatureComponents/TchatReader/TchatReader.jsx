import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './TchatReader.module.scss';

const TchatReader = (props) => { // paramètres autour de props pas obligatoires, ça le devient si plusieurs paramètres
  let [messages, setMessages] = useState([
    {id:0, userId:"alex", message:"Demat breizh"}, 
    {id:1, userId:"jean-raoul", message:"Hello Great Britain"}
  ]);// pour le changement d'etat

  // Similaire à componentDidMount et componentDidUpdate :  
  useEffect(() => {   
    console.log(messages);
    setMessages([...messages, {id:2, userId:"yannick", message:'te reste t\'il du chouchen?'}]);//spread operator ...messages
  });

  /*const messages = [
    {id:0, userId:"alex", message:"Demat breizh"}, 
    {id:1, userId:"jean-raoul", message:"Hello Great Britain"}
  ]*/

  return (
  <div className={styles.TchatReader}>
    {
      // key : nécessaire pour react avec les boucles
      messages.map((e,i)=>{
        return <TchatMessage message={e} nickname={props.nickname} key={`message-${i}`}/>
      })
    }
  </div>
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
