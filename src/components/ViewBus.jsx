import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewBus = () => {
    const [data,changeData]=useState([])
    const fetchData=()=>{
        axios.post("http://localhost:8080/viewall",data).then(
            (response)=>{
                console.log(response.data)
                changeData(response.data)
            }
        ).catch(
            (error)=>{
                console.log(error.message)
            }
        ).finally()

    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Bus Name</th>
                                            <th scope="col">Route</th>
                                            <th scope="col">Bus No</th>
                                            <th scope="col">Driver Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                      {data.map(
                                        (value,index)=>{
                                            return   <tr>
                                            <th scope="row">{value.busname}</th>
                                            <td>{value.route}</td>
                                            <td>{value.busno}</td>
                                            <td>{value.dname}</td>
                                        </tr>
                                        }
                                      )}
                                      
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewBus