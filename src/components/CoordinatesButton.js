// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {
    handleOnClick = () => {
        const arr = [event.clientX, event.clientY];
        this.props.onReceiveCoordinates(arr);

    };
    render() {
        return (
            <div>
                <button onClick={this.handleOnClick}>Button</button>
            </div>
        )
    }
}
export default CoordinatesButton.js