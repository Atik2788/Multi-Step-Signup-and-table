import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import logo from '../../Assets/ultimate hrm logo-05-02 2.png';

const Table = () => {

    const { data } = useQuery({
        queryKey: ['data'],
        queryFn: async () => {
            const res = await fetch('https://test.nexisltd.com/test', {
                headers: {
                    authorization: `barer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return (data)
        }
    })
    if(!data){
        return
    }
    // console.log(data['2'])

    let datas = []

    for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
            const element = data[key];
            datas.push(element)
        }
    }

    console.log(datas)
    


    return (
        <div>
            <img className='mt-[49px] ml-[56px]' src={logo} alt="" />

            <div className='mx-[183px]'>
                <h2 className='text-[36px] font-semibold bg-[#1678CB] w-[480px]  mx-auto py-[16px] text-white rounded-md'>Attendance Information</h2>

                <div className='mt-[79px]'>
                    <div className="overflow-x-auto">
                        <table className="text-left w-full">
                            <thead>
                                <tr className=''>
                                    <th>Date</th>
                                    <th>Employee Name</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody className='mt-[46px]'>




                                { datas &&
                                    datas?.map(info => 
                                    
                                    <tr key={info.id} >

                                        <td>{info.attendance.status}</td>

                                        <td >{info.name}</td>
                                        <td >{info.name}</td>

                                    </tr>
                                    )
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Table;