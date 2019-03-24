import React, { Component } from "react"
import "../App.css"
import Button from "@material-ui/core/Button"

class Options extends Component {
  render() {
    const { gameWords, optionPress, scrambledOptions } = this.props

    return (
      <div className="optionsDiv">
        <div className="topOptionsDiv">
          <OptionsButton
            optionPress={() => optionPress(gameWords[scrambledOptions[0]])}
            gameWord={
              gameWords[scrambledOptions[0]]
                ? gameWords[scrambledOptions[0]].pinyin
                : "..."
            }
          />
          <OptionsButton
            optionPress={() => optionPress(gameWords[scrambledOptions[1]])}
            gameWord={
              gameWords[scrambledOptions[1]]
                ? gameWords[scrambledOptions[1]].pinyin
                : "..."
            }
          />
        </div>
        <div className="bottomOptionsDiv">
          <OptionsButton
            optionPress={() => optionPress(gameWords[scrambledOptions[2]])}
            gameWord={
              gameWords[scrambledOptions[2]]
                ? gameWords[scrambledOptions[2]].pinyin
                : "..."
            }
          />
          <OptionsButton
            optionPress={() => optionPress(gameWords[scrambledOptions[3]])}
            gameWord={
              gameWords[scrambledOptions[3]]
                ? gameWords[scrambledOptions[3]].pinyin
                : "..."
            }
          />
        </div>
      </div>
    )
  }
}

const OptionsButton = props => {
  return (
    <span className="optionButton">
      <Button
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
