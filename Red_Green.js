function RedOrGreen(myElement) {
    
var newElement = document.createElement(myElement);
	this.makeGreen = function(){
    	newElement.style.backgroundColor = "green";
    		newElement.innerHTML = "passed!"
    
};
 var newElement = document.createElement(myElement);
 	this.makeRed = function(){
    newElement.style.backgroundColor = "red";
    	newElement.innerHTML = "failed!";
    
   };
   
   document.body.appendChild(newElement);
};
