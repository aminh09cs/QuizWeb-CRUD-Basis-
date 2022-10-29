import ModalCreateUser from './ModalCreateUser';
import './ManageUser.scss';
import { BsFillPlusCircleFill } from 'react-icons/bs'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TableUser from './TableUser';
import { getAllUsers } from "../../serviceBE/apiService";
import { useEffect, useState } from "react";

const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [listUsers, setListUsers] = useState([]);
    useEffect(() => {
        fetchListUsers();
    }, []);
    const fetchListUsers = async () => {
        let res = await getAllUsers();
        if (res.EC === 0) {
            setListUsers(res.DT);
        }
    }
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
                    <TableUser
                        listUsers={listUsers}

                    />
                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fetchListUsers={fetchListUsers}
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