import React, { Component } from "react"
import Typography from "@material-ui/core/Typography"
import { withTheme } from "@material-ui/core/styles"

export class ResultPage extends Component {
  render() {
    const styles = {
      primaryColor: {
        color: "white"
      }
    }
    const { gameWords, wrongAnswers } = this.props
    const numberOfQuestions = gameWords ? gameWords.length : 0
    const numberOfWrongAnswers = wrongAnswers ? wrongAnswers.length : 0
    const numberOfRightAnswers = numberOfQuestions - numberOfWrongAnswers
    return (
      <div className="resultPageWrapper">
        <Typography style={styles.primaryColor} variant="display4" gutterBottom>
          很好!
        </Typography>
        <Typography style={styles.primaryColor} variant="display4" gutterBottom>
          {numberOfRightAnswers} / {numberOfQuestions}
        </Typography>
        <Typography
          style={styles.primaryColor}
          variant="subheading"
          gutterBottom
        >
          You got {numberOfWrongAnswers} wrong answers out of{" "}
          {numberOfQuestions}
        </Typography>
      </div>
    )
  }
}

export default withTheme()(ResultPage)
