import React, { Component } from "react"
import { getWordsRandomized, scrambleOptions } from "./vocabularyUtils"
import "./App.css"
import QuizPage from "./components/QuizPage"
import { ResultPage } from "./components/ResultPage"
import ChooseChapter from "./components/ChooseChapters"
import { CSSTransition } from "react-transition-group"
import UpdateSnackBar from "./components/UpdateSnackBar"
import * as serviceWorker from "./serviceWorker"

class App extends Component {
  constructor(props) {
    super(props)
    serviceWorker.register({
      onUpdate: this.handleServiceWorkerUpdate
    })
  }

  handleServiceWorkerUpdate = registration => {
    this.setState({ showUpdateSnackBar: true })
  }

  handleCloseSnackBar = (event, reason) => {
    if (reason === "clickaway") {
      console.log("click away")
      return
    }

    this.setState({ showUpdateSnackBar: false })
  }

  AppDidMount = node => {
    if (node) {
      node.addEventListener("scroll", this.scrollListener)
    }
  }

  scrollListener = event => {
    this.setState({ chooseChapterScrollTop: event.target.scrollTop })
  }

  state = {
    gameWords: [],
    wrongAnswers: [],
    answerOptions: [],
    scrambledOptions: [],
    questionIndex: 0,
    answeredWrong: false,
    showStartPage: true,
    showTranslation: false,
    chooseChapterScrollTop: 0,
    showUpdateSnackBar: false
  }

  replay = () => {
    this.setState({
      showStartPage: true
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
      showStartPage: false,
      questionIndex: 0,
      answeredWrong: false,
      showTranslation: false,
      wrongAnswers: []
    })
  }
  renderChooseChapter = () => {
    return (
      <ChooseChapter
        chooseChapterScrollTop={this.state.chooseChapterScrollTop}
        startChapter={this.startChapter}
      />
    )
  }

  renderResultPage = () => {
    return (
      <ResultPage
        wrongAnswers={this.state.wrongAnswers}
        gameWords={this.state.gameWords}
        replay={this.replay}
        replayIncorrectWords={this.replayIncorrectWords}
      />
    )
  }

  renderQuizPage = () => {
    return (
      <QuizPage
        replay={this.replay}
        getCurrentWord={this.getCurrentWord}
        answeredWrong={this.state.answeredWrong}
        gameWords={this.state.gameWords}
        optionPress={this.optionPress}
        scrambledOptions={this.state.scrambledOptions}
        progress={this.getGameProgress()}
        setShowTranslation={this.setShowTranslation}
        showTranslation={this.state.showTranslation}
      />
    )
  }
  render() {
    return (
      <div ref={this.AppDidMount} className="App">
        {this.renderChooseChapter()}
        <CSSTransition
          in={!this.state.showStartPage}
          timeout={300}
          classNames="quizAndResultWrapper"
        >
          <div className="quizAndResultWrapper">
            {this.isGameFinished()
              ? this.renderResultPage()
              : this.renderQuizPage()}
          </div>
        </CSSTransition>
        <UpdateSnackBar
          handleCloseSnackBar={this.handleCloseSnackBar}
          showUpdateSnackBar={this.state.showUpdateSnackBar}
        />
      </div>
    )
  }
}

export default App
