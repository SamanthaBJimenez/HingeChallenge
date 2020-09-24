import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import { Form, Button, Modal } from 'react-bootstrap';
import './../css/Profile.css';

const Profile = () => {
    const location = useLocation();
    let history = useHistory();
    let demoEmail = location.state.email;
    const [name, setName] = useState("");
    const [bio, setBio] = useState("");
    const [email, setEmail] = useState("");
    const [show, setShow] = useState(false);
    const [firstPrompt, setFirstPrompt] = useState("");
    const [secondPrompt, setSecondPrompt] = useState("");
    const [thirdPrompt, setThirdPrompt] = useState("");
    const [fourthPrompt, setFourthPrompt] = useState("");
    const [fifthPrompt, setFifthPrompt] = useState("");
    const [sixthPrompt, setSixthPrompt] = useState("");
    let counter = 0;

    useEffect(() => {
        const fetchUserData = async() => {
            if(demoEmail) {
                try {
                    let userData = await axios.get(`http://localhost:3001/users/profile/${demoEmail}`);
                    console.log(userData);
                    setName(userData.data.payload.name);
                    setBio(userData.data.payload.bio);
                    setEmail(userData.data.payload.email);
                } catch(error) {
                    console.log(error);
                }
            }
        }
        fetchUserData();
    }, []);
    
    const handleClose = () => {
        setShow(false);
        window.location.reload(true);
    };

    const handleShow = () => setShow(true);

    const handleEdit = async (e) => {
        e.preventDefault();
        try {
            let res = await axios.patch(`http://localhost:3001/users/profile/edit/${demoEmail}`, {
                            name: name,
                            email: email,
                            bio: bio
            });
            console.log(res.data.payload);
            handleClose();
        } catch(error) {
            console.log(error)
        }
    }

    const count = (e) => {
        if(counter >= 3) {
            e.target.checked = false;
        } else if(counter < 3 && e.target.checked){
            counter++
        } else {
            counter--
        }
    }

    return (
        <div>
            <button type='button' onClick={()=>history.replace('/')}>Log Out</button>
            <nav>
                <NavLink exact to={"/feed"}>Feed</NavLink>
                <button type='button' onClick={handleShow}>Edit Profile</button>
            </nav>
            <div>
                <h1 class='profileName'>{name}</h1>
                <h4>{email}</h4>
                <h2>{bio}</h2>
            </div>
            <div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Your Profile</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <input className="mb-2 edit_input" type="text" placeholder={name} onChange={(e) => setName(e.target.value)} value={name} />
                            {/* <Form.Row>
                                <InputGroup className="mb-2">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">@</InputGroup.Text>
                                </InputGroup.Prepend>
                                <input className="edit_input username_input" type="text" placeholder={user.username ? user.username : "Enter Username"} onChange={(e) => setUsername(e.target.value)} value={username} />
                                </InputGroup>
                            </Form.Row> */}
                            <input className="mb-2 edit_input" type="text" placeholder={email} onChange={(e) => setEmail(e.target.value)} value={email} />
                            {/* <input className="mb-2 edit_input" type="text" placeholder={user.username ? user.username : "Enter Username"} onChange={(e) => setUsername(e.target.value)} value={username} /> */}
                            <input className="mb-2 edit_input" type="text" placeholder={bio} onChange={(e) => setBio(e.target.value)} value={bio} />
                            {/* {user.avatar!==null ? <img className="finalAvatarUpload" src={user.avatar} alt='firebase-image' /> : <div></div>} */}
                            {/* <Form.Group>
                                <div className="progress_div">
                                    {progress === 100 ? <div className="upload_blurb">Image Uploaded!</div> : <progress value={progress} max="100" id="uploader"/> }
                                </div>
                                <Form.File id="exampleFormControlFile1" label="" onChange={handleChange}/>
                            </Form.Group> */}
                            <div>
                                <div>
                                    <input type="checkbox" id='firstPrompt' name={firstPrompt} onChange={count}/>
                                    <label for='firstPrompt'>This year, I really want to</label>
                                    <input type="text" onChange={(e)=>setFirstPrompt("This year, I really want to " + e.target.value)}/>
                                </div>
                                <br/>
                                <div>
                                    <input type="checkbox" id='secondPrompt' name={secondPrompt} onChange={count}/>
                                    <label for='secondPrompt'>Typical Sunday</label>
                                    <input type="text" onChange={(e)=>setSecondPrompt("Typical Sunday " + e.target.value)}/>
                                </div>
                                <br/>
                                <div>
                                    <input type="checkbox" id='thirdPrompt' name={thirdPrompt} onChange={count}/>
                                    <label for='thirdPrompt'>The way to win me over is</label>
                                    <input type="text" onChange={(e)=>setThirdPrompt("The way to win me over is " + e.target.value)}/>
                                </div>
                                <br/>
                                <div>
                                    <input type="checkbox" id='fourthPrompt' name={fourthPrompt} onChange={count}/>
                                    <label for='fourthPrompt'>I'm convinved that</label>
                                    <input type="text" onChange={(e)=>setFourthPrompt("I'm convinced that " + e.target.value)}/>
                                </div>
                                <br/>
                                <div>
                                    <input type="checkbox" id='fifthPrompt' name={fifthPrompt} onChange={count}/>
                                    <label for='fifthPrompt'>We'll get along if</label>
                                    <input type="text" onChange={(e)=>setFifthPrompt("We'll get along if " + e.target.value)}/>
                                </div>
                                <br/>
                                <div>
                                    <input type="checkbox" id='sixthPrompt' name={sixthPrompt} onChange={count}/>
                                    <label for='sixthPrompt'>I get along best with people who</label>
                                    <input type="text" onChange={(e)=>setSixthPrompt("I get along best with people who " + e.target.value)}/>
                                </div>
                                <br/>
                            </div>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" type="submit" onClick={handleEdit} >Save</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
};

export default Profile;