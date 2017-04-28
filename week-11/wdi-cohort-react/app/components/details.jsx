import React, {Component} from "react";
import Students from "./students.jsx";
import Axios from "axios"

export default class Details extends Component {
  constructor(){
    super();
    this.state = {
      cohort: []
    };
  }
  componentWillMount(){
    const cohort = this.props.routeParams.cohort;

    let url = `https://localhost:8081/students?cohort=${cohort}`
    Axios.get(url).then((response) => {
      this.setState({cohort: response.data});
    })
  }

  render(){
    const cohort = this.props.routeParams.cohort;

    return(
      <div>
        <h3>The student list of {cohort}</h3>
        <Students cohort={ this.state.cohort }/>
      </div>
    )
  }
}
