import React, { useContext } from 'react';
import { TopNav } from '../layouts/topNav/TopNav';
import { Footers } from '../layouts/footer/Footers';
import { Button, Modal } from 'react-materialize';
import { useNavigate } from 'react-router-dom';
import { FormContext } from '../context/FormContext';
import { Specialties } from '../data/Specialties';

export const Confirmation = () => {
    let navigate = useNavigate();

    const [ formState ] = useContext(FormContext)

    for (let i=0; i < Specialties.length; i++) {
        const checkedSpecialties = []
        if (formState.specialties[i]) {
            if (Specialties[i] === formState.specialties[i]) {
                checkedSpecialties.push(Specialties[i])
            }
        }
    }

    return (
        <>
            <TopNav />
            <main>
                <p>Please Confirm your Information</p> 
                <p>First Name: {formState.firstName}</p>
                <p>Last Name: {formState.lastName}</p>
                <p>Email: {formState.email}</p>
                <p>Phone Number: {formState.phoneNumber}</p>

                {formState.specialties.map((interest,index) => (
                    <p key={index}>Specialty of Interest: {interest} </p>
                ))}
                <p>Years Practiced: {formState.yearsPracticed}</p>
                <p>Desired Income: {formState.desiredIncome}</p>

                <Button
                    node="button"
                    style={{
                    marginRight: '5px'
                    }}
                    waves="light"
                    onClick={() => {
                    navigate("/")
                }}
                >
                    Confirm
                </Button>

                <Modal
                    actions={[
                        <Button flat modal="close" node="button" waves="green">Close</Button>
                    ]}
                    bottomSheet={false}
                    fixedFooter={false}
                    header="Modal Header"
                    id="Modal-10"
                    open={false}
                    options={{
                        dismissible: true,
                        endingTop: '10%',
                        inDuration: 250,
                        onCloseEnd: null,
                        onCloseStart: null,
                        onOpenEnd: null,
                        onOpenStart: null,
                        opacity: 0.5,
                        outDuration: 250,
                        preventScrolling: true,
                        startingTop: '4%'
                    }}
                    // root={[object HTMLBodyElement]}
                    trigger={
                        <div id="confirm">
                            <Button 
                             
                                // onClick={homeRedirect}
                                
                            >
                                Tommy
                            </Button>
                        </div>
                    }
                >
                    
                    <p>
                       Thank You for your Submission!
                    </p>
                </Modal>
            </main>
            <Footers />
            
        </>
    );
}