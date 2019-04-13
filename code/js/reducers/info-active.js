import React, {Component} from 'react';
import Homepage from '../components/homepage';

export default function (state=null, action){
  switch (action.type) {
    case 'INFO_SELECTED':
      return action.payload;
      break;
    default:
      return <Homepage />;
  }
}
