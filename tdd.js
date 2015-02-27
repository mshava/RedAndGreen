var passed=0;
var failed=0;
var total=0;

var assert = {
	equals:function(expectedResults,returnResults) {
		total=passed+failed;
		var myDiv= new RedOrGreen('div');
			if(expectedResults===returnResults){
				passed ++;
			myDiv.makeGreen();

		var newElement=document.createElement('p');
			}else{
				failed++;
			myDiv.makeRed();
		var newElement=document.createElement('p');
		}
		newElement.innerHTML='passed:'+passed+''+'failed:'+failed+''+'totalpassed:'+total;
		document.body.appendChild(myElement);
			}
		}
		var TestMyCode={
			run:function(testfunction,functiontoreturn){
			functiontoreturn(assert);
		}	
	}
