import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AiOutlineFolderAdd } from "react-icons/ai";
import { toast } from 'react-toastify';
import { putUpdateUser } from '../../serviceBE/apiService';
import _ from 'lodash'

const ModalViewUser = (props) => {
    const { show, setShow, userView } = props;

    const handleClose = () => {
        setShow(false);
        setEmail("");
        setPassword("");
        setUsername("");
        setRole("USER");
        setImage("");
        setpreImage("");
    };
    const handleShow = () => setShow(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("user");
    const [image, setImage] = useState("");
    const [prevImage, setpreImage] = useState("");

    useEffect(() => {
        if (!_.isEmpty(userView)) {
            setEmail(userView.email);
            setUsername(userView.username);
            setRole(userView.role);
            setImage("");
            setpreImage(`data:image/jpeg;base64,${userView.image}`);
        }
    }, [userView])

    const handleChangeImage = (e) => {
        setpreImage(URL.createObjectURL(e.target.files[0]));
        setImage(e.target.files[0]);
        //setImage in state
    }

    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Add New User
            </Button> */}

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                className='modal-add-user'
            >
                <Modal.Header closeButton>
                    <Modal.Title
                    >
                        VIEW USER INFORMATION
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                value={email}
                                disabled
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                value={password}
                                disabled
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                value={username}
                                disabled
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Role</label>
                            <select
                                className="form-select"
                                onChange={(e) => setRole(e.target.value)}
                                value={role}
                                disabled
                            >
                                <option value="user">USER</option>
                                <option value="admin">ADMIN</option>
                            </select>
                        </div>
                        <div className="col-md-12 img-preview">
                            {
                                prevImage ?
                                    <img src={prevImage} />
                                    :
                                    <span>PREVIEW</span>
                            }
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default ModalViewUser;