import React from 'react';


function FriendCard(props){
    return(
        <div>
            <h1> <strong>{props.name}</strong> </h1>
            <p> Age: {props.age} </p>
            <p>Email: {props.email} </p>
        </div>
    )
}

export default FriendCard;