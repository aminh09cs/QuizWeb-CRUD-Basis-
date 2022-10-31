import ModalCreateUser from './ModalCreateUser';
import './ManageUser.scss';
import { BsFillPlusCircleFill } from 'react-icons/bs'

import TableUser from './TableUser';
import { getAllUsers } from "../../serviceBE/apiService";
import { useEffect, useState } from "react";
import ModalUpdateUser from './ModalUpdateUser';
import ModalViewUser from './ModalViewUser';
import ModalDeleteUser from './ModalDeleteUser';

const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [showModalViewUser, setShowModalViewUser] = useState(false);
    const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);


    const [userUpdate, setUserUpdate] = useState({});
    const [userView, setUserView] = useState({});
    const [userDelete, setUserDelete] = useState({});

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
    const handleClickUpdate = (item) => {
        setShowModalUpdateUser(true);
        setUserUpdate(item);
    }
    const handleClickView = (item) => {
        setShowModalViewUser(true);
        setUserView(item);
    }
    const handleClickDelete = (item) => {
        setShowModalDeleteUser(true);
        setUserDelete(item);
    }
    const resetUserUpdate = () => {
        setUserUpdate({});
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
                        handleClickUpdate={handleClickUpdate}
                        handleClickView={handleClickView}
                        handleClickDelete={handleClickDelete}

                    />
                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fetchListUsers={fetchListUsers}
                />
                <ModalUpdateUser
                    show={showModalUpdateUser}
                    setShow={setShowModalUpdateUser}
                    userUpdate={userUpdate}
                    fetchListUsers={fetchListUsers}
                    resetUserUpdate={resetUserUpdate}
                />
                <ModalViewUser
                    show={showModalViewUser}
                    setShow={setShowModalViewUser}
                    userView={userView}
                />
                <ModalDeleteUser
                    show={showModalDeleteUser}
                    setShow={setShowModalDeleteUser}
                    userDelete={userDelete}
                    fetchListUsers={fetchListUsers}

                />
            </div>
        </div>
    )
}
export default ManageUser;