import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './../css/UserCard.css';
import person11 from './../ImgFiles/Person1.1.jpg';
import person22 from './../ImgFiles/Person2.2.jpg';
import person31 from './../ImgFiles/Person3.1.jpg';
import person43 from './../ImgFiles/Person4.3.jpg';
import person51 from './../ImgFiles/Person5.1.jpg';

const UserCard = ({users}) => {
    const [allUsersPhotos, setAllUsersPhotos] = useState({});

    useEffect(() => {
        const fetchUserPhotos = async() => {
            try {
                let userPhotos = await axios.get(`http://localhost:3001/photos/${users.id}`);
                setAllUsersPhotos(userPhotos.data.payload);
            } catch(error) {
                console.log(error);
            }
        }
        fetchUserPhotos();
    }, []);

    console.log(typeof(allUsersPhotos));

    let prePopPhotos = [];
    prePopPhotos.push({person11});
    prePopPhotos.push({person22});
    prePopPhotos.push({person31});
    prePopPhotos.push({person43});
    prePopPhotos.push({person51});

    let allPhotos = prePopPhotos.map((photos, i) => {
        for(let index in allUsersPhotos) {
            if(photos[allUsersPhotos[index]]) {
                return <img class='images' src={photos[allUsersPhotos[index]]}/>
            }
        }
    })

    console.log(allUsersPhotos)
    return(
        <div class='userCardMain'>
            <div class='userInfoCard'>
                <div class='userName'>{users.name}</div>
                <div class='userBio'>{users.bio}</div>
            </div>
            {allPhotos}
        </div>
    )
}

export default UserCard;