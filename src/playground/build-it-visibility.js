// console.log('build-it.js is running');

// const appRoot = document.getElementById('app');
// let dis = false;
// const showDetails = () => {
//     dis = !dis;
//     renderAll();
// };

// const renderAll = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={showDetails}>{dis ? 'Hide details' : 'Show details'}</button>
//             {dis && (
//                 <div>
//                     <p>This is what your want</p>
//                 </div>
//             )}
//         </div>
//     )
//     ReactDOM.render(template, appRoot);
// };

// renderAll();

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }

    handleToggleVisibility() {
        this.setState((prepState) => {
            return {
                visibility: !prepState.visibility
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
                {this.state.visibility && (
                    <div>
                        <p>This is what your want</p>
                    </div>
                )}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));