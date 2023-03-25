

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";



function EmpEdit(){
    const[id,setId]=useState("")
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[phone,setPhone]=useState("")

    const{empid}=useParams()

    useEffect(()=>{
        fetch("http://localhost:3006/employee/"+empid)
        .then((res)=>{
            return res.json()
        })
        .then((resp)=>{
          setId(resp.id)
          setName(resp.name)
          setEmail(resp.email)
          setPhone(resp.phone)

        })
        .catch((err)=>{
            console.log(err.msg)
        })
    },[])
   

    const navigate=useNavigate()
    const changeId=(e)=>{
        setId(e.target.value)
    }
    const changeName=(e)=>{
        setName(e.target.value)
    }
    const changeEmail=(e)=>{
        setEmail(e.target.value)
    }
    const changePhone=(e)=>{
        setPhone(e.target.value)
    }
    const handleSubmit=()=>{
        const data={id,name,email,phone}
        fetch("http://localhost:3006/employee/"+empid,{
            method:"put",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
                
       })
       .then(()=>{
           alert("successfully saved")
          navigate("/")
       })
       .catch((err)=>{
        console.log(err.msg)
       })
    }
    return(
        <div>
            <div className="card-title">
                <h3> Create Employee List</h3>
            </div>
            <form onSubmit={handleSubmit}>
  <div classNameName="mb-3">
    <label classNameName="form-label">ID:</label>
    <input type="text" value={id} onChange={changeId}  classNameName="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
    </div><br></br>
  <div classNameName="mb-3">
    <label  classNameName="form-label">name</label>
    <input type="text" value={name} onChange={changeName} classNameName="form-control" id="exampleInputPassword1"></input>
  </div><br></br>
  <div classNameName="mb-3">
    <label  classNameName="form-label">email</label>
    <input type="email"value={email} onChange={changeEmail} classNameName="form-control" id="exampleInputPassword1"></input>
  </div><br></br>
  <div classNameName="mb-3">
    <label  classNameName="form-label">Mobile</label>
    <input type="tel"value={phone} onChange={changePhone} classNameName="form-control" id="exampleInputPassword1"></input>
  </div><br></br>
 
  <button type="submit" class="btn btn-primary">Submit</button>
  
</form>
        </div>
    )
}
export default EmpEdit;