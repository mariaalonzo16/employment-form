import { TopNav } from "../layouts/topNav/TopNav";
import {Footer } from "../layouts/footer/Footer";
import { Page, Button } from 'react-onsenui';
import { OpenRoles } from "./OpenRoles";

export const Home = () => {
    return (
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

                   {/* <Navigator
                        renderPage={(_route, navigator) =>
                        <OpenRoles
                            title='david'
                            onPop={() => navigator.popPage()}
                        />
                        }
                        initialRoute={{
                            title: 'First Page'
                        }} 

                    /> */}
                    
                    
                </div>
            </main>
        </Page>   
    );
}