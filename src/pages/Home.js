import { Button } from 'react-materialize'
import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { OpenRoles } from './OpenRoles';


export const Home = () => {
    let navigate = useNavigate();
    return (
                <main> 
                    <div>
                    <h1>GoodEvening!</h1> 
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
    );
}

