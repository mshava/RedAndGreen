

if (document.getElementsById(mySquare).style.backgroundColor=== "green"){
	document.getElementsById(mySquare).style.backgroundColor="green";
      console.log('success');
}

else if(document.getElementsById(mySquare).style.backgroundColor==="red"){
	document.getElementsById(mySquare).style.backgroundColor="red";
	console.log('failure');
}

setBackgroundColor('mySquare','red');
