import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import PermanentDrawer from './PermanentDrawer';
import ClippedDrawer from './ClippedDrawer';
import PersistentDrawer from './PersistentDrawer';


class App extends Component {
	
	
	  constructor(props) {
      super(props);
      
      this.state = {

   	   };
	
    }
	
	componentWillMount(){		
		
	}
	
	
	render() {
		return (
		
			<div className="container">

				<div className="jumbotron">
						<PersistentDrawer />
				</div>
 					
				
			
			</div>
	
	   );
  }
}

export default App;