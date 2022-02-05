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
                    <h1>Open Roles</h1>

                        {/* <Button
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
                    </Button> */}

                    <Collapsible accordion>
                        <CollapsibleItem
                            expanded={false}
                            header={openRole1}
                            icon={<Icon>filter_drama</Icon>}
                            node="div"
                        >
                            <p> - Order, perform and interpret diagnostic tests such as lab work and x-rays.</p>
                            <p> - Diagnosing and treating acute and chronic conditions such as diabetes, high blood pressure, infections and injuries.</p>
                            <p> - Prescribing medications and other treatments.</p>

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
                        </CollapsibleItem>
                        <CollapsibleItem
                            expanded={false}
                            header={openRole2}
                            icon={<Icon>place</Icon>}
                            node="div"
                        >
                            <p> - Take or review patients' medical histories.</p>
                            <p> - Order and interpret diagnostic tests, such as x rays or blood tests.</p>
                            <p> - Give treatment, such as setting broken bones and immunizing patients.</p> 
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
                        </CollapsibleItem>
                        <CollapsibleItem
                            expanded={false}
                            header={openRole3}
                            icon={<Icon>whatshot</Icon>}
                            node="div"
                        >
                            <p> - Administer medication, change wound dressings and care for other treatment options</p>
                            <p> - Read and interpret patient information, making treatment decisions when appropriate</p>
                            <p> - Consult with supervisors and doctors to decide on the best treatment plan for patients</p> 
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

                        </CollapsibleItem>
                    </Collapsible>
                    
                </div>
                
            </main>
            {/* <Footers /> */}
        </>
    );
}