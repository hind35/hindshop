// b();
function b(argument) {
	console.log(x);
}
function a(argument) {
	var x=6; 
	b();
}
 var x= 2;
 // b();
 a();