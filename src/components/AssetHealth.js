import React from 'react'
import ThumbUpIcon from 'material-ui-icons/ThumbUp'
import ThumbDownIcon from 'material-ui-icons/ThumbDown'
import WarningIcon from 'material-ui-icons/Warning'
import Chip from 'material-ui/Chip'
import Avatar from 'material-ui/Avatar'
import { withStyles } from 'material-ui/styles'

const styles = {
  thumbUpIcon: {
    backgroundColor: '#AFE7E9',
  },
  goodEnabled: {
    backgroundColor: '#40C7CA',
    color: '#AFE7E9',
  },
  warningEnabled: {
    backgroundColor: '#FFA87D',
    color: '#FFEDE4',
  },
  warningEnabledAvatar: {
    backgroundColor: '#FFB896',
  },
  badEnabled: {
    backgroundColor: '#FF7588',
    color: '#FFD1D7',
  },
  badEnabledAvatar: {
    backgroundColor: '#FF8E9E',
  },
}

const AssetHealth = (props) => {
  switch (props.value) {
    case 'good':
      return (
        <Chip
          className={props.classes.goodEnabled}
          avatar={<Avatar className={props.classes.thumbUpIcon}> <ThumbUpIcon /> </Avatar>}
          label="Good"
        />)
    case 'warning': return (
      <Chip
        className={props.classes.warningEnabled}
        avatar={<Avatar className={props.classes.warningEnabledAvatar} > <WarningIcon /> </Avatar>}
        label="Warning"
      />
    )
    case 'bad': return (
      <Chip
        className={props.classes.badEnabled}
        avatar={<Avatar className={props.classes.badEnabledAvatar}> <ThumbDownIcon /> </Avatar>}
        label="Bad"
      />)
    default: return null
  }
}
export default withStyles(styles)(AssetHealth)
