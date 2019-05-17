/*
  TO DO: 
    [] Add functionality for 'completing' a medication slot
    [] Add functionality for Reset button
    [] Add app worker for offline use
*/

const resetButton = document.querySelector('#reset_button');
const editButton = document.querySelector('#edit_button');
const medTextareas = document.querySelectorAll('.med_textarea');
const descriptionSections = document.querySelectorAll('.description_section');
const pillSections = document.querySelectorAll('.pill_section');

window.addEventListener("load", init);

function init(){
  resetButton.addEventListener("click", resetTimeslots);
  
  editButton.addEventListener("click", editButtonAction);
  
  for (let i = 0; i < pillSections.length; i += 1){
    pillSections[i].addEventListener("click", () => pillImageAction(descriptionSections[i], pillSections[i]));
  }
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

function pillImageAction(timeslotLeft, timeslotRight){
  if (!timeslotLeft.classList.contains("complete")){
    timeslotLeft.classList.add("complete");
    timeslotRight.firstElementChild.src="./images/completedTick.png";
  }
}

function resetTimeslots(){
  const descriptionSections = document.querySelectorAll('.description_section');
  for (let i = 0; i < descriptionSections.length; i += 1){
    descriptionSections[i].classList.remove("complete");
    pillSections[i].firstElementChild.src="./images/pills.png";
  }  
} 