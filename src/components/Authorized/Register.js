import { useState } from 'react';
import './Register.scss';
import { useNavigate } from 'react-router-dom';
import { postLogin, postRegister } from '../serviceBE/apiService';
import { toast } from 'react-toastify';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
const Register = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const [isShowPassword, setIsShowPassword] = useState(false);
    const navigate = useNavigate();

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleRegister = async () => {
        const isValidEmail = validateEmail(email);
        if (!isValidEmail) {
            toast.error("INVALID EMAIL");
            return;
        }
        if (!password) {
            toast.error("INVALID PASSWORD");
            return;
        }
        if (!username) {
            toast.error("INVALID USERNAME");
            return;
        }

        let data = await postRegister(email, password, username);
        //console.log(data)
        if (data && data.EC === 0) {
            toast.success("Register Success");
            navigate('/login');
        }
        //check error in axios. Code error: EC: data same other
        if (data && data.EC !== 0) {
            toast.error(data.EM);
        }
    }
    return (
        <div className="register-container">
            <div className="header">
                <span>Login here!!</span>
                <button onClick={() => navigate('/login')}>Login</button>
            </div>
            <div className="content">
                <div className="title">
                    REGISTER
                </div>
                <div className="welcome">
                    Hello, New User
                </div>
                <div className="form">
                    <div className="form-group mb-4">
                        <label>Email</label>
                        <input
                            type={"email"}
                            className="form-control"
                            placeholder="nguyenvana@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        >
                        </input>
                    </div>
                    <div className="form-group mb-4 form-password">
                        <label>Password</label>
                        <input
                            type={isShowPassword ? "text" : "password"}
                            className="form-control"
                            placeholder="At least 8 characters"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        >
                        </input>
                        {
                            isShowPassword ?
                                <span
                                    className='eye'
                                    onClick={() => setIsShowPassword(false)}
                                >
                                    <AiFillEye />
                                </span>
                                :
                                <span
                                    className='eye'
                                    onClick={() => setIsShowPassword(true)}
                                >
                                    <AiFillEyeInvisible />
                                </span>

                        }
                    </div>
                    <div className="form-group mb-4">
                        <label>Username</label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Le Anh Minh"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        >
                        </input>
                    </div>
                    <div className="mb-2">Forgot Password</div>
                    <div>
                        <button
                            className="btn btn-success btn-login"
                            onClick={() => handleRegister()}
                        >
                            Sign Up
                        </button>
                    </div>
                    <div
                        className='text-center mt-3'
                        onClick={() => { navigate('/') }}
                        style={{ cursor: 'pointer' }}
                    >
                        Go to Homepage
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Register;