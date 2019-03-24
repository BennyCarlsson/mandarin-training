import React, { Component } from "react"
import { getWordsRandomized } from "./vocabularyUtils"
import "./App.css"
import Options from "./components/Options"
import TheWord from "./components/TheWord"

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
    } else {
      this.setState({ answeredWrong: true })
    }
  }

  getCurrentWord = () => {
    const { gameWords, questionIndex } = this.state
    return gameWords[questionIndex]
  }

  render() {
    return (
      <div className="App">
        <TheWord
          currentWord={this.getCurrentWord()}
          answeredWrong={this.state.answeredWrong}
        />
        <Options
          gameWords={this.state.gameWords}
          optionPress={this.optionPress}
          scrambledOptions={this.state.scrambledOptions}
        />
      </div>
    )
  }
}

const scrambleOptions = (gameWords, questionIndex) => {
  let scrambledOptions = []

  while (scrambledOptions.length < 4 && gameWords.length > 4) {
    const randomNumber = Math.floor(Math.random() * gameWords.length)
    if (
      randomNumber !== questionIndex &&
      !scrambledOptions.includes(randomNumber)
    ) {
      scrambledOptions.push(randomNumber)
    }
  }

  const nr = Math.floor(Math.random() * 4)
  scrambledOptions[nr] = questionIndex
  return scrambledOptions
}

export default App
