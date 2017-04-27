import React from "react";

export default class UserRepositories extends React.Component{
  render(){
    if(this.props.repos.length === 0){
      return( <div>Loading...</div> );
    }else{
      const repos = this.props.repos.map((repo) => {
        return(
          <li>
            <a href={repo.html_url} target="_blank">{ repo.name }</a>
          </li>
        );
      });
      return(
        <div>
          <h4>Repositories</h4>
          <ul>
            { repos }
          </ul>
        </div>
      )
    }
  }
}
