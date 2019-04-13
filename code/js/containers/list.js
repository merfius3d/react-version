import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../actions/index';

class List extends Component{
  showList(){
    return this.props.info.map ((info) =>{
      if(info.id >= 4){
        return(
          <li key={info.id} className='menu-item orange-menu-item'><a href={info.title} target="_blank">{info.menuItem}</a></li>
        );
      }else{
        return(
          <li key={info.id} className='menu-item' onClick={() => this.props.select(info)}>{info.menuItem}</li>
        );
      }

    });
  }
  render(){
    return (
      <ul className="menu-main">
        {this.showList ()}
      </ul>
    );
  }
}

function mapStateToProps(state){
  return {
    info: state.info
  };
}

function matchDispatchToProps (dispatch){
  return bindActionCreators({select: select}, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(List);
