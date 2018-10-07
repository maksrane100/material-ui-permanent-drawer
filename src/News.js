/************************************************************************************************************/
/******************************************** News Component ************************************************/
/************************************************************************************************************/


import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
	margin: 20,
	padding: 20,
	font: '18px arial, sans-serif',
	color: '#1F618D',
	backgroundColor: '#EBF5FB'
  },
  table: {
    minWidth: 700,
  },
});


function News(props) {
  const { classes } = props;

  return (
  <div>
    <Paper className={classes.root}>
      This is sample news 1.
    </Paper>
	<Paper className={classes.root}>
      This is sample news 2.
    </Paper>
	<Paper className={classes.root}>
      This is sample news 3.
    </Paper>
	<Paper className={classes.root}>
      This is sample news 4.
    </Paper>
  </div>
  );
}

News.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(News);
