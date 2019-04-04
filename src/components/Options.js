import React, { Component } from "react"
import "../App.css"
import Button from "@material-ui/core/Button"

class Options extends Component {
  render() {
    const { optionPress, scrambledOptions } = this.props
    return (
      <div className="optionsDiv">
        <div className="optionButton">
          <OptionsButton
            optionPress={() => optionPress(scrambledOptions[0])}
            gameWord={scrambledOptions[0] ? scrambledOptions[0].pinyin : "..."}
          />
        </div>
        <div className="optionButton">
          <OptionsButton
            optionPress={() => optionPress(scrambledOptions[1])}
            gameWord={scrambledOptions[1] ? scrambledOptions[1].pinyin : "..."}
          />
        </div>
        <div className="optionButton">
          <OptionsButton
            optionPress={() => optionPress(scrambledOptions[2])}
            gameWord={scrambledOptions[2] ? scrambledOptions[2].pinyin : "..."}
          />
        </div>
        <div className="optionButton">
          <OptionsButton
            optionPress={() => optionPress(scrambledOptions[3])}
            gameWord={scrambledOptions[3] ? scrambledOptions[3].pinyin : "..."}
          />
        </div>
      </div>
    )
  }
}

const style = {
  textTransform: "none",
  fontSize: "1.5rem"
}

const OptionsButton = props => {
  return (
    <span className="optionButton">
      <Button
        style={style}
        className="optionButton"
        variant="contained"
        size="large"
        color="primary"
        onClick={props.optionPress}
      >
        {props.gameWord}
      </Button>
    </span>
  )
}

export default Options
