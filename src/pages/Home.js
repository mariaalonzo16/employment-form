import { Button } from 'react-materialize'
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { OpenRoles } from './OpenRoles';


export const Home = () => {
    return (
                <main> 
                    <div>
                    <h1>GoodEvening!</h1> 
                    <p>
                        Stay up-to-date with CodeHealth's  employment opportunities.
                    </p>
                        {/* <OpenRoles
                            to={{
                                pathname: '/OpenRoles',
                                search:  '?q=' + queryPath,
                            }}
                            OnClick={SetInitialResults}
                        >

                        </OpenRoles> */}
                        <Button
                            node="button"
                            style={{
                            marginRight: '5px'
                            }}
                            waves="light"
                        >
                            Open Roles
                        </Button>
                
                        
                        
                    </div>
                </main>
    );
}

