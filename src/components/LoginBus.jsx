import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const LoginBus = () => {
    const [data,setData]=useState(
        {
           
            "email":"",
            
            "pass":""
            
        }
    )
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        
                console.log(data)
                axios.post("http://localhost:8080/login",data).then(
                    (response)=>{
                        console.log(response.data)
                        if(response.data.status=="success")
                            {
                                sessionStorage.setItem("token",response.data.token)
                                sessionStorage.setItem("userid",response.data.userid)
                                navigate("/add")
                            }
                        else{
                            alert("Error")
                        }
                    }
                ).catch(
                    (error)=>{
                        console.log(error.message)
                    }
                ).finally()
            
       
    }
  let navigate=useNavigate()

  return (
    <div>
        <div className="container">
            <h1><center><i>LOGIN</i></center></h1>
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Email</label>
                    <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Password</label>
                    <input type="password"  id="" className="form-control" name='pass' value={data.pass} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <center><button className="btn btn-success" onClick={readValue}>Login</button></center>
                </div>
                <div>
                <center><Link class="SIGNUP" to="/signup">SIGNUP</Link></center>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default LoginBus