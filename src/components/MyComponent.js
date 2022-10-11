import React from 'react';
class MyComponent extends React.Component {
    state = {
        name: 'Minh',
        age: 22
    };
    //JSX
    render() {
        return (
            <div>
                My name is {this.state.name} and age {this.state.age};
            </div>
        );
    }
}
export default MyComponent;