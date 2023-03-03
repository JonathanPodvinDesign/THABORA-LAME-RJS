import React from 'react';
import styled from 'styled-components';

// STYLE
// const ImageHand = styled.img`
// display: flex;
// justify-content:center;
// height: 100vh;
// width: 100vw;
//     img {
//     width: 100vw;
//     height: 100vh;
//     display: flex;
//     justify-content: center;
//     background-image: url(../../assets/img/knife-hand.png);
//     background-repeat: no-repeat;
//     background-size: cover;
//     }
// `

const ImageBackground = () => {
    return (
        <div>
            <img src="../assets/img/knife-hand.png" alt="" />
        </div>
    );
};

export default ImageBackground;