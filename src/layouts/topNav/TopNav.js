import { Toolbar, ToolbarButton, Icon } from 'react-onsenui';
// import 'onsenui/css/onsenui.css';
// import 'onsenui/css/onsen-css-components.css';
import './TopNav.css';

export const TopNav = () => {
    return ( 
        <Toolbar>
            <div className="left">
                <ToolbarButton>
                    <Icon 
                        icon="md-menu" 
                        size={{default: 32, material: 40}}
                    />
                </ToolbarButton>
            </div>
        </Toolbar>
    );
}