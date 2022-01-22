import './App.css';
import {Button} from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import { TopNav } from './layouts/topNav/TopNav';
import { Test1 } from './Test1';

export const App = () => {
  return (
    <>
      {/* <TopNav />
      <h1>hello world!</h1>
      <Button modifier="large--cta">
        Tap Me
      </Button> */}
      <Test1 />
    </>
    
  );
}
