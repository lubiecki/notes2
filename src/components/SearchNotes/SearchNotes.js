import React, {Component} from 'react';
import "./SearchNotes.sass";
import {inject, observer} from "mobx-react";

@inject("NotesStore")
@observer
class SearchNotes extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.props.NotesStore.filter = event.target.value
    }
    render() {
        return (
            <div className="search_box">
                <input onChange={this.handleChange} name="search" placeholder="Search"/>
            </div>
        );
    }
}

export default SearchNotes;