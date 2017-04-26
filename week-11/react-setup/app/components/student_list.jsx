import React from 'react';

export default class StudentList extends React.Component{
  constructor(){
    super();
    this.state = {
      loading: true
    }
  }

  componentDidMount(){
    window.setTimeout(function(){
      this.setState({loading: false})
    }.bind(this), 1000)
  }

  render(){
    let studentList = this.props.students.map((el) => {
      return(
        <li>{el}</li>
      )
    });

    if(this.state.loading){
      return(
        <div>Loading....</div>
      )
    }else{
      return(
        <ul>{ studentList }</ul>
      )
    }
  }
}
