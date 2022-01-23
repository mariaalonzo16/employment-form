import { TopNav } from "../layouts/topNav/TopNav";
import {Footer } from "../layouts/footer/Footer";
import { Page, Toolbar, Fab } from 'react-onsenui';

export const Home = () => {
    return (
        <Page
            // renderFixed={() => <Fab></Fab>}
            renderToolbar={() => <TopNav /> }
            contentStyle={{padding: 40}}
            renderBottomToolbar={() => <Footer />}
        >
            <div> Page content </div>
        </Page>   
    );
}