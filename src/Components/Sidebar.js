import React, {Component} from 'react';
import Settings from './Settings'
import Sidebar from "react-sidebar";


class Bar extends Component {

  constructor(props) {

    super(props);

    this.state = {
        sidebarOpen: false,
    };
    
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  render(){

    return (
      <div  className="container">
        <Sidebar
          sidebar={
            <div className="padding">
               <img src="settings.png" style={{width: "100%"}} alt="none" />
                <br/><br/>
              <Settings 
                handleLevelChange={this.props.handleLevelChange} 
                handleTypeChange={this.props.handleTypeChange} 
                handleResetGame={this.props.handleResetGame} 
                type={this.props.type} 
                level={this.props.level} 
              />
            </div>
          }
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          styles={{ sidebar: { background: "DeepSkyBlue" , width: 200}}}
          touchHandleWidth={0}
        >
        <img className="btn btn-outline-success hamburger-btn"  src="/hamburger.png"  alt="loading" style={{width: "8%", }} onClick={() => this.onSetSidebarOpen(true)} />
      </Sidebar>
      </div>
    )
  }

}

export default Bar;
