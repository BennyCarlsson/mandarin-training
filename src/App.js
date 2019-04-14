import React, { Component } from "react"
import { getWordsRandomized, scrambleOptions } from "./vocabularyUtils"
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
    showStartPage: true,
    showTranslation: false
  }

  replay = () => {
    const wordsRandomized = getWordsRandomized()
    this.setState({
      gameWords: wordsRandomized,
      scrambledOptions: scrambleOptions(wordsRandomized[0]),
      wrongAnswers: [],
      answerOptions: [],
      questionIndex: 0,
      answeredWrong: false,
      showStartPage: true,
      showTranslation: false
    })
  }

  replayIncorrectWords = () => {
    const words = this.state.wrongAnswers
    this.setState({
      gameWords: words,
      scrambledOptions: scrambleOptions(words[0]),
      wrongAnswers: [],
      answerOptions: [],
      questionIndex: 0,
      answeredWrong: false,
      showTranslation: false
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
      scrambledOptions: scrambleOptions(gameWords[newQuestionIndex]),
      showTranslation: false
    })
  }
  setShowTranslation = showTranslation => {
    this.setState({ showTranslation })
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

  startChapter = chapter => {
    const wordsRandomized = getWordsRandomized([chapter])
    this.setState({
      gameWords: wordsRandomized,
      scrambledOptions: scrambleOptions(wordsRandomized[0]),
      showStartPage: false
    })
  }

  render() {
    // Game logic here works but is a mess Todo
    return (
      <div className="App">
        <BetaVersionTag />
        {this.state.showStartPage ? (
          <ChooseChapter startChapter={this.startChapter} />
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
            setShowTranslation={this.setShowTranslation}
            showTranslation={this.state.showTranslation}
          />
        )}
      </div>
    )
  }
}

export default App
