import React from "react"
import Typography from "@material-ui/core/Typography"
import { withStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Icon from "@material-ui/core/Icon"

const styles = {
  primaryColor: {
    color: "white"
  },
  button: { marginBottom: "8px" }
}

const ChooseChapter = props => {
  const { classes, startChapter } = props

  return (
    <div className="chooseChapterWrapper">
      <div className="pickChapterTitle">
        <Typography style={styles.primaryColor} variant="display1" gutterBottom>
          Level A Chinese Quize
        </Typography>
      </div>
      <div className="chooseChapter">
        <Button
          variant="contained"
          size="large"
          color="primary"
          className={classes.button}
          onClick={() => startChapter("chapter1")}
        >
          Chapter 1
        </Button>
        <Button
          variant="contained"
          size="large"
          color="primary"
          className={classes.button}
          onClick={() => startChapter("chapter12")}
        >
          Chapter 12
        </Button>
        <Button
          variant="contained"
          size="large"
          color="primary"
          className={classes.button}
          onClick={() => startChapter("chapter13")}
        >
          Chapter 13
        </Button>
        <Button
          variant="contained"
          size="large"
          color="primary"
          className={classes.button}
          onClick={() => startChapter("chapter15")}
        >
          Chapter 15
        </Button>
        <Button
          variant="contained"
          size="large"
          color="primary"
          className={classes.button}
          onClick={() => startChapter("chapter16")}
        >
          Chapter 16
        </Button>
      </div>
      <p className="createdBy">created by Benny </p>
    </div>
  )
}

export default withStyles(styles)(ChooseChapter)
