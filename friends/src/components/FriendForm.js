import React, {useState} from 'react';
import { axiosWithAuth } from './utils/axiosWithAuth';


const FriendForm = (props) =>{
    const [newInput, setNewInput] = useState({
        name: '',
        age: '',
        email: ''
    })

    const handleSubmit = (e)=>{
        e.preventDefault();
        axiosWithAuth().post('/friends', newInput)
        .then(response =>{
            console.log(response)
            props.history.push('/friends')
        })
        .catch(error => console.log(error))

    }

    const handleChange = (e) =>{
        setNewInput({
            ...newInput,
            [e.target.name]: e.target.value
        })
    }
    
    return (
        <div>
           
            <form onSubmit = {handleSubmit}>
            <label htmlFor = 'name'>Enter your name: </label>
                <input 
                    name = 'name'
                    type = 'text'
                    placeholder = 'John Smith'
                    value = {newInput.name}
                    onChange = {handleChange}

                />
                <label htmlFor = 'age'>Enter your age: </label>
                <input 
                    name = 'age'
                    type = 'text'
                    value = {newInput.age}
                    onChange = {handleChange}

                />
                <label htmlFor = 'email'>Enter your email: </label>
                <input 
                    name = 'email'
                    type = 'text'
                    placeholder = 'johnsmith@lalaland.lala'
                    value = {newInput.email}
                    onChange = {handleChange}
                />
                <button>Add Friend</button>
            </form>
        </div>
    )
}

export default FriendForm;