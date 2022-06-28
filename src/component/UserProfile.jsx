import React, {useEffect, useState} from 'react';

const API_URL = 'https://randomuser.me/api/';

function UserProfile() {

    const [person, setPerson] = useState([]);

    const getPerson = async () => {
        const response = await fetch(`${API_URL}`);
        const data = await response.json();
        setPerson(data.results);
        console.log(data.results)
    }

    useEffect(()=> {
        getPerson();
    },[]);

    return (
        <div>
            <UserProfile user={person}/>
        </div>
    );
}

export default UserProfile;