import React from 'react';
import UserInfo from './UserInfo';
class MyComponent extends React.Component {
    state = {
        name: 'Minh',
        age: 22
    };
    handleOnchangeName = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    handleOnchangeAge = (e) => {
        this.setState({
            age: e.target.value
        })
    }
    handleOnSubmit = (e) => {
        e.preventDefault()
    }
    //JSX
    render() {
        return (
            <div>
                <UserInfo />
            </div>
        );
    }
}
export default MyComponent;