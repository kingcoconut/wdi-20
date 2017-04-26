import React from 'react';
import ReactDOM from 'react-dom';

class StudentsContainer extends React.Component {
  render(){
    let students = [
      "Peach", "Jin", "Jared", "Hen", "Kevin", "Diego", "Petr"
    ]

    return(
      <div>
        <h1>Student List</h1>
        <StudentList students={students}/>
      </div>
    );
  }
}

class StudentList extends React.Component{
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

ReactDOM.render(
  <StudentsContainer id={"Foobar"}/>,
  document.getElementById('app')
);
