import React from 'react'
import ThumbUpIcon from 'material-ui-icons/ThumbUp'
import ThumbDownIcon from 'material-ui-icons/ThumbDown'
import WarningIcon from 'material-ui-icons/Warning'
import Chip from 'material-ui/Chip'
import Avatar from 'material-ui/Avatar'
import { withStyles } from 'material-ui/styles'

const styles = {
  goodEnabled: {
    backgroundColor: '#AFE7E9',
  },
  goodEnabledAvatar: {
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
  selectorContainer: {
    marginTop: 25,
  },
}

const AssetHealthSelector = (props) => {
  const warningAvatarClass = props.selectedHealth === 'warning' ? props.classes.warningEnabledAvatar : null
  const warningChipClass = props.selectedHealth === 'warning' ? props.classes.warningEnabled : null
  const goodAvatarClass = props.selectedHealth === 'good' ? props.classes.goodEnabledAvatar : null
  const goodChipClass = props.selectedHealth === 'good' ? props.classes.goodEnabled : null
  const badAvatarClass = props.selectedHealth === 'bad' ? props.classes.badEnabledAvatar : null
  const badChipClass = props.selectedHealth === 'bad' ? props.classes.badEnabled : null
  return (
    <div className={props.classes.selectorContainer}>
      <Chip
        onClick={() => { props.onSelectHealth('good') }}
        className={goodChipClass}
        avatar={<Avatar className={goodAvatarClass}> <ThumbUpIcon /> </Avatar>}
        label="Good"
      />
      <Chip
        onClick={() => { props.onSelectHealth('warning') }}
        className={warningChipClass}
        avatar={<Avatar className={warningAvatarClass} > <WarningIcon /> </Avatar>}
        label="Warning"
      />
      <Chip
        onClick={() => { props.onSelectHealth('bad') }}
        className={badChipClass}
        avatar={<Avatar className={badAvatarClass}> <ThumbDownIcon /> </Avatar>}
        label="Bad"
      />
    </div>)
}
export default withStyles(styles)(AssetHealthSelector)
