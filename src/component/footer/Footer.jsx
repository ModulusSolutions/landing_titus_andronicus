import React from 'react';
import FooterAbout from './FooterAbout';
import FooterDetail from './FooterDetail';

const Footer = () => {
    return (
        <div className='bg-blubery-100 lg:p-10 px-8 lg:gap-10 md:flex 2xl:justify-center 2xl:gap-80'>
            <FooterAbout/>
            <FooterDetail/>
        </div>
    );
};

export default Footer;