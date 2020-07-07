import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TchatSender from '../TchatSender/TchatSender';
import TchatReader from '../TchatReader/TchatReader';
import styles from './Tchat.module.scss';

class Tchat extends Component {
  constructor(props) {
    super(props);
    this.state = {}; //etat d'application au départ
  }
  render() {
    const { nickname } = this.props;
    return (
      <div className={styles.Tchat}>
        Tchat nick : {this.props.nickname} {/* <= bloc javascript */}
        <TchatReader nickname={nickname} />
        <TchatSender nickname={nickname} />
      </div>
    );
  }
}

Tchat.propTypes = {
  nickname: PropTypes.string,
};

export default Tchat;
