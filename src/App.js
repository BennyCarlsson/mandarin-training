import React, { Component } from "react"
import { getWordsRandomized } from "./vocabularyUtils"
import { scrambleOptions } from "./utils"
import "./App.css"
import QuizPage from "./components/QuizPage"
import { ResultPage } from "./components/ResultPage"
import BetaVersionTag from "./components/BetaVersionTag"
import ChooseChapter from "./components/ChooseChapters"

class App extends Component {
  state = {
    gameWords: [],
    wrongAnswers: [],
    answerOptions: [],
    scrambledOptions: [],
    questionIndex: 0,
    answeredWrong: false,
    showStartPage: false
  }

  componentDidMount = () => {
    const wordsRandomized = getWordsRandomized()
    this.setState({
      gameWords: wordsRandomized,
      scrambledOptions: scrambleOptions(wordsRandomized, 0)
    })
  }

  replay = () => {
    const wordsRandomized = getWordsRandomized()
    this.setState({
      gameWords: wordsRandomized,
      scrambledOptions: scrambleOptions(wordsRandomized, 0),
      wrongAnswers: [],
      answerOptions: [],
      questionIndex: 0,
      answeredWrong: false
    })
  }

  replayIncorrectWords = () => {
    const words = this.state.wrongAnswers
    console.log(words)
    this.setState({
      gameWords: words,
      scrambledOptions: scrambleOptions(words, 0),
      wrongAnswers: [],
      answerOptions: [],
      questionIndex: 0,
      answeredWrong: false
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
      newWrongAnswers.push(this.getCurrentWord())
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
  getGameProgress = () => {
    if (this.state.gameWords && this.state.questionIndex) {
      return (this.state.questionIndex / this.state.gameWords.length) * 100
    }
    return 0
  }
  render() {
    // Game logic here works but is a mess Todo
    return (
      <div className="App">
        <BetaVersionTag />
        {this.state.showStartPage ? (
          <ChooseChapter />
        ) : this.isGameFinished() ? (
          <ResultPage
            wrongAnswers={this.state.wrongAnswers}
            gameWords={this.state.gameWords}
            replay={this.replay}
            replayIncorrectWords={this.replayIncorrectWords}
          />
        ) : (
          <QuizPage
            getCurrentWord={this.getCurrentWord}
            answeredWrong={this.state.answeredWrong}
            gameWords={this.state.gameWords}
            optionPress={this.optionPress}
            scrambledOptions={this.state.scrambledOptions}
            progress={this.getGameProgress()}
          />
        )}
      </div>
    )
  }
}

export default App
