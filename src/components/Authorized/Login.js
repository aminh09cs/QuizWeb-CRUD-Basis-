import { useState } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../serviceBE/apiService';
import { toast } from 'react-toastify';
const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleLogin = async () => {


        let data = await postLogin(email, password);
        console.log(data)
        if (data && data.EC === 0) {
            toast.success("Login Success");
            navigate('/');
        }
        //check error in axios. Code error: EC: data same other
        if (data && data.EC !== 0) {
            toast.error(data.EM);
        }
    }
    return (
        <div className="login-container">
            <div className="header">
                <span>Sign up here!!</span>
                <button>Sign Up</button>
            </div>
            <div className="content">
                <div className="title">
                    LOGIN
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
                    <div className="form-group mb-4">
                        <label>Password</label>
                        <input
                            type={"password"}
                            className="form-control"
                            placeholder="At least 8 characters"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        >

                        </input>
                    </div>
                    <div className="mb-2">Forgot Password</div>
                    <div>
                        <button
                            className="btn btn-success btn-login"
                            onClick={() => handleLogin()}
                        >
                            Login
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
export default Login;