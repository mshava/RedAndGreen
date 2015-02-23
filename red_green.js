   var rg = new RedOrGreen("myElement");
   rg.makeGreen=getElementById(rg.makeGreen).style.backgroundColor="green";
   rg.makeGreen=();

   var rg = new RedOrGreen('myElement');
   rg.makered=getElementById(rg.makered).style.backgroundColor="red";
   rg.makered=();

   function RedOrGreen (elementId) {
   	var newElement.document.createElement(elementId);
   	this.makeGreen=function(){
     newElement.style.backgroundColor='green';
     newElement.innerHTML="passed";
      };
      this.makered=function(){
      	newElement.style.backgroundColor="red";
      	newElement.innerHTML="failed";
   	// body...
   };
   document.body.appendChild(newElement);