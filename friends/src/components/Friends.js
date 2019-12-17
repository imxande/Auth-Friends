import React, {useState, useEffect} from 'react';
import { axiosWithAuth } from './utils/axiosWithAuth';
import FriendCard from './FriendCard';


function Friends(){
    const [data, setData] = useState([])

    useEffect(() => {
        axiosWithAuth().get('/friends').then(response =>{
            setData(response.data)
        })
    }, [])

    return(
        <div>
            {data.map(item =>{
                console.log(item)
                return <FriendCard 
                            key = {item.id}
                            name = {item.name}
                            age = {item.age} 
                            email = {item.email} 
                        />

            })}
        </div>
    )
}

export default Friends;