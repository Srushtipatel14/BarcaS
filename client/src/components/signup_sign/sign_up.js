import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./sign_up.css";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
const SignUp = () => {

    const [udata,setudata]=useState({
        fname:"",
        email:"",
        mobile:"",
        password:"",
        cpassword:""
    })
//console.log(udata)
    const adddata=(e)=>{

        const {value,name}=e.target;

        setudata(()=>{

            return {
                ...udata,
                [name]:value
            }

        })

    }

    const senddata = async (e) => {
        e.preventDefault();

        const { fname, email, mobile, password, cpassword } = udata;
        
            const res = await fetch("/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    fname, email, mobile, password, cpassword
                })
            });

            const data = await res.json();
            console.log(data);
        if(res.status===422 || !data){
           toast.warn("invalid details",{
            position:"top-center"
           })
        }
        else{
            toast.success('data successfully added',{
                position:"top-center"
            });
            setudata({...udata,fname:"",email:"",mobile:"",password:"",cpassword:""})
        }
    }

  return (
    <section>
        <div className="sign_container">
            <div className="sign_header">
                <img src='./images/blacklogoamazon.png' alt="amazon logo"/>
            </div>
            <div className="sign_form">
                <form  method='POST'>
                    <h1>Sign-Up</h1>

                    <div className="form_data">
                        <label htmlFor='fname'>Your Name</label>
                        <input type="text" onChange={adddata} value={udata.name} name='fname' id='fname'></input>
                    </div>

                    <div className="form_data">
                        <label htmlFor='email'>Email</label>
                        <input type="text" onChange={adddata} value={udata.email} name='email' id='email'></input>
                    </div>

                    <div className="form_data">
                        <label htmlFor='mobile'>Number</label>
                        <input type="number" onChange={adddata} value={udata.mobile} name='mobile' id='mobile'></input>
                    </div>


                    <div className="form_data">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password"
                                onChange={adddata}
                                value={udata.password}
                                id="password" placeholder="At least 6 characters" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="cpassword">Password again</label>
                            <input type="password" name="cpassword"
                                onChange={adddata}
                                value={udata.cpassword}
                                id="cpassword" />
                        </div>
                    <button className='signin_btn' onClick={senddata}>Continue</button>
                </form>

                <div className="signin_info">
            <p>Alrady have an account ?</p>
            <NavLink to="/login">Sign in</NavLink>

           </div>
            </div>
           <ToastContainer/>
        </div>
    </section>
  )
}

export default SignUp