import React from "react"
import Snackbar from "@material-ui/core/Snackbar"
import IconButton from "@material-ui/core/IconButton"
import Icon from "@material-ui/core/Icon"

function SimpleSnackbar(props) {
  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        open={props.showUpdateSnackBar}
        onClose={props.handleCloseSnackBar}
        ContentProps={{
          "aria-describedby": "message-id"
        }}
        message={<span id="message-id">New Update! Restart the app</span>}
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            className={"snackBarCloseButton"}
            onClick={props.handleCloseSnackBar}
          >
            <Icon>close</Icon>
          </IconButton>
        ]}
      />
    </div>
  )
}

export default SimpleSnackbar
