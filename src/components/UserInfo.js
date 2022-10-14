//ADD USER
import React from 'react';
class UserInfo extends React.Component {
    state = {
        name: '',
        age: '',
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
        e.preventDefault();
        this.props.handleAddNewUser({
            id: Math.floor(Math.random() * (100) + 1) + '_x',
            name: this.state.name,
            age: this.state.age
        });
    }
    render() {
        return (
            <div>
                My name is {this.state.name} and age {this.state.age};
                <form onSubmit={(e) => this.handleOnSubmit(e)}>
                    <label>Your name: </label>
                    <input
                        type="text"
                        onChange={(e) => this.handleOnchangeName(e)}
                        value={this.state.name}
                    />
                    <label>Your age: </label>
                    <input
                        type="text"
                        onChange={(e) => this.handleOnchangeAge(e)}
                        value={this.state.age}
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
export default UserInfo;