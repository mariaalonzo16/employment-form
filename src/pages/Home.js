import { Button } from 'react-materialize';
import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { TopNav } from '../layouts/topNav/TopNav';
import { Footers } from '../layouts/footer/Footers';

export const Home = () => {
    let navigate = useNavigate();
    // const myTimeout = setTimeout(myGreeting, 5000);

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
    }, []);

   const myGreeting = () => {
        document.getElementById("demo").innerHTML = "Welcome to CodeHealth!"
    }
    setTimeout(myGreeting, 5000)
    
    return (
            <>
                <TopNav />
                <main> 
                    <h1 id="demo">Greetings!</h1> 

                    <p>
                        Stay up-to-date with CodeHealth's  employment opportunities.
                    </p>

                    <Button
                        node="button"
                        style={{
                        marginRight: '5px'
                        }}
                        waves="light"
                        onClick={() => {
                            navigate("/open-roles")
                        }}
                    >
                        Open Roles
                    </Button>
                </main>
                <Footers />
            </>
    );
    
}
