var input = [1,2,2,3,3,44,5,5];
var temp= new Set();

input.forEach((data)=>{
    temp.add(data);
})

var output = Array.from(temp);;
console.log(output);

