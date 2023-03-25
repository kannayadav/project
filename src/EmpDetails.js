import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom"



function EmpDetails(){
    const [data,setData]=useState("")
    const{empid}=useParams()
    useEffect(()=>{
        fetch("http://localhost:3006/employee/"+empid)
        .then((res)=>{
            return res.json()
        })
        .then((resp)=>{
            setData(resp)
        })
        .catch((err)=>{
            console.log(err.msg)
        })
    },[])
    return(
        <div>
            <div className="card">
           {data &&
            <div>
                <h1>The Employee Name Is : {data.id} {data.name}</h1>
                <h3>Contact Information Is :</h3>
                Email : {data.email}<br/>
                Phone :{data.phone}
            </div>
           }
           <Link to="/" className="btn btn-danger">Back</Link>
           </div>
        </div>
    )
}
export default EmpDetails;