import React from 'react';
import PropTypes from 'prop-types';
import styles from './TchatReader.module.scss';

const TchatReader = props => (
  <div className={styles.TchatReader}>
    <TchatMessage message={{message:""}} />
  </div>
);

TchatReader.propTypes = {
  nickname: PropTypes.string,
};

export const TchatMessage = props => { //pour le rendre disponible à l'export via import TchatReacher, {TchatMessage}
  return (<div>Message</div>);
}; 

TchatMessage.propTypes = {
  message: PropTypes.object,
};

export default TchatReader; // correspond à l'import dans un autre fichier
