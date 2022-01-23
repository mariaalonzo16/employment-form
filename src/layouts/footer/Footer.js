import { BottomToolbar } from "react-onsenui";
import "./Footer.css";

export const Footer = () => {
    return (
        <BottomToolbar modifier="material">
        <div className="footer-container">
            <div className="footer">
                CodeHealth
            </div>
        </div>
        </BottomToolbar>
    );
}