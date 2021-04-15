import React, { Component } from 'react';

class Counter extends Component {
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(prevProps);
        console.log(prevState);
        console.log(snapshot);
    }

    render() {
        const { counter, onIncrement, onDelete } = this.props;

        return (
            <div>
                <h4>Counter #{counter.id}</h4>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => onIncrement(counter)} className="btn btn-secondary btn-sm">
                    Increment
                </button>
                <button
                    onClick={() => onDelete(counter.id)}
                    className="btn btn-danger btn-sm m-2"
                >
                    Delete
                </button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0? "warning" : "primary";
        return classes;
    }

    formatCount() {
        return this.props.counter.value === 0 ? 'Zero' : this.props.counter.value;
    }
}

export default Counter;
