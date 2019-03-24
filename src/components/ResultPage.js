import React, { Component } from "react"
import Typography from "@material-ui/core/Typography"
import { withTheme } from "@material-ui/core/styles"
import Fab from "@material-ui/core/Fab"
import Icon from "@material-ui/core/Icon"

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
          You got {numberOfRightAnswers} correct answers out of{" "}
          {numberOfQuestions}
        </Typography>
        <br />
        <Fab
          variant="extended"
          aria-label="replay"
          onClick={() => this.props.replay()}
        >
          <Icon>replay</Icon>
          <p> Replay</p>
        </Fab>
      </div>
    )
  }
}

export default withTheme()(ResultPage)
