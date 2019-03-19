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
        <span className="optionButton">
          <Button
            className="optionButton"
            variant="contained"
            size="large"
            color="primary"
            onClick={() => console.log("asd")}
          >
            {gameWords[falseOptions[0]]
              ? gameWords[falseOptions[0]].pinyin
              : "..."}
          </Button>
        </span>
        <span className="optionButton">
          <Button
            className="optionButton"
            variant="contained"
            size="large"
            color="primary"
            onClick={() => console.log("dsa")}
          >
            {gameWords[falseOptions[1]]
              ? gameWords[falseOptions[1]].pinyin
              : " ..."}
          </Button>
        </span>
      </div>
      <div className="bottomOptionsDiv">
        <span className="optionButton">
          <Button
            className="optionButton"
            variant="contained"
            size="large"
            color="primary"
          >
            {gameWords[falseOptions[2]]
              ? gameWords[falseOptions[2]].pinyin
              : "..."}
          </Button>
        </span>
        <span className="optionButton">
          <Button
            className="optionButton"
            variant="contained"
            size="large"
            color="primary"
          >
            {gameWords[falseOptions[3]]
              ? gameWords[falseOptions[3]].pinyin
              : "..."}
          </Button>
        </span>
      </div>
    </div>
  )
}

export default Options
