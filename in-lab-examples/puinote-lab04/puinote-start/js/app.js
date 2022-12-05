
//create class Notecard

class Notecard {
    constructor (imageURL, title, body, elementID){
        this.noteImageURL=imageURL;
        this.noteTitle=title;
        this.noteBody=body;
        this.element= document.querySelector(elementID);

        const btnDelete= this.element.querySelector('.icon-delete'); //create a delete button pulling this class
        btnDelete.onclick= this.deleteNote.bind(this); //onclick, deletes note

        this.updateElement();

        
    }
    //write function updateElement within class, don't need to write 'function'
    updateElement(){
        const noteImageElement = this.element.querySelector('.notecard-thumbnail'); //use this.element to call class
        const noteTitleElement= this.element.querySelector('.note-title');
        const noteBodyElement= this.element.querySelector('.note-body');
        
        noteImageElement.src = this.noteImageURL;
        noteTitleElement.innerText= this.noteTitle;
        noteBodyElement.innerText= this.noteBody;
       
    }
    deleteNote() {
        this.element.remove();
      }
}

const notecardOne = new Notecard(
    'assets/warhol-frog.png',
    'This is the First Note',
    'Here is some body text for the first note.',
    '#notecard-one'
)

const notecardTwo = new Notecard(
    'assets/warhol-orangutan.png',
    'This is the Second Note',
    'And here is some body text for the second note! What could be next?',
    '#notecard-two'
  )

const notecardThree= new Notecard(
    'assets/warhol-eagle.png',
    'This is the Third Note',
    'Yep, you guessed it, here is some body text for the third note.',
    '#notecard-three'
)


