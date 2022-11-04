import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    let navigate=useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleUserChange = (e) => {
        setUsername(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const collectData = async () => {
        try {
            let logindata = await axios.post('http://localhost:5000/student/login', {
                username,
                password
            })
            logindata = (await logindata).data;
            alert(logindata.name)
            if (logindata.name) {
                localStorage.setItem("login", JSON.stringify(logindata))
                navigate('/',{replace:true})
                navigate(0)
            }
            else {
                alert("Login or password is Incorrect")
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <div className='App'>
                <header className='App-header'>
                    <h3>
                        Login Page
                    </h3>
                    <br />
                    <label>
                        User Name:
                    </label>
                    <input type="text" name="username" value={username} required onChange={(e) => handleUserChange(e)}></input>
                    <br />
                    <label>
                        Password:
                    </label>
                    <input type="password" name="password" value={password} required onChange={(e) => handlePassword(e)}></input>
                    <br />
                    <button type='button' onClick={collectData} >Login </button>
                </header>
            </div>
        </div>
    )
}

export default Login
