import React, {Component} from 'react';
import {connect} from 'react-redux';
import Homepage from '../components/homepage';

class Details extends Component{
  render(){
    console.log(this.props.info.title);
    if(!this.props.info.title){
      return(
        <div className="content">
          <Homepage />
        </div>
      );
    }
    return (

      <div className="content">
        {this.props.info.page}
      </div>
    );
  }
}
function mapStateToProps(state){
  return {
    info: state.active
  };
}
export default connect(mapStateToProps)(Details);
