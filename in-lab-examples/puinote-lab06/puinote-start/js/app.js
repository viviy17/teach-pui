// We use this class to represent our notecards. Each notecard object contains
// data for a single note, and a reference to a DOM element corresponding to
// that notecard.
class Notecard {

  // When we create a new Notecard object, the "constructor"
  // function is run. In the constructor, "this" refers to the
  // newly created Notecard object.
  constructor(imageURL, title, body) {
    this.noteImageURL = imageURL;
    this.noteTitle = title;
    this.noteBody = body;

    this.element = null;
  }
}

// Create an empty Set, which will hold all of our notecard objects. A Set is
// similar to an Array, but in a Set, an item can only be added once (there
// are no duplicates). Sets also allow for easy removal of items, using the
// Set.delete(item) function.
const notecardSet = new Set();

// This function creates a new Notecard object, and adds it to notecardSet.
function addNewNote(imageURL, title, body) {
  // Create a new notecard object. The Notecard constructor takes three
  // arguments: the image URL, title text,  and body text.
  const notecard = new Notecard(imageURL, title, body);

  // Add the notecard object to our notecard Set, which keeps track of all
  // the notecards in our application.
  notecardSet.add(notecard);

  return notecard;
}


function createElement(notecard) {
  // make a clone of the notecard template
  const template = document.querySelector('#notecard-template');
  const clone = template.content.cloneNode(true);
  
  // connect this clone to our notecard.element
  // from this point we only need to refer to notecard.element
  notecard.element = clone.querySelector('.notecard');

  const btnDelete = notecard.element.querySelector('.icon-delete');
  console.log(btnDelete);
  btnDelete.addEventListener('click', () => {
    deleteNote(notecard);
  });
  
  // add the notecard clone to the DOM
  // find the notecard parent (#notecard-list) and add our notecard as its child
  const notecardListElement = document.querySelector('#notecard-list');
  notecardListElement.prepend(notecard.element);
  
  // populate the notecard clone with the actual notecard content
  updateElement(notecard);
}

function updateElement(notecard) {
  // get the HTML elements that need updating
  const noteImageElement = notecard.element.querySelector('.notecard-thumbnail');
  const noteTitleElement = notecard.element.querySelector('.note-title');
  const noteBodyElement = notecard.element.querySelector('.note-body');
  
  // copy our notecard content over to the corresponding HTML elements
  noteImageElement.src = notecard.noteImageURL;
  noteTitleElement.innerText = notecard.noteTitle;
  noteBodyElement.innerText = notecard.noteBody;
}

function deleteNote(notecard) {
  // remove the notecard DOM object from the UI
  notecard.element.remove();

  // remove the actual Notecard object from our set of notecards
  notecardSet.delete(notecard);
  saveToLocalStorage();
}


/**** EXERCISE 6 CODE BELOW ***************************************************/

function submitNote() {
  // Nothing here yet!
  // console.log("Submitted Note!")

  //select the title of note, then read the value and store it in a variable.
  const noteEditorTitle = document.querySelector('#note-editor-title');
  const editorTitleText = noteEditorTitle.value;

  //select the body of note, then read the value and store it in a variable.
  const noteEditorBody= document.querySelector('#note-editor-body');
  const editorBodyText= noteEditorBody.value;

  //select the image of note, then read the sourc and store it in a variable.
  const noteEditorImage= document.querySelector('#note-editor-image');
  const editorImageURL= noteEditorImage.src;

  //use previous functions addNewNote (updates set) and createElement (updates HTML)
  const notecard= addNewNote(editorImageURL,editorBodyText,editorTitleText);
  createElement(notecard);

  saveToLocalStorage();
}


//Save to local storage

function saveToLocalStorage(){
  //convert notecard set to array of objects
  const notecardArray=Array.from(notecardSet);
  console.log("This is notecardArray: ", notecardArray);

  //convert JS array to string of text
  const notecardArrayString=JSON.stringify(notecardArray);
  console.log("This is JSON stringify: ", notecardArrayString);

  localStorage.setItem('storedNotes', notecardArrayString)
}

function retrieveFromLocalStorage(){
  const notecardArrayString= localStorage.getItem('storedNotes');
  //turn back from string to array
  const notecardArray=JSON.parse(notecardArrayString);
  console.log("This is notecard array: ", notecardArray);

  //create object using for loop in array
  for (const noteData of notecardArray){
    const notecard=addNewNote(noteData.noteImageURL, noteData.noteTitle, noteData.noteBody);
    createElement(notecard);
  }
}

if (localStorage.getItem('storedNotes')!=null){
  retrieveFromLocalStorage();
}


