import React, {useEffect, useState} from 'react'
import { useHttp } from '../hooks/http.hooks'
import axios from 'axios'



export const RegisPage = () => {
  const [form, setForm] = useState({
      first_name: '', last_name:'', middle_name:'', email:'', password:''
  })
  const [cardAnimaton, setCardAnimation] = useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  

  const changeHandler = event =>{
    setForm({ ...form, [event.target.name]: event.target.value})
  }
    
  const registerHandler = async () => {
    try {
      //const data = await request ('/api/auth/register', 'POST', {...form})
     const data = await axios.post('/auth/register', JSON.stringify({...form}), {headers:{ 'Content-Type': 'application/json',
      'Accept': 'application/json'}})
      console.log('Data', {...form})
      alert(data.data.message)
    } catch (e) {
      alert(e.response.data.message)     
    }
  }


  
  return (
    <div>
    </div>
  );
}
