var arr1=[12, 13, 40, 13, 40, 22, 33, 45, 22, 45, 94, 21 ];

	document.write("Given array is "+"[12, 13, 40, 13, 33, 40, 22, 45, 22,  45, 94, 21]"+"<br><br>");
	document.write("Delete duplicate array"+"<br><br>");

var arr2=[];
var arr3=[];
arr1.sort();

let duplicate;
	for(let i=0;i<arr1.length;i++){
		if(arr1[i]!==duplicate){
			arr2.push(arr1[i]);
			duplicate=arr1[i];
		}
		else{
			arr3.push(arr1[i]);
		}
}

console.log(arr2);
document.write(arr2+"<br><br>");


document.write("Deleted duplicate array"+"<br><br>");

console.log(arr3);
document.write(arr3);



