/*
  TO DO: 
    [x] Add functionality for 'completing' a medication slot
    [x] Add functionality for Reset button
      [x] Include dialog element to confirm reset
    [] Add app worker for offline use
*/

const resetButton = document.querySelector('#reset_button');
const editButton = document.querySelector('#edit_button');
const medTextareas = document.querySelectorAll('.med_textarea');
const descriptionSections = document.querySelectorAll('.description_section');
const pillSectionImages = document.querySelectorAll('.pill_section_image');
const warningDialog = document.querySelector('#reset_warning');
const warningOkayButton = document.querySelector('#okay');
const warningCancelButton = document.querySelector('#cancel');

window.addEventListener("load", init);

function init(){
  resetButton.addEventListener("click", () => 
    warningDialog.setAttribute("open", ""));
    
  warningOkayButton.addEventListener("click", resetTimeslots);
  warningCancelButton.addEventListener("click", () => 
    warningDialog.removeAttribute("open"));
  
  editButton.addEventListener("click", editButtonAction);
  
  for (let i = 0; i < pillSectionImages.length; i += 1){
    pillSectionImages[i].addEventListener("click", () => 
      pillImageAction(descriptionSections[i], pillSectionImages[i]));
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
    timeslotLeft.classList.add("complete", "closed");
    timeslotRight.src="./images/completedTick.png";
  } else { timeslotLeft.classList.toggle("closed"); }
}

function resetTimeslots(){
  for (let i = 0; i < descriptionSections.length; i += 1){
    descriptionSections[i].classList.remove("complete", "closed");
    pillSectionImages[i].src="./images/pills.png";
  };
  warningDialog.removeAttribute("open");
} 