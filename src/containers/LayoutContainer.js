import React from 'react'
import { connect } from 'react-redux'
import Header from 'app/components/Header'
import Grid from 'material-ui/Grid'
import Card from 'material-ui/Card'
import { withStyles } from 'material-ui/styles'
import CardHeader from 'material-ui/Card/CardHeader'

const styles = {
  card: {
    height: 600,
  },
  container: {
    marginTop: 0,
    backgroundColor: '#F5F8F9',
  },
  itemContent: {
    flexGrow: 1,
    alignItems: 'stretch',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 64,
  },
  fixedItem: {
    height: 70,
    backgroundColor: '#000',
  },
}
const LayoutContainer = props => (
  <Grid container className={props.classes.container} direction="column">
    <Header />
    <Grid item className={props.classes.itemContent} >
      <Card className={props.classes.card} >
        <CardHeader title="Assets" />
        <div style={{ width: '100%' }}>
          {props.children}
        </div>
      </Card>
    </Grid>
    <Grid item className={props.classes.fixedItem} />
  </Grid>
)

export default withStyles(styles)(connect()(LayoutContainer))
