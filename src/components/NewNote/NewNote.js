import React, {Component} from 'react';
import "./NewNote.sass"
import {inject, observer} from "mobx-react";

@inject("NotesStore")
@observer
class NewNote extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {this.props.NotesStore.newNote()};
    render() {
        return (
            <div className="new_note">
                <button onClick={this.handleClick}>Add Note</button>
            </div>
        );
    }
}

export default NewNote;