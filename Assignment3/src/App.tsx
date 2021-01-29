import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
//import FetchData from './components/FetchData';
import Signin from './components/Signin';
import Header from './components/Header';
import List from './components/List';
import ViewDetails from './components/ViewDetails';
import RegistrationForm from './components/RegistrationForm';
//import history from './components/history';

import './custom.css'

export default () => (
    <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/List' component={List} />       
        <Route path='/signin' component={Signin} />
        <Route path='/Header' component={Header} />
        <Route path='/ViewDetails' component={ViewDetails} />
        <Route path='/RegistrationForm' component={RegistrationForm} />
    </Layout>
);
