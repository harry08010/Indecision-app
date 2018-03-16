console.log('App.js is running');

// JSX -JavaScript XML

const app = {
    title: 'Movie',
    subtitle: 'Martial Art Movies',
    options: []
};

// function getOptions(options) {
//     if (options.length > 0) {
//         return <ol>
//                     for (let i = 0; i < options.length; i++) {
//                         <li>{options[i]}</li>
//                     }
//                 </ol>
//     } else {
//         return undefined
//     }
// }

const onFormSubmit = (e) => {   // here e represents the event object which contains various information of the event
    e.preventDefault(); // prevent refreshing
    const newOption = e.target.elements.option.value;
    if (newOption) {
        app.options.push(newOption);
        e.target.elements.option.value = '';
        renderAll();
    }
};

const appRoot = document.getElementById('app');

// const numbers = [55, 101, 1000];

const removeAll = () => {
    app.options = [];
    renderAll();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const renderAll = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No option'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do</button>
            <button onClick={removeAll}>Remove Options</button>
            <ol>
            {
                // numbers.map((number) => {
                //     return <p key={number}>Number: {number}</p>;
                // })
                app.options.map((num) => {
                    return <li key={num}>{num}</li>
                })
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name = "option" />
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderAll();

