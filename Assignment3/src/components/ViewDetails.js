import React, { useState, useEffect } from "react";
import axios from 'axios';

function ViewDetails(props) {
    const [issues, setIssues] = useState([]);
    useEffect(() => {
        axios.get('https://localhost:5001/redmine/Details').then(res => {
            const issues = res.data;
            setIssues(issues);
        });
    }, []);

    //console.log(key);

    const filteredIssues = props === 0 ? issues :
        issues.filter(issue => issue.id
            === props)


    return (
        <ul>
            {

                filteredIssues.map(issue => (
                    <li key={props} >
                        <ul> <h6>ID: {issue.id} </h6> </ul>
                        <ul> <h6>Project: {issue.project.name} </h6> </ul>
                        <ul> <h6>Tracker: {issue.tracker.name} </h6> </ul>
                        <ul> <h6>Status: {issue.status.name} </h6> </ul>
                        <ul> <h6>Subject: {issue.subject} </h6> </ul>
                        <ul> <h6>Priority: {issue.priority.name} </h6> </ul>
                        <ul> <h6>Author: {issue.author.name} </h6> </ul>
                        <ul> <h6>Category: {issue.category} </h6> </ul>
                        <ul> <h6>Description: {issue.description} </h6> </ul>
                        <ul> <h6>Start date: {issue.startDate} </h6> </ul>
                        <ul> <h6>Due date: {issue.dueDate} </h6> </ul>
                        <ul> <h6>Created On: {issue.createdOn} </h6> </ul>
                        <ul> <h6>Updated On: {issue.updatedOn} </h6> </ul>

                    </li>
                ))
            }

        </ul>
    );


}

export default ViewDetails;
