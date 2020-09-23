import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Feed = () => {
    const [allUsers, setAllUsers] = useState();

    // useEffect(() => {
    //   const getAllUsers = async() => {
    //       e.preventDefault();
    //       debugger;
    //       try {
    //         let allUsers = await axios.get('http://localhost:3001/users/');
    //         setAllUsers(allUsers.data.payload);
    //       } catch {
    //         setAllUsers([]);
    //         console.log(error);
    //       }
    //   }
    //   getAllUsers();
    // }, []);

    return(
        <div>
            {/* {allUsers} */}
        </div>
    )
}

export default Feed;