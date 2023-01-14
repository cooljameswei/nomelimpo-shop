import React from 'react';
import './landing.scss';
import back_1 from '../../../../assets/images/back-1.png';
const Landing: React.FC = () => {
    return (
        <>
            <div className="bg-black">
                <img className="opacity-20" src={back_1} alt="" width="100%" height="100%"/>
            </div>
        </>
    );
}

export default Landing;