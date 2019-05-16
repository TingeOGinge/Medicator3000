const resetButton = document.querySelector('#reset_nav_item');
const editButton = document.querySelector('#edit_nav_item');
const medTextareas = document.querySelectorAll('.med_textarea');

window.addEventListener("load", init);

function init(){
  console.log(medTextareas);
  resetButton.addEventListener("click", function() {
    console.log("Reset button working");
  });
  editButton.addEventListener("click", editButtonAction);
}

function editButtonAction(){
  console.log("Edit button pushed");
  if (editButton.classList.contains("active")){ 
    console.log("Should have removed the active class");
    for (let i = 0; i < medTextareas.length; i += 1){
      medTextareas[i].setAttribute('readonly', true);
    }
    editButton.classList.remove("active");    
  } else {
      for (let i = 0; i < medTextareas.length; i += 1){
        medTextareas[i].removeAttribute('readonly');
      }
      editButton.classList.add("active"); 
      console.log("Should have added the active class");
  }
}