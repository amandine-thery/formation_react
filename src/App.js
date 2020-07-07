import React from 'react';
import './App.css';
//import Button from './components/UIComponents/Button/Button';//on peut mettre l'extension, c'est une bonne pratique de ne pas la mettre (.tsx, .jsx)
import NicknameForm from './components/NicknameForm/NicknameForm';
import Tchat from './components/FeatureComponents/Tchat/Tchat';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state={nickname:''};
  }

  buttonClick(evt) {
    console.log(evt);
  }

  render() {
    return (
      <div className="App">
          <NicknameForm nick={this.state.nickname}  validateNick={obj=>{this.setState({nickname:obj.newNick})}}/>
          <hr />
          Bonjour --&gt;{this.state.nickname}&lt;--
          <br />
          <Tchat nickname={this.state.nickname}></Tchat>
          {/*
          <Button onClick={this.buttonClick} bgColor="tomato">
            <div>
              I <img src="img/logo.svg" alt="logo react"/> React
            </div>
          </Button>
          */}
      </div>
    );
  }
}

export default App;
