import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import "./sign_up.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoginContext } from '../context/ContextProvider';

const SignIn = () => {

    const [logdata, setdata] = useState({
        email: "",
        password: ""
    });
    console.log(logdata)

    const { account, setAccount } = useContext(LoginContext);
    const adddata = (e) => {
        const { name, value } = e.target;
        setdata(() => {
            return {
                ...logdata,
                [name]: value
            }
        })
    }


    const senddata = async (e) => {

        e.preventDefault();
        const { email, password } = logdata;

        const res = await fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        });

        const data = await res.json();
        console.log(data);
        if (res.status === 400 || !data) {
            console.log("invalid details");
            toast.warn("invalid details", {
                position: "top-center"
            })
        }
        else {
            console.log("valid data");
            setAccount(data);
            toast.success("valid user", {
                position: "top-center"
            })
            setdata({ ...logdata, email: "", password: "" });
        }

    }

    return (
        <section>
            <div className="sign_container">
                <div className="sign_header">
                    <img src='./images/blacklogoamazon.png' alt="amazon logo" />
                </div>
                <div className="sign_form">
                    <form method='POST'>
                        <h1>Sign-In</h1>
                        <div className="form_data">
                            <label htmlFor='email'>Email</label>
                            <input type="text" onChange={adddata} value={logdata.email} name='email' id='email'></input>
                        </div>

                        <div className="form_data">
                            <label htmlFor='password'>Password</label>
                            <input type="password" onChange={adddata} value={logdata.password} placeholder='  At least 6 character' name='password' id='password'></input>
                        </div>
                        <button className='signin_btn' onClick={senddata}>Continue</button>
                    </form>
                </div>
                <div className="create_accountinfo">
                    <p>New To Amazon</p>
                    <NavLink to="/register"> <button>Create Your Amazon Account   </button> </NavLink>

                </div>

            </div>
            <ToastContainer />
        </section>
    )
}

export default SignIn

