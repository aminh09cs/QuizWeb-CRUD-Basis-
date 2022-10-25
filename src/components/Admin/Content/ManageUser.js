import ModalCreateUser from './ModalCreateUser';
import './ManageUser.scss';
import { BsFillPlusCircleFill } from 'react-icons/bs'
import { useState } from 'react';
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
        </div>
    )
}
export default ManageUser;