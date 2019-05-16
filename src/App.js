import React, { Component } from "react"
import { getWordsRandomized, scrambleOptions } from "./vocabularyUtils"
import "./App.css"
import QuizPage from "./components/QuizPage"
import { ResultPage } from "./components/ResultPage"
import ChooseChapter from "./components/ChooseChapters"
import { CSSTransition } from "react-transition-group"

class App extends Component {
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
    chooseChapterScrollTop: 0
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
    // Game logic here works but is a mess Todo
    console.log("1", this.state.showStartPage)
    console.log("2", this.isGameFinished())
    return (
      <div ref={this.AppDidMount} className="App">
        {this.renderChooseChapter()}
        {!this.state.showStartPage &&
          this.isGameFinished() &&
          this.renderResultPage()}
        <CSSTransition
          in={!this.state.showStartPage && !this.isGameFinished()}
          timeout={300}
          classNames="my-node"
        >
          {this.renderQuizPage()}
        </CSSTransition>
      </div>
    )
  }
}

export default App
