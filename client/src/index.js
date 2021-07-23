import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import allReducers from "./components/Reducers";
import {Provider} from "react-redux";
import axios from "axios";



// const store = createStore(allReducers,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// const port = "http://localhost:5000"
// const baseUrl = `${port}/api`
axios.defaults.baseURL = "/api";


axios.get("/").then((initalState) => {
    console.log(initalState);
    let persistedState = {
        cardManagerReducer: initalState.data,
    };
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={createStore(allReducers, persistedState,
                window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
                <App />
            </Provider>,
        </React.StrictMode>,
        document.getElementById('root')
    )
})


// componentDidMount() {
//     fetch("https://api.example.com/items")
//         .then(res => res.json())
//         .then(
//             (result) => {
//                 this.setState({
//                     isLoaded: true,
//                     items: result.items
//                 });
//             },
//             // Note: it's important to handle errors here
//             // instead of a catch() block so that we don't swallow
//             // exceptions from actual bugs in components.
//             (error) => {
//                 this.setState({
//                     isLoaded: true,
//                     error
//                 });
//             }
//         )
// }

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//         <App />
//     </Provider>,
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// fetch('http://example.com/something').then(data => data.json()).then(initalState => {
//     render(
//         <Provider store={/*stored created with initalState*/}>
//             <App />
//         </Provider>,
//         document.getElementById('app')
//     )
// });