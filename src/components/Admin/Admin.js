import SideBar from "./SideBar";
import './Admin.scss';
import { ImMenu } from 'react-icons/im'
import { useState } from "react";
const Admin = (props) => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <SideBar collapsed={collapsed} />
            </div>
            <div className="admin-content">
                <ImMenu
                    onClick={() => setCollapsed(!collapsed)}
                    style={{
                        fontSize: '20px',
                        position: 'relative',
                        left: '-29px',
                        zIndex: '10000'
                    }}
                /> {/* css or fontawesome */}
                ss
            </div>
        </div>
    )
}
export default Admin;