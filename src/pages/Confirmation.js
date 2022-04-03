import React, { useContext } from 'react';
import { TopNav } from '../layouts/topNav/TopNav';
import { Footers } from '../layouts/footer/Footers';
import { Button, Modal } from 'react-materialize';
import { useNavigate } from 'react-router-dom';
import { FormContext } from '../context/FormContext';
import { Specialties } from '../data/Specialties';
import { Helmet } from 'react-helmet';

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
            <Helmet>
                <title>codeHealth | Confirmation</title>
            </Helmet>
            <TopNav />
            <main>
                <div className='confirmation'>
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
                    <p>Resume: {formState.resumeCV}</p>
                </div>

                <Modal
                    actions={[
                        <Button 
                            modal="close" 
                            node="button" 
                            waves="green"
                            onClick={() => {navigate("/")}}
                            className='confirmation'
                        >
                            Close
                        </Button>
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
                                Confirm
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