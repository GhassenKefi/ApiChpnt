import React from 'react'
import { useEffect,useState } from 'react';
import UserCard from './UserCard';
import axios from 'axios';

const UsersList = () => {

    const [usersList, setUsersList] = useState()

    const listusers = (response) =>{
        let list =response.map(e=><UserCard key={e.id} user={e}></UserCard>)
        setUsersList(list)
    }

    const getUsers  = () =>{
        axios.get('https://jsonplaceholder.typicode.com/users').then(function (response)
        {
            listusers(response.data);
        }
        )
        .catch(function (error) {
            console.log(error);
        });

    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div className="usersList">
            {usersList}
        </div>
    )
}

export default UsersList

