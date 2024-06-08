import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewAll = () => {
    const[data,changeData]=useState([])
    const fetchData = () => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <NavBar/>
            <h1 align="center">VIEW POST</h1>
            <div className="container">
                <div className="row">
                    <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table table-bordered border-primary">
                            <table class="table">
                                <thead>
                                    <tr>
                                        
                                        <th scope="col">USERID</th>
                                        <th scope="col">ID</th>
                                        <th scope="col">TITLE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map(
                                        (value,index)=>{
                                            return<tr>
                                            
                                            <td>{value.userId}</td>
                                            <td>{value.id}</td>
                                            <td>{value.title}</td>
                                        </tr>
                                        }
                                    )}

                                </tbody>
                            </table>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll