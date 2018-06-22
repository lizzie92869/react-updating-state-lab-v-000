import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor() {
    super();
    // Define the initial state:
    this.state = {
      errors: [], 
      user: null, 
      settings: { 
      	bitrate: 8, 
      	video: { 
      		resolution: '1080p' 
      	} 
      } 
    };
  }
 
  handleClick = () => {
    this.setState({
    	settings: {
    		...this.state.settings,
    		bitrate: 12,
    	},
  	});
  }

 handleClick2 = () => {
    this.setState({
    settings: {
    	...this.state.settings,
    	video: {resolution: '720p'},
    },
  });
 }


 
  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleClick}> make bitrate goes to 12</button>
        <button className="resolution" onClick={this.handleClick2}>makes resolution goes to 720p</button>
      </div>
    );
  }
}
 
export default YouTubeDebugger;
 