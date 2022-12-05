import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import bgImg from '../../Assets/istockphoto-1321277096-612x612 1.png';
import logo from '../../Assets/ultimate hrm logo-05-02 2.png';

const Login = () => {

    const navigate = useNavigate()

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        const userInfo = {email, password}


        fetch('https://test.nexisltd.com/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
        .then(res => res.json())
        .then(data =>{
            localStorage.setItem('accessToken', data.access_token)
            localStorage.setItem('refreshToken', data.refresh_token)
            console.log(data);
            navigate('/table')
        })
    }


    return (
        <div className='form'>

            <div className='body grid lg:grid-cols-2 lg:gap-[149px] items-center'>

                <div className='mt-[62px] md:hidden hidden lg:block ml-[56px]'>
                    <img src={logo} alt="" />
                    <img src={bgImg} alt="" className='w-[612px] h-[437px] ml-[72px] -mt-4' />

                </div>


                <div className='w-[516px] h-[670px] shadow-2xl mt-[19px] mr-[35px]'>
                    <div className='mt-[109px]'>
                        <h2>Log in Form</h2>
                    </div>

                    <form onSubmit={handleLogin}>
                        <div className="email-section mt-[100px] ml-[74px] mr-[77px]">
                            <input type="email" name='email' placeholder="Write Email Address" className="border-b-2 block w-full pl-[15px]"
                            />

                            <input type="password" placeholder="Write Password" name='password' className="mt-[55px] border-b-2 block w-full pl-[15px]" />
                            <p className='text-left text-xs text-[#7E7E7E] pl-[15px]'>Your password must be 8 characters</p>
                        </div>


                        <button className='mt-[58px]'>
                            <span className='flex bg-[#1678CB] text-base px-[20px] py-[15px] rounded-2xl shadow-md shadow-[#767272] text-white'>
                                Log In
                            </span>
                        </button>
                    </form>


                    <Link to='/'>
                        <div className='mt-[100px] mb-[61px]'>
                            <p className='text-[12px] text-[#7E7E7E]'>Already have an account? <span className='text-[14px] ml-2 text-[#1678CB] font-bold'>SIGNUP HERE!</span></p>
                        </div>
                    </Link>
                </div>


            </div>
        </div>
    );
};

export default Login;