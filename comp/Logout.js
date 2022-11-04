import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
const Logout = () => {
    let navigate = useNavigate()
    useEffect(()=>{
        localStorage.clear()
        navigate('/')
        navigate(0)
    },[])
  return (
    <div>
      
    </div>
  )
}

export default Logout
