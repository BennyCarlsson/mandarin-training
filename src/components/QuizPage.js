import React, { Component } from "react"
import Options from "./Options"
import TheWord from "./TheWord"
import { withStyles } from "@material-ui/core/styles"
import LinearProgress from "@material-ui/core/LinearProgress"
import Icon from "@material-ui/core/Icon"

const styles = theme => ({
  linearProgressDeterminate: {
    backgroundColor: "#8f9bee",
    width: "100vw"
  },
  linearProgressDeterminateBar: {
    backgroundColor: "#3f51b5"
  }
})

class QuizPage extends Component {
  render() {
    const { classes, progress, replay } = this.props
    return (
      <div className="quizPageWrapper">
        <Icon onClick={() => replay()} className="backButton">
          arrow_back
        </Icon>
        <TheWord
          currentWord={this.props.getCurrentWord()}
          answeredWrong={this.props.answeredWrong}
          setShowTranslation={this.props.setShowTranslation}
          showTranslation={this.props.showTranslation}
        />
        <Options
          gameWords={this.props.gameWords}
          optionPress={this.props.optionPress}
          scrambledOptions={this.props.scrambledOptions}
        />
        <LinearProgress
          variant="determinate"
          value={progress}
          classes={{
            root: classes.linearProgressDeterminate,
            bar: classes.linearProgressDeterminateBar
          }}
        />
      </div>
    )
  }
}

export default withStyles(styles)(QuizPage)
