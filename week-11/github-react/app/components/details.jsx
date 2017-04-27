import React, {Component} from "react";
import UserRepositories from "./userRepositories.jsx";
import Axios from "axios"

export default class Details extends Component {
  constructor(){
    super();
    this.state = {
      repos: []
    };
  }
  componentWillMount(){
    const username = this.props.routeParams.username;

    let url = `https://api.github.com/users/${username}/repos?client_id=8420fd99e9d49bb26114&client_secret=2a5b8f9fbde8942cd23e3de2523899746133ed3d`
    Axios.get(url).then((response) => {
      this.setState({repos: response.data});
    })
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
