import React, {useState, useContext} from 'react'
import {useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import axios from 'axios'


export function AuthPage(props) {
  const navigate = useNavigate()
  const auth = useContext(AuthContext)

  const [form, setForm] = useState({
    email:'', password:''
  })

  const changeHandler = event =>{
    setForm({ ...form, [event.target.name]: event.target.value})
  }

  const loginHandler = async () => {
    try {
      const data = await axios.post('/auth/login', JSON.stringify({...form}), {headers:{ 'Content-Type': 'application/json',
      'Accept': 'application/json'}})
      console.log('Data', {...form})
      auth.login(data.data.token, data.data.userId)
      
      alert(data.data.message + ' ' + data.data.userId)
      navigate('/main',{ replace: true })
    } catch (e) {
      alert(e.response.data.message)     
    }
  }

  return (
    <div>
      Страница авторизации
    </div>
  )
}
