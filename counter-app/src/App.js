import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Counters from './components/Counters';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        console.log('App - Constructor');
    }

    componentDidMount() {
        // Ajax call'
        console.log('App - Mounted');
    }

    state = {
        counters: [
            {id: 1, value: 4},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0}
        ]
    }

    handleDelete = (counterId) => {
        const updatedCounters = this.state.counters.filter((counter) => counter.id !== counterId);
        this.setState({
            counters: updatedCounters
        });
    }

    handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;

        this.setState({counters});
    }

    handleReset = () => {
        const counters = [...this.state.counters];
        const updatedCounters = counters.map((counter) => {
            counter.value = 0;
            return counter;
        });

        this.setState({counters: updatedCounters});
    }

    render() {
        console.log('App - Rendered');

        return (
            <React.Fragment>
                <NavBar
                    totalCounters={this.state.counters.filter((counter) => counter.value > 0).length}
                />
                <main className="container">
                    <Counters
                        counters={this.state.counters}
                        onReset={this.handleReset}
                        onIncrement={this.handleIncrement}
                        onDelete={this.handleDelete}
                    />
                </main>
            </React.Fragment>
        );
    }
}

export default App;
