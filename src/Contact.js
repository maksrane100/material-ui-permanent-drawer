/************************************************************************************************************/
/******************************************** Contact Component *********************************************/
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


function Contact(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      If you have any issues, you can contact us at XXXXXXXX@XXXXX.com
    </Paper>
  );
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);
