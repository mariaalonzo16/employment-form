import React from 'react';
import { Button } from 'react-materialize';
import { useNavigate } from 'react-router-dom';

export const OpenRoles = () => {
    let navigate = useNavigate();
    return (
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
                                navigate("/application")
                            }}
                        >
                            Nurse Practitioner
                        </Button>

                    <Button
                            node="button"
                            style={{
                            marginRight: '5px'
                            }}
                            waves="light"
                            onClick={() => {
                                navigate("/survey")
                            }}
                        >
                            Physician Associate
                        </Button>
                        <Button
                            node="button"
                            style={{
                            marginRight: '5px'
                            }}
                            waves="light"
                            onClick={() => {
                                navigate("/survey")
                            }}
                        >
                            Registered Nurse
                        </Button>

                </div>
                
            </main>
    );
}