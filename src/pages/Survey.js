import { Input, Page } from "react-onsenui";
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
                    <Input
                    type='file'
                    />
                    </form>
                
            </main>
        </Page>
    );
}