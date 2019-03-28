import React, { Component, Fragment } from "react"
import { withTheme } from "@material-ui/core/styles"
import Fab from "@material-ui/core/Fab"
import Typography from "@material-ui/core/Typography"
import Icon from "@material-ui/core/Icon"
import ListWrongAnswers from "./ListWrongAnswers"
import Button from "@material-ui/core/Button"

export class ResultPage extends Component {
  render() {
    const styles = {
      primaryColor: {
        color: "white"
      }
    }
    const { gameWords, wrongAnswers, replay, replayIncorrectWords } = this.props
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

        <ReplayButtons
          replay={replay}
          replayIncorrectWords={replayIncorrectWords}
          numberOfWrongAnswers={numberOfWrongAnswers}
        />
        {numberOfWrongAnswers > 0 ? (
          <ListWrongAnswers wrongAnswers={wrongAnswers} />
        ) : (
          ""
        )}
      </div>
    )
  }
}

const ReplayButtons = props => {
  return (
    <Fragment>
      {props.numberOfWrongAnswers > 0 ? (
        <Fab
          variant="extended"
          aria-label="replay"
          onClick={() => props.replayIncorrectWords()}
        >
          <Icon>replay</Icon>
          <p>Incorrect words ({props.numberOfWrongAnswers})</p>
        </Fab>
      ) : (
        ""
      )}
      <Button
        size="medium"
        color="inherit"
        aria-label="replay"
        onClick={() => props.replay()}
      >
        <Icon>arrow_back</Icon>
        <p> Replay All</p>
      </Button>
    </Fragment>
  )
}

export default withTheme()(ResultPage)
