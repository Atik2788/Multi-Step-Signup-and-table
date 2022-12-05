import React from 'react';

const PassAndSubmit = ({ formData, setFormData, passError }) => {
    return (
        <div>
            <div className="pasword-section">
                <input type="password" placeholder="Write Password" className="border-b-2 block w-full pl-[15px]"
                    onChange={(event) => setFormData({ ...formData, password: event.target.value })} value={formData.password} />

                <p className='text-left text-xs text-[#7E7E7E] pl-[15px] '>Your password must be 8 characters</p>


                {passError &&
                    <p className='text-red-700 mb-[143px] text-left'>{passError}</p>
                }
            </div>
        </div>
    );
};

export default PassAndSubmit;