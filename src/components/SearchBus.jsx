import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const SearchBus = () => {
    const [data, setData] = useState(
        {
            "busname": ""
        })
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const [result, changeResult] = useState(
        [

        ]
    )
    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8080/search", data).then(
            (response) => {
                changeResult(response.data)
            }
        ).catch().finally()
    }
    const deleteBus = (id) => {
        let input = { "_id": id }
        axios.post("http://localhost:8080/delete", input).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("Deleted successfully")
                }
                else {
                    alert("Error in deletion")
                }
            }
        ).catch()
    }
    return (
        <div>
            <NavBar />
            <div className="container">
            <h1><center><i>SEARCH BUS</i></center></h1>
            <br></br>
                <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Bus Name</label>
                    <input type="text" className="form-control" name='busname' value={data.busname} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-success" onClick={readValue}>Search</button>
                </div>
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Bus Name</th>
                                    <th scope="col">Route</th>
                                    <th scope="col">Bus Number</th>
                                    <th scope="col">Driver Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {result.map(
                                    (value, index) => {
                                        return <tr>
                                            <th scope="row">{value.busname}</th>
                                            <td>{value.route}</td>
                                            <td>{value.busno}</td>
                                            <td>{value.dname}</td>
                                            <td>
                                                <button className="btn btn-danger" onClick={() => { deleteBus(value._id) }}>Delete</button>
                                            </td>
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
    )
}

export default SearchBus