
import { NavItem } from "react-bootstrap";
import axios from "axios";


const TableUser = (props) => {
    const { listUsers } = props;
    return (
        <>
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listUsers.map((item, index) => {
                            return (
                                <tr key={'table' + index}>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.role}</td>
                                    <td style={{
                                        display: 'flex',
                                        gap: '10px',
                                        justifyContent: 'center'
                                    }}>
                                        <button
                                            className="btn btn-success"
                                            onClick={() => props.handleClickUpdate(item)}
                                        >
                                            Update
                                        </button>
                                        <button className="btn btn-danger">View</button>
                                        <button className="btn btn-warning">Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </>
    )
}
export default TableUser;