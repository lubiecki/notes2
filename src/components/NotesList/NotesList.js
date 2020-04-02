import React, {Component} from 'react';
import "./NotesList.sass";
import {observer, inject} from "mobx-react";

@inject('rootStore')
@observer
class NotesList extends Component {
    constructor(props) {
        super(props);
        this.notesList = this.props.rootStore.notes;
    }
    render() {
        return (
            <div className="notes_list">
                <h1>Goals:</h1>
                <table>
                    <tbody>
                    <tr>
                        <th>{this.notesList}</th>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default NotesList;
