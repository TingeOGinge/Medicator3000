resetButton = document.querySelector('#reset_nav_item');
editButton = document.querySelector('#edit_nav_item');

window.addEventListener("load", init);

function init(){
  resetButton.addEventListener("click", function() {
    console.log("Reset button working");
  });
  editButton.addEventListener("click", function() {
    console.log("Edit button working");
  });
}