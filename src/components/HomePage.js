import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>hello world</h1>
        <p>serlkselrkskelr</p>
        <Link to='about' className="btn btn-primart btm-lg">learn more</Link>
      </div>
    );
  }
}

export default HomePage;
