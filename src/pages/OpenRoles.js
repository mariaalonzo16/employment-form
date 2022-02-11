import React from 'react';
import { Button, Collapsible, CollapsibleItem } from 'react-materialize';
import { useNavigate } from 'react-router-dom';
import {  NavButton } from '../components/form-fields/buttons/NavButton';
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

                    {/* <NavButton 
                        innerText="Apply Now"
                        route={"application?q=" + openRole1Link}
                    /> */}

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
                            

                            {/* <Button
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
                                Apply Now
                            </Button>   */}

                            <NavButton 
                                innerText="Apply Now"
                                route={"/application?q=" + openRole1Link}
                            />


                        </CollapsibleItem>
                        <CollapsibleItem
                            expanded={false}
                            header={openRole2}
                            node="div"
                        >
                            <p className='subtitle'> Job Description: </p>
                            <p> 
                            codeHealth is a private practice seeking a full-time Physician Associate (PA) to work with our physician in our Psychiatry & Emotional Health department in the Raleigh Location. 
                            We offer competitive salary and full benefits package including 401(k), and health insurance. The PA will work under the supervision of one of the physicians at codeHealth. 
                            The Physician Associate will provide treatment for children, adolescents and adult patients. 
                            </p>
                            <p>Primary hours will be Monday-Friday, 8am-5pm</p>
                            <p>No call or weekends</p>
                            
                            <p className='subtitle'> Requirements: </p>
                            <p> Active Physician Associate License</p>
                            <p> EMR systems: 1 year of experience</p>
                            <p> Psychiatry Experience: 1 years</p>
                            <p className='subtitle'> Job Type: </p>
                            <p> Full Time</p>
                            <p className='subtitle'> Salary: </p>
                            <p> 85k - 110k per year </p>
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
                                Apply Now
                            </Button>     
                        </CollapsibleItem>
                        <CollapsibleItem
                            expanded={false}
                            header={openRole3}
                            node="div"
                        >
                            <p className='subtitle'> Job Description: </p>
                            <p> 
                            codeHealth is a private practice seeking a full-time Registered Nurse (RN) to work in our cardiology department in the Raleigh Location. RN will provide individual education to 
                            each patient about their chronic illness to help patient understand their condition and treatment plan. RN must be knowledgeable on conditions like diabetes, hypertension, asthma, and ischemic vascular disease.
                            We offer competitive salary and full benefits package including 401(k), and health insurance. The RN will work under the supervision of one of the physicians and Nurse Practitioners at codeHealth. 
                            </p>
                            <p>Primary hours will be Monday-Friday, 8am-5pm</p>
                            <p>No call or weekends</p>
                            
                            <p className='subtitle'> Requirements: </p>
                            <p> Current, unrestricted RN license in state of North Carolina</p>
                            <p> Experience in acute, long term care, acute rehabilitation, or skilled nursing facilities</p>
                            <p> Proficiency in computer skills - Windows, Excel, Outlook, and clinical platforms</p>
                            <p className='subtitle'> Job Type: </p>
                            <p> Full Time</p>
                            <p> Part Time</p>
                            <p className='subtitle'> Salary: </p>
                            <p> 104k - 120k per year </p>
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
                                    navigate(`/application?q=${openRole3Link}`)
                                }}
                            >
                                Apply Now
                            </Button>

                        </CollapsibleItem>
                    </Collapsible>
                    
                </div>
                
            </main>
            <Footers />
        </>
    );
}