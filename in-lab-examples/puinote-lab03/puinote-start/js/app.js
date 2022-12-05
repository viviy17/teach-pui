console.log('Started Application.')

const notecard= {
    noteTitle:"This is the title",
    noteBody: "This is the body",
    noteImageURL: "assets/warhol-eagle.png",
    element: null
}

function updateElement(){
    console.log('Running update element function!')
    const updateImage= notecard.element.querySelector('.notecard-thumbnail');
    const updateTitle= notecard.element.querySelector('.note-title');
    const updateBody= notecard.element.querySelector('.note-body');
    updateImage.src= notecard.noteImageURL;
    updateTitle.innerText=notecard.noteTitle;
    updateBody.innerText= notecard.noteBody;
}

function submitNote(){
    console.log('This is where we will submit note');
    const updateNoteTitle= document.querySelector('#note-editor-title');
    const updateNoteBody= document.querySelector('#note-editor-body');

    notecard.noteTitle= updateNoteTitle.value; 
    notecard.noteBody= updateNoteBody.value; 

    updateElement();
}

notecard.element= document.querySelector('#notecard-one');
const btnSubmit= document.querySelector('.icon-done');
btnSubmit.onclick= submitNote;



function onUpdateClick(){
    console.log('this button works Pop!');
}

document.querySelector('.clickButton').addEventListener('click', onUpdateClick);


function random(number) {
    return Math.floor(Math.random()*number);
    }

function bgChange() {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    return rndCol;
}

function onClick(event) {
    event.target.style.backgroundColor = bgChange(); 
    //The target is the HTML element that that event was dispatched to
    }

const container = document.querySelector('.icon-edit');
container.addEventListener('click', onClick);


let firstContainer = document.querySelector(".container");

let portrait = document.createElement('img');
portrait.setAttribute('src', 'assets/warhol-frog.png');
portrait.setAttribute('width', '200px');
firstContainer.appendChild(portrait);

let removeFirstContainer=document.querySelector('.container');
removeFirstContainer.remove();