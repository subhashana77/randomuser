import React, {useEffect, useState} from 'react';

const API_URL = 'https://randomuser.me/api/';

function UserProfile() {

    const [person, setPerson] = useState([]);
    const [title, setTitle] = useState("Hi, My name is");
    // const [icon, setIcon] = useState([]);

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
            <div className="profile-picture text-center mb-auto">
                {
                    person.map((person, index) => (
                        <img className="rounded-circle" src={person.picture.large} key={index} alt=""/>
                    ))
                }
                <hr/>
                <h5>{title}</h5>
                {
                    person.map((person, index) => (
                        <h1 key={index}>{person.name.title + " " + person.name.first + " " + person.name.last}</h1>
                    ))
                }
            </div>
        </div>
    );
}

export default UserProfile;