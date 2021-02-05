
import React, { useState, useEffect } from "react";
import axios from 'axios';
import './ViewDetails.css'


class ViewDetails extends React.Component {
    render() {

        

        const { data1 } = this.props.location
        const { data2 } = this.props.location
        const { data3 } = this.props.location
        const { data4 } = this.props.location
        const { data5 } = this.props.location
        const { data6 } = this.props.location
        const { data7 } = this.props.location
        const { data8 } = this.props.location
        const { data9 } = this.props.location
        const { data10 } = this.props.location
        const { data11 } = this.props.location
        const { data12 } = this.props.location
        const { data13 } = this.props.location
        const { data14 } = this.props.location
        
        
       
        
        return (
            <table className="padding-table-columns">
                <thead>
                    <tr>
                        <th>Issue ID    </th>
                        <th>Project     </th>
                        <th>Tracker     </th>
                        <th>Status      </th>
                        <th>Subject     </th>
                        <th>Priority    </th>
                        <th>Author      </th>
                        <th>Assignee      </th>
                        <th>Category    </th>
                        <th>Description     </th>
                        <th>Start date      </th>
                        <th>Due date        </th>
                        <th>Created On      </th>
                        <th>Updated On      </th>

                    </tr>

                </thead>
                <tbody>
                    <tr>
                        <td> {data1} </td>
                        <td> {data2} </td>
                        <td> {data3} </td>
                        <td> {data4} </td>
                        <td> {data5} </td>
                        <td> {data6} </td>
                        <td> {data7} </td>
                        <td> {data14} </td>
                        <td> {data8} </td>
                        <td> {data9} </td>
                        <td> {data10} </td>
                        <td> {data11} </td>
                        <td> {data12} </td>
                        <td> {data13} </td>

                    </tr>
                </tbody>
            </table>
        );
    }

}


export default ViewDetails;