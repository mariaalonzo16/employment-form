import React, { useContext } from 'react';
import { TopNav } from '../layouts/topNav/TopNav';
import { Footers } from '../layouts/footer/Footers';
import { Button, Modal } from 'react-materialize';
import { useNavigate } from 'react-router-dom';
import { FormContext } from '../context/FormContext';

export const Confirmation = () => {
    let navigate = useNavigate();

    const [ formState, setFormState] = useContext(FormContext)
    console.log(formState)

    return (
        <>
            <TopNav />
            <main>
                {/* <p>Please Confirm your Information</p>
                <p>First Name: {props.firstName}</p>
                <p>Last Name: {props.lastName}</p>
                <p>Email: {props.email}</p>
                <p>Phone Number: {props.phoneNumber}</p>
                <p>Check Box 1: {props.checkbox1}</p>
                <p>Check Box 2: {props.checkbox2}</p>
                <p>Check Box 3: {props.checkbox3}</p>
                <p>Check Box 4: {props.checkbox4}</p>
                <p>Check Box 5: {props.checkbox5}</p>
                <p>Radio Value: {props.radio}</p>
                <p>File Input: {props.fileInput}</p> */}
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