import React from 'react';
import PropTypes from 'prop-types';
import styles from './NicknameForm.module.scss';
import Button from '../UIComponents/Button/Button';

class NicknameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state={nickname: props.nick}
  }

  submitForm = (evt) => {
    evt.preventDefault(); //arrete la submission
    console.log('event form '+ evt);
    this.props.validateNick({newNick: this.state.nickname})
  }

  emptyInput = () => {
    this.setState({nickname:"Charly"});
  }

  resetForm = (evt) => {
    evt.preventDefault();
    this.emptyInput();
  }

  render() {    
    return (
      <form className={styles.NicknameForm} data-testid="NicknameForm" onSubmit={this.submitForm} onReset={this.resetForm}>
        <label htmlFor="nickname">Nickname :</label>
        <input type="text" placeholder="Saisissez votre nickname" name="nickname" 
          onChange={(e)=>{
            this.setState({nickname:e.currentTarget.value});
          }} value={this.state.nickname}/>
        <Button onClick={this.submitForm} bgColor="green">Valider</Button>
        <Button onClick={this.resetForm} bgColor="grey">Reset</Button>
        <br />
        Votre pseudo : {this.state.nickname}
      </form>
    );
  }
}

export default NicknameForm;

NicknameForm.propTypes = {}; //c'est mieux de les remplir, on peut définir validateNick

NicknameForm.defaultProps = {};
