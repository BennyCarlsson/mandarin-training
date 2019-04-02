import React, { useState } from "react"
import Checkbox from "@material-ui/core/Checkbox"
import Typography from "@material-ui/core/Typography"
import { withStyles } from "@material-ui/core/styles"
import blue from "@material-ui/core/colors/blue"
import Icon from "@material-ui/core/Icon"
import Fab from "@material-ui/core/Fab"

const styles = {
  root: {
    color: blue[800],
    "&$checked": {
      color: blue[700]
    }
  },
  primaryColor: {
    color: "white"
  },
  checked: {}
}

const ChooseChapter = props => {
  const [checkedA, setCheckedA] = useState(false)
  const [checked12, setChecked12] = useState(true)
  const { classes } = props

  return (
    <div className="chooseChapterWrapper">
      <div className="pickChapterTitle">
        <Typography style={styles.primaryColor} variant="display1" gutterBottom>
          Pick Chapters
        </Typography>
      </div>
      <div className="checkBoxWrapper">
        <div className="checkBoxAndLabel">
          <Checkbox
            disabled
            checked={checkedA}
            onChange={() => setCheckedA(!checkedA)}
            value="checkedA"
            color="primary"
            classes={{
              root: classes.root,
              checked: classes.checked
            }}
            icon={<Icon fontSize="large">check_box_outline_blank</Icon>}
            checkedIcon={<Icon fontSize="large">check_box</Icon>}
          />
          <Typography style={styles.primaryColor} variant="subtitle1">
            Chap. 1
          </Typography>
        </div>
        <div className="checkBoxAndLabel">
          <Checkbox
            disabled
            checked={checkedA}
            onChange={() => setCheckedA(!checkedA)}
            value="checkedA"
            color="primary"
            classes={{
              root: classes.root,
              checked: classes.checked
            }}
            icon={<Icon fontSize="large">check_box_outline_blank</Icon>}
            checkedIcon={<Icon fontSize="large">check_box</Icon>}
          />
          <Typography style={styles.primaryColor} variant="subtitle1">
            Chap. 2
          </Typography>
        </div>
        <div className="checkBoxAndLabel">
          <Checkbox
            disabled
            checked={checkedA}
            onChange={() => setCheckedA(!checkedA)}
            value="checkedA"
            color="primary"
            classes={{
              root: classes.root,
              checked: classes.checked
            }}
            icon={<Icon fontSize="large">check_box_outline_blank</Icon>}
            checkedIcon={<Icon fontSize="large">check_box</Icon>}
          />
          <Typography style={styles.primaryColor} variant="subtitle1">
            Chap. 3
          </Typography>
        </div>
      </div>
      <div className="checkBoxWrapper">
        <div className="checkBoxAndLabel">
          <Checkbox
            disabled
            checked={checkedA}
            onChange={() => setCheckedA(!checkedA)}
            value="checkedA"
            color="primary"
            classes={{
              root: classes.root,
              checked: classes.checked
            }}
            icon={<Icon fontSize="large">check_box_outline_blank</Icon>}
            checkedIcon={<Icon fontSize="large">check_box</Icon>}
          />
          <Typography style={styles.primaryColor} variant="subtitle1">
            Chap. 4
          </Typography>
        </div>
        <div className="checkBoxAndLabel">
          <Checkbox
            disabled
            checked={checkedA}
            onChange={() => setCheckedA(!checkedA)}
            value="checkedA"
            color="primary"
            classes={{
              root: classes.root,
              checked: classes.checked
            }}
            icon={<Icon fontSize="large">check_box_outline_blank</Icon>}
            checkedIcon={<Icon fontSize="large">check_box</Icon>}
          />
          <Typography style={styles.primaryColor} variant="subtitle1">
            Chap. 5
          </Typography>
        </div>
        <div className="checkBoxAndLabel">
          <Checkbox
            disabled
            checked={checkedA}
            onChange={() => setCheckedA(!checkedA)}
            value="checkedA"
            color="primary"
            classes={{
              root: classes.root,
              checked: classes.checked
            }}
            icon={<Icon fontSize="large">check_box_outline_blank</Icon>}
            checkedIcon={<Icon fontSize="large">check_box</Icon>}
          />
          <Typography style={styles.primaryColor} variant="subtitle1">
            Chap. 6
          </Typography>
        </div>
      </div>
      <div className="checkBoxWrapper">
        <div className="checkBoxAndLabel">
          <Checkbox
            disabled
            checked={checkedA}
            onChange={() => setCheckedA(!checkedA)}
            value="checkedA"
            color="primary"
            classes={{
              root: classes.root,
              checked: classes.checked
            }}
            icon={<Icon fontSize="large">check_box_outline_blank</Icon>}
            checkedIcon={<Icon fontSize="large">check_box</Icon>}
          />
          <Typography style={styles.primaryColor} variant="subtitle1">
            Chap. 7
          </Typography>
        </div>
        <div className="checkBoxAndLabel">
          <Checkbox
            disabled
            checked={checkedA}
            onChange={() => setCheckedA(!checkedA)}
            value="checkedA"
            color="primary"
            classes={{
              root: classes.root,
              checked: classes.checked
            }}
            icon={<Icon fontSize="large">check_box_outline_blank</Icon>}
            checkedIcon={<Icon fontSize="large">check_box</Icon>}
          />
          <Typography style={styles.primaryColor} variant="subtitle1">
            Chap. 8
          </Typography>
        </div>
        <div className="checkBoxAndLabel">
          <Checkbox
            disabled
            checked={checkedA}
            onChange={() => setCheckedA(!checkedA)}
            value="checkedA"
            color="primary"
            classes={{
              root: classes.root,
              checked: classes.checked
            }}
            icon={<Icon fontSize="large">check_box_outline_blank</Icon>}
            checkedIcon={<Icon fontSize="large">check_box</Icon>}
          />
          <Typography style={styles.primaryColor} variant="subtitle1">
            Chap. 9
          </Typography>
        </div>
      </div>
      <div className="checkBoxWrapper">
        <div className="checkBoxAndLabel">
          <Checkbox
            disabled
            checked={checkedA}
            onChange={() => setCheckedA(!checkedA)}
            value="checkedA"
            color="primary"
            classes={{
              root: classes.root,
              checked: classes.checked
            }}
            icon={<Icon fontSize="large">check_box_outline_blank</Icon>}
            checkedIcon={<Icon fontSize="large">check_box</Icon>}
          />
          <Typography style={styles.primaryColor} variant="subtitle1">
            Chap. 10
          </Typography>
        </div>
        <div className="checkBoxAndLabel">
          <Checkbox
            disabled
            checked={checkedA}
            onChange={() => setCheckedA(!checkedA)}
            value="checkedA"
            color="primary"
            classes={{
              root: classes.root,
              checked: classes.checked
            }}
            icon={<Icon fontSize="large">check_box_outline_blank</Icon>}
            checkedIcon={<Icon fontSize="large">check_box</Icon>}
          />
          <Typography style={styles.primaryColor} variant="subtitle1">
            Chap. 11
          </Typography>
        </div>
        <div className="checkBoxAndLabel">
          <Checkbox
            checked={checked12}
            onChange={() => setChecked12(!checked12)}
            value="checkedA"
            color="primary"
            classes={{
              root: classes.root,
              checked: classes.checked
            }}
            icon={<Icon fontSize="large">check_box_outline_blank</Icon>}
            checkedIcon={<Icon fontSize="large">check_box</Icon>}
          />
          <Typography style={styles.primaryColor} variant="subtitle1">
            Chap. 12
          </Typography>
        </div>
      </div>
      <div className="checkBoxWrapper">
        <div className="checkBoxAndLabel">
          <Checkbox
            disabled
            checked={checkedA}
            onChange={() => setCheckedA(!checkedA)}
            value="checkedA"
            color="primary"
            classes={{
              root: classes.root,
              checked: classes.checked
            }}
            icon={<Icon fontSize="large">check_box_outline_blank</Icon>}
            checkedIcon={<Icon fontSize="large">check_box</Icon>}
          />
          <Typography style={styles.primaryColor} variant="subtitle1">
            Chap. 13
          </Typography>
        </div>
        <div className="checkBoxAndLabel">
          <Checkbox
            disabled
            checked={checkedA}
            onChange={() => setCheckedA(!checkedA)}
            value="checkedA"
            color="primary"
            classes={{
              root: classes.root,
              checked: classes.checked
            }}
            icon={<Icon fontSize="large">check_box_outline_blank</Icon>}
            checkedIcon={<Icon fontSize="large">check_box</Icon>}
          />
          <Typography style={styles.primaryColor} variant="subtitle1">
            Chap. 14
          </Typography>
        </div>
        <div className="checkBoxAndLabel">
          <Checkbox
            disabled
            checked={checkedA}
            onChange={() => setCheckedA(!checkedA)}
            value="checkedA"
            color="primary"
            classes={{
              root: classes.root,
              checked: classes.checked
            }}
            icon={<Icon fontSize="large">check_box_outline_blank</Icon>}
            checkedIcon={<Icon fontSize="large">check_box</Icon>}
          />
          <Typography style={styles.primaryColor} variant="subtitle1">
            Chap. 15
          </Typography>
        </div>
      </div>
      <div className="checkBoxWrapper">
        <div className="checkBoxAndLabel">
          <Checkbox
            disabled
            checked={checkedA}
            onChange={() => setCheckedA(!checkedA)}
            value="checkedA"
            color="primary"
            classes={{
              root: classes.root,
              checked: classes.checked
            }}
            icon={<Icon fontSize="large">check_box_outline_blank</Icon>}
            checkedIcon={<Icon fontSize="large">check_box</Icon>}
          />
          <Typography style={styles.primaryColor} variant="subtitle1">
            Chap. 16
          </Typography>
        </div>
      </div>
      <div className="playButton">
        <Fab
          variant="extended"
          color="primary"
          size="large"
          aria-label="Play"
          onClick={() => start()}
        >
          <Icon>play_arrow</Icon>
          <p>Play</p>
        </Fab>
      </div>
    </div>
  )
}

const start = () => {
  console.log("hi")
}

export default withStyles(styles)(ChooseChapter)
