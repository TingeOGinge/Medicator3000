/*
  TO DO: 
    [] Add functionality for 'completing' a medication slot
    [] Add functionality for Reset button
    [] Add app worker for offline use
*/

const resetButton = document.querySelector('#reset_button');
const editButton = document.querySelector('#edit_button');
const medTextareas = document.querySelectorAll('.med_textarea');
const mornPills = document.querySelector('#morn_pills');
const noonPills = document.querySelector('#noon_pills');
const evePills = document.querySelector('#eve_pills');
const bedPills = document.querySelector('#bed_pills');
const mornLeftSide = document.querySelector('#morn_left');
const noonLeftSide = document.querySelector('#noon_left');
const eveLeftSide = document.querySelector('#eve_left');
const bedLeftSide = document.querySelector('#bed_left');

window.addEventListener("load", init);

function init(){
  resetButton.addEventListener("click", function() {
    console.log("Reset button working");
  });
  
  editButton.addEventListener("click", editButtonAction);
  
  mornPills.addEventListener("click", () => pillImageAction(mornLeftSide, mornPills));
  noonPills.addEventListener("click", () => pillImageAction(noonLeftSide, noonPills));
  evePills.addEventListener("click", () => pillImageAction(eveLeftSide, evePills));
  bedPills.addEventListener("click", () => pillImageAction(bedLeftSide, bedPills));
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
    timeslotRight.src="./images/completedTick.png";
  }
}