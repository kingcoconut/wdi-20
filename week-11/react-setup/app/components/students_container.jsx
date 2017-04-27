import React from 'react';
import StudentList from './student_list.jsx';
import CreateStudent from './create_student.jsx'

export default class StudentsContainer extends React.Component {
  constructor(){
    super();
    this.state = {
      students: [
        "Peach", "Jin", "Jared", "Hen", "Kevin", "Diego", "Petr"
      ]
    }
  }
  render(){
    return(
      <div>
        <h1>Student List</h1>
        <CreateStudent createStudent={this.createStudent.bind(this)}/>
        <StudentList students={this.state.students} deleteStudent={this.deleteStudent.bind(this)}/>
      </div>
    );
  }
  deleteStudent(student){
    let studentsDup = this.state.students;
    let i = studentsDup.indexOf(student)
    studentsDup.splice(i, 1)

    this.setState({students: studentsDup})
  }
  createStudent(student){
    let studentsDup = this.state.students;
    studentsDup.push(student)
    this.setState({students: studentsDup})
  }
}
