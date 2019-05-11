import React from "react"
import Typography from "@material-ui/core/Typography"
import { withStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"

const styles = {
  primaryColor: {
    color: "white"
  },
  button: { marginBottom: "4px", height: "56px" }
}

//Todo make this dynamic
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
          Book 1 Chapter 1
        </Button>
        <Button
          variant="contained"
          size="large"
          color="primary"
          className={classes.button}
          onClick={() => startChapter("chapter12")}
        >
          Book 1 Chapter 12
        </Button>
        <Button
          variant="contained"
          size="large"
          color="primary"
          className={classes.button}
          onClick={() => startChapter("chapter13")}
        >
          Book 1 Chapter 13
        </Button>
        <Button
          variant="contained"
          size="large"
          color="primary"
          className={classes.button}
          onClick={() => startChapter("chapter14")}
        >
          Book 1 Chapter 14
        </Button>
        <Button
          variant="contained"
          size="large"
          color="primary"
          className={classes.button}
          onClick={() => startChapter("chapter15")}
        >
          Book 1 Chapter 15
        </Button>
        <Button
          variant="contained"
          size="large"
          color="primary"
          className={classes.button}
          onClick={() => startChapter("chapter16")}
        >
          Book 1 Chapter 16
        </Button>
        <Button
          variant="contained"
          size="large"
          color="primary"
          className={classes.button}
          onClick={() => startChapter("chapter2.1")}
        >
          Book 2 Chapter 1
        </Button>
        <Button
          variant="contained"
          size="large"
          color="primary"
          className={classes.button}
          onClick={() => startChapter("chapter2.2")}
        >
          Book 2 Chapter 2
        </Button>
        <Button
          variant="contained"
          size="large"
          color="primary"
          className={classes.button}
          onClick={() => startChapter("chapter2.3")}
        >
          Book 2 Chapter 3
        </Button>
        <Button
          variant="contained"
          size="large"
          color="primary"
          className={classes.button}
          onClick={() => startChapter("chapter2.4")}
        >
          Book 2 Chapter 4
        </Button>
        <Button
          variant="contained"
          size="large"
          color="primary"
          className={classes.button}
          onClick={() => startChapter("chapter2.5")}
        >
          Book 2 Chapter 5
        </Button>
        <Button
          variant="contained"
          size="large"
          color="primary"
          className={classes.button}
          onClick={() => startChapter("chapter2.6")}
        >
          Book 2 Chapter 6
        </Button>
        <Button
          variant="contained"
          size="large"
          color="primary"
          className={classes.button}
          onClick={() => startChapter("chapter2.7")}
        >
          Book 2 Chapter 7
        </Button>
        <Button
          variant="contained"
          size="large"
          color="primary"
          className={classes.button}
          onClick={() => startChapter("chapter2.8")}
        >
          Book 2 Chapter 8
        </Button>
      </div>
    </div>
  )
}

export default withStyles(styles)(ChooseChapter)
