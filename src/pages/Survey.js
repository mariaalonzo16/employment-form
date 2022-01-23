import { Input, Page, Checkbox, Radio, Button } from "react-onsenui";
import { TopNav } from "../layouts/topNav/TopNav";
import {Footer } from "../layouts/footer/Footer";


export const Survey = () => {
    return (
        <Page
            // renderFixed={() => <Fab></Fab>}
            renderToolbar={() => <TopNav /> }
            contentStyle={{padding: 40}}
            renderBottomToolbar={() => <Footer />}
        >
            <main> 
                <h1> Application</h1>
                    <form>
                    <Input
                        value='' float
                        modifier='material'
                        placeholder='First Name' 
                        type='text'
                    />
                    <Input
                        value='' float
                        modifier='material'
                        placeholder='Last Name' 
                        type='text'
                    />
                    <Input
                        value='' float
                        modifier='material'
                        placeholder='Email'
                        type='email' 
                    />
                    <Input
                        value='' float
                        modifier='material'
                        placeholder='Phone #'
                        type='tel' 
                    />
                    <p>
                        Select the specialties you are interested in.
                    </p>
                    <div>
                    <Checkbox
                        onChange={event => { this.setState({checked: event.target.checked})} }
                        modifier='material'   
                    />
                    <span>General Surgery</span>
                    </div>
                    <div>
                    <Checkbox
                        onChange={event => { this.setState({checked: event.target.checked})} }
                        modifier='material'   
                    />
                    <span>Pediatrics</span>
                    </div>
                    <div>
                    <Checkbox
                        onChange={event => { this.setState({checked: event.target.checked})} }
                        modifier='material'   
                    />
                    <span>Oncology</span>
                    </div>
                    <div>
                    <Checkbox
                        onChange={event => { this.setState({checked: event.target.checked})} }
                        modifier='material'   
                    />
                    <span>Women Health</span>
                    </div>
                    <p>How many years have you've been practicing medicine?</p>
                    <div>
                    <Radio
                        onChange={event => { this.setState({checked: event.target.checked})} }
                        modifier='material' 
                    />
                    <span> 5 years</span>
                    </div>
                    {/* <Range 
                        modifier="material"
                        value={this.state.value}
                        onChange={(event) => this.setState({value: parseInt(event.target.value)})}
                    /> */}
                    <Input
                        type='file'
                    />

                    <Button 
                        modifier="large--cta"
                        onClick={(e) => console.log(e)}
                    >
                        Submit
                    </Button>
                    </form>
                
            </main>
        </Page>
    );
}