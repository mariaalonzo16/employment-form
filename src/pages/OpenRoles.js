import React from 'react';
import { Button } from 'react-materialize';
import { Route, Switch, useNavigate} from 'react-router-dom';

export const OpenRoles = () => {
    let navigate = useNavigate();
    return (
            <main> 
                <h1>Page 2</h1>
                <div>
                    <h1>Open Roles</h1>
                    <Button modifier="large--cta">
                        Nurse Practitioner
                    </Button>
                    <Button modifier="large--cta">
                        Physician Assistant
                    </Button>
                    <Button modifier="large--cta">
                        Registered Nurse
                    </Button>

                    <Button
                            node="button"
                            style={{
                            marginRight: '5px'
                            }}
                            waves="light"
                            onClick={() => {
                                navigate("/home")
                            }}
                        >
                            Open Roles
                        </Button>

                </div>
                
            </main>
    );
}