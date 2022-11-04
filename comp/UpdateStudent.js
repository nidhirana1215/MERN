import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const UpdateStudent = () => {
    let navigate = useNavigate()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const params = useParams()

    const handleName = (e) => { setName(e.target.value) }
    const handleEmail = (e) => { setEmail(e.target.value) }
    const handlePhone = (e) => { setPhone(e.target.value) }
    const handleUsername = (e) => { setUsername(e.target.value) }
    const handlePassword = (e) => { setPassword(e.target.value) }

    const dispData = async () => {
        //alert(params.id)
        let result = await axios.get('http://localhost:5000/student/getOneStudent/${params.id}')
        setName(result.data.name)
        setEmail(result.data.email)
        setPhone(result.data.phone)
        setUsername(result.data.username)
        setPassword(result.data.password)
    }
    useEffect(() => {
        dispData()
    }, [])
    const collectData = async () => {
        alert(params.id)
        alert(name)
        let result = await axios.patch('http://localhost:5000/student/update/${params.id}', {
            name,
            email,
            phone,
            username,
            password
        })
        if (result) {
            navigate('/')
            navigate(0)
        }
    }
    return (
        <div className='App'>
            <header className='App-header'>
                <h3>
                    Update Student
                </h3>
                <label>Name:</label>
                <br />
                <input type="text" name="name" value={name} required onChange={(e) => handleName(e)} /><br />
                <label>email:</label>
                <br />
                <input type="text" name="email" value={email} required onChange={(e) => handleEmail(e)} /><br />
                <label>Phone Number:</label>
                <br />
                <input type="text" name="phone" value={phone} required onChange={(e) => handlePhone(e)} /><br />
                <label>User Name:</label>
                <br />
                <input type="text" name="username" value={username} required onChange={(e) => handleUsername(e)} /><br />
                <label>Password:</label>
                <br />
                <input type="text" name="password" value={password} required onChange={(e) => handlePassword(e)} /><br />
                <button type='submit' onClick={collectData}>Update</button>
            </header>
        </div>
    )
}

export default UpdateStudent
