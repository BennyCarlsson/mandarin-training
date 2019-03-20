import React from "react"
import "../App.css"
import Button from "@material-ui/core/Button"

const Options = props => {
  const { gameWords, questionIndex } = props
  let falseOptions = []

  while (falseOptions.length < 4 && gameWords.length > 4) {
    const randomNumber = Math.floor(Math.random() * gameWords.length)
    if (
      randomNumber !== questionIndex &&
      !falseOptions.includes(randomNumber)
    ) {
      falseOptions.push(randomNumber)
    }
  }

  const nr = Math.floor(Math.random() * 4)
  falseOptions[nr] = questionIndex
  return (
    <div className="optionsDiv">
      <div className="topOptionsDiv">
        <OptionsButton
          optionPress={props.optionPress}
          gameWord={
            gameWords[falseOptions[0]]
              ? gameWords[falseOptions[0]].pinyin
              : "..."
          }
        />
        <OptionsButton
          optionPress={props.optionPress}
          gameWord={
            gameWords[falseOptions[1]]
              ? gameWords[falseOptions[1]].pinyin
              : "..."
          }
        />
      </div>
      <div className="bottomOptionsDiv">
        <OptionsButton
          optionPress={props.optionPress}
          gameWord={
            gameWords[falseOptions[2]]
              ? gameWords[falseOptions[2]].pinyin
              : "..."
          }
        />
        <OptionsButton
          optionPress={props.optionPress}
          gameWord={
            gameWords[falseOptions[3]]
              ? gameWords[falseOptions[3]].pinyin
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
