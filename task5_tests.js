var colorName = prompt("enter color");
var id = prompt("enter id");
id = document.getElementById(id);

function setBackgroundColor (id,colorName){

  if(colorName){
  	id.style.backgroundColor = colorName;
     window.alert("success");

  }else {

  	window.alert("failure");
  }

}
