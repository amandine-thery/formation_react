import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TchatSender from '../TchatSender/TchatSender';
import TchatReader from '../TchatReader/TchatReader';

class Tchat extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { nickname } = this.props;
    return (
      <div>
        <TchatSender nickname={nickname} />
        <TchatReader nickname={nickname} />
      </div>
    );
  }
}

Tchat.propTypes = {
  nickname: PropTypes.string,
};

export default Tchat;
