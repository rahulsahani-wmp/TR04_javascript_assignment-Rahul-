// objects
let obj1 = { a: 1, b: "1" };
let obj2 = { b: "Raj", c: "rahul" };

let merged_obj = { ...obj1 };


for (const key in obj2) {

  //handling same keys 
  if (key in merged_obj && merged_obj[key] == obj2[key]) // when value in keys same
  {
    merged_obj[key] = obj2[key];
  }

   else if (key in merged_obj)  //when value in key diffrent
  {
    merged_obj[key] = [merged_obj[key], obj2[key]];
  } 
  
  else {
    merged_obj[key] = obj2[key]; // got unique key
  }
}

console.log(merged_obj);
