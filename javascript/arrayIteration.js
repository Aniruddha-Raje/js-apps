var arr = [1,2,3,'four'];

//For loop
for(var i =0; i<arr.length; i++){
    console.log(arr[i]);
}

//While
var i = 0;
while(i < arr.length){
    console.log(arr[i]);
    i++;
}

//ForEach
//array.forEach(function(element,index,array) {});

arr.forEach(element => {
    console.log(element);
});