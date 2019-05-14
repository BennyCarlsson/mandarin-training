import React from "react"

const TheWord = props => {
  return (
    <div
      className="theWordDiv"
      onClick={() => props.setShowTranslation(!props.showTranslation)}
    >
      <h1
        className={
          props.currentWord && props.currentWord.chinese.length > 2
            ? "theWordSmall"
            : "theWord"
        }
      >
        {props.currentWord && props.currentWord.chinese}
      </h1>
      <span className="wrong-pinyin">
        {props.answeredWrong && props.currentWord && props.currentWord.pinyin}
      </span>
      <span className="wrong-eng">
        {props.answeredWrong && props.currentWord && props.currentWord.english}
        {props.showTranslation &&
          !props.answeredWrong &&
          !props.showTranslation &&
          props.currentWord.english}
      </span>
      <span>
        {props.showTranslation &&
          !props.answeredWrong &&
          props.currentWord.english}
      </span>
    </div>
  )
}

export default TheWord
