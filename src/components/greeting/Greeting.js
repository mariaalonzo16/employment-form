import {useEffect, useState} from 'react';

export const Greeting = (props) => {
    const [loading, setLoading] = useState(true)
    
    const today = new Date()
    const currentHour = today.getHours()


    const myGreeting = () => {
        document.getElementById("greeting").innerHTML = "Welcome to codeHealth!"
    }
    
    useEffect(() => {

        setTimeout(() => setLoading(false), 4000)

        if (currentHour < 12 && loading === false) {
            document.getElementById("greeting").innerHTML = "Good Morning!";
        } 
        
        else if (currentHour < 18 && loading === false) {
            document.getElementById("greeting").innerHTML = "Good Afternoon!";
        } 
        
        else if (currentHour >= 18 && loading  === false) {
            document.getElementById("greeting").innerHTML = "Good Evening!";
        }

       setTimeout(myGreeting, 4000) 
        
    }, [loading]);

    return (
        <>
            <h1 id="greeting" className='heading'> Hello!</h1>
        </>
    )
}