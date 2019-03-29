import React, { Component } from "react"
import ExpansionPanel from "@material-ui/core/ExpansionPanel"
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary"
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Icon from "@material-ui/core/Icon"
import Typography from "@material-ui/core/Typography"

class ListWrongAnswers extends Component {
  getWordItems = () => {
    const wrongAnswers = this.props.wrongAnswers
    console.log(wrongAnswers)
    return wrongAnswers && wrongAnswers.map(word => <WrongWord word={word} />)
  }
  render() {
    return (
      <ExpansionPanel className="expansionPanel">
        <ExpansionPanelSummary
          expandIcon={<Icon>keyboard_arrow_down</Icon>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Show all wrong answers</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <List>{this.getWordItems()}</List>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }
}

const WrongWord = props => {
  return (
    <ListItem>
      <ListItemText
        primary={
          <Typography variant="h4" style={{ color: "#00000" }}>
            {props.word.pinyin} - {props.word.chinese}
          </Typography>
        }
      />
    </ListItem>
  )
}
export default ListWrongAnswers
