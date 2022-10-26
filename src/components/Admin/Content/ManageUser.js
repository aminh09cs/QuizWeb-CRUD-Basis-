import ModalCreateUser from './ModalCreateUser';
import './ManageUser.scss';
import { BsFillPlusCircleFill } from 'react-icons/bs'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    return (
        <div className="manage-user container-fluid">
            <div
                className="title"
                style={{
                    color: "#ff00a2", fontSize: "30px", textAlign: "center"
                }}
            >
                Manage User
            </div>
            <div className="manage-user-content">
                <div className='btn-add '>
                    <button className='btn btn-success' onClick={() => setShowModalCreateUser(true)}><BsFillPlusCircleFill /> Add New User</button>
                </div>
                <div className='manage-user-table'>
                    table
                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                />
            </div>
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
export default ManageUser;