import React, {useEffect, useState} from 'react';
import { TopNav } from '../layouts/topNav/TopNav';
import { Footers } from '../layouts/footer/Footers';
import { NavButton } from '../components/form-fields/buttons/NavButton';
import { Helmet } from 'react-helmet';

export const Home = () => {

    const [loading, setLoading] = useState(true)
    
    const today = new Date()
    const currentHour = today.getHours()

    useEffect(() => {
      setTimeout(() => setLoading(false), 1000)
    }, [])

    useEffect(() => {
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

                {/* {loading === true ? ( */}
                <> 
                    <Helmet>
                        <title> codeHealth | Home</title>
                    </Helmet>
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
                {/* ) : (
                  <h1>maria</h1>  
                )} */}
            </>
    );
    
}
