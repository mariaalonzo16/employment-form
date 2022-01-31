import { useNavigate  } from 'react-router-dom';
import { useState } from "react";

export const Application = () => {
    let navigate = useNavigate();
    const queryString = window.location.search;
    const [roleName, setRoleName] = useState("carlos");
    const urlParams = new URLSearchParams(queryString);
    const role = urlParams.get('q')
    const jobTitle = role.split(" ");
    console.log(jobTitle.length)
    for (let i = 0; i < jobTitle.length; i++) {
        jobTitle[i] = jobTitle[i].charAt(0).toUpperCase() + jobTitle[i].slice(1);
    
    }
    const titleDisplay = jobTitle.join(" ");
    
    return (

            <main> 
                <h1> {titleDisplay}</h1> 
                <h1> {roleName} </h1>
                <h1> {queryString}</h1>
            </main>
    );
}