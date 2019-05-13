import React, { Fragment } from "react"
import Button from "@material-ui/core/Button"

//Todo make this dynamic
const ChapterButtons = props => {
  const { classes, startChapter } = props
  return (
    <Fragment>
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
    </Fragment>
  )
}

export default ChapterButtons
