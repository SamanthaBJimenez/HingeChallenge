import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import UserCard from './UserCard';

const Feed = () => {
    const [allUsers, setAllUsers] = useState([]);
    let history = useHistory();

    useEffect(() => {
      const getAllUsers = async() => {
         try {
            let allUsersResult = await axios.get('http://localhost:3001/users/');
            setAllUsers(allUsersResult.data.payload);
          } catch(error) {
            setAllUsers([]);
            console.log(error);
          }
      }
      getAllUsers();
    }, []);
     
    const userCards = allUsers.map(users => {
        return <UserCard key={users.id} users={users}/>
    });

    const returnHome = () => {
        history.push('/profile/demo@gmail.com', {email: 'demo@gmail.com'});
    }

    return(
        <div>
            <nav>
                <button type='button' onClick={returnHome}>Profile</button>
            </nav>
            {userCards}
        </div>
    )
}

export default Feed;