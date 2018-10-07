/************************************************************************************************************/
/******************************************** Restaurants Component *****************************************/
/************************************************************************************************************/


import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Divider from '@material-ui/core/Divider';



import { withStyles } from '@material-ui/core/styles';


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
card: {
    maxWidth: 400,
	padding: 10,
	margin: 10
  },
  cardHeader: {
	   background: theme.palette.common.red,
    color: theme.palette.common.white,
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});


class Restaurants extends Component {
	
	
	constructor(props) {
		super(props);

		this.state = {
		restaurants:[], 
		indents: [],
		cities: [],
		totalcities: 0,
		city:''
		};

		this.handleInputChange = this.handleInputChange.bind(this);    
		this.getCities = this.getCities.bind(this);  		
	}
	
	componentWillMount(){		
		this.getCities();
	}
	
	handleChange = (event, value) => {
		this.setState({ value });
	};

	handleExpandClick = () => {
		this.setState(state => ({ expanded: !state.expanded }));
	};
  
	
	handleInputChange(e) {
		var newState = {};
		newState =this.state;
		newState[e.target.name] = e.target.value;
		this.setState(newState);
		this.getRestaurants();
	}
	  
	getCities() {
	
		var url ='http://localhost:4200/restaurants/cities';
	
		axios.get(url)
		.then(response => {

			this.setState({ cities: response.data, totalcities:  response.data.length});			
			let cities = this.state.cities;
			let optionItems = cities.map((city) =>
				<option key={city} value={city}>{city}</option>
			);
			console.log('optionItems:'+optionItems);
			this.setState({ optionItems: optionItems});
		})
		.catch(function (error) {
			console.log(error);
		});	  
	}	
	
	getRestaurants() {
		
		axios.post('http://localhost:4200/restaurants/search', {
		 "city":this.state.city
		})
		.then(response => {
			console.log('response.data.length:'+response.data.length);
			this.setState({ restaurants: response.data, totalrestaurants:  response.data.length});						
		})
		.catch(function (error) {
			console.log(error);
		});
	  
		console.log('this.state.restaurants.length:'+this.state.restaurants.length);	  
	}

	
	render() {
		
		const { classes } = this.props;
		 
		return (
		
			<div className={classes.root}>

				<div className="jumbotron">
				Search Restaurants
				</div>
 					
				<div className="row">
					<div className="fieldTitle">Select City</div>
					<div className="fieldValue">
						<select id="city" name="city"  value={this.state.city} onChange={this.handleInputChange}>
						<option value="">Select</option>
							{this.state.optionItems}
						</select>
					</div>
				</div>
			
				<div className="row">
					Total Restaurants: {this.state.restaurants.length}
				</div>

				<div>

					{ this.state.restaurants.map(restaurant => (
				
						<div className="card">
		
							<Card className={classes.card}>
								<CardHeader
								  className={classes.cardHeader}
								  title={restaurant.name}
								  subheader={restaurant.createdAt}
								/>
								<Divider/>
								<CardContent>
								  <Typography component="p">
									{restaurant.title}
								  </Typography>
								  <Typography component="p">
									{restaurant.highlight}
								  </Typography>
								  <Typography component="p">
									<div className="row">
												<div className="fieldTitleExtra">Stars: {restaurant.star} </div>
												</div>
											<div className="row">
												<div className="fieldTitleExtra">Hours:
												{restaurant.openathour}:{restaurant.openatminute} AM - 
												{restaurant.closeathour}:{restaurant.closeatminute} PM
												</div>
											</div>
								  </Typography>
								</CardContent>
								<Divider/>
								<CardActions className={classes.actions} disableActionSpacing>
								  
								  <IconButton aria-label="Add to favorites">
									<FavoriteIcon />
								  </IconButton>
								  
								  <IconButton aria-label="Share">
									<ShareIcon />
								  </IconButton>
								  
								  <IconButton
									className={classnames(classes.expand, {
									  [classes.expandOpen]: this.state.expanded,
									})}
									onClick={this.handleExpandClick}
									aria-expanded={this.state.expanded}
									aria-label="Show more"
								  >
									<ExpandMoreIcon />
								  </IconButton>
								
								</CardActions>
								<Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
								  <CardContent>
									
										<Typography paragraph>
										<div className="row">
											<div className="fieldTitle">Location</div>
											<div className="fieldValue">
											{restaurant.address.address1} {restaurant.address.address2} {restaurant.address.city}
											{restaurant.address.state} {restaurant.address.zip} {restaurant.address.country}
											</div>
										</div>	
										</Typography>
									
								  </CardContent>
								</Collapse>
							  </Card>			
			
			
						</div>
				
			 ))}
			</div>
			
	</div>
	
	   );
  }
}


export default withStyles(styles)(Restaurants);