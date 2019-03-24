import React from "react"

const TheWord = props => {
  return (
    <div className="theWordDiv">
      <h1 className="theWord">
        {props.currentWord && props.currentWord.chinese}
      </h1>
      <span>
        {props.answeredWrong && props.currentWord && props.currentWord.pinyin}
      </span>
    </div>
  )
}

export default TheWord
