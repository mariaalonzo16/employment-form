import React, {useEffect} from 'react';
import { TopNav } from '../layouts/topNav/TopNav';
import { Footers } from '../layouts/footer/Footers';
import { NavButton } from '../components/form-fields/buttons/NavButton';

export const Home = () => {
    
    const today = new Date()
    const currentHour = today.getHours()

    useEffect(() => {
        console.log("hello")
        if (currentHour < 12) {
            document.getElementById("greeting").innerHTML = "Good Morning!"
        } else if (currentHour < 18) {
            document.getElementById("greeting").innerHTML = "Good Afternoon!"
        } else {
            document.getElementById("greeting").innerHTML = "Good Evening!"
        }
    }, []);

   const myGreeting = () => {
        document.getElementById("greeting").innerHTML = "Welcome to codeHealth!"
    }
    setTimeout(myGreeting, 2000)
    
    return (
            <>
                <TopNav />
                <main> 
                    <h1 id="greeting" className='heading'></h1> 

                    <p className='welcome'>
                        Stay up-to-date with codeHealth's  employment opportunities. 
                    </p>

                    <NavButton
                        innerText="Open Roles"
                        route="/open-roles"

                    />

                </main>
                <Footers />
            </>
    );
    
}
