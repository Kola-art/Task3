import React from 'react';
import './App.css';
import { Enteredtext } from './components/inputtext';

class App extends React.Component  {
  constructor(props){
    super(props);
    this.state = {
      userName: 'гость',
    }
   
  }

  greetingText(){
    return(
      <p>Привет, { this.state.userName }  !  </p>
    )
  }
  handleChange(event){
    if(event.target.value === ""){
      this.setState({userName : 'гость'});
    }
    else this.setState({userName : event.target.value});
  }
   
  render(){
   
    return (
          <div className="App">
              <Enteredtext />
          <div className="App">
            {this.greetingText() }
            <input type="text" placeholder="Введите Ваше имя" onBlur ={(event) => this.handleChange(event)}></input>
          </div>
          </div>
    );
  }
}
export default App;
