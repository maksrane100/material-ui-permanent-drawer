/************************************************************************************************************/
/******************************************** PermanentDrawer Component *************************************/
/************************************************************************************************************/


import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Users from './Users';
import Restaurants from './Restaurants';
import Contact from './Contact';
import News from './News';
import { withStyles } from '@material-ui/core/styles';


const drawerWidth = 240;

const styles = theme => ({
  root: {
    width: '100%',
	height: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
	margin: 20,
	padding: 20,
	font: '18px arial, sans-serif',
	color: '#1F618D',
	backgroundColor: '#EBF5FB'
  },
  appFrame: {
    height: 640,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
  },
  'appBar-left': {
    marginLeft: drawerWidth,
  },
  'appBar-right': {
    marginRight: drawerWidth,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});

class PermanentDrawer extends React.Component {
  state = {
    anchor: 'left',
	count: 1
  };

  handleChange = event => {
    this.setState({
      anchor: event.target.value,
    });
  };

  setCount(counter) {
    this.setState({ count: counter });
}

  render() {
    const { classes } = this.props;
    const { anchor } = this.state;

    const drawer = (
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor={anchor}
      >
        <div className={classes.toolbar} />
        <Divider />
        
		<MenuList>
			<MenuItem className={classes.menuItem}>
			  
			  <ListItemText classes={{ primary: classes.primary }} onClick={this.setCount.bind(this, 1)} inset primary="Users" />
			</MenuItem>
			<MenuItem className={classes.menuItem}>
			 
			  <ListItemText classes={{ primary: classes.primary }} onClick={this.setCount.bind(this, 2)} inset primary="Restaurants" />
			</MenuItem>
			<MenuItem className={classes.menuItem}>
			
			  <ListItemText classes={{ primary: classes.primary }} onClick={this.setCount.bind(this, 3)} inset primary="News" />
			</MenuItem>
			<MenuItem className={classes.menuItem}>
			
			  <ListItemText classes={{ primary: classes.primary }} onClick={this.setCount.bind(this, 4)} inset primary="Contact" />
			</MenuItem>
		</MenuList>

	  
        <Divider />
        
      </Drawer>
    );

    let before = null;
    let after = null;

    if (anchor === 'left') {
      before = drawer;
    } else {
      after = drawer;
    }

    return (
      <div className={classes.root}>
        <TextField
          id="permanent-anchor"
          select
          label="Anchor"
          value={anchor}
          onChange={this.handleChange}
          margin="normal"
        >
          <MenuItem value="left">left</MenuItem>
          <MenuItem value="right">right</MenuItem>
        </TextField>
        
		<div className={classes.appFrame}>
          <AppBar
            position="absolute"
            className={classNames(classes.appBar, classes[`appBar-${anchor}`])}
          >
            <Toolbar>
              <Typography variant="title" color="inherit" noWrap>
                Permanent drawer
              </Typography>
            </Toolbar>
          </AppBar>
          {before}
          
		  <main className={classes.content}>
            <div className={classes.toolbar} />
				{this.state.count===1 && 
					<Users />
				}
				{this.state.count===2 && 
					<Restaurants />
				}
				{this.state.count===3 && 
					<News />
				}
				{this.state.count===4 && 
					<Contact />
				}
          </main>
          
		  {after}
        </div>
      </div>
    );
  }
}

PermanentDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PermanentDrawer);