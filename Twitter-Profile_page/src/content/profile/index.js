import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import Log from "./index.module.css"
import axios from "axios";
import { useNavigate } from "react-router-dom"

const LoginPro = () => {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate()
    const Email = (e) => {
        setemail(e.target.value)
    }
    const Password = (e) => {
        setpassword(e.target.value)
    }

    const Login = async () => {
        const data = {
            email,
            password
        }
        const response = await axios.post(`http://localhost:1318/user/login`, data);
        console.log(response.data.data);
        if (response.data.data) {
            localStorage.setItem('token', response.data.data)
            navigate('/sidebar')

        }

        setemail("")
        setpassword("")
    }
    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate('/sidebar')
        }
    }, []);

    // console.log(email);
    // console.log(password;
    return (
        <>
            <div className={Log.main}>
                <TextField type="Text" placeholder='Email, Phone Number' size="small" label="Email, Phone Number" value={email} onChange={Email}
                    sx={{
                        background: "white", width: "350px", borderRadius: "9px",
                    }} d
                />
                <TextField type="password" placeholder='Password' size="small" label="Password" value={password} onChange={Password}
                    sx={{
                        background: "white", width: "350px", borderRadius: "9px",
                    }}
                />
                <div className={Log.font} >
                    <p style={{ color: "black", fontSize: "13px", }}>Don't have an acconunt? </p>
                </div>

                <Button sx={{ width: "350px", marginTop: "10px", backgroundColor: "rgb(42,169,224)" }} variant="contained" onClick={Login}>Login</Button>
            </div>
        </>
    )
}
export default LoginPro;