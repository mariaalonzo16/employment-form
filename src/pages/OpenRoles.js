import React from 'react';
import { Collapsible, CollapsibleItem } from 'react-materialize';
import {  NavButton } from '../components/form-fields/buttons/NavButton';
import { Footers } from '../layouts/footer/Footers';
import { TopNav } from '../layouts/topNav/TopNav';
import { Roles } from '../data/Roles';
import { Helmet } from 'react-helmet';

export const OpenRoles = () => {


    return (
        <>
            <Helmet>
                <title> codeHealth | Open Roles</title>
            </Helmet>
            <TopNav /> 
            <main>
                <div>
                    <h1 className='heading'>Open Roles</h1>

                    <Collapsible accordion>
                        {Roles.map((role, index) => (
                            <CollapsibleItem
                                expanded={false}
                                header={role.title}
                                key={index}
                            >
                            <p className='subtitle'> Job Description: </p>
                            <p> {role.description}
                            </p>
                            <p>Primary hours will be Monday-Friday, 8am-5pm</p>
                            <p>No call or weekends</p>
                            
                            <p className='subtitle'> Requirements: </p>
                            <p> {role.licensure}</p>
                            <p> {role.experience}</p>
                            <p className='subtitle'> Job Type: </p>
                            <p> Full Time</p>
                            <p className='subtitle'> Salary: </p>
                            <p> {role.salary} </p>
                            <p className='subtitle'> Benefits: </p>
                            <p> 401(k) </p>
                            <p> Dental insurance </p>
                            <p> Health insurance </p>
                            <p> Life insurance </p>
                            <p> Paid time off </p>
                            <p> Retirement plan </p>

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