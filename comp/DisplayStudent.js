import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const DisplayStudent = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        try {
            const result = await axios.get('http://localhost:5000/student/dispStudent')
            setData(result.data)
        }
        catch (error) {
            console.log(error)
        }
    }
    const deleteStudent = async (id) => {
        alert(id)
        let result = await axios.delete('http://localhost:5000/student/delete/${id}')
        if (result) {
            alert("student data deleted")
            getData()
        }
    }
    const searchData = async (e) => {
        let key = e.target.value
        if (key) {
            let result = await axios.get('http://localhost:5000/student/search/${key}')
            console.log(result.data)
            if (result) {
                setData(result.data)
            }
        }else{
            getData()
        }
    }
    const studentrecord = data.map((data) => {
        return (
            <tr>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                <td><NavLink to='/UpdateStudent/${data._id}'>Edit</NavLink></td>
                <td><button onClick={() => deleteStudent(data._id)}>delete</button></td>
            </tr>
        )
    })
    return (
        <div>
            Search: <input type="text" onChange={searchData} />
            <table className='container table table-striped'>
                <tr>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>PHONE</th>
                    <th>EDIT</th>
                    <th>DELETE</th>
                </tr>
                {studentrecord}
            </table>
        </div>
    )
}

export default DisplayStudent
