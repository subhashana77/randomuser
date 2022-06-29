import './App.css';
import UserProfile from "./component/UserProfile";
import Facebook from "./asset/facebook.png";

function App() {
    return (
        <div className="App">
            <div className="dark-box">
                <div className="container">
                    <h1 className="title w-100 text-center pt-5">RANDOM USER GENERATOR</h1>
                    <p className="tagline w-100 text-center">A free,
                        <a href="https://github.com/RandomAPI/Randomuser.me-Node" target="_blank" rel="noopener noreferrer" > open-source </a>
                        API for generating random user data. Like Lorem Ipsum, but for people.
                    </p>
                    <a href="https://www.facebook.com/dilshan.rajapaksha.94/" target="_blank" rel="noopener noreferrer" className="social-media text-center w-100 d-flex pb-5">
                        <img src={Facebook} alt="facebook" className="ms-auto me-0 mt-auto mb-auto justify-content-center"/>
                        <span className="ms-0 me-auto mt-auto mb-auto justify-content-center ps-1">Follow us @ randomuser</span>
                    </a>
                </div>
            </div>
            <div className="light-box">
                <div className="container">
                    <UserProfile/>
                </div>
            </div>
        </div>
    );
}

export default App;

// rsf + enter