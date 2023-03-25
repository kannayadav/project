import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


function EmpTable(){
    const [data,setData]=useState("")
    const navigate=useNavigate()
   


    useEffect(()=>{
        fetch("http://localhost:3006/employee")
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
    const Detaills=(id)=>{
        navigate("/EmpDetails/"+id)
    }
   const Edit=(id)=>{
    navigate("/EmpEdit/"+id)
   }
    const Delete=(id)=>{
        fetch("http://localhost:3006/employee/"+id,{
            method:"Delete"
        })
        .then(()=>{
            alert("Deleted Successfully")
            window.location.reload()
        })
    }
    return(
        <div>
           <div className="card">
            <div className="card-title">
                <h3>Employee Managaement System</h3>
            </div>
            <div className="card-body">
                <Link to="/EmpForm" className="btn btn-success">Add New(+)</Link>
                <table className="table table-bordered">
                    <thead className="bg-dark text-light">
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>Mobile</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                       {data &&
                         data.map(item=>(
                          <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                           <td>
                            <a onClick={()=>{Detaills(item.id)}} className="btn btn-success" >Detaills</a>
                            <a onClick={()=>{Edit(item.id)}} className="btn btn-danger">Edit</a>
                            <a onClick={()=>{Delete(item.id)}} className="btn btn-primary">Delete</a>
                           </td>
                          </tr>
                       ))}
                    </tbody>
                </table>
            </div>
           </div>
        </div>
    )
}
export default EmpTable;