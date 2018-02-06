import React from 'react'
import Button from 'material-ui/Button'
import ModeEditIcon from 'material-ui-icons/ModeEdit'
import CancelIcon from 'material-ui-icons/Cancel'
import SaveIcon from 'material-ui-icons/Save'
import { withStyles } from 'material-ui/styles'

const styles = {
  editIcon: {
    marginLeft: 5,
  },
  cancelButton: {
    marginRight: 10,
  },
}

const AssetFormButtonGroup = (props) => {
  if (!props.editing) {
    return (
      <div>
        <Button raised onClick={props.onPressEdit}>Edit
          <ModeEditIcon className={props.classes.editIcon} />
        </Button>
      </div>
    )
  }
  return (
    <div>
      <Button raised color="accent" onClick={props.onPressCancel} className={props.classes.cancelButton}>Cancel
        <CancelIcon className={props.classes.editIcon} />
      </Button>
      <Button raised color="primary" onClick={props.onPressSave}>Save
        <SaveIcon className={props.classes.editIcon} />
      </Button>
    </div>
  )
}

export default withStyles(styles)(AssetFormButtonGroup)
