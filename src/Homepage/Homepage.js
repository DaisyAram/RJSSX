import React from 'react';
import { ReactComponent as Illustration } from '../Assets/illustration-working.svg';
import './Homepage.css'
import InputForm from './Form'; 


const Homepage = () => {
    return (
        <>
        <div className="homepage-header">
            <Illustration className="image"/>
            <h1>More than just<br /> shorter links</h1>
            <p>Build your brand's recognition and get detailed<br />insights on how your links are performing </p>
            <button>Get Started</button>

        </div>
        <InputForm />
        </>
    );
}
export default Homepage;