import React, {Component} from "react";
import UserRepositories from "./userRepositories.jsx";

export default class Details extends Component {
  constructor(){
    super();
    this.state = {
      repos: []
    };
  }
  componentWillMount(){
    const username = this.props.routeParams.username;
  }

  render(){
    const username = this.props.routeParams.username;

    return(
      <div>
        <h3>The github profile of {username} </h3>
        <UserRepositories repos={ this.state.repos }/>
      </div>
    )
  }
}
