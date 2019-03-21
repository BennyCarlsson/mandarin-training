import React, { Component } from "react"
import { getWordsRandomized } from "./vocabularyUtils"
import "./App.css"
import Options from "./components/Options"

class App extends Component {
  state = {
    gameWords: [],
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

  optionPress = answerOption => {
    if (answerOption === this.getCurrentWord()) {
      this.setNextQuestion()
    } else {
      console.log("wrong answer!")
    }
  }

  getCurrentWord = () => {
    const { gameWords, questionIndex } = this.state
    return gameWords[questionIndex]
  }

  render() {
    return (
      <div className="App">
        <div className="theWordDiv">
          <h1 className="theWord">
            {this.getCurrentWord() && this.getCurrentWord().chinese}
          </h1>
        </div>
        <Options
          gameWords={this.state.gameWords}
          questionIndex={this.state.questionIndex}
          optionPress={this.optionPress}
        />
      </div>
    )
  }
}

export default App
