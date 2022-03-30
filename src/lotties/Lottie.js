import React, { useEffect, useRef }from 'react';

export const Lottie = () => {

    const container = useRef(null)

    useEffect(() => {
      Lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop:true,
        autoplay: true,
        animationData: require('./lotties/heartBeat.json')
      })
    }, [])

    return(
        <div className='container' ref={container}></div>
    );
}