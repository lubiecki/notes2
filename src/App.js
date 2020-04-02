import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import './App.sass';

import NotesList from "./components/NotesList/NotesList";
import NoteEditor from "./components/NoteEditor/NoteEditor";
import NewNote from "./components/NewNote/NewNote";
import SearchNotes from "./components/SearchNotes/SearchNotes";

@inject("NotesStore")
@observer
class App extends Component {
    componentDidMount() {
        if(this.props.NotesStore !== undefined){
            this.props.NotesStore.loadLocalStorage();
        }
    }
    render() {
        return (
                <div className="App">
                        <div className="container">
                            <SearchNotes/>
                            <NotesList/>
                            <NewNote/>
                        </div>
                        <NoteEditor/>
                </div>
        );
    }
}

export default App;