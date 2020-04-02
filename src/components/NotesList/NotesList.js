import React, {Component} from 'react';
import "./NotesList.sass";
import {observer, inject} from "mobx-react";

@inject("NotesStore")
@observer
class NotesList extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(index) {
        this.props.NotesStore.setActive(index)
    };
    render() {
        const {filteredNotes} = this.props.NotesStore;
        return (
            <div className="notes_list">
                <h1>Notes:</h1>
                <ul>
                {Object.keys(filteredNotes).map((index ) =>
                    <li className={index.toString() === this.props.NotesStore.active.toString() ? 'active' : ''} onClick={() => this.handleClick(index)} key={index}>{filteredNotes[index].title}</li>
                )}
                </ul>
            </div>
        );
    }
}

export default NotesList;
