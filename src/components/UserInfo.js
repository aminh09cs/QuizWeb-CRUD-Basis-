import React from 'react';
class UserInfo extends React.Component {
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
        e.preventDefault();
        console.log(this.state);
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