import React from "react"
import Icon from "@material-ui/core/Icon"

const PageFooter = () => {
  return (
    <div className="startPageFooter">
      <span className="footerText">
        Send any feedback or questions to carlsson.benny93@gmail.com
      </span>
      <span>
        <span className="footerVersionNr"> v.1.0.2</span>
        <span
          onClick={() =>
            window.open("https://github.com/BennyCarlsson/mandarin", "_blank")
          }
        >
          <Icon className={"fab fa-github"} />
        </span>
      </span>
    </div>
  )
}

export default PageFooter
