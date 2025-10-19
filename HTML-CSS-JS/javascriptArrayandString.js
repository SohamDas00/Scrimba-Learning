const array=["India","England","Australia","USA"]

console.log("The first country is: "+array[0]);
console.log("The last country is: "+array[array.length-1]);

array[2]="Canada"

array.push("Sri Lanka")
array.unshift("Qatar")

console.log("The length of array after adding: "+array.length);
console.log(array);

console.log(array.join('|'));

const array2=["Bangladesh","UAE"]
console.log(array.concat(array2));

console.log(array);
console.log("The reverse array is: "+array.reverse());


//String
let name="Soham is Good boy"

console.log(name.length);
let name2=" and play football"
console.log(name.concat(name2));
console.log(name.substring(0,7));

console.log(name2.toUpperCase());
console.log(name2.toLowerCase());