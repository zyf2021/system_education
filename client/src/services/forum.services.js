import axios from "axios"
export const registration = async (first_namee, last_name, middle_name, email, password) => {
    try {
      //const body = JSON.stringify({...form})
      const body = JSON.stringify({
        first_namee, 
        last_name, 
        middle_name, 
        email, 
        password
      })
      const response = await axios.post('/auth/register', body)
      alert(response.data.message)
    } catch (e) {alert(e)}
  }