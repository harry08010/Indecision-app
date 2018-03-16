////////////////////////////////////////
// first version without components
////////////////////////////////////////

// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// };

// const minusOne = () => {
//     count--;
//     renderCounterApp();
// };

// const reset = () => {
//     count = 0;
//     renderCounterApp();
// };

// // the following block runs before anything in the program is renderred to the screen
// // const templateTwo = (
// //     <div>
// //         <h1>Count: {count}</h1>
// //         <button onClick={addOne}>+1</button>
// //         <button onClick={minusOne}>-1</button>
// //         <button onClick={reset}>reset</button>
// //     </div>
// // );

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     );

//     ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();


class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        
        // setup the state object
        this.state = {
            count: 0,
            name: 'Harry' // name will not be changed
        };
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('count');
            const count = parseInt(json, 10);
            if (!isNaN(count)) {
                this.setState(() => ({ count }));
            }
        } catch (e) {
            // Do nothing at all
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count);
        }
    }
    handleAddOne() {
        this.setState((prevState) => { // prevState is a customedly used name of the argument, it refers to the previous state object
            return {
                count: prevState.count + 1
            };
        });
    }

    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }

    handleReset() {
        this.setState(() => {
            return {
                count: 0
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <h2>{this.state.name}</h2>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

// Counter.defaultProps = {
//     count: 5
// };

ReactDOM.render(<Counter count={0}/>, document.getElementById('app'));