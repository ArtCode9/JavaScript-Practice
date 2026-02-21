//------ variable section

let form = document.getElementById("add-frm");
let items = document.getElementById("items");
let nTitle = document.getElementById("n-title");
let nBody = document.getElementById("n-body");
let tableDiv = document.getElementById("tbl-div");
let search = document.getElementById("srch");
let resetBtn = document.getElementById("reset");


let noteCount = 0;
let newNote = "";
let isUpdate = false;
let record = '';
let note = '';
let body = '';

//--------Events
// for page load 
window.onload = updateTable();

// for form submit
form.addEventListener('submit', addNote);

// for search
search.addEventListener('keyup', searchNotes);

// for remove 
items.addEventListener('click', removeNote);

// for view and update
items.addEventListener('click', viewNUpdateNote);

// for reset
resetBtn.addEventListener('click', resetAll);

//--------Functions

// update table
function updateTable() {
   // display the table when note add
   if(noteCount > 0) {
      tableDiv.style.display = ''; // set default

      // update note
      if(isUpdate) {
         note.firstChild.textContent = nTitle.value;
         note.lastChild.textContent = nBody.value;
         // Reset update and note count
         isUpdate = false; 
         noteCount--;
      } else {
         items.appendChild(newNote);
      }
   }else {
      tableDiv.style.display = 'none';
   }
}


// Add Note 
function addNote(e) {
   // stop initial behave
   e.preventDefault();
   // console.log("Hello after stop initial behave");

   // Validate inputs
   if(nTitle.value == '' || nBody.value == '') {
      alert(`Please fill all the fields!`);
   }
   else {
      // create a new note record

      // new tr
      let tr = document.createElement('tr');
      tr.className = 'item';

      // New td for title and body
      let td1 = document.createElement('td');
      td1.appendChild(document.createTextNode(nTitle.value));

      let span = document.createElement('span');
      span.className = 'note-body';
      span.appendChild(document.createTextNode(nBody.value));
      td1.appendChild(span);

      // New td for view
      let td2 = document.createElement('td');
      td2.className = 'btcellv';
      let btn1 = document.createElement('button');
      btn1.appendChild(document.createTextNode('View🏅'));
      btn1.setAttribute('id', 'vw');
      td2.appendChild(btn1);

      // New td for delete
      let td3 = document.createElement('td');
      td3.className = 'btcelld';
      let btn2 = document.createElement('button');
      btn2.appendChild(document.createTextNode('Delete📥'));
      btn2.setAttribute('id', 'del');
      td3.appendChild(btn2);

      // Add all tds to tr
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);

      // increment note count
      noteCount++;

      // set new note
      newNote = tr;
      
      // add or update the note of the table
      updateTable();
   }

   // reset all 
   resetAll();
}


// search notes
function searchNotes(e) {
   // Text to lower case 
   let searchTxt = e.target.value.toLowerCase();
   console.log(searchTxt);

   // Get List
   let list = items.getElementsByClassName('item');

   // Convert to an array
   let listArr = Array.from(list);
   listArr.forEach(function (item) {
      // Get title
      let noteTitle = item.firstChild.textContent;
      // Match
      if(noteTitle.toLowerCase().indexOf(searchTxt) != -1) {
         item.style.display = '';
      } else {
         item.style.display = 'none';
      }
   });
}


// Remove Note
function removeNote(e) {
   console.log(e.target.id);
   if(e.target.id === 'del') {
      if(confirm('Are you sure ?')) {
         // delete notes
         let tr = e.target.parentElement.parentElement;
         items.removeChild(tr);

         // update table
         noteCount--;
         if(noteCount === 0){
            updateTable();
         }
      }
   }  
}

// View and update Note
function viewNUpdateNote (e) {
   if(e.target.id === 'vw') {
      // get the element value and update input fields
      record = e.target.parentElement.parentElement;
      note = record.firstChild;
      nTitle.value = note.firstChild.textContent;
      nBody.value = note.lastChild.textContent;
      isUpdate = true;
   }
}

// Reset all
function resetAll () {
   nTitle.value = '';
   nBody.value = '';
   isUpdate = false;
   newNote = '';  
}