import React from 'react';
import { Button, Collapsible, CollapsibleItem, Icon } from 'react-materialize';
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
                <div>
                    <h1 className='heading'>Open Roles</h1>

                    <Collapsible accordion>
                        <CollapsibleItem
                            expanded={false}
                            header={openRole1}
                            node="div"
                        >
                            <p className='subtitle'> Job Description: </p>
                            <p> codeHealth is a private practice seeking a full-time Nurse Practitioner (NP) to work with our physicians in our Oncology department in the Raleigh Location. 
                            We offer competitive salary and full benefits package including 401(k), and health insurance. The NP will work under the supervision of one of the physicians at codeHealth. 
                            The provider will see up to 17 patients per day with the clinical support of a nurse and medical assistant.
                            </p>
                            <p>Primary hours will be Monday-Friday, 8am-5pm</p>
                            <p>No call or weekends</p>
                            
                            <p className='subtitle'> Requirements: </p>
                            <p> Active licensure from the NC Board of Nursing or NC Medical Board</p>
                            <p> 1+ Years of Oncology Specialty Experience is preferred</p>
                            <p className='subtitle'> Job Type: </p>
                            <p> Full Time</p>
                            <p className='subtitle'> Salary: </p>
                            <p> 80k - 110k per year </p>
                            <p className='subtitle'> Benefits: </p>
                            <p> 401(k) </p>
                            <p> Dental insurance </p>
                            <p> Health insurance </p>
                            <p> Life insurance</p>
                            <p> Paid time off </p>
                            <p> Retirement plan</p>
                            

                            <Button
                                node="button"
                                className='button'
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
                        </CollapsibleItem>
                        <CollapsibleItem
                            expanded={false}
                            header={openRole2}
                            node="div"
                        >
                            <p className='subtitle'> Job Description: </p>
                            <p> 
                            codeHealth is a private practice seeking a full-time Nurse Practitioner (NP) to work with our physicians in our Oncology department in the Raleigh Location. 
                            We offer competitive salary and full benefits package including 401(k), and health insurance. The NP will work under the supervision of one of the physicians at codeHealth. 
                            The provider will see up to 17 patients per day with the clinical support of a nurse and medical assistant.
                            </p>
                            <p>Primary hours will be Monday-Friday, 8am-5pm</p>
                            <p>No call or weekends</p>
                            
                            <p className='subtitle'> Requirements: </p>
                            <p> Active licensure from the NC Board of Nursing or NC Medical Board</p>
                            <p> 1+ Years of Oncology Specialty Experience is preferred</p>
                            <p className='subtitle'> Job Type: </p>
                            <p> Full Time</p>
                            <p className='subtitle'> Benefits: </p>
                            <p> 401(k) </p>
                            <p> Dental insurance </p>
                            <p> Health insurance </p>
                            <p> Life insurance</p>
                            <p> Paid time off </p>
                            <p> Retirement plan</p> 
                            <Button
                                node="button"
                                className='button'
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
                        </CollapsibleItem>
                        <CollapsibleItem
                            expanded={false}
                            header={openRole3}
                            node="div"
                        >
                            <p> - Administer medication, change wound dressings and care for other treatment options</p>
                            <p> - Read and interpret patient information, making treatment decisions when appropriate</p>
                            <p> - Consult with supervisors and doctors to decide on the best treatment plan for patients</p> 
                            <Button
                                node="button"
                                className='button'
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

                        </CollapsibleItem>
                    </Collapsible>
                    
                </div>
                
            </main>
            <Footers />
        </>
    );
}