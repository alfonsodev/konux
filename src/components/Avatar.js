import React from 'react'
import { CircularProgress } from 'material-ui/Progress'
import { Avatar } from 'material-ui'

export default (props) => {
  if (!props.user) {
    return <CircularProgress className={props.classes.progress} />
  }
  return (
    <Avatar
      alt={props.user.name}
      src={props.user.photoURL}
      onClick={props.onClick}
      className={props.classes.photoAvatar}
    />
  )
}
