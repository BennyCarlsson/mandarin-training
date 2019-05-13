import React from "react"
import { withStyles } from "@material-ui/core/styles"
import ChooseChapterTitle from "./ChooseChapterTitle"
import PageFooter from "./PageFooter"
import ChapterButtons from "./ChaptersButtons"
const styles = {
  button: { marginBottom: "4px", height: "56px" }
}

const ChooseChapter = props => {
  const { classes, startChapter, chooseChapterScrollTop } = props

  return (
    <div className="chooseChapterWrapper">
      <ChooseChapterTitle chooseChapterScrollTop={chooseChapterScrollTop} />
      <div className="chooseChapter">
        <ChapterButtons classes={classes} startChapter={startChapter} />
        <PageFooter />
      </div>
    </div>
  )
}

export default withStyles(styles)(ChooseChapter)
