import React from 'react';

const Name = ({formData, setFormData}) => {
    return (
        <div>
            <div className="name-section">
                <input type="text" placeholder="Write First Name" className="border-b-2 block w-full pl-[15px]" 
                onChange={(event) => setFormData({...formData, first_name: event.target.value})} value={formData.first_name}/>

                <input type="text" placeholder="Write Last Name" className="border-b-2 block mt-[65px] w-full pl-[15px]" 
               onChange={(event) => setFormData({...formData, last_Name: event.target.value})} value={formData.last_Name}/>
            </div>
        </div>
    );
};

export default Name;