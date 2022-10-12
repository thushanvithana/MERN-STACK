import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

export default function Allstud() {

    const [getstud, SetGetstud] = useState([]);
    console.log(getstud)
    //get student Data
    const getstuddata = async () => {

        const res = await fetch("http://localhost:5000/getstud", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();

        if (res.status === 422 || !data) {
            console.log("error ");
        } else {
            SetGetstud(data)
            console.log("get data");
        }
    }

    useEffect(() => {
        getstuddata();
    }, [])

    //Delete student data
    const deletestud = async (id) => {

        const res2 = await fetch(`http://localhost:5000/deletestud/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const deletedata = await res2.json();

        if (res2.status === 422 || !deletedata) {
            console.log("error");
        } else {
            getstuddata();

        }

    }
    //search Student
    const [searchInput,setSearchInput]=useState('');
    const searchStud=(searchval)=>{
        setSearchInput(searchval)
    }
    return (
        <div className='container mt-5'>
            <div className='d-flex'>
                <h4>All Student Information</h4>
                <div class="ms-auto w-50">
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Search Student" 
                        onChange={(e)=>searchStud(e.target.value)}
                    />
                </div>
            </div>

            <div className='underline'></div>
            <table className="table table-bordered mt-5">
                <thead className='table-dark'>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Customer Name</th>
                        <th scope="col">Customer Address</th>
                        <th scope="col">Subject</th>
                        <th scope="col">Contact Number </th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>

                    {getstud.filter((val)=>{
                        if(searchInput == ""){
                            return val
                        }else if(val.name.toLowerCase().includes(searchInput.toLowerCase())){
                            return val; 
                        }
                    }).map((result, id) => {
                        return (
                            <>

                                <tr key={id}>
                                    <th scope="row">{id + 1}</th>
                                    <td>{result.name}</td>
                                    <td>{result.address}</td>
                                    <td>{result.subject}</td>
                                    <td>{result.contact}</td>
                                    <td>
                                        <Link className='btn btn-success ms-2' to={`/view/${result._id}`}>View</Link>
                                        <Link className='btn btn-warning ms-2' to={`/edit/${result._id}`}>Update</Link>
                                        <button className='btn btn-danger ms-2'
                                            data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => deletestud(result._id)}>Delete</button>
                                    </td>
                                </tr>


                            </>
                        )
                    })}




                </tbody>
            </table>

        </div>
    )
}
