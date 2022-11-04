import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App';
import User from './components/User/User';
import Admin from './components/Admin/Admin';
import Home from './components/Home/Home';
import Community from './components/Community/Community';
import About from './components/About/About';
import ManageUser from './components/Admin/Content/ManageUser';
import DashBoard from './components/Admin/Content/DashBoard';
import Login from './components/Authorized/Login';
import Register from './components/Authorized/Register';
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListQuiz from "./components/User/ListQuiz";
import ContentQuiz from "./components/User/ContentQuiz";

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="text-center">
                <h1 className="display-1 fw-bold">404</h1>
                <p className="fs-3"> <span className="text-danger">Opps!</span> Page not found.</p>
                <p className="lead">
                    The page you’re looking for doesn’t exist.
                </p>
                <a onClick={() => navigate('/')} className="btn btn-primary">Go Home</a>
            </div>
        </div>
    )
}

const Layout = (props) => {
    return (
        <>
            <Routes>
                <Route path="/" element={<App />} >
                    <Route index element={<Home />} />
                    <Route path="users" element={<ListQuiz />} />
                    <Route path="community" element={<Community />} />
                    <Route path="about" element={<About />} />
                </Route>
                <Route path="/quiz/:id" element={<ContentQuiz />} />
                <Route path="users" element={<ListQuiz />} />
                <Route path="admin" element={<Admin />} >
                    <Route index element={<DashBoard />} />
                    <Route path="manage-user" element={<ManageUser />} />
                </Route>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />


                <Route path="*" element={<NotFound />} />
            </Routes>

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

        </>
    )
}
export default Layout;