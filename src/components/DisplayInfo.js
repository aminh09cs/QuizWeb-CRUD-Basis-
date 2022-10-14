import React from 'react';
import './DisplayInfo.scss';
class DisplayInfo extends React.Component {
    state = {
        isShowlistUser: true
    }
    handleShowHide = () => {
        this.setState({
            isShowlistUser: !this.state.isShowlistUser
        })
    }
    render() {
        const { listUsers } = this.props;
        return (
            <div className='display-info-container'>
                <div>
                    <span onClick={() => { this.handleShowHide() }}>
                        {this.state.isShowlistUser ? "Hide list" : "Show list"}
                    </span>
                </div>
                {listUsers.map((user) => {
                    return (
                        <div>
                            {
                                this.state.isShowlistUser &&
                                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                    <p>My name is {user.name}</p>
                                    <p>My age is {user.age}</p>
                                    <hr />
                                </div>
                            }
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default DisplayInfo;