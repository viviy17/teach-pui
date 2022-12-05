//Create a class Notecard
class Notecard {
    constructor (imageURL, title, body){
        this.noteImageURL=imageURL;
        this.noteTitle=title;
        this.noteBody=body;

        this.element=null;
    }
}

//Create a set
const notecardSet=new Set();

//Create a function to add notecard objects into the set
function addNewNote(imageURL, title, body){
const notecard= new Notecard(imageURL, title, body);
notecardSet.add(notecard);
return notecard;
}


//Create a function that creates element in the DOM structure
function createElement(notecard) {
    const template=document.querySelector("#notecard-template");
    const clone = template.content.cloneNode(true);
    notecard.element = clone.querySelector('.notecard'); //connect notecard element to the clone

    const btnDelete = notecard.element.querySelector('.icon-delete');
    btnDelete.addEventListener('click', () => {
        deleteNote(notecard);
    });

    const notecardListElement=document.querySelector("#notecard-list");
    notecardListElement.prepend(notecard.element);
    updateElement(notecard);
}

//Create function that updates element in the DOM structure
function updateElement(notecard) {
    const noteImageElement= notecard.element.querySelector(".notecard-thumbnail");
    const noteTitleElement=notecard.element.querySelector(".note-title");
    const noteBodyElement=notecard.element.querySelector(".note-body");

    noteImageElement.src= notecard.noteImageURL;
    noteTitleElement.innerText=notecard.noteTitle;
    noteBodyElement.innerText=notecard.noteBody;
}

const notecardOne= addNewNote(
    "./assets/warhol-rhino.png",
    "The first note title",
    "The first note body"
)

const notecardTwo= addNewNote(
    "./assets/warhol-frog.png",
    "The second note title",
    "The second note body"
)

for (notecard of notecardSet){
    createElement(notecard);
}

function deleteNote(notecard){
    notecard.element.remove();
    notecardSet.delete(notecard);
}