import React from "react"
import "../App.css"
import Button from "@material-ui/core/Button"

const Options = props => {
  const { gameWords, questionIndex } = props
  let scrambledOptions = []

  while (scrambledOptions.length < 4 && gameWords.length > 4) {
    const randomNumber = Math.floor(Math.random() * gameWords.length)
    if (
      randomNumber !== questionIndex &&
      !scrambledOptions.includes(randomNumber)
    ) {
      scrambledOptions.push(randomNumber)
    }
  }

  const nr = Math.floor(Math.random() * 4)
  scrambledOptions[nr] = questionIndex
  return (
    <div className="optionsDiv">
      <div className="topOptionsDiv">
        <OptionsButton
          optionPress={() => props.optionPress(gameWords[scrambledOptions[0]])}
          gameWord={
            gameWords[scrambledOptions[0]]
              ? gameWords[scrambledOptions[0]].pinyin
              : "..."
          }
        />
        <OptionsButton
          optionPress={() => props.optionPress(gameWords[scrambledOptions[1]])}
          gameWord={
            gameWords[scrambledOptions[1]]
              ? gameWords[scrambledOptions[1]].pinyin
              : "..."
          }
        />
      </div>
      <div className="bottomOptionsDiv">
        <OptionsButton
          optionPress={() => props.optionPress(gameWords[scrambledOptions[2]])}
          gameWord={
            gameWords[scrambledOptions[2]]
              ? gameWords[scrambledOptions[2]].pinyin
              : "..."
          }
        />
        <OptionsButton
          optionPress={() => props.optionPress(gameWords[scrambledOptions[3]])}
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
