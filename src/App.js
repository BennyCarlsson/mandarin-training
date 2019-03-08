import React, { Component } from "react"
import { getWordsRandomized } from "./vocabularyUtils"
import "./App.css"
import Options from "./components/Options"

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

  render() {
    console.log("state: ", this.state)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="theWord">
            {this.getCurrentWord() && this.getCurrentWord().chinese}
          </h1>
          <Options
            gameWords={this.state.gameWords}
            questionIndex={this.state.questionIndex}
          />
        </header>
      </div>
    )
  }
}

export default App
