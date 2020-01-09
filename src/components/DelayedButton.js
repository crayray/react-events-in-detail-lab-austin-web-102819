// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component{
    handleDelayedClick = event => {
        setTimeout(this.props.onDelayedEvent(event), this.props.delay)
    }
    
    render() {
        return (
            <div>
                <button onClick={this.handleDelayedClick}>Button!</button>
            </div>
        )
    }
}

export default DelayedButton.js;
