import axios from 'axios';
import React, { useState } from 'react'
import img from '../Login/log.svg';
import { useHistory } from 'react-router-dom'
const Signup = () => {

    const [getData, setgetData] = useState({});
    const history = useHistory();
    const handelInp = (e) => {
        const { name, value } = e.target;
        setgetData((pre) => {
            return {
                ...pre,
                [name]: value
            }
        })
    }

    const postData = async (e) => {
        e.preventDefault();
        try {
            const result = await axios.post("http://localhost:5000/signup", getData);

            if (result) {

                window.alert("userInserted")
                history.push("/login");
            }


        } catch (error) {
            console.log(error.response.data);
            window.alert(error.response.data);
        }
    }

    return (
        <>
            <div className="container row m-auto mt-5 shadow p-3 mb-2 bg-body rounded">
                <div className="col-md-6 mt-4">
                    <h2>Registration Form</h2>
                    <form method='POST'>
                        <div className="mb-3">
                            <label className="form-label">Username</label>
                            <input type="text" className="form-control" name="username" value={getData.username} onChange={handelInp} id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" name="password" value={getData.password} onChange={handelInp} id="exampleInputPasswo" />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={postData}>Signup</button>
                    </form>
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <img src={img} alt="logo" className='w-75 h-75' />
                </div>
            </div>
        </>
    )
}

export default Signup