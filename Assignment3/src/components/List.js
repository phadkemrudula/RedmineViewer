import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Button } from "reactstrap";
import history from './history';
import { Link, useHistory } from 'react-router-dom';
import ViewDetails from './ViewDetails'

const Axios = () => {
    
    const [issues, setIssues] = useState([]);
    const [search, setSearch] = useState('');
    //const history = useHistory();

    //const navigateTo = () => history.push("/ViewDetails");
    //console.log(key);

    useEffect(() => {
        axios.get('https://localhost:5001/redmine/Details').then(res => {
            const issues = res.data;
            setIssues(issues);
        });
    }, []);

    const filteredIssues = search.length === 0 ? issues :
        issues.filter(issue => issue.project.name.
            toLowerCase().includes(search.toLowerCase()))

    return (
        <div>

        <div>
        <input
            type="text"
            value={search}
            placeholder="Search Project"
            
            onChange={(e) => setSearch(e.target.value)}
                />
                
                    <ul>
                        {filteredIssues.map(issue => (
                            <li key={issue.id} >
                                <ul> <h6>ID: {issue.id} </h6> </ul>
                                <ul> <h6>Project: {issue.project.name} </h6> </ul>
                                <ul> <h6>Tracker: {issue.tracker.name} </h6> </ul>
                                <ul> <h6>Status: {issue.status.name} </h6> </ul>
                                <ul> <h6>Subject: {issue.subject} </h6> </ul>
                                
                                <div className="view" style={{ marginLeft: 50 + 'px' }} >

                                    <button onClick={() => ViewDetails(issue.id)}>View Details</button>
                                    
                                </div>

                            </li>
                        ))}

                    </ul>
                
        </div>


        
        </div>
    );
}

export default Axios;