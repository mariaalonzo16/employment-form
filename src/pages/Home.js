import React, {useEffect, useState} from 'react';
import { TopNav } from '../layouts/topNav/TopNav';
import { Footers } from '../layouts/footer/Footers';
import { NavButton } from '../components/form-fields/buttons/NavButton';
import { Helmet } from 'react-helmet';
import Lottie from 'lottie-react';
import animationHeart from '../lotties/heart.json';

export const Home = () => {

    const [loading, setLoading] = useState(true)
    
    const today = new Date()
    const currentHour = today.getHours()

    const myGreeting = () => {
        document.getElementById("greeting").innerHTML = "Welcome to codeHealth!"
    }
    
    useEffect(() => {

        setTimeout(() => setLoading(false), 5000)

        if (currentHour < 12 && loading === false) {
            document.getElementById("greeting").innerHTML = "Good Morning!";
        } 
        
        else if (currentHour < 18 && loading === false) {
            document.getElementById("greeting").innerHTML = "Good Afternoon!";
        } 
        
        else if (currentHour >= 18 && loading  === false) {
            document.getElementById("greeting").innerHTML = "Good Evening!";
        }

        setTimeout(myGreeting, 3000) 

    }, [loading]);

    return (
        <>
            {loading === false ? (
            <> 
                <Helmet>
                    <title> codeHealth | Home</title>
                </Helmet>
                <TopNav />

                <main> 
                    <div className='home-page'>
                        
                        <h1 id="greeting" className='heading'> Hello!</h1>
                
                        <p className='welcome'>
                            Stay up-to-date with codeHealth's  employment opportunities. 
                        </p>

                        <div className='navigation-button'>
                            <NavButton
                                innerText="Open Roles"
                                route="/open-roles"
                            />
                        </div>
                    </div>
                </main>

                <Footers />
            </>
            ) : ( 
                <div>
                <Lottie 
                    animationData={animationHeart}
                    className='lottie'
                />
                </div>
                
            )}
        </>
    );  
}
