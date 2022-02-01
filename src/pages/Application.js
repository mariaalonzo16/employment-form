import { useNavigate } from 'react-router-dom';
import { Textarea, Checkbox, RadioGroup, Range, TextInput, Button, Footer } from 'react-materialize';
import { TopNav } from '../layouts/topNav/TopNav';


export const Application = () => {
    let navigate = useNavigate();
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const role = urlParams.get('q')
    const jobTitle = role.split(" ");
    for (let i = 0; i < jobTitle.length; i++) {
        jobTitle[i] = jobTitle[i].charAt(0).toUpperCase() + jobTitle[i].slice(1);
    
    }
    const titleDisplay = jobTitle.join(" ");
    
    return (

            <main> 
                <TopNav />
                <h1> {titleDisplay}</h1>
                <Textarea
                    id="Textarea-36"
                    placeholder="First Name"
                />
                <Textarea
                    id="Textarea-36"
                    placeholder="Last Name"
                />
                <Textarea
                    id="Textarea-36"
                    placeholder="Email"
                />
                <Textarea
                    id="Textarea-36"
                    placeholder="Phone Number"
                />
                <p> Select the specialty you are interested in:</p>
                <Checkbox
                    id="Checkbox_1"
                    label="Anesthesiology"
                    value="Anesthesiology"
                />
                <Checkbox
                    id="Checkbox_1"
                    label="Oncology"
                    value="Oncology"
                />
                <Checkbox
                    id="Checkbox_1"
                    label="Womens Health"
                    value="Womens Health"
                />
                <Checkbox
                    id="Checkbox_1"
                    label="Pediatrics"
                    value="Pediatrics"
                />
                <Checkbox
                    id="Checkbox_1"
                    label="Dermatology"
                    value="Dermatology"
                />
                <p>For how many years have you been practicing medicine?</p>
                <RadioGroup
                    label="T-Shirt Size"
                    name="size"
                    onChange={function noRefCheck(){}}
                    options={[
                        {
                        label: '< 5',
                        value: '< 5'
                        },
                        {
                        label: '5-9',
                        value: '5-9'
                        },
                        {
                        label: '10-14',
                        value: '10-14'
                        },
                        {
                        label: '15 or more',
                        value: '15 or more'
                        }
                    ]}
                />
                <p>Select desired yearly income:</p>
                <Range
                    max="400000"
                    min="100000"
                    name="points"
                    step="100"
                />
                <p> Submit Resume</p>
                <TextInput
                    id="TextInput-26"
                    label="File"
                    type="file"
                />
                <Button
                    node="button"
                    style={{
                    marginRight: '5px'
                    }}
                    waves="light"
                >
                    button
                </Button>
                <Footer />
                
            </main>
    );
}