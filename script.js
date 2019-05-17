/*
  TO DO: 
    [] Add functionality for 'completing' a medication slot
    [] Add functionality for Reset button
    [] Add app worker for offline use
*/

const resetButton = document.querySelector('#reset_button');
const editButton = document.querySelector('#edit_button');
const medTextareas = document.querySelectorAll('.med_textarea');

window.addEventListener("load", init);

function init(){
  resetButton.addEventListener("click", function() {
    console.log("Reset button working");
  });
  editButton.addEventListener("click", editButtonAction);
}

function editButtonAction(){
  if (editButton.classList.contains("active")){ 
    for (let i = 0; i < medTextareas.length; i += 1){
      medTextareas[i].setAttribute('readonly', true);
    }
    editButton.classList.remove("active");    
  } else {
      for (let i = 0; i < medTextareas.length; i += 1){
        medTextareas[i].removeAttribute('readonly');
      }
      editButton.classList.add("active"); 
  }
}