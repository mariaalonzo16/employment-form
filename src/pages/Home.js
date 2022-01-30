import { Button, Footer } from 'react-materialize';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TopNav } from '../layouts/topNav/TopNav';

export const Home = () => {
    let navigate = useNavigate();
    // const myTimeout = setTimeout(myGreeting, 5000);

   const myGreeting = () => {
        document.getElementById("demo").innerHTML = "Welcome to CodeHealth!"
      }
      setTimeout(myGreeting, 1000)
      
    
    return (
            <>
                <TopNav />
                <main> 
                    
                    <div>
                        <h1 id="demo">GoodEvening!</h1> 

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
                        
                    </div>
                </main>
                <Footer />
            </>
    );
}
