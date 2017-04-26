import React from 'react';
import StudentList from './student_list.jsx';

export default class StudentsContainer extends React.Component {
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
