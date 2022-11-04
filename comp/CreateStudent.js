import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const CreateStudent = () => {
    let navigate = useNavigate()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleName = (e) => { setName(e.target.value) }
    const handleEmail = (e) => { setEmail(e.target.value) }
    const handlePhone = (e) => { setPhone(e.target.value) }
    const handleUsername = (e) => { setUsername(e.target.value) }
    const handlePassword = (e) => { setPassword(e.target.value) }
    const collectData =async () => {
        try {
            let insertData = axios.post('http://localhost:5000/student/signup', {
                name,
                email,
                phone,
                username,
                password
            });
            if(insertData)
            {
                navigate ('/')
                navigate(0)
            }
        }
        catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='App'>
            <header className='App-header'>
                <h3>
                    Student Registration
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
                <button type='submit' onClick={collectData}>Submit</button>
            </header>
        </div>
    )
}

export default CreateStudent
