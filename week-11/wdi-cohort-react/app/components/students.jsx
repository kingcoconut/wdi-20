import React from "react";

export default class Students extends React.Component{
  render(){
    if(this.props.cohort.length === 0){
      return( <div>Loading...</div> );
    }else{
      const students = this.props.cohort.map((student) => {
        return(
          <li>{ student }</li>
        );
      });
      return(
        <div>
          <h4>Students</h4>
          <ul>
            { students }
          </ul>
        </div>
      )
    }
  }
}
