import React, {Component} from 'react';
import "./NoteEditor.sass";
import {inject, observer} from "mobx-react";

@inject("NotesStore")
@observer
class NoteEditor extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(event) {
        this.props.NotesStore.editNote(event.target.name, event.target.value);
    }
    handleClick() {
        this.props.NotesStore.removeNote();
    }
    render() {
        const {filteredNotes, active} = this.props.NotesStore;
        if(filteredNotes.length !== 0) {
            return (
                    <div className="note_editor">
                        <h1><input onChange={this.handleChange} name="title" value={filteredNotes[active].title}/></h1>
                        <textarea onChange={this.handleChange} name="content" value={filteredNotes[active].content}/>
                        <button className="remove_note" onClick={this.handleClick}>Remove note</button>
                    </div>
            );
        } else {
            return (
                <div className="note_editor">
                    <h1>Empty notes!</h1>
                </div>
            )
        }
    }
}

export default NoteEditor;