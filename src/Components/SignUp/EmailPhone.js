import React from 'react';

const EmailPhone = ({ formData, setFormData }) => {
    return (
        <div>
            <div className="email-section">
                <div className='flex'>
                    <input type="text" placeholder="+880" className="border-b-2 block w-[90px] pl-[15px] mr-1"
                        />

                    <input type="text" placeholder="Phone Number" className="border-b-2 block w-full pl-[15px]"
                        onChange={(event) => setFormData({ ...formData, phone_number: event.target.value })} value={formData.phone_number} />
                </div>

                <input type="email" placeholder="Write Email Address" className="border-b-2 block mt-[65px] w-full pl-[15px]"
                    onChange={(event) => setFormData({ ...formData, email: event.target.value })} value={formData.email} />
            </div>
        </div>
    );
};

export default EmailPhone;