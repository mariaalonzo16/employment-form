import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { TopNav } from '../layouts/topNav/TopNav';
import { Footers } from '../layouts/footer/Footers';
import { NavButton } from '../components/form-fields/buttons/NavButton';

export const Home = () => {
    let navigate = useNavigate();
    
    const today = new Date()
    const currentHour = today.getHours()

    useEffect(() => {
        if (currentHour < 12) {
            document.getElementById("demo").innerHTML = "Good Morning!"
        } else if (currentHour < 18) {
            document.getElementById("demo").innerHTML = "Good Afternoon!"
        } else {
            document.getElementById("demo").innerHTML = "Good Evening!"
        }
    },);

   const myGreeting = () => {
        document.getElementById("demo").innerHTML = "Welcome to codeHealth!"
    }
    setTimeout(myGreeting, 2000)
    
    return (
            <>
                <TopNav />
                <main> 
                    <h1 id="demo" className='heading'>Greetings! </h1> 

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
