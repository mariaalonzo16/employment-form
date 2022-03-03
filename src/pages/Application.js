import { TopNav } from '../layouts/topNav/TopNav';
import { TextInputs } from '../components/form-fields/textInputs/TextInputs';
import { CheckBoxes } from '../components/form-fields/checkBoxes/CheckBoxes';
import { RadioGroups } from '../components/form-fields/radioGroup/RadioGroups';
import { Ranges } from '../components/form-fields/range/Ranges';
import { FileInput } from '../components/form-fields/fileInput/FileInput';
import { Buttons } from '../components/form-fields/buttons/Buttons';
import { Footers } from '../layouts/footer/Footers';




export const Application = () => {


    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const role = urlParams.get('q')
    const jobTitle = role.split(" ");
    for (let i = 0; i < jobTitle.length; i++) {
        jobTitle[i] = jobTitle[i].charAt(0).toUpperCase() + jobTitle[i].slice(1);
    }
    const titleDisplay = jobTitle.join(" ");
    

    return (
        <>
            <TopNav />
            
            <main> 
                
                <h1 className='heading'> {titleDisplay}</h1>
                <TextInputs />
                <CheckBoxes />
                <RadioGroups />
                <Ranges />
                <FileInput />
                <Buttons />
   
            </main>
            <Footers />
        </>
    );
}