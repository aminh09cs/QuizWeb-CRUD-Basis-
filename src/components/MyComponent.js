import React from 'react';
import DisplayInfo from './DisplayInfo';
import UserInfo from './UserInfo';
class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: "Minh", age: 17 },
            { id: 2, name: "Tuan", age: 24 },
            { id: 3, name: "Hai", age: 25 },
        ]
    }
    handleAddNewUser = (userObj) => {
        this.setState({
            listUsers: [userObj, ...this.state.listUsers]
        })
    }
    render() {
        return (
            <div>
                <UserInfo
                    handleAddNewUser={this.handleAddNewUser}
                />
                <br />
                <DisplayInfo
                    listUsers={this.state.listUsers}
                />
            </div>
        );
    }
}
export default MyComponent;