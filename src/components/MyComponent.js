import React from 'react';
class MyComponent extends React.Component {
    state = {
        name: 'Minh',
        age: 22
    };
    handleClick(e) {
        console.log("Ok", this.state.name);
        this.setState({
            name: 'Anh Minh',
        })
    }
    handleOnchange = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    handleOnSubmit = (e) => {
        e.preventDefault();
        alert("ok");

    }
    //JSX
    render() {
        return (
            <div>
                My name is {this.state.name} and age {this.state.age};
                <form onSubmit={(e) => this.handleOnSubmit(e)}>
                    <input
                        type="text"
                        onChange={(e) => this.handleOnchange(e)}
                    />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}
export default MyComponent;