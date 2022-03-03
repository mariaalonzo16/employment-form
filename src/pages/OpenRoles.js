import React from 'react';
import { Collapsible, CollapsibleItem } from 'react-materialize';
import {  NavButton } from '../components/form-fields/buttons/NavButton';
import { Footers } from '../layouts/footer/Footers';
import { TopNav } from '../layouts/topNav/TopNav';
import { Roles } from '../data/Roles';
import { v4 as uuidv4 } from 'uuid';

export const OpenRoles = () => {
    

    return (
        <>
            <TopNav /> 
            <main>
                <div>
                    <h1 className='heading'>Open Roles</h1>

                    <Collapsible accordion>
                        {Roles.map((role) => (
                            <CollapsibleItem
                                expanded={false}
                                header={role.title}
                                node="div"
                                key={uuidv4()}
                            >
                            <p className='subtitle'> Job Description: </p>
                            <p> {role.p1}
                            </p>
                            <p>{role.p2}</p>
                            <p>{role.p3}</p>
                            
                            <p className='subtitle'> Requirements: </p>
                            <p> {role.p5}</p>
                            <p> {role.p6}</p>
                            <p className='subtitle'> Job Type: </p>
                            <p> {role.p8}</p>
                            <p className='subtitle'> Salary: </p>
                            <p> {role.p10} </p>
                            <p className='subtitle'> Benefits: </p>
                            <p> {role.p12} </p>
                            <p> {role.p13} </p>
                            <p> {role.p14}</p>
                            <p> {role.p15}</p>
                            <p> {role.p16} </p>
                            <p> {role.p17}</p>

                            <NavButton 
                                innerText="Apply Now"
                                route={"/application?q=" + role.link}
                            />


                        </CollapsibleItem>
                        ))}
                    </Collapsible>

                    
                </div>
                
            </main>
            <Footers />
        </>
    );
}