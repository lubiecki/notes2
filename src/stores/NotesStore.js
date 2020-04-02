import {action, observable, computed} from "mobx";

export class NotesStore {
    @observable active = 0;
    @observable notes = [
        {
            title: "test note title 1",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt velit nec blandit suscipit. Pellentesque commodo a augue in posuere. Ut quis orci quis felis luctus suscipit. Duis aliquet cursus odio at luctus. Vivamus sagittis dapibus nulla, ut luctus dolor porta ut. Ut consectetur libero ac semper lobortis. Aenean tempor sapien sit amet accumsan ultrices. Donec volutpat tellus vel mi varius mollis. Maecenas hendrerit, justo consectetur consequat maximus, lacus sem varius velit, sit amet rhoncus tellus nulla in nulla. Nulla vehicula neque ac felis condimentum dignissim. Praesent sit amet egestas neque, nec cursus urna. Aenean sollicitudin volutpat pharetra. Cras ultrices tristique ligula sed sagittis. Nulla id gravida diam."
        },
        {
            title: "test note title 2",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt velit nec blandit suscipit. Pellentesque commodo a augue in posuere. Ut quis orci quis felis luctus suscipit. Duis aliquet cursus odio at luctus. Vivamus sagittis dapibus nulla, ut luctus dolor porta ut. Ut consectetur libero ac semper lobortis. Aenean tempor sapien sit amet accumsan ultrices. Donec volutpat tellus vel mi varius mollis. Maecenas hendrerit, justo consectetur consequat maximus, lacus sem varius velit, sit amet rhoncus tellus nulla in nulla. Nulla vehicula neque ac felis condimentum dignissim. Praesent sit amet egestas neque, nec cursus urna. Aenean sollicitudin volutpat pharetra. Cras ultrices tristique ligula sed sagittis. Nulla id gravida diam."
        }
    ];
    @observable filter = "";
    @action loadLocalStorage() {
        if(localStorage.getItem('notes') !== null) {
            this.active = JSON.parse(localStorage.getItem('active'));
            this.notes = JSON.parse(localStorage.getItem('notes'));
        }
    }
    @action saveLocalStorage() {
        localStorage.setItem('active', JSON.stringify(this.active));
        localStorage.setItem('notes', JSON.stringify(this.notes));
    }
    @action setActive(active) {
        this.active = active;
        this.saveLocalStorage()
    }
    @action editNote(key, data) {
        switch(key){
            case "title":
                this.notes[this.active].title = data;
                break;
            case "content":
                this.notes[this.active].content = data;
                break;
            default:
                break;
        }
        this.saveLocalStorage()
    }
    @action newNote() {
        this.notes.push({title: 'new note', content: ''});
        this.active = this.notes.length - 1;
    }
    @action removeNote() {
        this.notes.splice(this.active,1);
        this.active = this.active - 1;
        this.saveLocalStorage();
    }
    @computed
    get filteredNotes() {
        let matchesFilter = new RegExp(this.filter, "i");
        return this.notes.filter(note => {
            return matchesFilter.test(note.title) || matchesFilter.test(note.content);
        });
    }
}

export default new NotesStore();