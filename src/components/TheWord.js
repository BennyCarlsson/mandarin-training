import React from "react"

const TheWord = props => {
  return (
    <div className="theWordDiv">
      <h1 className="theWord">
        {props.currentWord && props.currentWord.chinese}
      </h1>
      <span className="wrong-pinyin">
        {props.answeredWrong && props.currentWord && props.currentWord.pinyin}
      </span>
      <span className="wrong-eng">
        {props.answeredWrong && props.currentWord && props.currentWord.english}
      </span>
    </div>
  )
}

export default TheWord
