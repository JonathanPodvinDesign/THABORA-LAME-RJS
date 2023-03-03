import React from 'react';
import styled from 'styled-components';
import videoBackground from '../assets/video/couteaux.mp4';

const Background = () => {
    return (
        <div className='background'>
            <video src={videoBackground} autoPlay loop muted>
            </video>
        </div>
    );
};

export default Background;