import React, { useState } from 'react';
import EmailPhone from './EmailPhone';
import Name from './Name';
import PassAndSubmit from './PassAndSubmit';
import bgImg from '../../Assets/istockphoto-1321277096-612x612 1.png';
import logo from '../../Assets/ultimate hrm logo-05-02 2.png';
import { BsArrowRight } from "react-icons/bs";
import { Form, Link } from 'react-router-dom';

const SignUpForm = () => {
    const [page, setPage] = useState(0);
    const [passError, setPassError] = useState('')


    const [formData, setFormData] = useState({
        first_name: "",
        last_Name: "",
        phone_number: "",
        email: "",
        password: "",
    });



    const handleSignUp = () => {
        // console.log('submit done', formData);


        const pass = formData.password
        // console.log(pass);
        if(pass.length < 8){
            setPassError('Password must be at-least 8 characters')
            console.log(passError);
            return ;
        }


        // console.log(formData);
        alert('form submitted')
            setPassError('')
        // return;

        fetch('https://test.nexisltd.com/signup', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)            
        })
    }

    const displayPage = () => {
        if (page === 0) {
            return <Name formData={formData} setFormData={setFormData}></Name>
        }
        else if (page === 1) {
            return <EmailPhone formData={formData} setFormData={setFormData}></EmailPhone>
        }
        else {
            return <PassAndSubmit formData={formData} passError={passError} setFormData={setFormData}></PassAndSubmit>
        }
    }

    return (
        <div className='form'>

            <div className='body grid lg:grid-cols-2 lg:gap-[149px] items-center'>

                <div className='mt-[62px] md:hidden hidden lg:block ml-[56px]'>
                    <img src={logo} alt="" />
                    <img src={bgImg} alt="" className='w-[612px] h-[437px] ml-[72px] -mt-4' />

                </div>


                <div className='lg:w-[516px] w-10/12 lg:mx-0 mx-auto lg:h-[670px] shadow-2xl mt-[19px] lg:mr-[35px]'>

                    <div className='mt-[109px]'>
                        <h2>SingUP Form</h2>
                        <div className='progressbar lg:w-full w-8/12 mt-5 mx-auto'>
                            <div style={{ width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%" }}></div>
                        </div>
                    </div>
                    <Form>
                    <div className='lg:mt-[100px] mt-10 lg:ml-[74px] lg:mr-[77px]'>{displayPage()}</div>


                    <div className='footer lg:mt-[68px]'>
                        <button className='ml-[89px] mr-[69px] w-[29px]' onClick={() => { setPage((currentPage) => currentPage - 1) }}>{page === 0 ?
                            <span></span>
                            : <span className='py-[15px] text-[#767676] font-bold'>Back</span>
                        }</button>

                        <div onClick={() => {
                            if (page === 2) {
                                // alert('form submitted')
                                // console.log(formData);
                            }
                            else {
                                setPage((currentPage) => currentPage + 1)
                            }
                        }
                        }
                        >
                            {page === 2 ?
                                <button onClick={handleSignUp} type="submit" className='bg-[#1678CB] text-base px-[20px] py-[15px] rounded-2xl text-white shadow-md shadow-[#767272]'>Sign Up</button>
                                :
                                <button className='flex  bg-[#1678CB] text-base px-[20px] py-[15px] rounded-2xl shadow-md shadow-[#767272] text-white'>
                                    Next Step <span className='pt-1 ml-[10px]'>
                                        <BsArrowRight></BsArrowRight></span>

                                </button>}
                        </div>
                    </div>
                    </Form>

                    <Link to='/login'>
                        <div className='lg:mt-[100px] mt-10 mb-[61px]'>
                            {page === 0 &&
                                <p className='text-[12px] text-[#7E7E7E]'>Already have an account? <span className='text-[14px] ml-2 text-[#1678CB] font-bold'>LOGIN HERE!</span></p>
                            }
                        </div></Link>
                </div>


            </div>
        </div>
    );
};

export default SignUpForm;