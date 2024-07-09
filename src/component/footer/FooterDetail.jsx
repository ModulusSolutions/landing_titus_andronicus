import React from 'react';
import { sendLogo } from '../../Utils/images';

const FooterDetail = () => {
    return (
        <>
    <div className="p-10 sm:flex sm:gap-20 sm:space-y-0 space-y-10">
       <div className='text-silver'>
        <h1 className="text-xl font-semibold ">Company</h1>
            <a href="#"><p className='text-sm'>About us</p></a> 
            <a href="#"><p className='text-sm'>Blog</p></a> 
            <a href="#"><p className='text-sm'>Contact us</p></a> 
            <a href="#"><p className='text-sm'>About us</p></a> 
            <a href="#"><p className='text-sm'>Pricing</p></a> 
            <a href="#"><p className='text-sm'>Testimonials</p></a> 
        </div>
      <div className='text-silver'>
        <h1 className="text-xl font-semibold">Support</h1>
            <a href="#"><p className='text-sm'>Help center</p></a> 
            <a href="#"><p className='text-sm'>Terms of service</p></a> 
            <a href="#"><p className='text-sm'>Legal</p></a> 
            <a href="#"><p className='text-sm'>Privacy policy</p></a> 
            <a href="#"><p className='text-sm'>Status</p></a> 
        </div>
        <div>
            <p className='text-xl font-semibold text-silver'>Stay up to date</p>
            <div className='bg-black-D p-2 mt-6 rounded-md gap-2 inline-flex'> 
                <input type="text" required className='outline-none text-silver bg-black-D'/>
                <img src={sendLogo} alt="" className='cursor-pointer relative hover:translate-x-1 -ml-4 transition'/>
            </div>
        </div>
    </div>
        </>
    );
};

export default FooterDetail;
