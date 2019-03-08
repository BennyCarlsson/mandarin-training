import React from "react"
import "../App.css"

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
      <span className="optionRow">
        <button onClick={() => console.log("asd")}>
          {gameWords[falseOptions[0]]
            ? gameWords[falseOptions[0]].pinyin
            : "..."}
        </button>
        <button onClick={() => console.log("dsa")}>
          {gameWords[falseOptions[1]]
            ? gameWords[falseOptions[1]].pinyin
            : " ..."}
        </button>
      </span>
      <span className="optionRow">
        <button>
          {gameWords[falseOptions[2]]
            ? gameWords[falseOptions[2]].pinyin
            : "..."}
        </button>
        <button>
          {gameWords[falseOptions[3]]
            ? gameWords[falseOptions[3]].pinyin
            : "..."}
        </button>
      </span>
    </div>
  )
}

export default Options
