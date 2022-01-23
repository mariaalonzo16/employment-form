import './App.css';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import { Home } from './pages/Home';
import { Navigator } from 'react-onsenui';
import { OpenRoles } from './pages/OpenRoles';
import { Survey } from './pages/Survey';

export const App = () => {
  return (
    <>
      {/* <Home /> */}

      <Navigator
        initialRoute={{component: Home}}
        renderPage={Survey}
      />

      {/* <Test1 /> */}
    </> 
  );
}
