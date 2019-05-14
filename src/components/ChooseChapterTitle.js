import React from "react"
import Typography from "@material-ui/core/Typography"

class ChooseChapterTitle extends React.Component {
  render() {
    const { chooseChapterScrollTop } = this.props
    return (
      <div className="pickChapterTitle">
        <Typography
          style={{
            color: "white",
            position: "absolute",
            fontSize: 30 - chooseChapterScrollTop / 10 + "px"
          }}
          variant="display1"
          gutterBottom
        >
          Level A Chinese Quiz
        </Typography>
      </div>
    )
  }
}

export default ChooseChapterTitle
