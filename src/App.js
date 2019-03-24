import React, { Component } from "react"
import { getWordsRandomized } from "./vocabularyUtils"
import { scrambleOptions } from "./utils"
import "./App.css"
import QuizPage from "./components/QuizPage"
import { ResultPage } from "./components/ResultPage"

class App extends Component {
  state = {
    gameWords: [],
    wrongAnswers: [],
    answerOptions: [],
    scrambledOptions: [],
    questionIndex: 0,
    answeredWrong: false
  }

  componentDidMount = () => {
    const wordsRandomized = getWordsRandomized()
    this.setState({
      gameWords: wordsRandomized,
      scrambledOptions: scrambleOptions(wordsRandomized, 0)
    })
  }

  setNextQuestion = () => {
    const { gameWords, questionIndex } = this.state
    const question = gameWords[questionIndex]
    const newQuestionIndex = questionIndex + 1
    this.setState({
      questionIndex: newQuestionIndex,
      currentWord: question,
      answeredWrong: false,
      scrambledOptions: scrambleOptions(gameWords, newQuestionIndex)
    })
  }

  optionPress = answerOption => {
    if (answerOption === this.getCurrentWord()) {
      this.setNextQuestion()
    } else if (!this.state.answeredWrong) {
      let newWrongAnswers = this.state.wrongAnswers
      newWrongAnswers.push(answerOption)
      this.setState({ answeredWrong: true, wrongAnswers: newWrongAnswers })
    }
  }

  getCurrentWord = () => {
    const { gameWords, questionIndex } = this.state
    return gameWords[questionIndex]
  }

  isGameFinished = () => {
    return (
      this.state.gameWords &&
      this.state.questionIndex >= this.state.gameWords.length
    )
  }

  render() {
    return (
      <div className="App">
        {this.isGameFinished() ? (
          <ResultPage
            wrongAnswers={this.state.wrongAnswers}
            gameWords={this.state.gameWords}
          />
        ) : (
          <QuizPage
            getCurrentWord={this.getCurrentWord}
            answeredWrong={this.state.answeredWrong}
            gameWords={this.state.gameWords}
            optionPress={this.optionPress}
            scrambledOptions={this.state.scrambledOptions}
          />
        )}
      </div>
    )
  }
}

export default App
