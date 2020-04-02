import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "mobx-react";

import NotesStore from './stores/NotesStore'

const stores = {
    NotesStore
}

ReactDOM.render(
    <Provider {...stores}>
    <App />
    </Provider>,
    document.getElementById('root'));

