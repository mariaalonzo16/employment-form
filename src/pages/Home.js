import { TopNav } from "../layouts/topNav/TopNav";
import {Footer } from "../layouts/footer/Footer";
import { Page, Button, Navigator } from 'react-onsenui';


export const Home = () => {
    return (

        // <Navigator
           
        //     renderPage={() => {

            <Page
                // renderFixed={() => <Fab></Fab>}
                renderToolbar={() => <TopNav /> }
                contentStyle={{padding: 40}}
                renderBottomToolbar={() => <Footer />}
            >
                <main> 
                    <div>
                    <h1>GoodEvening!</h1> 
                    <p>
                        Stay up-to-date with CodeHealth's  employment opportunities.
                    </p>
                    
                        <Button modifier="large--cta">
                            Open Roles
                        </Button>
                
                        
                        
                    </div>
                </main>
             </Page>   
        //     }}
        // />
    );
}