import { TopNav } from "../layouts/topNav/TopNav";
import {Footer } from "../layouts/footer/Footer";
import { Page, Button } from 'react-onsenui';

export const OpenRoles = () => {
    return (
        <Page
            // renderFixed={() => <Fab></Fab>}
            renderToolbar={() => <TopNav /> }
            contentStyle={{padding: 40}}
            renderBottomToolbar={() => <Footer />}
        >
            <main> 
                <div>
                    <h1>Open Roles</h1>
                    <Button modifier="large--cta">
                        Nurse Practitioner
                    </Button>
                    <Button modifier="large--cta">
                        Physician Assistant
                    </Button>
                    <Button modifier="large--cta">
                        Registered Nurse
                    </Button>

                </div>
                
            </main>
        </Page>
    );
}