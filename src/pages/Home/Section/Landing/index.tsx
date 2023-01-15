import React from 'react';
import './landing.scss';
import back_1 from '../../../../assets/images/back_1.png';
import back_2 from '../../../../assets/images/back_2.png';
const Landing: React.FC = () => {
    return (
        <>
            <div className='landing-section'>
                <div className='flex justify-center items-center flex-col responsive'>
                    <h1 className="bg-fuchsia-900 mt-10 text-white font-header mb-14">PROMOÇÃO EXCLUSIVA!</h1>
                    <h2 className='font-h2 text-center'>LIMPE SEU NOME E AUMENTE SEU SCORE SEM PAGAR AS DÍVIDAS EM 7 DIAS OU MENOS !</h2>
                    <p className='font-p text-center'>↓↓↓ ASSISTA O VÍDEO E DESCUBRA COMO ↓↓↓</p>
                    <div className='bg-white w-[800px] h-[420px]'></div>
                    <div className='h-10 mt-5'>
                        <button className='bg-red text-white btn'>SIM! QUERO LIMPAR MEU NOME E AUMENTAR O MEU SCORE</button>
                    </div>
                    <img src={back_2} className="mt-16 mb-12" alt=""/>
                </div>
            </div>
        </>
    );
}

export default Landing;