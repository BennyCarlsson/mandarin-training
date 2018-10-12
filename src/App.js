import React, { Component } from 'react';
import vocabulary from "./vocabulary"
import './App.css';

class App extends Component {
  state = {gameWords:[], correctAnswers:[],wrongAnswers:[], answerOptions:[], questionIndex:0}

  componentDidMount = () => {
    this.setState({gameWords:this.getWordsRandomized()})
  }

  getWordsRandomized = () => {
    return this.shuffle(vocabulary.slice())
  }

  shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  nextQuestion = () => {

  }

  handleQuestion = () => {

  }

  render() {
    console.log(this.state.gameWords)
    return (
      <div className="App">
        <header className="App-header">
          <p>
            
          </p>
        </header>
      </div>
    );
  }
}

export default App;
