import React from 'react';

export default class StudentList extends React.Component{
  constructor(){
    super();
  }

  componentDidMount(){
    window.setTimeout(function(){
      this.setState({loading: false})
    }.bind(this), 1000)
  }

  render(){
    let studentList = this.props.students.map((el) => {
      return(
        <p>
          <li>{el}</li>
          <button onClick={this.props.deleteStudent.bind(this, el)}>Delete</button>
        </p>
      )
    });

    return(
      <ul>{ studentList }</ul>
    )
  }
}
