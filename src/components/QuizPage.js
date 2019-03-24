import React, { Component, Fragment } from "react"
import Options from "./Options"
import TheWord from "./TheWord"

export default class QuizPage extends Component {
  render() {
    return (
      <div className="quizPageWrapper">
        <TheWord
          currentWord={this.props.getCurrentWord()}
          answeredWrong={this.props.answeredWrong}
        />
        <Options
          gameWords={this.props.gameWords}
          optionPress={this.props.optionPress}
          scrambledOptions={this.props.scrambledOptions}
        />
      </div>
    )
  }
}
