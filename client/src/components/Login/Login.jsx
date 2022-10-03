import React, { useState } from 'react'
import logo from './log.svg';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
const Login = () => {

    const history = useHistory();
    const [log, setlog] = useState({
        username: "", password: ""
    })
    const handelInp = (e) => {
        const { name, value } = e.target;

        setlog((pre) => {
            return {
                ...pre,
                [name]: value
            }
        })
    }

    const postData = async (e) => {
        e.preventDefault();
        const { username, password } = log;
        try {

            const result = await axios.post("http://localhost:5000/login", { username, password });

            if (result) {

                const token = result.data.token;
                const id = result.data.dat;
                const name = result.data.usename;


                localStorage.setItem("token", token);
                localStorage.setItem("id", id);
                localStorage.setItem("username", name);


                history.push("/home");
            }

        } catch (error) {
            console.log(error.response.data.message);
            window.alert(error.response.data.message);

        }
    }

    return (
        <>
            <div className="container row m-auto mt-5 shadow p-3 mb-2 bg-body rounded">
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <img src={logo} alt="logo" className='w-75 h-75' />
                </div>
                <div className="col-md-6 mt-4">
                    <h2>Login Form</h2>
                    <form>

                        <div className="mb-3">
                            <label className="form-label">Username</label>
                            <input type="text" className="form-control" name="username" value={log.username} onChange={handelInp} id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" name="password" value={log.password} onChange={handelInp} id="exampleInputPassword1" />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={postData}>Login</button>
                        <button type="submit" className="btn btn-primary m-3">Demo Login</button>

                    </form>
                </div>

            </div>
        </>
    )
}

export default Login