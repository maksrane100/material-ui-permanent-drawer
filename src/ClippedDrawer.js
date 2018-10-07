import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Users from './Users';
import Restaurants from './Restaurants';
import Contact from './Contact';
import News from './News';


const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar,
});



class ClippedDrawer extends React.Component {
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

  return (
    <div className={classes.root}>
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar>
          <Typography variant="title" color="inherit" noWrap>
            Clipped drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
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
    </div>
  );
}
}

ClippedDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClippedDrawer);
