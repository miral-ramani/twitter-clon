
import React, { useState, useEffect } from 'react'
import Styles from '../signup/index.module.css';
import { Button, TextField } from '@mui/material';
// import { Link } from 'react-router-dom';
// import { Email, Password } from '@mui/icons-material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const SignUp = () => {
    const [name, setname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");

    const navigate = useNavigate();
    const Name = (e) => {
        setname(e.target.value)
    }

    const Email = (e) => {
        setEmail(e.target.value)
    }
    const Password = (e) => {
        setpassword(e.target.value)
    }

    const SignUp = async () => {
        const data = {
            name,
            email,
            password
        }
        const response = await axios.post(`http://localhost:1318/user`, data);
        console.log(response.data);

        setname("")
        setEmail("")
        setpassword("")
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate('/sidebar')

        }
    }, []);
    // console.log(name);
    // console.log(email);
    // console.log(password);
    return (

        <>
            <div className={Styles.main}>
                {/* <FaTwitter /> */}
                <TextField type="text" placeholder='Name' size="small" label="Name" value={name} onChange={Name}
                    sx={{
                        background: "white", width: "350px", borderRadius: "9px",
                    }}
                />
                <TextField type="email" placeholder='Email' size="small" label="Email" value={email} onChange={Email}
                    sx={{
                        background: "white", width: "350px", borderRadius: "9px",
                    }} d
                />
                <TextField type="password" placeholder='Password' size="small" label="Password" value={password} onChange={Password}
                    sx={{
                        background: "white", width: "350px", borderRadius: "9px",
                    }}
                />
                <div className={Styles.P} >
                    <p style={{ color: "black", fontSize: "9px", }}>By signing up, you agree that you accept our Terms of Use </p>
                </div>
                <Button sx={{ width: "350px", marginTop: "10px", backgroundColor: "rgb(42,169,224)" }} variant="contained" onClick={SignUp}>Sing up</Button>
            </div>
        </>
    )
}

export default SignUp;