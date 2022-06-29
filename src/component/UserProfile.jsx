import React, {useEffect, useState} from 'react';import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const API_URL = 'https://randomuser.me/api/';

function UserProfile(elementId) {

    const [person, setPerson] = useState([]);
    const [title, setTitle] = useState("i, My name is");
    const [name, setName] = useState("");

    const getPerson = async () => {
        const response = await fetch(`${API_URL}`);
        const data = await response.json();
        setPerson(data.results);
    }

    useEffect(()=> {
        getPerson().then(r => []);
    }, []);

    useEffect(() => {
        person.map((person) => (
            setName(person.name.title + " " + person.name.first + " " + person.name.last)
        ))
    }, [person]);

    const idArray = ['name', 'email', 'dob', 'address', 'phone', 'password'];
    let selectedId = "";
    function changeStyles (id) {
        for (let i = 0; i < idArray.length; i++) {
            if (id === idArray[i]) {
                selectedId = idArray[i];
            }
            document.getElementById(idArray[i]).classList.remove('svg-icon');
        }
        document.getElementById(selectedId).classList.add('svg-icon');
    }
    return (
        <div className="profile-picture text-center pb-4 ps-3 pe-3 m-auto rounded">
            {
                person.map((person, index) => (
                    <img className="rounded-circle" src={person.picture.large} key={index} alt=""/>
                ))
            }

            <hr/>

            <h5>{title}</h5>

            <h1>{name}</h1>

            <div className="row icons text-center m-auto mt-4">
                <div className="col-2 icon-column">
                    {
                        person.map((person, index) => (
                            <svg key={index} id='name'
                                 onMouseEnter={() => {
                                     setTitle("Hi, My name is");
                                     setName(person.name.title + " " + person.name.first + " " + person.name.last);
                                     changeStyles('name');
                                 }}
                                 className="ps-3 pe-3" viewBox="0 0 448 512">
                                <path d="M176 448C167.3 448 160 455.3 160 464V512h32v-48C192 455.3 184.8 448 176 448zM272 448c-8.75 0-16 7.25-16 16s7.25 16 16 16s16-7.25 16-16S280.8 448 272 448zM164 172l8.205 24.62c1.215 3.645 6.375 3.645 7.59 0L188 172l24.62-8.203c3.646-1.219 3.646-6.375 0-7.594L188 148L179.8 123.4c-1.215-3.648-6.375-3.648-7.59 0L164 148L139.4 156.2c-3.646 1.219-3.646 6.375 0 7.594L164 172zM336.1 315.4C304 338.6 265.1 352 224 352s-80.03-13.43-112.1-36.59C46.55 340.2 0 403.3 0 477.3C0 496.5 15.52 512 34.66 512H128v-64c0-17.75 14.25-32 32-32h128c17.75 0 32 14.25 32 32v64h93.34C432.5 512 448 496.5 448 477.3C448 403.3 401.5 340.2 336.1 315.4zM64 224h13.5C102.3 280.5 158.4 320 224 320s121.8-39.5 146.5-96H384c8.75 0 16-7.25 16-16v-96C400 103.3 392.8 96 384 96h-13.5C345.8 39.5 289.6 0 224 0S102.3 39.5 77.5 96H64C55.25 96 48 103.3 48 112v96C48 216.8 55.25 224 64 224zM104 136C104 113.9 125.5 96 152 96h144c26.5 0 48 17.88 48 40V160c0 53-43 96-96 96h-48c-53 0-96-43-96-96V136z"/>
                            </svg>
                        ))
                    }
                </div>
                <div className="col-2 icon-column">
                    {
                        person.map((person, index) => (
                            <svg key={index} id='email'
                                 onMouseEnter={() => {
                                     setTitle("My email address is");
                                     setName(person.email);
                                     changeStyles('email');
                                 }}
                                 className="ps-3 pe-3" viewBox="0 0 512 512">
                                <path d="M493.6 163c-24.88-19.62-45.5-35.37-164.3-121.6C312.7 29.21 279.7 0 256.4 0H255.6C232.3 0 199.3 29.21 182.6 41.38c-118.8 86.25-139.4 101.1-164.3 121.6C6.75 172 0 186 0 200.8v263.2C0 490.5 21.49 512 48 512h416c26.51 0 48-21.49 48-47.1V200.8C512 186 505.3 172 493.6 163zM303.2 367.5C289.1 378.5 272.5 384 256 384s-33.06-5.484-47.16-16.47L64 254.9V208.5c21.16-16.59 46.48-35.66 156.4-115.5c3.18-2.328 6.891-5.187 10.98-8.353C236.9 80.44 247.8 71.97 256 66.84c8.207 5.131 19.14 13.6 24.61 17.84c4.09 3.166 7.801 6.027 11.15 8.478C400.9 172.5 426.6 191.7 448 208.5v46.32L303.2 367.5z"/>
                            </svg>
                        ))
                    }
                </div>
                <div className="col-2 icon-column">
                    {
                        person.map((person, index) => (
                            <svg key={index} id='dob'
                                 onMouseEnter={() => {
                                     setTitle("My birthday is");
                                     setName((person.dob.date).substring(0,10));
                                     changeStyles('dob');
                                 }}
                                 className="ps-3 pe-3" viewBox="0 0 448 512">
                                <path d="M160 32V64H288V32C288 14.33 302.3 0 320 0C337.7 0 352 14.33 352 32V64H400C426.5 64 448 85.49 448 112V160H0V112C0 85.49 21.49 64 48 64H96V32C96 14.33 110.3 0 128 0C145.7 0 160 14.33 160 32zM0 192H448V464C448 490.5 426.5 512 400 512H48C21.49 512 0 490.5 0 464V192zM64 304C64 312.8 71.16 320 80 320H112C120.8 320 128 312.8 128 304V272C128 263.2 120.8 256 112 256H80C71.16 256 64 263.2 64 272V304zM192 304C192 312.8 199.2 320 208 320H240C248.8 320 256 312.8 256 304V272C256 263.2 248.8 256 240 256H208C199.2 256 192 263.2 192 272V304zM336 256C327.2 256 320 263.2 320 272V304C320 312.8 327.2 320 336 320H368C376.8 320 384 312.8 384 304V272C384 263.2 376.8 256 368 256H336zM64 432C64 440.8 71.16 448 80 448H112C120.8 448 128 440.8 128 432V400C128 391.2 120.8 384 112 384H80C71.16 384 64 391.2 64 400V432zM208 384C199.2 384 192 391.2 192 400V432C192 440.8 199.2 448 208 448H240C248.8 448 256 440.8 256 432V400C256 391.2 248.8 384 240 384H208zM320 432C320 440.8 327.2 448 336 448H368C376.8 448 384 440.8 384 432V400C384 391.2 376.8 384 368 384H336C327.2 384 320 391.2 320 400V432z"/>
                            </svg>
                        ))
                    }
                </div>
                <div className="col-2 icon-column">
                    {
                        person.map((person, index) => (
                            <svg key={index} id='address'
                                 onMouseEnter={() => {
                                     setTitle("My address is");
                                     setName(person.location.street.name + ", " + person.location.city + ", " + person.location.country);
                                     changeStyles('address');
                                 }}
                                 className="ps-3 pe-3" viewBox="0 0 384 512">
                                <path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"/>
                            </svg>
                        ))
                    }
                </div>
                <div className="col-2 icon-column">
                    {
                        person.map((person, index) => (
                            <svg key={index} id='phone'
                                 onMouseEnter={() => {
                                     setTitle("My phone number is");
                                     setName(person.phone);
                                     changeStyles('phone');
                                 }}
                                 className="ps-3 pe-3" viewBox="0 0 512 512">
                                <path d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z"/>
                            </svg>
                        ))
                    }
                </div>
                <div className="col-2 icon-column">
                    {
                        person.map((person, index) => (
                            <svg key={index} id='password'
                                 onMouseEnter={() => {
                                     setTitle("My password is");
                                     setName(person.login.password);
                                     changeStyles('password')
                                 }}
                                 className="ps-3 pe-3" viewBox="0 0 448 512">
                                <path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z"/>
                            </svg>
                        ))
                    }
                </div>
            </div>

            <div className="next-button">
                <a className="rounded" onClick={getPerson} rel="noopener noreferrer">Next</a>
            </div>

        </div>
    );
}

export default UserProfile;