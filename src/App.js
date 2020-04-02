import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import '../App.sass';

import NotesList from "../NotesList/NotesList";
import NoteEditor from "../NoteEditor/NoteEditor";

@inject("NotesStore")
@observer
class App extends Component {
    render() {
        return (
                <div className="App">
                        <NotesList/>
                        <NoteEditor/>
                </div>
        );
    }
}

export default App;