import SideBar from "./SideBar";
import './Admin.scss';
import { ImMenu } from 'react-icons/im'
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
                        fontSize: '30px',
                        position: 'relative',
                        left: '-29px',
                        zIndex: '10000',
                    }}
                /> {/* css or fontawesome */}
                <div className="admin-main">
                    <Outlet /> {/* Manage User, Quiz, Question */}
                </div>
            </div>
            {/* toast */}
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    )
}
export default Admin;