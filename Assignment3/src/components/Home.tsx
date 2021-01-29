import * as React from 'react';
import { connect } from 'react-redux';
import './Home.css';

const Home = () => (
  <div>
    <h1>Redmine</h1>  
  </div>
);

export default connect()(Home);
