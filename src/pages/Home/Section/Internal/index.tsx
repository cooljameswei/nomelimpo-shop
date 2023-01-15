import React from 'react';
import img_1 from '../../../../assets/images/iphone.png';
import './internal.scss'
const Internal = () => {
    return (
        <>
            <div className='flex justify-center items-center'>
                <div className='flex flex-col justify-center items-center'>
                    <img src={img_1} alt=""/>
                    <div className='h-10 mt-5'>
                        <button className='bg-red text-white btn'>SIM! QUERO LIMPAR MEU NOME E AUMENTAR O MEU SCORE</button>
                    </div>
                </div>
                <div className='w-[50%]'>
                    <h1 className='text-heading mb-8'>What is internal Constraint</h1>
                    <p className='text-body mb-10'>Internal restriction is an internal list of clients that some day caused some kind of loss or stopped 
                        making a profit for banks, credit cards, stores and finance companies.</p>
                    <p className='text-body mb-10'>The internal restriction has many names: Internal restriction, cadastral restriction, internal cadastral restriction, internal note, blacklist, indication in the name, indication in the cpf etc... There are many names for the same problem.</p>
                    <p className='text-body mb-10'>As it is illegal to register clients on internal negation lists, institutions never assume this practice and there is also no date for the name to be removed, this varies by institution. some never withdraw, others have a period of 10 years, for this reason it is important that you take action and withdraw to have credit again.</p>
                    <p className='text-body'>Calm down, do not despair, now you have the solution.</p>            
                </div>
            </div>
        </>
    );
}

export default Internal;