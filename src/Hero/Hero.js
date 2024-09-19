import React from 'react';
import Card from './Card';
import './Hero.css';

const Hero = () => {
    return (
        <>
        
        <div className="hero-section">
            <div className="hero-header">
                <h1> Advanced Statistics</h1>
                <p>Track how your links are performing across the web with <br></br>
                our advanced statistics dashboard.</p>
            </div>
            <Card />
            </div>
        </>
    );
}
export default Hero;