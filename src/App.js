import React, { Component } from "react"
import {getWordsRandomized} from "./vocabularyUtils"
import "./App.css"

class App extends Component {
  state = {
    gameWords: [],
    correctAnswers: [],
    wrongAnswers: [],
    answerOptions: [],
    questionIndex: 0
  }

  componentDidMount = () => {
    this.setState({ gameWords: getWordsRandomized() })
  }

  setNextQuestion = () => {
    const { gameWords, questionIndex } = this.state
    const question = gameWords[questionIndex]
    this.setState({ questionIndex: questionIndex + 1, currentWord: question })
  }

  handleQuestion = () => {}

  getCurrentWord = () => {
    const { gameWords, questionIndex } = this.state
    return gameWords[questionIndex]
  }

  getAnswerOptions = () => {
    const currentWord = this.getCurrentWord()
    if (!currentWord) {
      return
    }
    return <button onClick={this.setNextQuestion}>{currentWord.pinyin}</button>
  }

  render() {
    console.log("state: ",this.state)
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.getCurrentWord() && this.getCurrentWord().chinese}</h1>
          <div>{this.getAnswerOptions()}</div>
        </header>
      </div>
    )
  }
}

export default App
