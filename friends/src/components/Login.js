import React, {useState} from 'react'
import axios from 'axios';

function Login(props){
const [input, setInput] = useState({
    username:'',
    password:''
})

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(input);
        axios.post('http://localhost:5000/api/login', input)
        .then(response => {
            console.log(response)
            
            localStorage.setItem('token', response.data.payload)
            props.history.push('/friends')
        })
        .catch(error => console.log(error))
    }

    const handleChange = (e) =>{
        setInput({...input, [e.target.name]: e.target.value})
        
    }
    return(
        <div>
            
            <form onSubmit = {handleSubmit}>
            <label htmlFor = 'username'>UserName:</label>
                <input 
                    type = 'text'
                    value = {input.username}
                    name = 'username'
                    onChange = {handleChange}
                />
                <label htmlFor = 'username'>Password:</label>
                <input 
                     type = 'password'
                     value = {input.password}
                     name = 'password'
                     onChange = {handleChange}
                />
            <button >Login</button>
            </form>
        </div>
    )
}

export default Login;