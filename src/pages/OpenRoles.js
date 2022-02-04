import React from 'react';
import { Button } from 'react-materialize';
import { useNavigate } from 'react-router-dom';
import { Footers } from '../layouts/footer/Footers';
import { TopNav } from '../layouts/topNav/TopNav';

export const OpenRoles = () => {
    let navigate = useNavigate();
    const openRole1 = 'Nurse Practitioner';
    const openRole1Link = openRole1.replace(/\s/g, '+').toLowerCase();
    const openRole2 = 'Physician Associate';
    const openRole2Link = openRole2.replace(/\s/g, '+').toLowerCase();
    const openRole3 = 'Registered Nurse';
    const openRole3Link = openRole3.replace(/\s/g, '+').toLowerCase();

    return (
        <>
            <TopNav /> 
            <main>
            
                <h1>Page 2</h1>
                <div>
                    <h1>Open Roles</h1>
                    <Button
                            node="button"
                            style={{
                            marginRight: '5px'
                            }}
                            waves="light"
                            onClick={() => {
                                navigate(`/application?q=${openRole1Link}`)
                            }}
                        >
                            {openRole1}
                        </Button>

                    <Button
                            node="button"
                            style={{
                            marginRight: '5px'
                            }}
                            waves="light"
                            onClick={() => {
                                navigate(`/application?q=${openRole2Link}`)
                            }}
                        >
                            {openRole2}
                        </Button>
                        <Button
                            node="button"
                            style={{
                            marginRight: '5px'
                            }}
                            waves="light"
                            onClick={() => {
                                navigate(`/application?q=${openRole3Link}`)
                            }}
                        >
                            {openRole3}
                    </Button>
                    
                </div>
                
            </main>
            <Footers />
        </>
    );
}