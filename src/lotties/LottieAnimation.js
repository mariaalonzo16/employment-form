// import React, { useEffect, useRef }from 'react';
// import lottie from 'lottie-web';
// import { heartBeat } from './heartBeat.json'

import { lottie } from "lottie-web";
import { heartBeat } from './heartBeat.json'
import { useEffect } from "react";


// export const Lotties = () => {
  

//     const container = useRef(null)

//     useEffect(() => {
//       lottie.loadAnimation({
//         container: container.current,
//         renderer: 'svg',
//         loop:true,
//         autoplay: true,
//         animationData: require('./lotties/heartBeat.json')
//       })
//     }, [])

//     return(
//         <div className='container' ref={container}></div>
//     );
// }

export const LottieAnimation = () => {

    useEffect(() => {
        lottie.loadAnimation({
            container: document.querySelector("#employment-logo"),
        })
    },[])

    return(
        <div id="employment-logo"></div>
    );
}