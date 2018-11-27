import React, { Component } from 'react';
import Introduction from './Introduction';
 
export default class Home extends Component {
  displayName = Home.name
  constructor(props){
    super(props);
    var {ct} = this.props;
    console.log("ct:", ct);
  }
  render() {
    return (
      <div>
        <Introduction />
      </div>
    );
  }
}