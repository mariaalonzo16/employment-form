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
                <div className='roles-page'>
                    <h1 className='heading'>Open Roles</h1>
                    <Collapsible accordion>
                        {Roles.map((role, index) => (
                            <CollapsibleItem
                                expanded={false}
                                header={role.title}
                                key={index}  
                            >
                            <h6 className='subtitle'> Job Description: </h6>
                            <p> {role.description}
                            </p>
                            <p>Primary hours will be Monday-Friday, 8am-5pm</p>
                            <p>No weekends or on calls</p>
                            <h6 className='subtitle'> Requirements: </h6>
                            <p> {role.licensure}</p>
                            <p> {role.experience}</p>
                            <h6 className='subtitle'> Job Type: </h6>
                            <p> Full Time</p>
                            <h6 className='subtitle'> Salary: </h6>
                            <p> {role.salary} </p>
                            <h6 className='subtitle'> Benefits: </h6>
                            <p> 401(k) </p>
                            <p> Dental insurance </p>
                            <p> Health insurance </p>
                            <p> Life insurance </p>
                            <p> Paid time off </p>
                            <p> Retirement plan </p>

                            <div className='home-page'>
                                <NavButton 
                                    innerText="Apply Now"
                                    route={"/application?q=" + role.link}
                                />
                            </div>
                        </CollapsibleItem>
                        ))}
                    </Collapsible>   
                </div>    
            </main>
            <Footers />
        </>
    );
}